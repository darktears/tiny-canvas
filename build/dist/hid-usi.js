function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class HIDUSI {
  get opened() {
    if (this._usiDevice) return this._usiDevice.opened;else return false;
  }

  get productName() {
    if (this._usiDevice) return this._usiDevice.productName;else return null;
  }

  constructor() {
    _defineProperty(this, "open", async () => {
      const usagePage = 0x0d; // Digitizer

      const usage = 0x02; // Pen
      // This is work-around for permission popup sometimes close immediately
      // by adding a slight delay before calling hid.requestDevice

      await new Promise(r => setTimeout(r, 100));
      let devices = await navigator.hid.requestDevice({
        filters: [{
          usage: usage,
          usagePage: usagePage
        }]
      });

      if (devices.length == 0) {
        console.log('No USI device selected');
        return;
      }

      this._usiDevice = devices[0];
      if (!this._usiDevice.opened) await this._usiDevice.open();

      let collection = this._findCollectionByUsage(this._usiDevice, usagePage, usage); // feature reports


      this._preferredColorReportId = this._findFeatureReportByUsage(collection, 0x5c).featureReports[0].reportId; // preferred color

      this._widthReportId = this._findFeatureReportByUsage(collection, 0x5e).featureReports[0].reportId; // preferred line width

      this._styleReportId = this._findFeatureReportByUsage(collection, 0x70).featureReports[0].reportId; // preferred line style

      this._buttonsReportId = this._findFeatureReportByUsage(collection, 0x44).featureReports[0].reportId; // buttons

      this._firmwareReportId = this._findFeatureReportByUsage(collection, 0x90).featureReports[0].reportId; // firmware

      this._protocolReportId = this._findFeatureReportByUsage(collection, 0x2b).featureReports[0].reportId; // protocol - USI version
      // input reports

      this._statusReportId = this._findInputReportByUsage(collection, 0x70).inputReports[0].reportId; // Status

      this._errorReportId = this._findInputReportByUsage(collection, 0x81).inputReports[0].reportId; // Error
    });

    _defineProperty(this, "setPreferredColor", async (index, color) => {
      if (!this._usiDevice || !this._usiDevice.opened) throw 'USI device not connected';
      const transducerIndex = index;
      const colorIndex = this._usiColorMap[color];
      let data = Uint8Array.from([transducerIndex, colorIndex]);
      await this._usiDevice.sendFeatureReport(this._preferredColorReportId, data);
    });

    _defineProperty(this, "getPreferredColor", async () => {
      if (!this._usiDevice || !this._usiDevice.opened) throw 'USI device not connected';
      let data = await this._usiDevice.receiveFeatureReport(this._preferredColorReportId);

      let preferredColor = this._reverseLookupMap(this._usiColorMap, data.getUint8(2));

      return preferredColor;
    });

    _defineProperty(this, "setWidth", async (index, width) => {
      if (!this._usiDevice || !this._usiDevice.opened) throw 'USI device not connected';
      const transducerIndex = index;
      let data = Uint8Array.from([transducerIndex, width]);
      await this._usiDevice.sendFeatureReport(this._widthReportId, data);
    });

    _defineProperty(this, "getWidth", async () => {
      if (!this._usiDevice || !this._usiDevice.opened) throw 'USI device not connected';
      let data = await this._usiDevice.receiveFeatureReport(this._widthReportId);
      let width = data.getUint8(2);
      return width;
    });

    _defineProperty(this, "setStyle", async (index, style) => {
      if (!this._usiDevice || !this._usiDevice.opened) throw 'USI device not connected';
      const transducerIndex = index;
      const styleIndex = this._usiStyleMap[color];
      let data = Uint8Array.from([transducerIndex, styleIndex]);
      await this._usiDevice.sendFeatureReport(this._styleReportId, data);
    });

    _defineProperty(this, "getStyle", async () => {
      if (!this._usiDevice || !this._usiDevice.opened) throw 'USI device not connected';
      let data = await this._usiDevice.receiveFeatureReport(this._styleReportId);

      let style = this._reverseLookupMap(this._usiStyleMap, data.getUint8(2));

      return style;
    });

    _defineProperty(this, "getButtons", async () => {
      if (!this._usiDevice || !this._usiDevice.opened) throw 'USI device not connected';
      let data = await this._usiDevice.receiveFeatureReport(this._buttonsReportId);
      let buttons = {};
      buttons.barrelSwitch = this._reverseLookupMap(this._usiButtonsMap, data.getUint8(2));
      buttons.secondaryBarrelSwitch = this._reverseLookupMap(this._usiButtonsMap, data.getUint8(3));
      buttons.eraser = this._reverseLookupMap(this._usiButtonsMap, data.getUint8(4));
      return buttons;
    });

    _defineProperty(this, "getFirmware", async () => {
      if (!this._usiDevice || !this._usiDevice.opened) throw 'USI device not connected';
      let data = await this._usiDevice.receiveFeatureReport(this._firmwareReportId);
      let firmware = {};
      firmware.vendorId = this._getHexString(data.getUint16(2, true));
      firmware.productId = this._getHexString(data.getBigUint64(4, true));
      firmware.firmwareVersion = data.getUint8(12) + '.' + data.getUint8(13);
      return firmware;
    });

    _defineProperty(this, "getProtocol", async () => {
      if (!this._usiDevice || !this._usiDevice.opened) throw 'USI device not connected';
      let data = await this._usiDevice.receiveFeatureReport(this._protocolReportId);
      let protocol = {};
      protocol.protocolVersion = data.getUint8(2) + '.' + data.getUint8(3);
      return protocol;
    });

    _defineProperty(this, "_findCollectionByUsage", function (device, usagePage, usage) {
      return device.collections.find(candidate => candidate.usagePage === usagePage && candidate.usage === usage);
    });

    _defineProperty(this, "_findFeatureReportByUsage", function (item, usage) {
      if (item.usage === usage && item.featureReports.length > 0) {
        return item;
      }

      for (let i in item.children) {
        let found = this._findFeatureReportByUsage(item.children[i], usage);

        if (found) return found;
      }

      return null;
    });

    _defineProperty(this, "_findInputReportByUsage", function (item, usage) {
      if (item.usage === usage && item.inputReports.length > 0) {
        return item;
      }

      for (let i in item.children) {
        let found = this._findInputReportByUsage(item.children[i], usage);

        if (found) return found;
      }

      return null;
    });

    if (typeof window.navigator.hid === 'undefined') throw 'WebHID is not supported in this browser';
    this._device = null;
    this._usiColorMap = {
      '#F0F8FF': 0,
      '#FAEBD7': 1,
      '#00FFFF': 2,
      '#7FFFD4': 3,
      '#F0FFFF': 4,
      '#F5F5DC': 5,
      '#FFE4C4': 6,
      '#000000': 7,
      '#FFEBCD': 8,
      '#0000FF': 9,
      '#8A2BE2': 10,
      '#A52A2A': 11,
      '#DEB887': 12,
      '#5F9EA0': 13,
      '#7FFF00': 14,
      '#D2691E': 15,
      '#FF7F50': 16,
      '#6495ED': 17,
      '#FFF8DC': 18,
      '#DC143C': 19,
      '#00FFFF': 20,
      '#00008B': 21,
      '#008B8B': 22,
      '#B8860B': 23,
      '#A9A9A9': 24,
      '#006400': 25,
      '#BDB76B': 26,
      '#8B008B': 27,
      '#556B2F': 28,
      '#FF8C00': 29,
      '#9932CC': 30,
      '#8B0000': 31,
      '#E9967A': 32,
      '#8FBC8F': 33,
      '#483D8B': 34,
      '#2F4F4F': 35,
      '#00CED1': 36,
      '#9400D3': 37,
      '#FF1493': 38,
      '#00BFFF': 39,
      '#696969': 40,
      '#1E90FF': 41,
      '#B22222': 42,
      '#FFFAF0': 43,
      '#228B22': 44,
      '#FF00FF': 45,
      '#DCDCDC': 46,
      '#F8F8FF': 47,
      '#FFD700': 48,
      '#DAA520': 49,
      '#808080': 50,
      '#008000': 51,
      '#ADFF2F': 52,
      '#F0FFF0': 53,
      '#FF69B4': 54,
      '#CD5C5C': 55,
      '#4B0082': 56,
      '#FFFFF0': 57,
      '#F0E68C': 58,
      '#E6E6FA': 59,
      '#FFF0F5': 60,
      '#7CFC00': 61,
      '#FFFACD': 62,
      '#ADD8E6': 63,
      '#F08080': 64,
      '#E0FFFF': 65,
      '#FAFAD2': 66,
      '#D3D3D3': 67,
      '#90EE90': 68,
      '#FFB6C1': 69,
      '#FFA07A': 70,
      '#20B2AA': 71,
      '#87CEFA': 72,
      '#778899': 73,
      '#B0C4DE': 74,
      '#FFFFE0': 75,
      '#00FF00': 76,
      '#32CD32': 77,
      '#FAF0E6': 78,
      '#FF00FF': 79,
      '#800000': 80,
      '#66CDAA': 81,
      '#0000CD': 82,
      '#BA55D3': 83,
      '#9370DB': 84,
      '#3CB371': 85,
      '#7B68EE': 86,
      '#00FA9A': 87,
      '#48D1CC': 88,
      '#C71585': 89,
      '#191970': 90,
      '#F5FFFA': 91,
      '#FFE4E1': 92,
      '#FFE4B5': 93,
      '#FFDEAD': 94,
      '#000080': 95,
      '#FDF5E6': 96,
      '#808000': 97,
      '#6B8E23': 98,
      '#FFA500': 99,
      '#FF4500': 100,
      '#DA70D6': 101,
      '#EEE8AA': 102,
      '#98FB98': 103,
      '#AFEEEE': 104,
      '#DB7093': 105,
      '#FFEFD5': 106,
      '#FFDAB9': 107,
      '#CD853F': 108,
      '#FFC0CB': 109,
      '#DDA0DD': 110,
      '#B0E0E6': 111,
      '#800080': 112,
      '#663399': 113,
      '#FF0000': 114,
      '#BC8F8F': 115,
      '#4169E1': 116,
      '#8B4513': 117,
      '#FA8072': 118,
      '#F4A460': 119,
      '#2E8B57': 120,
      '#FFF5EE': 121,
      '#A0522D': 122,
      '#C0C0C0': 123,
      '#87CEEB': 124,
      '#6A5ACD': 125,
      '#708090': 126,
      '#FFFAFA': 127,
      '#00FF7F': 128,
      '#4682B4': 129,
      '#D2B48C': 130,
      '#008080': 131,
      '#D8BFD8': 132,
      '#FF6347': 133,
      '#40E0D0': 134,
      '#EE82EE': 135,
      '#F5DEB3': 136,
      '#FFFFFF': 137,
      '#F5F5F5': 138,
      '#FFFF00': 139,
      '#9ACD32': 140
    };
    this._usiStyleMap = {
      'ink': 0,
      'pencil': 1,
      'highlighter': 2,
      'marker': 3,
      'brush': 4,
      'none': 5
    };
    this._usiButtonsMap = {
      'Unimplemented': 0,
      'Primary': 1,
      'Secondary': 2,
      'Eraser': 3,
      'Disabled': 4
    }; // default report IDs

    this._preferredColorReportId = 16;
    this._widthReportId = 17;
    this._styleReportId = 18;
    this._buttonsReportId = 20;
    this._firmwareReportId = 21;
    this._protocolReportId = 22;
    this._statusReportId = 8;
    this._errorReportId = 9;
  }

  _reverseLookupMap(map, value) {
    return Object.keys(map).find(key => map[key] === value);
  }

  _getHexString(value) {
    return '0x' + value.toString(16);
  }

}
import{m as t}from"./foundation-db555cb3.js";import{LitElement as s}from"../lit-element.js";
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const n=t=>t.nodeType===Node.ELEMENT_NODE;function e(s,e){for(const o of s.assignedNodes({flatten:!0}))if(n(o)){const s=o;if(t(s,e))return s}return null}function o(t){return{addClass:s=>{t.classList.add(s)},removeClass:s=>{t.classList.remove(s)},hasClass:s=>t.classList.contains(s)}}const a=()=>{},i={get passive(){return!1}};document.addEventListener("x",a,i),document.removeEventListener("x",a);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class d extends s{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}export{d as B,o as a,e as f};
//# sourceMappingURL=base-element-b8486077.js.map

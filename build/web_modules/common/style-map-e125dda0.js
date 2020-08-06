import{d as h,A as i,P as j}from"./lit-element-9c695caa.js";/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const f=new WeakMap(),k=h(e=>b=>{if(!(b instanceof i)||b instanceof j||b.committer.name!=="style"||b.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:g}=b,{style:c}=g.element;let d=f.get(b);d===void 0&&(c.cssText=g.strings.join(" "),f.set(b,d=new Set())),d.forEach(a=>{a in e||(d.delete(a),a.indexOf("-")===-1?c[a]=null:c.removeProperty(a))});for(const a in e)d.add(a),a.indexOf("-")===-1?c[a]=e[a]:c.setProperty(a,e[a])});export{k as s};

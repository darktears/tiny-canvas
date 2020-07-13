import{d as e,A as t,P as s}from"./lit-html-a1e3435b.js";
/**
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
 */const n=new WeakMap,r=e(e=>r=>{if(!(r instanceof t)||r instanceof s||"style"!==r.committer.name||r.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=r,{style:o}=i.element;let a=n.get(r);void 0===a&&(o.cssText=i.strings.join(" "),n.set(r,a=new Set)),a.forEach(t=>{t in e||(a.delete(t),-1===t.indexOf("-")?o[t]=null:o.removeProperty(t))});for(const t in e)a.add(t),-1===t.indexOf("-")?o[t]=e[t]:o.setProperty(t,e[t])});export{r as s};
//# sourceMappingURL=style-map-93f3027f.js.map

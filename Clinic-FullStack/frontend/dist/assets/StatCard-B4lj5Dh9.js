import{c as i,g as e,d as r}from"./index-KCxaq76u.js";import{T as l}from"./Typography-cKr5aX5S.js";import{T as o}from"./trending-up-Cxkk90AL.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=i("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=i("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);function v({label:n,value:c,icon:s,trend:t,className:m}){const a=t&&t.value>=0;return e.createElement("div",{className:r("glass-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/15","transition-shadow duration-200 hover:shadow-md",m)},e.createElement("div",{className:"flex items-start justify-between"},e.createElement(l,{variant:"body-sm",muted:!0},n),s&&e.createElement("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-warm"},e.createElement(s,{className:"h-5 w-5 text-primary","aria-hidden":"true"}))),e.createElement("p",{className:"mt-2 text-h2 font-heading font-semibold text-text-primary"},c),t&&e.createElement("div",{className:"mt-2 flex items-center gap-1"},a?e.createElement(o,{className:"h-4 w-4 text-success","aria-hidden":"true"}):e.createElement(d,{className:"h-4 w-4 text-error","aria-hidden":"true"}),e.createElement("span",{className:r("text-caption font-medium",a?"text-success":"text-error")},a?"+":"",t.value,"%"),t.label&&e.createElement("span",{className:"text-caption text-text-muted"},t.label)))}export{x as A,v as S,d as T};
//# sourceMappingURL=StatCard-B4lj5Dh9.js.map

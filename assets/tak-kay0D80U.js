import{uuid as f,dataUrlToBytes as k,makeZip as P}from"./zip-DVtrFNzF.js";import{buildKml as C,buildGroundOverlayKml as M}from"./kml-BI5_zAxq.js";function m(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function $(e,o,a){const n=a.map(t=>`    <Content ignore="false" zipEntry="${m(t)}"/>`).join(`
`);return`<?xml version="1.0" encoding="UTF-8"?>
<MissionPackageManifest version="2">
  <Configuration>
    <Parameter name="uid" value="${m(e)}"/>
    <Parameter name="name" value="${m(o)}"/>
    <Parameter name="onReceiveImport" value="true"/>
    <Parameter name="onReceiveDelete" value="false"/>
  </Configuration>
  <Contents>
${n}
  </Contents>
</MissionPackageManifest>`}async function T({sites:e=[],waypoints:o=[],overlayPng:a,bounds:n,missionName:t="GroundLink mission",overlay:p=[],mastHeightM:g=null}={}){const l=f(),s=`${l}.kml`,d=p.filter(i=>{var u;return((u=i==null?void 0:i.properties)==null?void 0:u.kind)!=="tree"}),v=C({sites:e,waypoints:o,bounds:n,missionName:t,overlay:d,mastHeightM:g}),c=[s],r=[{name:s,data:v}];return a&&n&&(r.push({name:"coverage.png",data:k(a)}),r.push({name:"coverage.kml",data:M("coverage.png",n)}),c.push("coverage.kml")),r.push({name:"MANIFEST/manifest.xml",data:$(l,t,c)}),P(r)}export{T as buildTakPackage};

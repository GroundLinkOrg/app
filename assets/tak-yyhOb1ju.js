import{uuid as u,dataUrlToBytes as g,makeZip as p}from"./zip-DVtrFNzF.js";import{buildKml as f,buildGroundOverlayKml as d}from"./kml-DReOKVg_.js";function i(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function v(e,o,n){const a=n.map(t=>`    <Content ignore="false" zipEntry="${i(t)}"/>`).join(`
`);return`<?xml version="1.0" encoding="UTF-8"?>
<MissionPackageManifest version="2">
  <Configuration>
    <Parameter name="uid" value="${i(e)}"/>
    <Parameter name="name" value="${i(o)}"/>
    <Parameter name="onReceiveImport" value="true"/>
    <Parameter name="onReceiveDelete" value="false"/>
  </Configuration>
  <Contents>
${a}
  </Contents>
</MissionPackageManifest>`}async function C({sites:e=[],waypoints:o=[],overlayPng:n,bounds:a,missionName:t="GroundLink mission"}={}){const m=u(),s=`${m}.kml`,l=f({sites:e,waypoints:o,bounds:a,missionName:t}),c=[s],r=[{name:s,data:l}];return n&&a&&(r.push({name:"coverage.png",data:g(n)}),r.push({name:"coverage.kml",data:d("coverage.png",a)}),c.push("coverage.kml")),r.push({name:"MANIFEST/manifest.xml",data:v(m,t,c)}),p(r)}export{C as buildTakPackage};

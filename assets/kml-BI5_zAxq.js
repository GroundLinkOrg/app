import{dataUrlToBytes as v,makeZip as B}from"./zip-DVtrFNzF.js";function p(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const i=e=>Number.isFinite(Number(e))?Number(e):0;function k(e,n,o,{description:r,alt:t,extrude:s=!1}={}){const d=r?`
      <description>${p(r)}</description>`:"",u=t!=null&&Number.isFinite(t),h=u?`,${i(t)}`:"",y=u&&s?"<altitudeMode>relativeToGround</altitudeMode><extrude>1</extrude>":"";return`    <Placemark>
      <name>${p(e)}</name>${d}
      <Point>${y}<coordinates>${i(n)},${i(o)}${h}</coordinates></Point>
    </Placemark>`}function D(e){const{west:n,south:o,east:r,north:t}=e;return[[n,o],[r,o],[r,t],[n,t],[n,o]].map(([s,d])=>`${i(s)},${i(d)}`).join(" ")}function G(e){const n=e.map(([o,r])=>`${i(o)},${i(r)}`);return n[0]!==n[n.length-1]&&n.push(n[0]),n.join(" ")}const A={building:{line:"ffd6e3e8",poly:"f0d6e3e8"},tank:{line:"ffd6e3e8",poly:"f0d6e3e8"},wall:{line:"ffd6e3e8",poly:"f0d6e3e8"},tower:{line:"ffc2e634",poly:"f0c2e634"},tree:{line:"ff3a7a4f",poly:"e03a7a4f"},road:{line:"ffd8eaf1",poly:"00000000",width:3},water:{line:"ffdcb77f",poly:"80dcb77f",width:3},boundary:{line:"fff5f4f4",poly:"00000000",width:2},airstrip:{line:"ffc2d2d8",poly:"a0c2d2d8"},helipad:{line:"ffc2d2d8",poly:"a0c2d2d8"},post:{line:"ffffa646",poly:"60ffa646"}},I=new Set(["building","tank","wall","tower","tree"]),M=(e,n)=>e.map(([o,r])=>`${i(o)},${i(r)}${n!=null?`,${i(n)}`:""}`).join(" ");function x(e,n){const o=n!=null?"<extrude>1</extrude><altitudeMode>relativeToGround</altitudeMode>":"<tessellate>1</tessellate>",[r,...t]=e,s=t.map(d=>`<innerBoundaryIs><LinearRing><coordinates>${M(d,n)}</coordinates></LinearRing></innerBoundaryIs>`).join("");return`<Polygon>${o}<outerBoundaryIs><LinearRing><coordinates>${M(r,n)}</coordinates></LinearRing></outerBoundaryIs>${s}</Polygon>`}function b(e,n){switch(e==null?void 0:e.type){case"Point":return`<Point><coordinates>${M([e.coordinates])}</coordinates></Point>`;case"LineString":return`<LineString><tessellate>1</tessellate><coordinates>${M(e.coordinates)}</coordinates></LineString>`;case"Polygon":return x(e.coordinates,n);case"MultiPoint":return`<MultiGeometry>${e.coordinates.map(o=>b({type:"Point",coordinates:o})).join("")}</MultiGeometry>`;case"MultiLineString":return`<MultiGeometry>${e.coordinates.map(o=>b({type:"LineString",coordinates:o})).join("")}</MultiGeometry>`;case"MultiPolygon":return`<MultiGeometry>${e.coordinates.map(o=>x(o,n)).join("")}</MultiGeometry>`;default:return""}}function R(e=[],{photoHref:n=null}={}){return e=e.filter(r=>{var t;return!["trunk","top"].includes((t=r==null?void 0:r.properties)==null?void 0:t.part)}),e.length?`    <Folder>
      <name>Mission overlay</name>
${e.map(r=>{var P;const t=r.properties||{},s=t.kind||"other",d=A[s]||{line:"ffffa646",poly:"40ffa646"},u=Number(t.heightM)>0?Number(t.heightM):null,h=I.has(s)&&u!=null&&/Polygon/.test((P=r.geometry)==null?void 0:P.type)?u:null,y=b(r.geometry,h);if(!y)return"";const a=t.description||"",g=[].concat(t.photo||t.photos?(n==null?void 0:n(r))??[]:[]).filter(Boolean),l=g.length?`<![CDATA[${g.map(f=>`<img src="${f.replace(/"/g,"")}" width="480"/>`).join("<br/>")}<br/>${p(a)}${t.photoDate?`<br/>${p(t.photoDate)}`:""}]]>`:p(a),$=Number(t.baseM)>0?Number(t.baseM):"",m=[["kind",s],["heightM",u??""],["baseM",$],["part",t.part||""]].filter(([,f])=>f!=="").map(([f,c])=>`<Data name="${f}"><value>${p(c)}</value></Data>`).join("");return`      <Placemark>
        <name>${p(t.name||"")}</name>
        <description>${l}</description>
        <Style><LineStyle><color>${d.line}</color><width>${d.width??1.5}</width></LineStyle><PolyStyle><color>${d.poly}</color></PolyStyle></Style>
        <ExtendedData>${m}</ExtendedData>
        ${y}
      </Placemark>`}).filter(Boolean).join(`
`)}
    </Folder>`:""}function N({sites:e=[],waypoints:n=[],points:o=[],route:r=[],aoi:t=null,bounds:s=null,missionName:d="GroundLink mission",mastHeightM:u=null,overlay:h=[],photoHref:y=null}={}){const a=[],g=R(h,{photoHref:y});g&&a.push(g);for(const l of e){const $=l.label||l.name||"Site",m=l.txHeightM??u,P=(l.elevM!=null?`Elevation ${Math.round(l.elevM)} m`:"Comms site")+(m!=null?` · mast ${Math.round(m)} m`:"");a.push(k($,l.lng,l.lat,{description:P,alt:m??void 0,extrude:m!=null}))}for(const l of n)a.push(k(l.name||"Waypoint",l.lng,l.lat,{alt:l.altM,description:"Waypoint"}));for(const l of o)a.push(k(l.name||l.label||"Point",l.lng,l.lat,{description:"Demand point"}));if(Array.isArray(r)&&r.length>=2){const l=r.map($=>`${i($.lng)},${i($.lat)}`).join(" ");a.push(`    <Placemark>
      <name>Route</name>
      <Style><LineStyle><color>ffffa646</color><width>3</width></LineStyle></Style>
      <LineString><tessellate>1</tessellate><coordinates>${l}</coordinates></LineString>
    </Placemark>`)}if(t&&Array.isArray(t.ring)&&t.ring.length>=3){const l=t.type==="radius"&&Number.isFinite(t.radiusM)?`Circular AOI — radius ${Math.round(t.radiusM)} m`:"Area of interest";a.push(`    <Placemark>
      <name>Area of interest</name>
      <description>${p(l)}</description>
      <Style><LineStyle><color>ffc2e634</color><width>2</width></LineStyle><PolyStyle><fill>0</fill></PolyStyle></Style>
      <Polygon><outerBoundaryIs><LinearRing><coordinates>${G(t.ring)}</coordinates></LinearRing></outerBoundaryIs></Polygon>
    </Placemark>`)}return s&&a.push(`    <Placemark>
      <name>Coverage extent</name>
      <Style><LineStyle><color>ff7ad4ff</color><width>2</width></LineStyle><PolyStyle><fill>0</fill></PolyStyle></Style>
      <Polygon><outerBoundaryIs><LinearRing><coordinates>${D(s)}</coordinates></LinearRing></outerBoundaryIs></Polygon>
    </Placemark>`),`<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>${p(d)}</name>
${a.join(`
`)}
  </Document>
</kml>`}function F(e,n,o="RF Coverage"){return`<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <GroundOverlay>
      <name>${p(o)}</name>
      <Icon><href>${p(e)}</href></Icon>
      <LatLonBox>
        <north>${i(n.north)}</north>
        <south>${i(n.south)}</south>
        <east>${i(n.east)}</east>
        <west>${i(n.west)}</west>
      </LatLonBox>
    </GroundOverlay>
  </Document>
</kml>`}async function O(e){var P,f;const{overlayPng:n,bounds:o,sites:r,waypoints:t,points:s,route:d,aoi:u,missionName:h,overlay:y=[]}=e,a=new Map;let g=0;for(const c of y){const w=[(P=c==null?void 0:c.properties)==null?void 0:P.photo,...Array.isArray((f=c==null?void 0:c.properties)==null?void 0:f.photos)?c.properties.photos:[]].filter(Boolean),L=w.map(S=>/^data:image\/(jpeg|png|webp);base64,/.exec(S)).map((S,j)=>S&&{name:`files/photo-${g+=1}.${S[1]==="jpeg"?"jpg":S[1]}`,url:w[j]}).filter(Boolean);L.length&&a.set(c,L)}const l=c=>(a.get(c)??[]).map(w=>w.name),m=[{name:"doc.kml",data:e.kml||N({sites:r,waypoints:t,points:s,route:d,aoi:u,bounds:o,missionName:h,mastHeightM:e.mastHeightM??null,overlay:y,photoHref:l})}];for(const c of a.values())for(const{name:w,url:L}of c)m.push({name:w,data:v(L)});return n&&o&&(m.push({name:"overlay.png",data:v(n)}),m.push({name:"overlay.kml",data:F("overlay.png",o)})),B(m)}export{F as buildGroundOverlayKml,N as buildKml,O as buildKmz,R as overlayFolder};

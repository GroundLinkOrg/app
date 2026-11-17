import{dataUrlToBytes as f,makeZip as h}from"./zip-DVtrFNzF.js";function d(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const i=t=>Number.isFinite(Number(t))?Number(t):0;function p(t,n,l,{description:r,alt:o,extrude:s=!1}={}){const m=r?`
      <description>${d(r)}</description>`:"",u=o!=null&&Number.isFinite(o),a=u?`,${i(o)}`:"",e=u&&s?"<altitudeMode>relativeToGround</altitudeMode><extrude>1</extrude>":"";return`    <Placemark>
      <name>${d(t)}</name>${m}
      <Point>${e}<coordinates>${i(n)},${i(l)}${a}</coordinates></Point>
    </Placemark>`}function $(t){const{west:n,south:l,east:r,north:o}=t;return[[n,l],[r,l],[r,o],[n,o],[n,l]].map(([s,m])=>`${i(s)},${i(m)}`).join(" ")}function k(t){const n=t.map(([l,r])=>`${i(l)},${i(r)}`);return n[0]!==n[n.length-1]&&n.push(n[0]),n.join(" ")}function P({sites:t=[],waypoints:n=[],points:l=[],route:r=[],aoi:o=null,bounds:s=null,missionName:m="GroundLink mission",mastHeightM:u=null}={}){const a=[];for(const e of t){const c=e.label||e.name||"Site",y=e.txHeightM??u,g=(e.elevM!=null?`Elevation ${Math.round(e.elevM)} m`:"Comms site")+(y!=null?` · mast ${Math.round(y)} m`:"");a.push(p(c,e.lng,e.lat,{description:g,alt:y??void 0,extrude:y!=null}))}for(const e of n)a.push(p(e.name||"Waypoint",e.lng,e.lat,{alt:e.altM,description:"Waypoint"}));for(const e of l)a.push(p(e.name||e.label||"Point",e.lng,e.lat,{description:"Demand point"}));if(Array.isArray(r)&&r.length>=2){const e=r.map(c=>`${i(c.lng)},${i(c.lat)}`).join(" ");a.push(`    <Placemark>
      <name>Route</name>
      <Style><LineStyle><color>ffffa646</color><width>3</width></LineStyle></Style>
      <LineString><tessellate>1</tessellate><coordinates>${e}</coordinates></LineString>
    </Placemark>`)}if(o&&Array.isArray(o.ring)&&o.ring.length>=3){const e=o.type==="radius"&&Number.isFinite(o.radiusM)?`Circular AOI — radius ${Math.round(o.radiusM)} m`:"Area of interest";a.push(`    <Placemark>
      <name>Area of interest</name>
      <description>${d(e)}</description>
      <Style><LineStyle><color>ffc2e634</color><width>2</width></LineStyle><PolyStyle><fill>0</fill></PolyStyle></Style>
      <Polygon><outerBoundaryIs><LinearRing><coordinates>${k(o.ring)}</coordinates></LinearRing></outerBoundaryIs></Polygon>
    </Placemark>`)}return s&&a.push(`    <Placemark>
      <name>Coverage extent</name>
      <Style><LineStyle><color>ff7ad4ff</color><width>2</width></LineStyle><PolyStyle><fill>0</fill></PolyStyle></Style>
      <Polygon><outerBoundaryIs><LinearRing><coordinates>${$(s)}</coordinates></LinearRing></outerBoundaryIs></Polygon>
    </Placemark>`),`<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>${d(m)}</name>
${a.join(`
`)}
  </Document>
</kml>`}function S(t,n,l="RF Coverage"){return`<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <GroundOverlay>
      <name>${d(l)}</name>
      <Icon><href>${d(t)}</href></Icon>
      <LatLonBox>
        <north>${i(n.north)}</north>
        <south>${i(n.south)}</south>
        <east>${i(n.east)}</east>
        <west>${i(n.west)}</west>
      </LatLonBox>
    </GroundOverlay>
  </Document>
</kml>`}async function L(t){const{overlayPng:n,bounds:l,sites:r,waypoints:o,points:s,route:m,aoi:u,missionName:a}=t,c=[{name:"doc.kml",data:t.kml||P({sites:r,waypoints:o,points:s,route:m,aoi:u,bounds:l,missionName:a,mastHeightM:t.mastHeightM??null})}];return n&&l&&(c.push({name:"overlay.png",data:f(n)}),c.push({name:"overlay.kml",data:S("overlay.png",l)})),h(c)}export{S as buildGroundOverlayKml,P as buildKml,L as buildKmz};

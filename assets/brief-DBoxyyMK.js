const k=i=>i==null?"—":(i>=100?i.toFixed(0):i>=10?i.toFixed(1):i.toFixed(2))+" km²",e=i=>String(i??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n]);function M({missionName:i="Mission",mapImageDataUrl:n=null,coverageSummary:o=null,paceResult:s=null,radios:d=[],linkBudgets:p=[],modelInfo:a={},buildVersion:c="",maskCoords:u=!1}={}){var $;const h=new Date().toISOString().slice(0,16).replace("T"," ")+" UTC",w=n?`<section class="brief-map">
        <img src="${e(n)}" alt="Mission area map" />
        ${o?`<p class="brief-caption">Coverage: ${Math.round(o.coveredPct??0)}% · Model: ${e(a.label??"unknown")}</p>`:""}
      </section>`:'<section class="brief-map brief-map--missing"><p>Map screenshot not available — reload and try again.</p></section>';let b="";($=s==null?void 0:s.legs)!=null&&$.length&&(b=`<section class="brief-pace">
      <h2>PACE Plan</h2>
      <table>
        <thead><tr><th>Tier</th><th>Band</th><th>Asset / Method</th><th>Frequency</th><th>Rationale</th></tr></thead>
        <tbody>${s.legs.map(t=>{var l;return`<tr>
        <td>${e(t.tier??"—")}</td>
        <td>${e(t.band??"—")}</td>
        <td>${e(t.status==="recommend"?"Not carried — acquire":(l=t.radios)!=null&&l.length?t.radios.join(", "):t.asset??t.role??"—")}</td>
        <td>${e(t.freqMHz?t.freqMHz+" MHz":"—")}</td>
        <td>${e(t.why??"")}</td>
      </tr>`}).join("")}</tbody>
      </table>
    </section>`);let f="";d.length&&(f=`<section class="brief-radios">
      <h2>Radio Configuration</h2>
      <table>
        <thead><tr><th>Callsign / Site</th><th>Radio</th><th>Band</th><th>Freq (MHz)</th><th>Power (W)</th><th>Antenna height (m)</th></tr></thead>
        <tbody>${d.map(t=>`<tr>
        <td>${e(t.callsign??t.name??"—")}</td>
        <td>${e(t.model??t.brand??"—")}</td>
        <td>${e(t.band??"—")}</td>
        <td>${e(t.freqMHz?t.freqMHz+" MHz":"—")}</td>
        <td>${e(t.powerW?t.powerW+" W":"—")}</td>
        <td>${e(t.txHeightM?t.txHeightM+" m":"—")}</td>
      </tr>`).join("")}</tbody>
      </table>
    </section>`);let g="";p.length&&(g=`<section class="brief-links">
      <h2>Link Budgets</h2>
      <table>
        <thead><tr><th>Link</th><th>Dist (km)</th><th>FSPL (dB)</th><th>Margin (dB)</th><th>Status</th></tr></thead>
        <tbody>${p.map(t=>`<tr>
        <td>${e(t.label??"—")}</td>
        <td>${e(t.distKm!=null?t.distKm.toFixed(1):"—")}</td>
        <td>${e(t.fsplDb!=null?t.fsplDb.toFixed(1):"—")}</td>
        <td class="${t.marginDb!=null&&t.marginDb<0?"brief-bad":""}">${e(t.marginDb!=null?t.marginDb.toFixed(1):"—")}</td>
        <td>${e(t.marginDb!=null?t.marginDb>=0?"✓ OK":"✗ Fail":"—")}</td>
      </tr>`).join("")}</tbody>
      </table>
      <p class="brief-note">Calculated with ${e(a.label??"—")} ${e(a.percentileLabel?"· "+a.percentileLabel:"")}</p>
    </section>`);let m="";if(o){const r=o.deadZones??[];m=`<section class="brief-coverage">
      <h2>Coverage Summary</h2>
      <dl>
        <dt>Covered area</dt><dd>${Math.round(o.coveredPct??0)}%</dd>
        <dt>Dead zones</dt><dd>${r.length} zone${r.length!==1?"s":""} · ${k(r.reduce((t,l)=>t+(l.areaKm2??0),0))} total</dd>
        <dt>Weakest link</dt><dd>${o.weakestDbm!=null?Math.round(o.weakestDbm)+" dBm":"—"}</dd>
        <dt>Propagation model</dt><dd>${e(a.label??"—")}${a.margin?" · "+e(a.margin):""}</dd>
      </dl>
    </section>`}return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mission Brief — ${e(i)}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    @page { size: A4 portrait; margin: 15mm; }
    body {
      font-family: 'Hanken Grotesk', system-ui, -apple-system, sans-serif;
      font-size: 10pt;
      line-height: 1.5;
      color: #1a1a1a;
      background: #fff;
      margin: 0;
      padding: 12mm 0 0;
    }
    h1 { font-size: 18pt; font-weight: 700; margin: 0 0 4pt; }
    h2 { font-size: 11pt; font-weight: 600; color: #0a5c5c; margin: 16pt 0 6pt; page-break-after: avoid; }
    section { margin-bottom: 12pt; }
    .brief-header { padding-bottom: 8pt; border-bottom: 1.5pt solid #0a5c5c; margin-bottom: 12pt; page-break-after: avoid; }
    .brief-meta { font-size: 9pt; color: #555; display: flex; gap: 16pt; margin-top: 4pt; }
    .brief-map img { max-width: 100%; max-height: 120mm; object-fit: contain; border: 0.5pt solid #ccc; }
    .brief-map--missing { background: #f5f5f5; padding: 8pt; color: #888; font-style: italic; }
    .brief-caption { font-size: 8.5pt; color: #666; margin: 3pt 0 0; }
    table { width: 100%; border-collapse: collapse; font-size: 9pt; page-break-inside: auto; }
    thead { background: #f0f7f7; }
    th { font-weight: 600; color: #0a5c5c; text-align: left; padding: 4pt 5pt; border: 0.5pt solid #ccc; }
    td { padding: 3pt 5pt; border: 0.5pt solid #ccc; }
    tr:nth-child(even) td { background: #fafafa; }
    .brief-bad { color: #c00; font-weight: 600; }
    dl { display: grid; grid-template-columns: 160pt 1fr; gap: 3pt 12pt; margin: 0; }
    dt { font-weight: 600; color: #444; }
    dd { margin: 0; font-variant-numeric: tabular-nums; }
    .brief-note { font-size: 8.5pt; color: #888; margin-top: 4pt; }
    .brief-footer { margin-top: 20pt; padding-top: 6pt; border-top: 0.5pt solid #ccc; font-size: 8pt; color: #888; page-break-before: avoid; }
    .brief-opsec { margin-top: 4pt; color: #b35c00; font-style: italic; }
    @media print {
      body { padding: 0; }
      a { color: inherit; text-decoration: none; }
    }
  </style>
</head>
<body>
  <header class="brief-header">
    <h1>Mission Communications Brief</h1>
    <div class="brief-meta">
      <span>${e(i)}</span>
      <span>${e(h)}</span>
      <span>Generated by GroundLink${c?" · "+e(c):""}</span>
    </div>
  </header>

  ${w}
  ${b}
  ${f}
  ${g}
  ${m}

  <footer class="brief-footer">
    <p>GroundLink${c?" · "+e(c):""} · ${e(h)}</p>
    <p class="brief-opsec">
      OPSEC: Verify classification before distributing this document.
      Coordinates originate from your local mission file — they are never stored
      or transmitted by GroundLink.${u?" Coordinates have been redacted in this copy.":""}
    </p>
  </footer>
</body>
</html>`}function x(i){const n=new Blob([i],{type:"text/html"}),o=URL.createObjectURL(n);if(!window.open(o,"_blank")){const d=document.createElement("a");d.href=o,d.download=`groundlink-brief-${Date.now()}.html`,d.click()}setTimeout(()=>URL.revokeObjectURL(o),9e4)}export{M as generateBrief,x as openBrief};

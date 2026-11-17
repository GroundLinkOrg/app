import{r as m}from"./index-D4oedaeb.js";import"./maplibre-KFe8a2y-.js";const e=t=>String(t??"").replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o]),h=t=>t!=null?`${Number(t).toFixed(3)}`:"—",u=t=>t!=null?`${Number(t).toFixed(1)}`:"—",b=t=>t!=null?`${Math.round(t)} dBm`:"—";function $(t){return{handheld:"Handheld",manpack:"Manpack",mobile:"Mobile",base:"Base station",repeater:"Repeater",manet:"MANET node",lora:"LoRa sensor",satcom:"Satcom terminal",hf:"HF station"}[t]??t??"—"}function w(t,o=[]){if(!(o!=null&&o.length))return"—";const r=m(t),i=o.filter(a=>a.band===r&&a.status!=="recommend");return i.length?i.map(a=>a.tier).join(" / "):"—"}function x(t){return t?t<30?"HF":t<300?"VHF":t<1e3?"UHF":t<3e3?"L-band":"SHF+":null}function q({arsenal:t=[],paceLegs:o=[],missionName:r="Mission",buildVersion:i=""}={}){const l=new Date().toISOString().slice(0,16).replace("T"," ")+" UTC",c=t.map((n,f)=>{var s;const d=w(n,o),p=x(n.defaultFreqMHz??((s=n.freqRangeMHz)==null?void 0:s[0]))??"—",g=d==="P"?"fp-tier-p":d==="A"?"fp-tier-a":d==="C"?"fp-tier-c":d==="E"?"fp-tier-e":"";return`<tr>
      <td>${e(n.callsign??n.name??`Node ${f+1}`)}</td>
      <td>${e($(n.role))}</td>
      <td>${e(n.label??n.model??"—")}</td>
      <td>${e(p)}</td>
      <td class="fp-freq">${e(h(n.defaultFreqMHz))}</td>
      <td class="fp-num">${e(n.freqRangeMHz?n.freqRangeMHz.join("–"):"—")}</td>
      <td class="fp-num">${e(u(n.powerW))}</td>
      <td class="fp-num">${e(b(n.rxSensDbm))}</td>
      <td class="${g}">${e(d)}</td>
      <td class="fp-notes">${e(n.notes??"")}</td>
    </tr>`}).join("");return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Freq Plan — ${e(r)}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    @page { size: A4 landscape; margin: 12mm; }
    body {
      font-family: 'Hanken Grotesk', system-ui, sans-serif;
      font-size: 9pt;
      color: #1a1a1a;
      background: #fff;
      margin: 0;
      padding: 10mm 0 0;
    }
    h1 { font-size: 14pt; font-weight: 700; margin: 0 0 2pt; }
    .hdr { border-bottom: 1.5pt solid #0a5c5c; padding-bottom: 6pt; margin-bottom: 10pt; }
    .meta { font-size: 8pt; color: #666; display: flex; gap: 16pt; margin-top: 3pt; }
    table { width: 100%; border-collapse: collapse; }
    thead { background: #f0f7f7; }
    th { font-weight: 600; color: #0a5c5c; padding: 4pt 5pt; border: 0.5pt solid #ccc; text-align: left; white-space: nowrap; }
    td { padding: 3pt 5pt; border: 0.5pt solid #ccc; }
    tr:nth-child(even) td { background: #fafafa; }
    .fp-freq { font-family: 'Courier New', monospace; font-weight: 700; font-size: 10pt; }
    .fp-num  { font-variant-numeric: tabular-nums; text-align: right; }
    .fp-notes { font-size: 8pt; color: #555; }
    .fp-tier-p { background: color-mix(in srgb, #0a8475 12%, #fff); font-weight: 700; color: #0a5c5c; text-align: center; }
    .fp-tier-a { background: color-mix(in srgb, #2a7fe0 12%, #fff); font-weight: 600; color: #1a5faa; text-align: center; }
    .fp-tier-c { background: color-mix(in srgb, #cf8a16 12%, #fff); font-weight: 600; color: #8a5a0a; text-align: center; }
    .fp-tier-e { background: color-mix(in srgb, #dd4f68 12%, #fff); font-weight: 600; color: #9a1a30; text-align: center; }
    .footer { margin-top: 10pt; font-size: 7.5pt; color: #888; border-top: 0.5pt solid #ccc; padding-top: 4pt; }
    @media print { body { padding: 0; } }
  </style>
</head>
<body>
  <div class="hdr">
    <h1>Frequency Plan</h1>
    <div class="meta">
      <span>${e(r)}</span>
      <span>${e(l)}</span>
      <span>${t.length} radio${t.length!==1?"s":""}</span>
      <span>GroundLink${i?" · "+e(i):""}</span>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Callsign / Node</th>
        <th>Role</th>
        <th>Radio model</th>
        <th>Band</th>
        <th>Freq (MHz)</th>
        <th>Range (MHz)</th>
        <th>Power (W)</th>
        <th>Rx sens.</th>
        <th>PACE</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      ${c||'<tr><td colspan="10">No radios in arsenal — add radios first.</td></tr>'}
    </tbody>
  </table>

  <div class="footer">
    <p>PACE tiers: P = Primary · A = Alternate · C = Contingency · E = Emergency</p>
    <p>GroundLink${i?" · "+e(i):""} · ${e(l)} — Frequencies are indicative planning values. Verify against actual radio programming and local licensing.</p>
  </div>
</body>
</html>`}function H(t){const o=new Blob([t],{type:"text/html"}),r=URL.createObjectURL(o);if(!window.open(r,"_blank")){const a=document.createElement("a");a.href=r,a.download=`groundlink-freq-plan-${Date.now()}.html`,a.click()}setTimeout(()=>URL.revokeObjectURL(r),9e4)}export{q as generateFreqPlan,H as openFreqPlan};

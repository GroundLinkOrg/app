import{f as u}from"./index-DRwG7aA3.js";import"./maplibre-Ewvzyz2e.js";const e=t=>String(t??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),f=t=>t!=null?`${Number(t).toFixed(3)}`:"—",b=t=>t!=null?`${Number(t).toFixed(1)}`:"—",$=t=>t!=null?`${Math.round(t)} dBm`:"—";function w(t){return{handheld:"Handheld",manpack:"Manpack",mobile:"Mobile",base:"Base station",repeater:"Repeater",manet:"MANET node",lora:"LoRa sensor",satcom:"Satcom terminal",hf:"HF station"}[t]??t??"—"}function y(t,a=[]){if(!(a!=null&&a.length))return"—";const r=u(t),i=a.filter(n=>n.band===r&&n.status!=="recommend");return i.length?i.map(n=>n.tier).join(" / "):"—"}function k(t){return t?t<30?"HF":t<300?"VHF":t<1e3?"UHF":t<3e3?"L-band":"SHF+":null}function M({arsenal:t=[],paceLegs:a=[],missionName:r="Mission",buildVersion:i="",hfPlan:n=null}={}){var l;const s=new Date().toISOString().slice(0,16).replace("T"," ")+" UTC",p=t.map((o,m)=>{var c;const d=y(o,a),g=k(o.defaultFreqMHz??((c=o.freqRangeMHz)==null?void 0:c[0]))??"—",h=d==="P"?"fp-tier-p":d==="A"?"fp-tier-a":d==="C"?"fp-tier-c":d==="E"?"fp-tier-e":"";return`<tr>
      <td>${e(o.callsign??o.name??`Node ${m+1}`)}</td>
      <td>${e(w(o.role))}</td>
      <td>${e(o.label??o.model??"—")}</td>
      <td>${e(g)}</td>
      <td class="fp-freq">${e(f(o.defaultFreqMHz))}</td>
      <td class="fp-num">${e(o.freqRangeMHz?o.freqRangeMHz.join("–"):"—")}</td>
      <td class="fp-num">${e(b(o.powerW))}</td>
      <td class="fp-num">${e($(o.rxSensDbm))}</td>
      <td class="${h}">${e(d)}</td>
      <td class="fp-notes">${e(o.notes??"")}</td>
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
    .hf-title { font-size: 11pt; font-weight: 700; margin: 12pt 0 4pt; }
    .hf-table { width: auto; min-width: 60mm; }
    .hf-note { font-size: 8pt; color: #666; margin: 4pt 0 0; }
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
      <span>${e(s)}</span>
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
      ${p||'<tr><td colspan="10">No radios in arsenal — add radios first.</td></tr>'}
    </tbody>
  </table>

  ${(l=n==null?void 0:n.blocks)!=null&&l.length?`<h2 class="hf-title">HF working frequencies${n.from&&n.to?` — ${e(n.from)} → ${e(n.to)}`:""}${n.nvis?" (NVIS)":""}</h2>
  <table class="hf-table">
    <thead><tr><th>UTC</th><th>Frequency (MHz)</th><th>Reliability</th></tr></thead>
    <tbody>${n.blocks.map(o=>`<tr><td>${e(o.utc)}</td><td class="fp-freq">${e(f(o.f))}</td><td class="fp-num">${Math.round(o.reliability*100)} %</td></tr>`).join("")}</tbody>
  </table>
  <p class="hf-note">Predicted in GroundLink (P.533-style climatology, ${e(n.service??"SSB")}); planning-grade — confirm with an ALE sounding or a VOACAP run.</p>`:""}

  <div class="footer">
    <p>PACE tiers: P = Primary · A = Alternate · C = Contingency · E = Emergency</p>
    <p>GroundLink${i?" · "+e(i):""} · ${e(s)} — Frequencies are indicative planning values. Verify against actual radio programming and local licensing.</p>
  </div>
</body>
</html>`}function R(t){const a=new Blob([t],{type:"text/html"}),r=URL.createObjectURL(a);if(!window.open(r,"_blank")){const n=document.createElement("a");n.href=r,n.download=`groundlink-freq-plan-${Date.now()}.html`,n.click()}setTimeout(()=>URL.revokeObjectURL(r),9e4)}export{M as generateFreqPlan,R as openFreqPlan};

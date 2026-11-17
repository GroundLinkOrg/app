function X(i,v,$){const h=Math.PI/180,F=180/Math.PI,r=i.getTime()/864e5+24405875e-1-2451545,T=((280.46+.9856474*r)%360+360)%360,x=((357.528+.9856003*r)%360+360)%360,E=T+1.915*Math.sin(x*h)+.02*Math.sin(2*x*h),L=23.439-4e-7*r,q=Math.sin(E*h),y=Math.asin(Math.max(-1,Math.min(1,Math.sin(L*h)*q)))*F;let S=Math.atan2(Math.cos(L*h)*q,Math.cos(E*h))*F;S<0&&(S+=360);const m=(((6.697375+.0657098242*r+(i.getUTCHours()+i.getUTCMinutes()/60+i.getUTCSeconds()/3600))%24+24)%24+$/15-S/15+24)%24*15*h,g=v*h,w=y*h,b=Math.sin(g)*Math.sin(w)+Math.cos(g)*Math.cos(w)*Math.cos(m);return 90-Math.asin(Math.max(-1,Math.min(1,b)))*F}const Z=[{band:"3 MHz (90m)",fLow:2.3,fHigh:3.5},{band:"5 MHz (60m)",fLow:4.75,fHigh:5.45},{band:"7 MHz (40m)",fLow:6.8,fHigh:7.3},{band:"10 MHz (30m)",fLow:9.5,fHigh:10.1},{band:"14 MHz (20m)",fLow:13.5,fHigh:14.5},{band:"18 MHz (17m)",fLow:17.9,fHigh:18.2},{band:"21 MHz (15m)",fLow:20.5,fHigh:21.5},{band:"28 MHz (10m)",fLow:27.5,fHigh:29.7}],P={low:30,medium:100,high:180};function K({lat:i,lng:v,dt:$,pathKm:h=0,solarCycle:F="medium"}){const A=X($,i,v),r=Math.max(0,h),x=63+.728*(P[F]??P.medium),E=4.5+.02*x,L=2.5+.008*x,q=1-.004*Math.abs(i),y=$.getUTCMonth(),S=i>=0?y>=4&&y<=8:y<2||y>9,_=S?1.1:.88,m=Math.max(0,Math.cos(A*Math.PI/180)),g=(E*m+L*(1-m))*q*_;let w;r<=300?w=1.1:r<=1500?w=1.1+(r-300)/1200*1.9:w=3+r/5e3;const b=Math.min(30,g*w),U=A<90,W=U?Math.max(0,Math.cos(A*Math.PI/180)):0,H=U?1.5+.5*W*(x/80)+r/2e3:1,V=.85*b,k=g>H&&r<=500,B=!U,I=Z.map(t=>{let e,n;return t.fHigh<H||t.fLow>=b?(e="no",n=t.fLow>=b?`above MUF (${b.toFixed(1)})`:`below LUF (${H.toFixed(1)})`):t.fLow>H&&t.fHigh<=b?(e="viable",n="within LUF–MUF window"):(e="marginal",n=t.fHigh>b?`upper edge above MUF (${b.toFixed(1)})`:`lower edge near LUF (${H.toFixed(1)})`),{...t,status:e,reason:n}}),R=I.some(t=>t.status!=="no")&&r>300&&b>H;let z;return k&&R?z="both":k?z="nvis":R?z="skywave":z="none",{foF2:g,muf:b,luf:H,ouf:V,nvisViable:k,nightAbsorb:B,mode:z,bands:I,solarZenith:A,season:S?"summer":"winter"}}const Y={ssb:"SSB voice",ale:"ALE / data",cw:"CW"},C="http://www.w3.org/2000/svg",G=30;function p(i,v=1){return Number.isFinite(i)?i.toFixed(v):"—"}function D(i){return String(i).padStart(2,"0")}function J(i,{onParamsChange:v,onPredict:$}={}){i.innerHTML=`
    <div class="hf-controls">
      <div class="input-row">
        <label class="field-label" style="flex:1">Date / time (UTC)
          <input class="input input--sm" type="datetime-local" id="hfDatetime" />
        </label>
      </div>
      <div class="input-row">
        <label class="field-label" style="flex:1">Solar cycle
          <select class="input input--sm" id="hfSolarCycle">
            <option value="low">Low — quiet sun</option>
            <option value="medium" selected>Medium</option>
            <option value="high">High — active sun</option>
          </select>
        </label>
        <label class="field-label" style="flex:1">Path
          <div class="input-row">
            <input class="input input--sm" type="number" id="hfPathKm" min="0" max="10000" step="50" value="0" />
            <span class="input-suffix">km</span>
          </div>
        </label>
      </div>
    </div>
    <div class="hf-results" id="hfResults"></div>
    <p class="help">Climatological estimate (planning-grade). NVIS for short/local paths,
    skywave for DX. Set path to 0 for an overhead (NVIS) assessment.</p>
    <div class="hf-circuit" id="hfCircuit">
      <p class="hf-circuit__title">Circuit: 24-hour reliability and best frequency</p>
      <div class="hf-circuit__row">
        <label class="field-label">From
          <select class="input input--sm" id="hfTx"></select>
        </label>
        <label class="field-label">To
          <select class="input input--sm" id="hfRx"></select>
        </label>
      </div>
      <div class="hf-circuit__row">
        <label class="field-label">Power
          <div class="input-row"><input class="input input--sm" type="number" id="hfPowerW" min="1" max="1500" step="1" value="20" /><span class="input-suffix">W</span></div>
        </label>
        <label class="field-label">Service
          <select class="input input--sm" id="hfService">
            <option value="ssb" selected>SSB voice (15 dB)</option>
            <option value="ale">ALE / data (6 dB)</option>
            <option value="cw">CW (3 dB)</option>
          </select>
        </label>
        <label class="field-label">Noise at the receiver
          <select class="input input--sm" id="hfNoise">
            <option value="quiet">Quiet rural</option>
            <option value="rural" selected>Rural</option>
            <option value="residential">Residential</option>
            <option value="city">City</option>
          </select>
        </label>
      </div>
      <div class="hf-circuit__row">
        <button class="btn btn--sm" type="button" id="hfPredictBtn">Predict 24 h</button>
        <span class="help" id="hfCircuitStatus"></span>
      </div>
      <div id="hfCircuitResults"></div>
    </div>
  `;const h=i.querySelector("#hfDatetime"),F=i.querySelector("#hfSolarCycle"),A=i.querySelector("#hfPathKm"),r=i.querySelector("#hfResults"),T=i.querySelector("#hfTx"),x=i.querySelector("#hfRx"),E=i.querySelector("#hfPowerW"),L=i.querySelector("#hfService"),q=i.querySelector("#hfNoise"),y=i.querySelector("#hfPredictBtn"),S=i.querySelector("#hfCircuitStatus"),_=i.querySelector("#hfCircuitResults");let m=[];y.addEventListener("click",()=>$==null?void 0:$(B())),(function(){const e=new Date;h.value=`${e.getFullYear()}-${D(e.getMonth()+1)}-${D(e.getDate())}T${D(e.getHours())}:${D(e.getMinutes())}`})();for(const t of[h,F,A])t.addEventListener("change",()=>v==null?void 0:v()),t.addEventListener("input",()=>v==null?void 0:v());function g(){return{dt:h.value?new Date(h.value):new Date,pathKm:Math.max(0,Number(A.value)||0),solarCycle:F.value||"medium"}}function w(t){const e=document.createElementNS(C,"svg");e.setAttribute("class","hf-band-chart"),e.setAttribute("viewBox","0 0 100 40"),e.setAttribute("preserveAspectRatio","none"),e.setAttribute("role","img"),e.setAttribute("aria-label",`Band window: LUF ${p(t.luf)} to MUF ${p(t.muf)} MHz`);const n=d=>Math.max(0,Math.min(100,d/G*100)),c=(d,l,o)=>{if(l<=0)return;const s=document.createElementNS(C,"rect");s.setAttribute("x",d),s.setAttribute("y",8),s.setAttribute("width",l),s.setAttribute("height",20),s.setAttribute("class",o),e.appendChild(s)},f=(d,l)=>{const o=n(d),s=document.createElementNS(C,"line");s.setAttribute("x1",o),s.setAttribute("x2",o),s.setAttribute("y1",4),s.setAttribute("y2",32),s.setAttribute("class","hf-tick"),e.appendChild(s);const M=document.createElementNS(C,"text");M.setAttribute("x",Math.max(2,Math.min(92,o))),M.setAttribute("y",39),M.setAttribute("class","hf-tick-label"),M.textContent=l,e.appendChild(M)},u=n(t.luf),a=n(t.muf);return c(0,u,"hf-zone hf-zone--no"),c(u,Math.max(0,a-u),"hf-zone hf-zone--ok"),c(a,Math.max(0,100-a),"hf-zone hf-zone--no"),f(t.foF2,"foF2"),f(t.ouf,"OWF"),f(t.muf,"MUF"),e}function b(t){return t==="nvis"||t==="both"?"hf-summary-line--nvis":t==="skywave"?"hf-summary-line--skywave":"hf-summary-line--none"}function U(t){return`${{nvis:"NVIS viable",skywave:"Skywave viable",both:"NVIS + skywave",none:"No HF path"}[t.mode]} · OWF ${p(t.ouf)} MHz · MUF ${p(t.muf)} MHz`}function W(t){r.innerHTML="";const e=document.createElement("div");e.className=`hf-summary-line ${b(t.mode)}`,e.textContent=U(t),r.appendChild(e);const n=document.createElement("p");n.className="help hf-sub";const c=t.solarZenith<90?`day (sun ${p(90-t.solarZenith,0)}° up)`:"night";n.textContent=`foF2 ${p(t.foF2)} MHz · LUF ${p(t.luf)} MHz · ${c} · ${t.season}`,r.appendChild(n),r.appendChild(w(t));const f=document.createElement("div");f.className="hf-band-list";for(const u of t.bands){const a=document.createElement("div");a.className="hf-band-row";const d=document.createElement("span");d.className=`hf-band-dot hf-band-dot--${u.status}`;const l=document.createElement("span");l.className="hf-band-name",l.textContent=u.band;const o=document.createElement("span");o.className="hf-band-reason",o.textContent=u.reason,a.append(d,l,o),f.appendChild(a)}r.appendChild(f)}function H(t,e,n,c,f){const u=K({lat:t,lng:e,dt:n,pathKm:c,solarCycle:f});W(u)}const V={low:20,medium:80,high:150};function k(t){m=t.map(n=>({id:n.id,name:n.name||"Site",lat:n.lat,lng:n.lng}));for(const[n,c]of[[T,0],[x,1]]){const f=n.value;n.replaceChildren();for(const u of m){const a=document.createElement("option");a.value=u.id,a.textContent=u.name,n.append(a)}m.some(u=>u.id===f)?n.value=f:m[c]&&(n.value=m[c].id)}const e=m.length>=2;y.disabled=!e,S.textContent=e?"":"Add two sites to predict a circuit."}function B(){const t=g(),e=m.find(c=>c.id===T.value),n=m.find(c=>c.id===x.value);return{tx:e,rx:n,txName:e==null?void 0:e.name,rxName:n==null?void 0:n.name,month:t.dt.getUTCMonth()+1,ssn:V[t.solarCycle]??80,powerW:Math.max(1,Math.min(1500,Number(E.value)||20)),service:L.value,noise:q.value}}function I(t){S.textContent=t}function O(t){y.disabled=t||m.length<2}function R(t){const a=3.8333333333333335,d=50/t.freqsMHz.length,l=document.createElementNS(C,"svg");l.setAttribute("class","hf-heat"),l.setAttribute("viewBox","0 0 100 60"),l.setAttribute("role","img"),l.setAttribute("aria-label",`24-hour reliability by frequency; best ${p(t.day.f)} MHz by day, ${p(t.night.f)} MHz at night`);for(const o of t.hours)o.cells.forEach((s,M)=>{const N=document.createElementNS(C,"rect");N.setAttribute("x",(8+o.utc*a).toFixed(2)),N.setAttribute("y",(3+(t.freqsMHz.length-1-M)*d).toFixed(2)),N.setAttribute("width",a.toFixed(2)),N.setAttribute("height",d.toFixed(2)),N.setAttribute("fill",`color-mix(in srgb, var(--accent) ${Math.round(s.reliability*100)}%, var(--surface))`),s.f===o.best.f&&o.best.reliability>=.1&&N.setAttribute("class","hf-heat__best"),N.append(Object.assign(document.createElementNS(C,"title"),{textContent:`${String(o.utc).padStart(2,"0")}:00 UTC · ${s.f} MHz · ${Math.round(s.reliability*100)} % · SNR ${s.snrDb.toFixed(0)} dB · ${s.mode}`})),l.append(N)});for(const o of[0,6,12,18]){const s=document.createElementNS(C,"text");s.setAttribute("x",(8+o*a+.5).toFixed(2)),s.setAttribute("y",58 .toFixed(2)),s.textContent=`${String(o).padStart(2,"0")}z`,l.append(s)}return t.freqsMHz.forEach((o,s)=>{if(s%4!==0&&s!==t.freqsMHz.length-1)return;const M=document.createElementNS(C,"text");M.setAttribute("x","0.5"),M.setAttribute("y",(3+(t.freqsMHz.length-1-s)*d+d*.8).toFixed(2)),M.textContent=`${o}`,l.append(M)}),l}function z(t,{txName:e,rxName:n}={}){if(_.replaceChildren(),!t)return;const c=document.createElement("p");c.className="hf-circuit__summary",c.textContent=`${e??"A"} → ${n??"B"}: ${p(t.km,0)} km${t.nvis?" (NVIS)":""} · day ${p(t.day.f)} MHz (${Math.round(t.day.reliability*100)} %) · night ${p(t.night.f)} MHz (${Math.round(t.night.reliability*100)} %) · ${t.hops} hop${t.hops>1?"s":""}`,_.append(c,R(t));const f=document.createElement("div");f.className="hf-hours";for(const a of t.hours){const d=document.createElement("div");d.className="hf-hours__cell",d.title=`${String(a.utc).padStart(2,"0")}:00 UTC · MUF ${p(a.mufMHz)} MHz · ${a.best.mode}`;const l=document.createElement("span");l.textContent=`${String(a.utc).padStart(2,"0")}z`;const o=document.createElement("b");o.textContent=p(a.best.f);const s=document.createElement("span");s.textContent=`${Math.round(a.best.reliability*100)} %`,d.append(l,o,s),f.append(d)}const u=document.createElement("p");u.className="hf-circuit__note",u.textContent=`Best frequency per UTC hour (MHz) and its reliability for ${Y[t.service]??t.service}, SSN ${t.ssn}, month ${t.month}. Planning-grade: climatological model, no storms or sporadic E.`,_.append(f,u)}return{update:H,getParams:g,setSites:k,getCircuitParams:B,showCircuit:z,setCircuitStatus:I,setBusy:O}}export{J as createHfPanel};

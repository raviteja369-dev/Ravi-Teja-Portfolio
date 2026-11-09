import { create } from 'zustand';
export const useDesktop = create((set,get)=>({
  windows:{}, active:null, z:10, theme:'dark', reducedMotion: typeof window!=='undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  open:(id)=>set(s=>{const vw=typeof window==='undefined'?1440:window.innerWidth,vh=typeof window==='undefined'?900:window.innerHeight;const ww=Math.min(820,vw-250),wh=Math.min(520,vh-240),x=s.windows[id]?.x??Math.min(100+Object.keys(s.windows).length*28,Math.max(8,vw-ww-16)),y=s.windows[id]?.y??Math.min(38+Object.keys(s.windows).length*16,Math.max(8,vh-wh-110));return{windows:{...s.windows,[id]:{open:true,minimized:false,maximized:false,x,y}},active:id,z:s.z+1}}),
  close:(id)=>set(s=>({windows:{...s.windows,[id]:{...s.windows[id],open:false,minimized:false}},active:s.active===id?null:s.active})),
  minimize:(id)=>set(s=>({windows:{...s.windows,[id]:{...s.windows[id],minimized:true}},active:s.active===id?null:s.active})),
  maximize:(id)=>set(s=>({windows:{...s.windows,[id]:{...s.windows[id],maximized:!s.windows[id]?.maximized}},active:id,z:s.z+1})),
  focus:(id)=>set(s=>s.active===id?s:({active:id,z:s.z+1})),
  move:(id,x,y)=>set(s=>({windows:{...s.windows,[id]:{...s.windows[id],x,y}}})),
  toggleTheme:()=>set(s=>({theme:s.theme==='dark'?'light':'dark'})),
  setReduced:(v)=>set({reducedMotion:v})
}));

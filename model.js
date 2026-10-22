import { BANDS, COHORTS, COMPETENCIES, MIN_GROUP_SIZE, TRANSITIONS } from './data.js';

export function bandOf(value) {
  if (!Number.isFinite(value) || value < 0 || value > 100) throw new RangeError('PD fuera del intervalo 0–100');
  return BANDS.find(band => value >= band.min);
}
export const number = value => new Intl.NumberFormat('es-MX',{maximumFractionDigits:1}).format(value);
export const signed = value => value > 0 ? `+${number(value)}` : value < 0 ? `−${number(Math.abs(value))}` : '0';
export const interval = (value, margin) => [Math.max(0,value-margin),Math.min(100,value+margin)];
export function crossesBand(value, margin) {
  const [lo,hi]=interval(value,margin);
  return BANDS.some(band=>band.min>0 && lo<band.min && hi>=band.min);
}
export function overlaps(item) {
  const a=interval(item.t0,item.uncertainty),b=interval(item.t1,item.uncertainty);
  return Math.max(a[0],b[0])<=Math.min(a[1],b[1]);
}
export function profileCounts(time) {
  return Object.fromEntries(BANDS.map(band=>[band.id,COMPETENCIES.filter(item=>bandOf(item[time]).id===band.id).length]));
}
export function trajectories() {
  return { increase:COMPETENCIES.filter(x=>x.t1>x.t0).length, decrease:COMPETENCIES.filter(x=>x.t1<x.t0).length, stable:COMPETENCIES.filter(x=>x.t1===x.t0).length };
}
export function allocateCounts(n, weights) {
  const raw=weights.map(w=>n*w),counts=raw.map(Math.floor);
  const order=raw.map((v,i)=>({i,remainder:v-counts[i]})).sort((a,b)=>b.remainder-a.remainder);
  let remaining=n-counts.reduce((a,b)=>a+b,0);
  for(let i=0;i<remaining;i++)counts[order[i].i]++;
  return counts;
}
export function cohortView({year='2026',shift='all',group='all'}={}) {
  const base=COHORTS[year];
  if(!base)throw new Error('Cohorte no disponible');
  const evening=base.n-base.morning;
  const n=group==='pilot'?18:shift==='morning'?base.morning:shift==='evening'?evening:base.n;
  if(n<MIN_GROUP_SIZE)return {year,shift,group,n,suppressed:true};
  const offsets=[1,2,0,1,1,2];
  const offset=i=>shift==='morning'?offsets[i]:shift==='evening'?-offsets[i]*base.morning/evening:0;
  const rows=COMPETENCIES.map((item,i)=>({code:item.code,name:item.short,t0:base.t0[i]+offset(i),t1:base.t1[i]+offset(i)}));
  const paired=shift==='all'?base.paired:Math.round(n*base.paired/base.n);
  const counts=allocateCounts(paired,base.transitions);
  return {year,shift,group,n,suppressed:false,paired,interpretable:Math.round(n*base.interpretable),coverage:base.coverage,rows,
    transitions:TRANSITIONS.map((item,i)=>({...item,n:counts[i],percent:counts[i]/paired*100}))};
}

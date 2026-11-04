'use client';
import { useEffect } from 'react';
import { animate, inView } from 'motion';
export default function Reveal() { useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches) return; return inView('.section',(element: Element)=>{animate(element,{opacity:[.75,1],transform:['translateY(18px)','translateY(0)']},{duration:.65,ease:'easeOut'});},{margin:'0px 0px -40px 0px'});},[]);return null; }

'use client';
import { useEffect, useRef, useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { navigation, site } from '@/config/site';
import { Flower } from './ui';
export default function Navbar() {
 const [open, setOpen] = useState(false); const toggle = useRef<HTMLButtonElement>(null); const menu = useRef<HTMLDivElement>(null);
 useEffect(() => {
   if (!open) return;
   const previousOverflow = document.body.style.overflow;
   document.body.style.overflow = 'hidden';
   const desktop = matchMedia('(min-width: 801px)');
   const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
   const onKey = (event: KeyboardEvent) => {
     if (event.key === 'Escape') {
       setOpen(false);
       toggle.current?.focus();
     }
     if (event.key === 'Tab') {
       const links = menu.current?.querySelectorAll<HTMLAnchorElement>('a');
       const last = links?.[links.length - 1];
       if (event.shiftKey && document.activeElement === toggle.current) {
         event.preventDefault();
         last?.focus();
       } else if (!event.shiftKey && document.activeElement === last) {
         event.preventDefault();
         toggle.current?.focus();
       }
     }
   };
   menu.current?.querySelector<HTMLAnchorElement>('a')?.focus();
   document.addEventListener('keydown', onKey);
   desktop.addEventListener('change', closeOnDesktop);
   return () => {
     document.body.style.overflow = previousOverflow;
     document.removeEventListener('keydown', onKey);
     desktop.removeEventListener('change', closeOnDesktop);
   };
 }, [open]);
 return <header className="navbar"><a href="#home" className="wordmark" aria-label="Kalakritik home">kalakritik<Flower/></a><nav aria-label="Main navigation" className="desktop-nav">{navigation.map(([name, href])=><a href={href} key={href}>{name}</a>)}</nav><div className="nav-actions"><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Kalakritik on Instagram"><Instagram size={20}/></a><a href="#custom" className="nav-cta">Let’s create <span>↗</span></a><button ref={toggle} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div><div ref={menu} id="mobile-menu" className="mobile-nav" hidden={!open}><nav aria-label="Mobile navigation">{navigation.map(([name,href])=><a key={href} href={href} onClick={()=>{setOpen(false);toggle.current?.focus();}}>{name}<span>↗</span></a>)}</nav></div></header>;
}

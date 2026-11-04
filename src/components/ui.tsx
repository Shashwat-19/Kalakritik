import { ArrowUpRight } from 'lucide-react';
import { useId } from 'react';
export function Action({ children, href, secondary = false }: { children: React.ReactNode; href: string; secondary?: boolean }) {
 const id = useId();
 const className = `button ${secondary ? 'secondary' : ''}`;
 return href ? <a className={className} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}<ArrowUpRight size={17}/></a> : <span className="unavailable"><button className={className} disabled aria-describedby={id}>{children}<ArrowUpRight size={17}/></button><small id={id}>Form coming soon. Please enquire on Instagram.</small></span>;
}
export function Flower({ className = '' }: { className?: string }) { return <span aria-hidden="true" className={`flower ${className}`}>✳</span>; }
export function Heading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) { return <><p className="eyebrow"><span/> {eyebrow}</p><h2>{children}</h2></>; }

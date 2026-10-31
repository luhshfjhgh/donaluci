import { createFileRoute,Link } from '@tanstack/react-router';
import { Star, ArrowUpRight } from 'lucide-react';
import { PageHeading } from '@/components/bakery-shell';
import { Button } from '@/components/ui/button';
import { reviews } from '@/lib/bakery';
import { pageHead } from '@/lib/metadata';
export const Route=createFileRoute('/avaliacoes')({head:()=>pageHead('Avaliações','Histórias de quem compartilha a mesa com a gente. Leia as avaliações da Doce Aroma.'),component:Reviews});
function Reviews(){return <main><PageHeading eyebrow="QUEM VEM, SEMPRE VOLTA" title="O carinho é recíproco.">Cada visita é uma nova história. Essas são algumas das nossas favoritas.</PageHeading><div className="container content-page"><div className="review-rating"><span className="stars">{Array.from({length:5},(_,i)=><Star key={i}/>)}</span><strong>4,9 / 5</strong><span>Avaliações ilustrativas</span></div><div className="review-grid">{reviews.map(r=><article className="review-card" key={r.name}><div className="stars">{Array.from({length:5},(_,i)=><Star key={i}/>)}</div><p>“{r.text}”</p><div className="review-person"><span className="avatar">{r.initials}</span><div><strong>{r.name}</strong><small>{r.date}</small></div></div></article>)}</div><div className="text-center mt-10"><Button asChild><Link to="/comentarios">Compartilhe seu momento <ArrowUpRight/></Link></Button><p className="local-note">Nomes e depoimentos fictícios, criados para esta padaria demonstrativa.</p></div></div></main>;}

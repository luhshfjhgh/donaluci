import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { PageHeading } from '@/components/bakery-shell';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/bakery';
import { pageHead } from '@/lib/metadata';
export const Route=createFileRoute('/cardapio')({head:()=>pageHead('Nosso cardápio','Conheça nossos pães, doces, salgados e cafés artesanais. Cada receita tem um toque de carinho.'),component:Menu});
function Menu(){const [category,setCategory]=useState('Todos');const [search,setSearch]=useState('');const list=products.filter(p=>(category==='Todos'||p.category===category)&&p.name.toLocaleLowerCase('pt-BR').includes(search.toLocaleLowerCase('pt-BR')));return <main><PageHeading eyebrow="FEITOS COM TEMPO E CARINHO" title="Nosso cardápio">Da primeira mordida ao último gole, um convite para aproveitar o momento.</PageHeading><div className="container content-page"><div className="menu-toolbar"><div className="category-tabs">{['Todos','Pães','Doces','Salgados','Bebidas'].map(c=><Button variant="ghost" className={c===category?'selected':''} onClick={()=>setCategory(c)} key={c}>{c}</Button>)}</div><input className="field" aria-label="Buscar no cardápio" placeholder="Encontre seu próximo favorito…" value={search} onChange={e=>setSearch(e.target.value)}/></div><div className="product-grid">{list.map(p=><ProductCard key={p.id} product={p}/>)}</div>{!list.length&&<p className="empty-state">Não encontramos esse sabor. Que tal tentar outro nome?</p>}<p className="local-note mt-8">Preços ilustrativos. Disponibilidade e informações de ingredientes sujeitas a confirmação. Produzido em ambiente que manipula glúten, leite e ovos.</p></div></main>;}

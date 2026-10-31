import bread from '@/assets/pao-frances.jpg';
import croissant from '@/assets/croissant.jpg';
import cheese from '@/assets/pao-de-queijo.jpg';
import cake from '@/assets/bolo-de-chocolate.jpg';
import sonho from '@/assets/sonho.jpg';
import brigadeiro from '@/assets/brigadeiro.jpg';
import espresso from '@/assets/cafe-expresso.jpg';
import cappuccino from '@/assets/cappuccino.jpg';

export const products = [
  { id:'pao-frances', name:'Pão francês', category:'Pães', price:1.5, unit:'unidade', image:bread, description:'Casquinha dourada e crocante, miolo leve e macio. O clássico que sai quentinho do nosso forno todos os dias.', ingredients:'Farinha de trigo, água, fermento e sal.', allergens:'Contém glúten.', badge:'O clássico' },
  { id:'croissant', name:'Croissant de manteiga', category:'Pães', price:9.9, unit:'unidade', image:croissant, description:'Camadas delicadas, manteiga de verdade e uma leveza que desmancha na boca. Feito à mão, sem pressa.', ingredients:'Farinha de trigo, manteiga, leite, ovos, fermento, açúcar e sal.', allergens:'Contém glúten, leite e ovos.', badge:'Mais amado' },
  { id:'pao-de-queijo', name:'Pão de queijo', category:'Salgados', price:6.5, unit:'porção · 4 un.', image:cheese, description:'Receita de família com queijo meia-cura, crocante por fora e irresistivelmente macio por dentro.', ingredients:'Polvilho, queijo meia-cura, leite, óleo, ovos e sal.', allergens:'Contém leite e ovos.', badge:'' },
  { id:'bolo-de-chocolate', name:'Bolo de chocolate', category:'Doces', price:16.9, unit:'fatia', image:cake, description:'Massa fofinha de cacau com camadas generosas de brigadeiro e cobertura de chocolate.', ingredients:'Farinha de trigo, cacau, chocolate, leite, ovos, açúcar e manteiga.', allergens:'Contém glúten, leite e ovos.', badge:'Favorito da casa' },
  { id:'sonho', name:'Sonho de creme', category:'Doces', price:8.9, unit:'unidade', image:sonho, description:'Uma nuvem de massa macia, recheada com creme de baunilha e finalizada com açúcar.', ingredients:'Farinha de trigo, leite, ovos, açúcar, manteiga e baunilha.', allergens:'Contém glúten, leite e ovos.', badge:'' },
  { id:'brigadeiro', name:'Brigadeiro artesanal', category:'Doces', price:4.5, unit:'unidade', image:brigadeiro, description:'Chocolate intenso, textura cremosa e granulado de verdade. Pequeno no tamanho, enorme no afeto.', ingredients:'Leite condensado, chocolate, manteiga e granulado.', allergens:'Contém leite.', badge:'' },
  { id:'cafe-expresso', name:'Café expresso', category:'Bebidas', price:6.9, unit:'50 ml', image:espresso, description:'Grãos brasileiros selecionados, moídos na hora. Uma xícara de aroma intenso e crema aveludada.', ingredients:'Café 100% arábica e água filtrada.', allergens:'Sem leite ou glúten na receita.', badge:'' },
  { id:'cappuccino', name:'Cappuccino da casa', category:'Bebidas', price:12.9, unit:'180 ml', image:cappuccino, description:'Nosso expresso encontra leite vaporizado em uma combinação equilibrada, cremosa e acolhedora.', ingredients:'Café 100% arábica e leite integral.', allergens:'Contém leite.', badge:'Para acompanhar' },
];
export const money = (value:number) => value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
export const reviews = [
 {name:'Mariana Costa', initials:'MC', text:'O croissant mais gostoso que já comi! Dá para sentir o cuidado em cada detalhe. Virou meu cantinho favorito de São Paulo.', date:'Há 2 dias'},
 {name:'Pedro Almeida', initials:'PA', text:'Pão quentinho, café perfeito e um atendimento que faz a gente se sentir em casa. Começar o dia aqui é outra coisa.', date:'Há 5 dias'},
 {name:'Camila Santos', initials:'CS', text:'O bolo de chocolate é simplesmente maravilhoso. Pedi para um café com amigos e todo mundo se apaixonou!', date:'Há 1 semana'},
];

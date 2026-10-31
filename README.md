# Doce Aroma Bakery

PROJETO: DOCE AROMA — PADARIA ARTESANAL



Crie um website completo, extremamente moderno e profissional, para uma padaria fictícia chamada Doce Aroma.



O site deve parecer uma empresa verdadeira, com identidade visual premium, fotografia gastronômica, animações suaves e excelente experiência de navegação.



1. Identidade visual



- Paleta: bege, marrom, branco e dourado.

- Design premium e minimalista.

- Tipografia elegante.

- Animações de entrada e transições.

- Layout responsivo para computadores e celulares.

- Menu lateral ou superior moderno.



2. Páginas



- Home.

- Nossa história.

- Cardápio.

- Produtos e detalhes.

- Promoções.

- Avaliações.

- Comentários.

- Contato.

- Login demonstrativo.



3. Produtos



Criar catálogo com:



- Pão francês.

- Croissant.

- Pão de queijo.

- Bolo de chocolate.

- Sonho.

- Brigadeiro.

- Café expresso.

- Cappuccino.



Cada produto deve ter imagem, descrição e preço fictício.



4. Sistema de comentários



Criar uma área funcional de comentários com:



- Campo de nome fictício.

- Campo de comentário.

- Botão publicar.

- Listagem dos comentários.

- Data e horário.

- Atualização dinâmica.



5. Laboratório educacional de Stored XSS



Implementar uma versão deliberadamente vulnerável da renderização dos comentários, exclusivamente em ambiente local e isolado.



Requisitos:



- Criar um modo de laboratório separado da versão segura.

- Na versão vulnerável, demonstrar Stored XSS usando uma mensagem inofensiva de JavaScript, como um alerta.

- Permitir armazenar e recuperar comentários de teste.

- Demonstrar a execução quando outro visitante fictício visualizar os comentários.

- Criar um painel que mostre quando o teste XSS foi acionado.

- Não coletar cookies, credenciais, tokens ou informações pessoais.

- Não permitir comunicação externa dos payloads.

- Não disponibilizar a versão vulnerável publicamente.



6. Comparação de segurança



Criar duas versões da área de comentários:



A) Modo vulnerável: demonstração controlada da falha de Stored XSS.



B) Modo protegido: renderização segura com escape de HTML, validação e sanitização adequada.



Mostrar visualmente a diferença entre os dois comportamentos.



7. Painel de segurança



Criar um dashboard com:



- Quantidade de comentários.

- Testes XSS executados.

- Eventos detectados.

- Comparação entre modo vulnerável e protegido.

- Histórico de testes.



8. Tecnologias



Utilizar:



- React ou Next.js.

- TypeScript.

- Tailwind CSS.

- Banco de dados local.

- Componentes reutilizáveis.



9. Requisitos finais



O resultado precisa parecer um site comercial de verdade, não um projeto escolar ou uma página genérica.



Priorizar qualidade visual, animações, responsividade, acessibilidade e funcionamento das páginas.



A vulnerabilidade deve permanecer restrita ao laboratório local. Nunca publicar a versão vulnerável em hospedagem pública.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3f2f701d-22a0-4cbd-be04-20d3322309da).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
"# donaluci" 

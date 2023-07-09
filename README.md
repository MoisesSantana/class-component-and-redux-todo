# Boas-vindas ao repositório!

Esta aplicação é um todo list em React, utilizando componentes de classe com TS e Redux para gerenciar o estado global.

# Técnologias Utilizadas

<details>
  <summary><strong>React</strong></summary><br />

  >O <a href="https://react.dev/" target="_blank">React</a> é uma biblioteca JavaScript amplamente utilizada para criar interfaces de usuário interativas e responsivas. Ele adota uma abordagem eficiente ao utilizar uma representação virtual do DOM, o que permite atualizações rápidas e eficientes na interface, minimizando o impacto no DOM real. Com o suporte à sintaxe JSX e o foco na criação de componentes reutilizáveis, o React torna mais fácil a construção de interfaces modulares e a composição de aplicativos web complexos. Devido à sua popularidade e comunidade ativa, o React é uma escolha comum para o desenvolvimento de aplicações modernas e escaláveis.
  
</details>

<details>
  <summary><strong>Vite</strong></summary><br />

  ><a href="https://vitejs.dev/" target="_blank">Vite</a> é uma ferramenta de compilação extremamente rápida e leve para o desenvolvimento de aplicações web. Ela foi projetada para substituir a tradicional abordagem de compilação baseada em bundlers, permitindo um processo de desenvolvimento mais ágil e eficiente. Ao contrário dos bundlers convencionais, como o Webpack, o Vite adota uma abordagem de "módulos nativos" (native ESM) para carregar e compilar os arquivos durante o desenvolvimento. Isso resulta em tempos de inicialização incrivelmente rápidos, permitindo que as alterações sejam refletidas instantaneamente no navegador, sem a necessidade de reconstruir e recarregar a aplicação. Além disso, o Vite possui suporte nativo para o Vue.js e o React, tornando-se uma escolha popular para projetos dessas frameworks. Com sua velocidade, simplicidade e suporte moderno, o Vite oferece uma experiência de desenvolvimento aprimorada para construção de aplicações web.
  
</details>

<details>
  <summary><strong>TypeScript</strong></summary><br />

  ><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> é uma linguagem de programação de código aberto desenvolvida pela Microsoft, que se baseia no JavaScript padrão, porém com a adição de recursos de tipagem estática. Ao usar o TypeScript, os desenvolvedores podem adicionar tipos aos seus códigos, permitindo a detecção de erros de forma antecipada durante o desenvolvimento. Isso ajuda a melhorar a qualidade e a robustez dos programas, ao mesmo tempo em que fornece recursos avançados, como autocompletar e refatoração de código. O TypeScript é compatível com o JavaScript existente e pode ser usado para criar aplicativos web, aplicativos móveis, APIs e muito mais, tornando-se uma escolha popular entre os desenvolvedores que buscam uma experiência de desenvolvimento mais sólida e escalável.
</details>

<details>
  <summary><strong>Redux</strong></summary><br />

  ><a href="https://redux.js.org/" target="_blank">Redux</a> é uma biblioteca de gerenciamento de estado para aplicativos JavaScript, comumente usada em conjunto com frameworks como React e Angular. Ele oferece uma abordagem previsível para controlar o estado da aplicação, permitindo que os desenvolvedores armazenem e atualizem o estado centralizado de maneira organizada. Com o Redux, o estado da aplicação é armazenado em uma estrutura de dados chamada "store", e as alterações são realizadas por meio de "actions" que descrevem o que deve ser feito. As "actions" são enviadas para "reducers", que são funções puras responsáveis por atualizar o estado com base nas ações recebidas. O Redux facilita o compartilhamento de estado entre componentes e melhora a previsibilidade e rastreabilidade das alterações no estado da aplicação.
</details>

<details>
  <summary><strong>Redux Thunk</strong></summary><br />
  
  ><a href="https://redux.js.org/usage/writing-logic-thunks" target="_blank">Redux Thunk</a> é um middleware para Redux que permite lidar com ações assíncronas de forma mais simples e expressiva. Ele estende a funcionalidade do Redux, permitindo que as ações não sejam apenas objetos simples, mas também funções assíncronas. Isso é útil quando precisamos fazer chamadas a APIs, buscar dados do servidor ou executar operações assíncronas antes de despachar uma ação. O Redux Thunk permite que as funções assíncronas retornem outras ações, adiando sua execução até que as operações assíncronas sejam concluídas. Dessa forma, podemos lidar com fluxos de trabalho assíncronos de maneira mais fácil e controlada, mantendo a previsibilidade e a imutabilidade do estado no Redux.

</details>

<details>
  <summary><strong>Material-UI</strong></summary><br />
  
  ><a href="https://mui.com/material-ui/" target="_blank">Material-UI</a> é uma biblioteca de componentes de interface de usuário para React, baseada no design do Material Design, criado pelo Google. Ela oferece uma ampla gama de componentes estilizados e pré-construídos, como botões, formulários, barras de navegação e muito mais, que podem ser facilmente integrados em um projeto React. O Material-UI permite que os desenvolvedores criem interfaces bonitas e consistentes, seguindo as diretrizes de design do Material Design. Além disso, a biblioteca fornece recursos avançados, como temas personalizáveis, estilos responsivos e suporte a acessibilidade. Com o Material-UI, os desenvolvedores podem acelerar o desenvolvimento de aplicativos com uma aparência profissional e moderna.

</details>

<details>
  <summary><strong>date-fns</strong></summary><br />
  
  ><a href="https://date-fns.org/" target="_blank">date-fns</a> é uma biblioteca JavaScript que fornece uma série de funções utilitárias para manipulação e formatação de datas. Ela oferece uma alternativa leve e flexível aos recursos nativos do objeto Date do JavaScript, facilitando a realização de operações comuns, como adicionar ou subtrair dias, formatar datas, obter diferenças entre datas, entre outras. Com o date-fns, os desenvolvedores podem lidar com tarefas relacionadas a datas de forma mais eficiente e legível, tornando a manipulação de datas em projetos JavaScript mais simples e consistente. A biblioteca também possui uma documentação abrangente e é amplamente adotada pela comunidade, o que a torna uma escolha popular para trabalhar com datas em aplicativos web.

</details>

<details>
  <summary><strong>commitizen emoji</strong></summary><br />
  
  ><a href="https://github.com/ngryman/cz-emoji" target="_blank">Commitizen Emoji</a> é uma extensão para o Git que adiciona suporte a emojis na formatação de mensagens de commit. Em vez de utilizar apenas o formato convencional de mensagens de commit, que consiste em uma linha de resumo seguida por um corpo opcional, o Commitizen Emoji permite que você adicione emojis como prefixos para indicar o tipo de alteração realizada no commit. Esses emojis fornecem uma forma visual e intuitiva de identificar rapidamente o propósito do commit, como correção de bugs, adição de recursos, melhorias de desempenho, entre outros. Além disso, o Commitizen Emoji facilita a padronização das mensagens de commit em equipes, promovendo uma melhor compreensão e organização do histórico de alterações em um projeto.

</details>

<details>
  <summary><strong>ESLint</strong></summary><br />
  
  ><a href="https://eslint.org/" target="_blank">ESLint</a> é uma ferramenta de linting de código estático amplamente utilizada no desenvolvimento de software. Ela ajuda a identificar e corrigir problemas de código, seguindo as regras e diretrizes definidas no projeto. O ESLint analisa o código-fonte JavaScript e fornece avisos e erros relacionados a práticas inadequadas, problemas de formatação, potenciais erros e outras questões de qualidade. Com configurações personalizáveis, o ESLint pode ser adaptado às necessidades específicas de um projeto, permitindo que as equipes de desenvolvimento mantenham um código consistente, legível e livre de erros. É uma ferramenta valiosa para melhorar a qualidade e a manutenibilidade do código, garantindo boas práticas de programação.

</details>

# Requisitos do desafio

## Legenda:
  >**Concluído ✔️:**
  <br/>
  >**Bonus ⭐:**
  <br/>
  >**Não concluído ❌:**

## Instruções:
Crie uma aplicação ReactJS para um sistema de gerenciamento de tarefas. Você deve implementar os seguintes requisitos:
<br/><br/>

### Requisitos obrigatórios:
  >**Concluído ✔️:** Exibir uma lista de tarefas na tela, mostrando o título e a descrição de cada tarefa.<br/>
  >**Concluído ✔️:** Adicionar a funcionalidade de marcar uma tarefa como concluída. Ao clicar em uma tarefa, ela deve ser marcada como concluída e exibir um estilo visual diferente.<br/>
  >**Concluído ✔️:** Implementar a funcionalidade de filtrar as tarefas por status (concluídas ou pendentes).<br/>
  >**Concluído ✔️:** Adicionar a funcionalidade de ordenar as tarefas por data de criação (mais recentes primeiro ou mais antigas primeiro).<br/>
  >**Concluído ✔️:** Implementar a funcionalidade de edição de tarefas. Ao clicar em um botão "Editar" ao lado de uma tarefa, um modal deve ser exibido com os campos de título e descrição preenchidos com os dados da tarefa selecionada. O usuário pode editar os campos e salvar as alterações.<br/><br/>
### Requisitos adicionais:
  >**Concluído ✔️:** Use componentes de classe do React.<br/>
  >**Concluído ✔️:** Utilize o Redux para o gerenciamento de estado da aplicação.<br/>
  >**Concluído ✔️:** Utilize Redux Thunk ou Redux Saga para lidar com ações assíncronas, como a edição de tarefas.<br/>
  >**Concluído ✔️:** Implemente validações de formulário para os campos de título e descrição.<br/>
  >**Concluído ✔️:** Adicione estilos personalizados usando CSS ou uma biblioteca de sua escolha.<br/>
  >**Concluído ✔️:** Utilize algum pacote de UI para os componentes visuais, como o Material-UI ou Ant Design.<br/><br/>
### Observações:
  >Não se preocupe com a persistência de dados. As tarefas podem ser armazenadas no estado da aplicação.<br/>
  >Você pode definir a estrutura do estado da aplicação conforme achar adequado.<br/>
  >Ao finalizar o teste, adicione instruções de como executar a aplicação localmente e qualquer informação relevante.<br/><br/>
### Bonus:
  >**Bonus ⭐:** Foi utilizado TypeScript para desenvolver a aplicação.<br/>
  >**Bonus ⭐:** Foi feito a persistência dos dados utilizando o localStorage.<br/>
  >**Bonus ⭐:** É possível pesquisar pela tarefa salva na lista<br/>
  >**Bonus ⭐:** Foi adicionado um campo para identificar a quanto tempo a tarefa foi criada.<br/><br/>

# Aplicação

## Acesso ao deploy

<a href="https://class-redux-todo.netlify.app/" target="_blank">Aqui</a> você consegue acessar a aplicação sem a necessidade da instalação.

## Guia de instalação

Caso queira baixar essa aplicação e rodar em sua maquina você pode seguir este passo a passo:

> **Atenção ⚠️:** Para seguir esses passos é necessário ter o node e npm instalados e garantir que está no diretório correto. Para instalar o Node com npm você pode encontrar mais detalhes <a href="https://nodejs.org/en" target="_blank">aqui</a>

```bash
# Instalação de pacotes
$ npm install

# Execução local
$ npm run dev
```

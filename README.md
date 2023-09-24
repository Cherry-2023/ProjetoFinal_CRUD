# Projeto Final CRUD da Turma 31 da TOTI - Programador Full Stack

# Um CRUD Básico.

Um aplicativo CRUD simple com React.js Hooks (+Axios) consumindo um servidor de API Node.js simples (Express + Sequelize) conectado a Base de dados Sqlite.

## Captura da Tela
![alt text](https://github.com/Cherry-2023/ProjetoFinal_CRUD/blob/master/Projeto_CRUD.png)
### DEPLOY
Para dar uma olhada no Projeto Final CRUD: 
https://projeto-final-crud-5qeb.vercel.app/

## frontend

| Dependencias | links |
| ------ | ----- |
| axios | [link](https://github.com/axios/axios#readme) |
| querystring | [link](https://github.com/sindresorhus/query-string#readme) |
| react | [link](https://reactjs.org/) |
| react-dom | [link](https://reactjs.org/docs/react-dom.html) |
| react-scripts | [link](https://github.com/facebook/create-react-app#readme) |

CSS Style - (html tags on index.html): [Materialize](https://materializecss.com/)

<br>

## backend

| Dependencias | links |
| ------ | ----- |
| cors | [link](https://github.com/expressjs/cors#readme) |
| express | [link](https://expressjs.com/) |
| sequelize | [link](https://sequelize.org/) |
| sqlite3 | [link](https://github.com/mapbox/node-sqlite3) |

| dev-dependencies | links |
| ------ | ----- |
| nodemon | [link](https://nodemon.io/) |
| sequelize-cli | [link](https://github.com/sequelize/cli#readme) |

<br>

Base de Dados está em: database/database.sqlite

O database.sqlite Já tem algumos dados.

### Api routes:

| verb | route |
| ------ | ------ |
| get | /api |
| post | /api |
| put | /api/:id |
| delete | /api/:id |

### Tutorial de referências:

[Build a CRUD App in React with Hooks - Tania Rascia](https://www.taniarascia.com/crud-app-in-react-with-hooks/) - eng.

[Configurando o ORM Sequelize no NodeJS com ExpressJS - Rocketseat](https://blog.rocketseat.com.br/nodejs-express-sequelize/) - pt-br.

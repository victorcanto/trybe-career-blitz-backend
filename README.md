# Projeto Backend da Blitz de  Carreira

## Descrição
Este projeto trata-se de uma aplicação backend utilizando a arquitetura MSC. Neste projeto é possível fazer gerenciar tarefas entre

## Requisitos funcionais

- Visualizar a lista de tarefas;

- Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;

- Inserir uma nova tarefa na lista;

- Remover uma tarefa da lista;

- Atualizar uma tarefa da lista;

- A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

## Tecnologias usadas
- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)


## Clonando repositório
> No seu terminal, executar o comando:
```bash
git clone git@github.com:victorcanto/trybe-career-blitz-backend.git
```
ou
```bash
git clone https://github.com/victorcanto/trybe-career-blitz-backend.git
```

## Instalando Dependências

> Na pasta raiz do projeto, executar o comando:
```bash
npm install
```
## Iniciando servidor MongoDB

> Iniciando servidor MySQL no Ubuntu
  `sudo systemctl start mongodb.service`

> Iniciando servidor MongoDB no MacOs
 `brew services start mongodb-community@5.0`

> Iniciando servidor MongoDB no Windows
 `C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath="c:\data\db`

 ## Variáveis de ambiente

 > Na pasta raiz do projeto, há um arquivo chamado .envTemplate, basta renomeá-lo para .env e preencher as informações conforme necessário:
   ```bash
   PORT=
   MONGO_DB_URL=
   DB_NAME=BlitzTasks
  ```

 ## Executando aplicação

 > Na pasta raiz do projeto, para iniciar servidor, executar o comando:
  ```bash
    npm start
  ```

> Na pasta raiz do projeto, para iniciar servidor com o nodemon, executar o comando:
  ```bash
    npm run debug
  ```
 ## Utilizando aplicação

  Usar o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download) para realizar as requisições.

## Executando Testes

> No seu terminal, execute o comando:
  ```
    npm test
  ```

Autor: [Victor Canto](https://www.linkedin.com/in/vscanto/)

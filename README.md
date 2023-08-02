
# Serveless API Node.Js

Api Node.js Serveless com infraestrutura na AWS, em que com lambda capaz de Registrar, Listar, Atualizar e Remover (CRUD), dados sobre funcionários de uma empresa no MongoDB.


Na Parte de "Documentação da API" você poderá testar as funcionalidades que ja estão funcionais dentro da AWS lambda


- GET - /users
- GET - /user/{userId}
- POST - /users
- PUT /user/{userId}
- DELETE /user/{userId}
    

## Autores

- [@fernandomeddev](https://www.github.com/fernandomeddev)


## Variáveis de Ambiente

Para rodar esse projeto localmente, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env 

`DATABASE_URL` OBS: na url não esqueça de incluir no final da url um nome para o seu banco de dados,d e acordo com a documentação do prisma  ex: "mongoUrl.../my-datase-name" 

com a url do seu cluster no mongo; 




## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/mvdornellas/serverless-challenge.git
```

Entre no diretório do projeto

```bash
  cd serverless-api
```

Instale as dependências

```bash
  npm install
```
configure o Prisma

```bash
 npx prisma generate
```

Inicie o servidor

```bash
  npm run dev
```


## Deploy

Para fazer o deploy desse projeto, configure a chave de acesso da AWS no projeto, usando as linhas de comando do serverless-CLI

```bash
serverless config credentials --provider aws --key YOUR_AWS_ACCESS_KEY --secret YOUR_AWS_SECRET_KEY
  npm run deploy
```
e então

```bash
  npm run deploy
```


## Documentação da API

#### Retorna todos os Funcionários

```http
  GET /https://d9tcg167t9.execute-api.us-east-1.amazonaws.com/users
```

#### Cria um Funcionário

```http
  POST /https://d9tcg167t9.execute-api.us-east-1.amazonaws.com/users
```
| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**.
| `position`      | `string` | **Obrigatório**. 
| `age`      | `string` | **Obrigatório**.

#### Atualiza um Funcionário

```http
  PUT /https://d9tcg167t9.execute-api.us-east-1.amazonaws.com/user/{userId}
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Opcional**.
| `position`      | `string` | **Opicinal**. 
| `age`      | `string` | **Opcional**

#### Mostra um Funcionário

```http
  GET /https://d9tcg167t9.execute-api.us-east-1.amazonaws.com/user/{userId}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do Funcionário que você quer Visualizar

#### Remove um Funcionário

```http
  DELETE /https://d9tcg167t9.execute-api.us-east-1.amazonaws.com/user/{userId}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do Funcionário que você quer Remover


## Instalação Local

Após baixar ou Clonar o Projeto.
No diretório do Projeto execute.

Obs: Será necessária a instalação do node.js16.20x

```bash
  npm i or 
  npm install
```


## Material complementar

[Serverless framework](https://www.serverless.com/)

[Prisma](https://www.prisma.io/docs)

[Mongo](https://www.mongodb.com/pt-br)


## Melhorias

Melhorar os Testes Unitários e implementar testes de Integração;


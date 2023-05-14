<h1>Simulador de preço de veículos</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=angular&message=framework&color=blue&style=for-the-badge&logo=ANGULAR"/>
  <img src="http://img.shields.io/static/v1?label=TypeScript&message=Bootstrap&color=red&style=for-the-badge&logo=typescript"/>
   <img src="http://img.shields.io/static/v1?label=Bootstrap&message=Bootstrap&color=red&style=for-the-badge&logo=bootstrap"/>
  <img src="https://img.shields.io/static/v1?label=Netilify&message=deploy&color=blue&style=for-the-badge&logo=netlify"/>
 <img src="https://img.shields.io/static/v1?label=Railway&message=deploy&color=blue&style=for-the-badge&logo=railway"/>
   <img src="https://img.shields.io/static/v1?label=Postgresql&message=deploy&color=blue&style=for-the-badge&logo=postgresql"/>
  
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

> Status do Projeto: :heavy_check_mark:(concluido)

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#layout-ou-deploy-da-aplicação)

:small_blue_diamond: [Detalhes da aplicação](#detalhes-da-aplicação)

:small_blue_diamond: [Linguagens e dependencias](#linguagens-e-dependencias)


## Descrição do projeto 

<p align="justify">
O projeto proposto pela empresa Grupo WL, é uma lista de café da manha. O projeto consistem em cria um lista de café da manha de acordo com a data informada.
  
</p>

## 📋 Soluções para o projeto

:heavy_check_mark: Criar API com Spring Boot.

:heavy_check_mark: Conectar API ao banco de dados postgresql.

:heavy_check_mark: Usar query nativas para manibupulação nas tabelas.

:heavy_check_mark: Crir um formulario para cadastros de usuarios.

:heavy_check_mark: Crir um formulario para cadastros de café da manha.

:heavy_check_mark: Crir um formulario para autenticação de usuarios.


## Funcionalidades

:heavy_check_mark: Pagina inicial com formulario de autenticação de usuarios e cadastros de novos usuarios  

:heavy_check_mark: Campos com validação com mensagens objetivas.

:heavy_check_mark: Manipulação com rotas usando o guard do Angular. 

:heavy_check_mark: JWT para geração de token, criptografar senhas e gerar permissoes em rotas.

:heavy_check_mark: Modal para adicionar novos café da manha

:heavy_check_mark: Não poderá repetir CPF.

:heavy_check_mark: Não poderá repetir Café da manha.

:heavy_check_mark: A data de realização do café deverá ser maior que a data atual.

:heavy_check_mark: A data de realização do café deverá ser maior que a data atual.

:heavy_check_mark: Consuta em API que esta hospedada no railway - https://cafe-da-manha-back-end.up.railway.app.

:heavy_check_mark: API-GET lista todos os usuarios https://cafe-da-manha-back-end.up.railway.app/api/listUsers.

:heavy_check_mark: API-GET lista todos os Coffes https://cafe-da-manha-back-end.up.railway.app/api/coffes/listCoffes.

:heavy_check_mark: API-POST cadastra novos usuarios https://cafe-da-manha-back-end.up.railway.app/api/register.

:heavy_check_mark: API-POST cadastra novos coffes https://cafe-da-manha-back-end.up.railway.app/api/coffes/register.

:heavy_check_mark: API-DEL apaga coffes por usuario https://cafe-da-manha-back-end.up.railway.app/api/coffes/deleteCoffe?idCoffe={idCoffes}&idUsuario={idUser}.

## Layout ou Deploy da Aplicação

> Link do deploy da aplicação frontend. Exemplo com netilify: [Acessar](https://cafedamanhagrupowl.netlify.app) 

> Link do deploy da aplicação backend. Exemplo com railway: [Acessar](https://cafe-da-manha-back-end.up.railway.app) 

![image](https://i.postimg.cc/MHrBN7GY/Design-sem-nome.gif)

## Como rodar a aplicação frontend com Angular

No terminal, clone o projeto: 

```
git clone https://github.com/ffernandescs/desafio-breakfast-grupo-wl
```

No terminal windows digite

```
cd {nome-da-pasta-do-projeto}
```

Em seguida digite

```
npm install
```

Em seguida digite o comando para rodar a aplicão

```
ng server
```

## Detalhes da aplicação

O projeto cadé da manha tema a finalide de criar uma lista de café da manha dentro de uma organização.
Exemplos: Quero ver qual cafe da manha existente.

Com esta aplicação voçê conseguer ver todos os café da manha disponivel, ver apenas o café da manha do ususario que esta logado e apagar o café da manha apenas por usuario.

A base do projeto sera disponibilizada para uso publico, criei algumas funcionalidades afim de deixar o projeto mais padronizado e dentro do que o mercado exige.

  - Foram criado validação de campos, onde so é possivel consultar as informações caso os valores sejam todos preenchidos.

  - Foi Implememtado uma maskara no campo input para CPF, para que seja inserido na tela o formato de CPF com 11 digitos.

  - Foi implementado uma validação de textos que quando não preenchidos informa uma menssagem (*Campo obrigatorio) e muda a cor.

  - Foi implementado uma tela de cadastro de novos café da manha.

  - Foi implementado o loading, para carregamento dos resultados.


## Como rodar a aplicação Backend com Angular

Link do repositorio backend - Spring Boo:

```
https://github.com/ffernandescs/cafe-da-manha-back-end
```

No terminal, clone o projeto: 

```
git clone https://github.com/ffernandescs/desafio-breakfast-grupo-wl
```

Abra o projeto com a ID Spring Boot Tools

```
https://spring.io/
```

Procure o arquivo GrupowlApplication e execulte pela IDE

```
\src\main\java\com\brackfast\grupowl\GrupowlApplication
```

Instale o Banco de dados PostgreSQL

```
https://www.postgresql.org/
```

Crie um database com o nome

```
CoffeGPWL
```

Mude as configurações do Application.properties no backend

```
spring.datasource.url= jdbc:postgresql://localhost:5432/CoffeGPWL
spring.datasource.username=postgres
spring.datasource.password=admin
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

## Linguagens e dependencias

- [Angular](https://angular.io/start)
- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Jquery](https://jquery.com/)
- [Fontawesome](https://github.com/bootsoon/font-awesome)
- [SpringBoot](https://github.com/nbfontana/spring-boot)

O ambiente ja esta todo configurado para receber os dados da api, inclusive ja foi testado.


Copyright :copyright: 2023 - Café da mnha Grupo WL.

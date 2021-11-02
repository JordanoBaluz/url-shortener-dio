# url-shortener-dio
Encurtador de url criado no projeto desenvolvido pela DIO, para trabalhar o uso de API para conexões com o MongoDB

### comando utilizado para instalar o typescript
`npm i typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser`

### comando para instalar o shortid
`npm i shortid`\
Repositório para criar urls encurtadas, porém atualmente está depreciado

### comando para instalar o mongoose
`npm i mongoose @types/mongoose`

Ao utilizar o 
~~~javascript 
mongoose.connect()
~~~ 
a forma repassada na aula está depreciada,
~~~javascript
{ useNewUrlParser: true, useUnifiedTopology: true }
~~~
Não são mais necessários no **mongoose 6 ou superior**, pois esses **parâmetros já vêm como true**

### comando para instalar o typegoose
`npm i @hasezoey/typegoose`\
o pacote está desatualizado, para utilizar o pacote usar o comando pacote abaixo:\
`npm i @typegoose/typegoose`

com o novo pacote não é necessário utilizar o  
~~~javascript
export class URL extends Typegoose
~~~
utilizar somente
~~~javascript
export class URL
~~~
O Typegoose permite criar uma estrutura de classe  usando decorators do typescript de forma mais simples

Ao realizar a conexão com o banco de dados do MongoDB é necessário apontar o IP local em, *Add a connection IP address*, se utilizar somente o IP coletado direto da máquina,
como por exemplo dentro do CMD -> IPCONFIG,
o IP não irá funcionar para gerar a conexão entre a aplicação e o MongoDB.
Necessário utilizar o seu endereço público, que pode ser obtido no site abaixo:\
<https://www.whatismyip.com/>


Referências:\
https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
https://www.mongodb.com/community/forums/t/cant-connect-to-mongodb-could-not-connect-to-any-servers-in-your-mongodb-atlas-cluster/9624/3
https://www.npmjs.com/package/@typegoose/typegoose

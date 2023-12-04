# FastFoodApi

Bem-vindo à Fast Food API, uma solução robusta para gerenciar e aprimorar os processos em estabelecimentos de fast food. 
Esta API fornece uma plataforma eficiente para gerenciar pedidos, itens do menu, clientes e muito mais, oferecendo uma 
experiência integrada para os proprietários de restaurantes e suas equipes.

# Deploy 

 https://fastfoodapi-w11n.onrender.com


# Tecnologias

- node.js // engine
- express // framework
- joi // biblioteca de validação de dados
- jest // testes  automatizados

# Documentation
https://fastfoodapi-w11n.onrender.com/api-docs

# How to  run 

- Tenha  certeza de que tem  instalado  em  sua maquina node.js,postgress com  um  user configurado e  npm
- Clone este  repositório
- rode em  seu  terminal  na pasta  root do  projeto
  ``````powershell
  npm run  install
  ``````

  - crie um  arquivo  chamado .env.development e coloque uma vriavel como  abaixo:
  ``````powershell
  DATABASE_URL = urlstring de conexão com  seu banco
  ``````
  ps: não  esqueça  de substituir o  valor para  sua url  string, no  arquivo .en.example contem  detalhes  sobre a estrutura da variavel
- Quando  todas as  dependencias estiverem ok rode:
  ``````powershell
  npm run  dev
  ``````
- Pronto,  se tudo  deu certo  o  serviço estara  disponivel  na porta 5000
  ps  se precisar  de outra porta  expecivique uma  vairavel no arquivo .env como  abaixo
  ``````powershell
  PORT = numero da porta desejada
  ``````










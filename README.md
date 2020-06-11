# ApiDoc Example

Este repositório contém uma api de exemplo para gerar documentação de api utilizando a ferramenta ApiDoc.js (http://apidocjs.com).

## Instalando ApiDoc

``` bash
npm install apidoc -g
```

## Clonando e rodando este projeto

``` bash
git clone git@github.com:caio-ribeiro-pereira/apidoc-example.git
cd apidoc-example
npm install
node app.js
```

## Gerando documentação
O parâmetro -f filtra quais arquivos serão documentos, <b>app.js</b> será o arquivo de utilização atual da aplicação enquanto <b>_apidoc.js</b> guarda o histórico de versionamento. 
O parâmetro -o indica qual pasta será gerado a documentação.
``` bash
apidoc -f app.js -f _apidoc.js -o public/apidoc
```

## Visualizando documentação

Com api rodando, abra em seu browser o endereço `http://localhost:3000/apidoc`.

## Autor

Caio Ribeiro Pereira <caio.ribeiro.pereira@gmail.com>  
License MIT <http://caio-ribeiro-pereira.mit-license.org/>
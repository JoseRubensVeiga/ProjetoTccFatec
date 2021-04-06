# go-barber-backend

## PARA CRIAR O CONTAINER NA MAQUINA EXECUTE O COMANDO

`docker run --name dcode -e POSTGRES_PASSWORD=dcode -d -p 5432:5432 postgres`

## CRIE UM NOVO BANCO DE DADOS COM O NOME

`dcode`

## EXECUTE NO TERMINAL O COMANDO

`yarn typeorm migration:run`

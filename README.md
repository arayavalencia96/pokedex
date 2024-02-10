<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

# Ejecutar en desarrollo
1. Clonar el repositorio
2. Ejecutar
```
yarn install
```

3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la BBDD
```
docker-compose up -d
```

5. Clonar el file __.env.template__ y renombrar la copia a: __.env__

6. Llenar las variables de entorno dentro del file __.env__

7. Levantar el proyecto
```
yarn start:dev
```

8. Reconstruir la base de datos con la semilla.
```
http://localhost:3000/api/v2/seed
```

## Stack utilizado
* NestJS
* MongoDB

<p align="center">
  <a href="https://nodejs.org/en" target="blank">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" height="200" alt="App Logo" /></a>
</p>

# WebServer + RestServer

Recuerden que deben de ejecutar `npm install` para reconstruir los módulos de Node.

- Link del repositorio original [github](https://github.com/Klerith/RN-Backend-MERN-CAFE)

## DEV

1. Clonar repositorio con `git clone`
2. Instalar los paquetes de node js con `npm install`
3. Crear un archivo `.env` basado en el `.example.env`
4. Ejecutar el proyecto con `npm run start` o `npm run dev`
   - Opcional: ejecutar los comandos del `package.json` o usando `F5`
5. Revisar coleccion en postman e [importar archivo](./assets/Cafe-Dev.postman_collection.json)

#### Docker: pasos para iniciar la app mediante docker

1. Configurar el valor de `MONGODB_CNN` en `.env`, usando como host `CafeDatabase`
- Ejemplo => `mongodb://CafeDatabase:27017/production_database`

2. Levantar los contenedores con `docker compose --profile production up -d`

3. Para detener los contenedores `docker compose down --remove-orphans --volumes`

## Requisitos

1. Tener instalado node js
2. Tener instalado Postman

## Scripts

Algunos scripts que pueden ser utilizados

| Comando               | Descripcion              |
| --------------------- | ------------------------ |
| `npm install`         | Instala las dependencias |
| `rm -rf node_modules` | Limpia las dependencias  |

#### Otros Scripts

Otros scripts que pueden usar para fines de desarrollo, (acciones de paquetes)

| Comando | Descripcion                                                                |
| ------- | -------------------------------------------------------------------------- |
| `....`  | Insertar scripts que usen los paquetes de terceros si es necesario hacerlo |

## Documentacion

Links de librerias utilizadas

- [NodeJS](https://nodejs.org/en)
- [Postman](https://www.postman.com/)

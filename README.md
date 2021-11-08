# docker-compose-orchestrator

En este aplicativo se encuentran una serie de scripts escritos en bash que permiten crear lo necesario para un entorno de programación

Los entornos que maneja actualmente son:

## Laravel

Con bases de datos:

- MySQL
- Postgres
- MongoDB

## Nodejs

Con bases de datos:

- MySQL
- Postgres
- MongoDB

En los entornos se incluyen para administrar bases de datos **adminer** y para testing de emails **mailhog**

# Instalacion

Copiar la carpeda docker-orchestrator al HOME de tu equipo y agregar en .bashrc la siguiente linea:

```bash
PATH="$HOME/docker-orchestrator:$PATH"
export PATH
```

Con que abras una nueva terminal tendras disponibles los comandos:

- docker-orchestrator.setup-project
- docker-orchestrator.manager
- docker-orchestrator.composer


# docker-orchestrator.setup-project

Con lanzar este comando tendras un menu que te hara una serie de preguntas para poder armar el entorno

# docker-orchestrator.manager

Este comando lo utilizaremos en el root del proyecto para manejar el lanzamiento del entorno de docker

Posee 6 comandos:

- up
- down
- ps
- logs
- clean
- help

> Con el comando help se puede ver todo lo que hacen los demas comandos junto con ejemplos

# docker-orchestrator.composer

Es utilizado por docker-orchestrator.setup-project si le informamos que deseamos crear un proyecto laravel, este script utiliza una imagen de composer para crear un proyecto laravel.

# Datos de contacto

E-mail: mmori@alopexmm.ar

# Licencia

MIT

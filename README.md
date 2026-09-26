# NestJS Microservices Platform

![NestJS](https://img.shields.io/badge/NestJS-Microservices-E0234E?logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Backend-3178C6?logo=typescript&logoColor=white)
![NATS](https://img.shields.io/badge/NATS-Messaging-27AAE1)
![Docker](https://img.shields.io/badge/Docker-Orchestration-2496ED?logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-111827)

Arquitectura backend basada en **microservicios con NestJS, TypeScript, NATS y Docker**. El proyecto separa responsabilidades entre autenticación/usuarios, productos y un API Gateway centralizado.

## Arquitectura

```text
nestjs_project_completo/
├── api-gateway/       # Punto de entrada HTTP
├── users-service/     # Registro, autenticación y usuarios
├── products-service/  # Gestión de productos
└── docker-compose.yml # Infraestructura local
```

## Características

- API Gateway como capa de entrada.
- Comunicación asíncrona entre servicios mediante NATS.
- Autenticación JWT.
- Autorización basada en roles.
- Separación de dominios por microservicio.
- Contenedores e infraestructura local con Docker Compose.
- Arquitectura preparada para escalar servicios de manera independiente.

## Endpoints principales

```http
POST /auth/register
POST /auth/login
POST /products
DELETE /products/:id
```

Los endpoints protegidos requieren token JWT y algunos flujos contemplan autorización por rol.

## Ejecución

```bash
git clone https://github.com/Luisf2020/nest_proyect_completo.git
cd nest_proyect_completo/nestjs_project_completo
docker-compose up -d
```

Después instala y ejecuta cada servicio:

```bash
cd api-gateway && npm install && npm run start:dev
cd ../users-service && npm install && npm run start:dev
cd ../products-service && npm install && npm run start:dev
```

## Competencias demostradas

- Diseño de microservicios.
- NestJS y TypeScript.
- Mensajería con NATS.
- API Gateway.
- Autenticación JWT.
- Control de acceso por roles.
- Docker Compose.
- Separación de responsabilidades y dominios.

## Autor

**Luis Felipe Zuniga León**  
Ingeniería de Sistemas · Full Stack · Backend · Cloud

---

Proyecto de portafolio orientado a arquitecturas backend distribuidas con NestJS.
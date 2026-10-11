# NestJS Microservices Platform

![stack: NestJS](https://img.shields.io/badge/stack--NestJS-0d9488?style=flat-square) ![stack: TypeScript](https://img.shields.io/badge/stack--TypeScript-0d9488?style=flat-square) ![stack: NATS](https://img.shields.io/badge/stack--NATS-0d9488?style=flat-square) ![stack: Docker](https://img.shields.io/badge/stack--Docker-0d9488?style=flat-square) ![IA: asistido](https://img.shields.io/badge/IA--asistido-6366f1?style=flat-square)

Arquitectura de microservicios con NestJS y TypeScript: autenticacion/usuarios, productos y un API Gateway, comunicados por NATS y orquestados con Docker.

**Tipo:** Backend de microservicios · **Complejidad:** Avanzado

## Problema que resuelve

Evitar un monolito unico para un dominio que ya se separa de forma natural (usuarios y productos), manteniendo un punto de entrada comun.

## Solucion implementada

Tres servicios NestJS independientes con su propio modulo, comunicados por mensajeria NATS y expuestos por un API Gateway; el entorno local se levanta con docker-compose.

### Funcionalidades principales

- API Gateway como punto de entrada HTTP
- Servicio de usuarios con autenticacion
- Servicio de productos con DTOs y entidades
- Mensajeria entre servicios con NATS
- Infraestructura local con docker-compose

## Stack

- NestJS
- TypeScript
- NATS
- Docker
- JWT

## Estructura

```
nestjs_project_completo/
  api-gateway/       # entrada HTTP
  users-service/     # registro y autenticacion
  products-service/  # gestion de productos
  docker-compose.yml
```

## Puesta en marcha

```bash
cd nestjs_project_completo
docker compose up
```

## Complejidad del proyecto

**Nivel: Avanzado** — Multiples servicios desplegables, comunicacion asincrona entre ellos, autenticacion y orquestacion con contenedores.

El nivel describe la complejidad tecnica del proyecto, no el grado de dominio de quien lo escribio.

## Despliegue

Plataforma de servicios con mensajeria y contenedores; no es una pagina web desplegable.  
El codigo fuente esta disponible en este repositorio.

## Transparencia sobre IA

Este proyecto se desarrollo con asistencia de inteligencia artificial (generacion de codigo,
revision y documentacion). El codigo fue leido, ejecutado y probado manualmente. No se declaran
clientes, metricas ni resultados que no puedan verificarse.

## Autor

**Luis Felipe Zuniga Leon** — Desarrollador de software asistido por IA

- GitHub: <https://github.com/Luisf2020>

---

_Proyecto de portafolio. El desarrollo se apoyo en herramientas de IA bajo revision tecnica humana._

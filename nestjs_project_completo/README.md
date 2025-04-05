# NestJS Microservices with NATS

## Descripción
Sistema de gestión de usuarios y productos con microservicios en NestJS, autenticación JWT, roles y comunicación NATS.

## Estructura del Proyecto
- `users-service`: Maneja registro y autenticación de usuarios.
- `products-service`: Maneja productos vinculados a usuarios.
- `api-gateway`: Punto de entrada HTTP, comunica los servicios vía NATS.

## Instrucciones

1. Clona el repositorio
```bash
git clone <repo_url>
cd nestjs-microservices-nats
```

2. Levanta base de datos y NATS
```bash
docker-compose up -d
```

3. Instala dependencias y ejecuta servicios
```bash
cd api-gateway && npm install && npm run start:dev
cd ../users-service && npm install && npm run start:dev
cd ../products-service && npm install && npm run start:dev
```

4. Prueba los endpoints desde Postman o cURL.

## Endpoints

- POST `/auth/register`
- POST `/auth/login`
- POST `/products` (requiere token)
- DELETE `/products/:id` (requiere token con rol admin)

---
¡Listo para producción! 🚀

# Proyecto Final - API de Productos

## Scripts para testear la API

Este proyecto incluye varios scripts npm para probar la API desplegada sin tener que escribir requests manuales en PowerShell o Postman.

Los scripts están definidos en [`package.json`](package.json) y consumen la API usando los archivos dentro de [`scripts`](scripts).

## Requisitos previos

Antes de usar los scripts, debes tener configuradas estas variables de entorno en tu archivo `.env` local:

```env
API_BASE_URL=https://proyectojs-yzzk.vercel.app
AUTH_USER_EMAIL=admin@techlab.com
AUTH_USER_PASSWORD=123456
```

### Descripción de variables

- `API_BASE_URL`: URL base de la API. Si no se define, se usa por defecto [`https://proyectojs-yzzk.vercel.app`](scripts/api-client.js:5)
- `AUTH_USER_EMAIL`: usuario para hacer login automático en los scripts, leído en [`scripts/api-client.js`](scripts/api-client.js:6)
- `AUTH_USER_PASSWORD`: contraseña para hacer login automático, leída en [`scripts/api-client.js`](scripts/api-client.js:7)

## Scripts disponibles

### 1. Login

Ejecuta el login y devuelve el token JWT.

Comando:

```bash
npm run login
```

Implementación: [`scripts/login.js`](scripts/login.js)

---

### 2. Listar todos los productos

Obtiene todos los productos desde [`GET /api/products`](src/routes/products.routes.js:15).

Comando:

```bash
npm run listarTodos
```

Implementación: [`scripts/listarTodos.js`](scripts/listarTodos.js)

---

### 3. Obtener un producto por ID

Obtiene un producto específico desde [`GET /api/products/:id`](src/routes/products.routes.js:16).

Comando:

```bash
npm run obtenerPorId -- ID_DEL_PRODUCTO
```

Ejemplo:

```bash
npm run obtenerPorId -- XnLbBaKUSEsqyeuhkA5Q
```

Implementación: [`scripts/obtenerPorId.js`](scripts/obtenerPorId.js)

---

### 4. Crear un producto

Crea un producto usando [`POST /api/products/create`](src/routes/products.routes.js:17).

Comando:

```bash
npm run crearProducto -- "Nombre" PRECIO "Descripcion" STOCK
```

Ejemplo:

```bash
npm run crearProducto -- "Mouse Gamer" 2500 "Mouse inalambrico" 15
```

Implementación: [`scripts/crearProducto.js`](scripts/crearProducto.js)

---

### 5. Actualizar un producto

Actualiza precio y stock usando [`PUT /api/products/:id`](src/routes/products.routes.js:18).

Comando:

```bash
npm run actualizarProducto -- ID_DEL_PRODUCTO NUEVO_PRECIO NUEVO_STOCK
```

Ejemplo:

```bash
npm run actualizarProducto -- XnLbBaKUSEsqyeuhkA5Q 3000 20
```

Implementación: [`scripts/actualizarProducto.js`](scripts/actualizarProducto.js)

---

### 6. Eliminar un producto

Elimina un producto usando [`DELETE /api/products/:id`](src/routes/products.routes.js:19).

Comando:

```bash
npm run eliminarProducto -- ID_DEL_PRODUCTO
```

Ejemplo:

```bash
npm run eliminarProducto -- XnLbBaKUSEsqyeuhkA5Q
```

Implementación: [`scripts/eliminarProducto.js`](scripts/eliminarProducto.js)

## Flujo recomendado de prueba

1. Ejecutar [`npm run login`](package.json:9)
2. Ejecutar [`npm run listarTodos`](package.json:10)
3. Crear un producto con [`npm run crearProducto -- "Nombre" PRECIO "Descripcion" STOCK`](package.json:12)
4. Copiar el `id` devuelto
5. Consultarlo con [`npm run obtenerPorId -- ID`](package.json:11)
6. Actualizarlo con [`npm run actualizarProducto -- ID NUEVO_PRECIO NUEVO_STOCK`](package.json:13)
7. Eliminarlo con [`npm run eliminarProducto -- ID`](package.json:14)

## Nota

Todos los scripts hacen login automáticamente antes de consumir la API mediante [`getAuthHeaders()`](scripts/api-client.js:26), por lo que no necesitas copiar el token manualmente en cada prueba.

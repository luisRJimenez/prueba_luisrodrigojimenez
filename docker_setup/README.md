# Setup
# Proyecto `prueba_luisrodrigojimenez`

Este proyecto integra un stack completo con:

- **Laravel API** (backend PHP)
- **Angular** (frontend)
- **MySQL** (base de datos)
- **phpMyAdmin** (administrador de base de datos)
- **Nginx** (proxy reverso)

Todo orquestado mediante **Docker Compose**.

---

## 🟢 Requisitos

- Docker
- Docker Compose
- Git
- (Opcional) WSL2 en Windows

---

## 📁 Estructura

prueba_luisrodrigojimenez/
Docker_setup
├── docker_configs/
│ ├── laravel_api/
│ ├── angular_website/
│ ├── nginx/
│ └── phpmyadmin/
├── projects/
│ ├── laravel_api/
│ └── angular_website/
├── docker-compose.yml
└── README.md

---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/luisRJimenez/prueba_luisrodrigojimenez.git
cd prueba_luisrodrigojimenez
cd docker_setup
cd projects
```

---

### 2️⃣ Configurar Laravel

```bash
cd projects/laravel_api
cp .env.example .env
```

Edita `.env` con:

```
DB_CONNECTION=mysql
DB_HOST=mysql_database
DB_PORT=3306
DB_DATABASE=prueba
DB_USERNAME=root
DB_PASSWORD=root
```

---

### 3️⃣ Levantar los contenedores

```bash
docker compose up -d --build
```

Esto iniciará los servicios:

- Laravel API en `http://localhost:8000`  
- Angular App en `http://localhost:4200`  
- phpMyAdmin en `http://localhost:8080`  
- (Opcional) Nginx en `http://localhost`  

---

### 4️⃣ Configurar Laravel dentro del contenedor

```bash
docker exec -it laravel_api bash
composer install
php artisan key:generate
php artisan migrate
exit
```

---

### 5️⃣ Instalar Angular (si no se hizo en el build)

```bash
docker exec -it angular_website ash
npm install
exit
```

---

## 🧰 Accesos rápidos

- **phpMyAdmin:** http://localhost:8080  
  Usuario: `root`  
  Contraseña: `root`  
  Host: `mysql_database`

---


## 🔧 Comandos útiles

```bash
# Ver contenedores activos
docker ps

# Detener servicios
docker compose down

# Ver logs en tiempo real
docker compose logs -f

# Entrar a un contenedor
docker exec -it <nombre_contenedor> bash
```

---

## 🧑‍💻 Autor

**Luis R Jimenez**  
Repositorio: [`prueba_luisrodrigojimenez`](https://bitbucket.org/luisrjimenez76/prueba_luisrodrigojimenez)

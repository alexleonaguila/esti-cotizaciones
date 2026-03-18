# 📦 Instrucciones para Subir ESTI Cotizaciones a GitHub

## ✅ Paso 1: El repositorio local está listo (YA HECHO ✓)

Se ha inicializado un repositorio Git local con:
- ✓ Rama principal: `main`
- ✓ Primer commit: 26 archivos subidos
- ✓ Configuración: user.name y user.email

## 🌐 Paso 2: Crear el repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Inicia sesión con tu cuenta
3. Haz clic en **"+"** → **New repository**
4. Rellena los datos:
   - **Repository name**: `esti-cotizaciones`
   - **Description**: Sistema profesional de cotizaciones con Vue 3, Tailwind CSS y TypeScript
   - **Visibility**: Public (para que sea accesible) o Private
   - **NO marques** "Initialize with README" (ya tenemos uno)
   - **NO marques** "Add .gitignore" (ya lo tenemos)
5. Haz clic en **"Create repository"**

## 🚀 Paso 3: Conectar y subir el código

Después de crear el repo en GitHub, aparecerá una página con instrucciones. Ejecuta estos comandos en PowerShell:

```powershell
# Navega al proyecto
cd C:\laragon\www\esti-cotizaciones

# Agregar el remote de GitHub
git remote add origin https://github.com/TU_USUARIO/esti-cotizaciones.git

# Subir el código
git push -u origin main
```

**Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub**

## 🔑 Si tienes problemas de autenticación

Si es tu primera vez usando Git con GitHub en Windows, necesitarás:

**Opción A: Token de Acceso Personal (Recomendado)**
1. En GitHub: Configuración → Developer settings → Personal access tokens
2. Genera un nuevo token con permisos `repo`
3. Usa este token como contraseña cuando Git lo pida

**Opción B: SSH (Para usuarios avanzados)**
```powershell
# Generar clave SSH
ssh-keygen -t ed25519 -C "tu_email@example.com"

# Agregar la clave pública en GitHub Settings → SSH Keys
```

## 📋 Estructura del Repositorio

```
esti-cotizaciones/
├── src/
│   ├── components/
│   │   ├── CotizacionViewer.vue    (Cotización E-Commerce)
│   │   └── ShopifyCotizacion.vue   (Cotización Shopify)
│   ├── pages/
│   │   ├── Home.vue
│   │   └── CotizacionPage.vue
│   ├── composables/
│   │   └── useDarkMode.ts
│   ├── router/
│   ├── stores/
│   ├── types/
│   └── utils/
├── .github/
│   └── agents/
│       └── paginaweb.agent.md      (Agent personalizado)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Próximos Pasos

Una vez en GitHub, puedes:

1. **Agregar colaboradores**: Settings → Collaborators
2. **Configurar GitHub Pages**: Para publicar demo en vivo
3. **Crear branches** para nuevas features:
   ```powershell
   git checkout -b feature/nueva-cotizacion
   ```
4. **Usar Git Workflow** profesional (feature → develop → main)

## 💡 Comandos Git útiles

```powershell
# Ver el estado
git status

# Ver historial
git log --oneline

# Crear una rama
git checkout -b feature/nombre

# Hacer commit
git commit -m "Descripción del cambio"

# Subir cambios
git push origin main
```

---

¿Necesitas ayuda con algún paso? 🚀

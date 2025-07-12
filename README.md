# Counter App - React Native 📱

Una aplicación de contador simple y elegante desarrollada con React Native y Expo. Esta app permite incrementar, decrementar y resetear un contador usando botones flotantes (FAB) con animaciones suaves.

## 🚀 Características

- **Contador interactivo**: Valor inicial de 10
- **Botones flotantes (FAB)** con diferentes funcionalidades:
  - **Botón "-1"** (izquierda): Decrementa el contador en 1
  - **Botón "Reset"** (centro): Reinicia el contador a 0
  - **Botón "+1"** (derecha): Incrementa el contador en 1
- **Funcionalidad de pulsación larga**:
  - **Pulsación larga en "-1"**: Decrementa en 10
  - **Pulsación larga en "+1"**: Incrementa en 10
- **Protección contra números negativos**: El contador no puede ser menor que 0
- **Interfaz moderna** con animaciones de presión
- **Tipografía grande y legible** para el contador

## 🛠️ Tecnologías utilizadas

- **React Native** v0.79.4
- **Expo** v53.0.12
- **TypeScript** v5.8.3
- **React** v19.0.0

## 📋 Prerrequisitos

Antes de instalar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

```bash
npm install -g expo-cli
```

## 🔧 Instalación

1. **Clona el repositorio**:
```bash
git clone <URL_DEL_REPOSITORIO>
cd 03-counter-app
```

2. **Instala las dependencias**:
```bash
npm install
```

## 🚀 Uso

### Ejecutar en modo desarrollo

Para iniciar la aplicación en modo desarrollo:

```bash
npm start
```

### Ejecutar en plataformas específicas

- **Android**:
```bash
npm run android
```

- **iOS**:
```bash
npm run ios
```

- **Web**:
```bash
npm run web
```

## 📱 Cómo usar la aplicación

1. **Abrir la app**: Al iniciar, verás un contador con valor inicial de 10
2. **Incrementar**: Toca el botón "+1" para sumar 1 al contador
3. **Decrementar**: Toca el botón "-1" para restar 1 del contador
4. **Reset**: Toca el botón "Reset" para volver el contador a 0
5. **Funciones avanzadas**:
   - Mantén presionado "+1" para sumar 10 de una vez
   - Mantén presionado "-1" para restar 10 de una vez

## 🎨 Componentes

### App.tsx
Componente principal que contiene:
- Estado del contador (`useState`)
- Lógica de incremento/decremento
- Renderizado de la interfaz principal

### FAB.tsx (Floating Action Button)
Componente reutilizable que incluye:
- Propiedades personalizables (`label`, `position`)
- Eventos de `onPress` y `onLongPress`
- Estilos dinámicos según la posición
- Animaciones de presión

## 📁 Estructura del proyecto

```
03-counter-app/
├── App.tsx              # Componente principal
├── index.ts             # Punto de entrada
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración TypeScript
├── app.json            # Configuración de Expo
├── assets/             # Recursos (íconos, imágenes)
│   ├── icon.png
│   ├── splash-icon.png
│   └── ...
└── components/         # Componentes reutilizables
    └── FAB.tsx        # Floating Action Button
```

## 🎯 Scripts disponibles

- `npm start`: Inicia el servidor de desarrollo de Expo
- `npm run android`: Ejecuta la app en Android
- `npm run ios`: Ejecuta la app en iOS  
- `npm run web`: Ejecuta la app en navegador web

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar esta aplicación:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de uso educativo y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado como parte del curso de React Native.

---

¡Gracias por revisar Counter App! 🎉

# 🎄 React Christmas Tree – Luces Aleatorias

Este ejercicio consiste en crear un **árbol de Navidad interactivo en React**, donde las luces se encienden y apagan de forma automática y aleatoria.

El objetivo principal es practicar conceptos fundamentales de React **sin añadir complejidad innecesaria**, centrándonos en estado, efectos y renderizado dinámico.

---

## 🎯 Objetivos de Aprendizaje

Al completar este ejercicio, serás capaz de:

* Crear componentes funcionales en React.
* Utilizar `useState` para manejar estado.
* Utilizar `useEffect` junto con `setInterval` y `clearInterval`.
* Renderizar listas de elementos dinámicamente.
* Generar valores aleatorios con `Math.random`.
* Aplicar clases CSS de forma condicional.
* Aprovechar clases de **Bootstrap** para estilos y colores.
* Separar correctamente lógica (JavaScript) y presentación (CSS).

---

## 🧩 Descripción del Ejercicio

Se proporciona un **template base** que ya incluye:

* La estructura visual del árbol (estrella, árbol y tronco).
* Un CSS mínimo para posicionar las luces.
* Un contenedor preparado para las bombillas.

👉 **No se incluye ninguna lógica de React**.

Tu tarea será implementar el comportamiento de las luces.

---

## ✅ Requisitos Funcionales

Debes implementar lo siguiente:

1. Crear un estado para gestionar las luces.
2. Decidir cuántas luces hay en total.
3. Encender **N luces a la vez**.
4. Las luces encendidas deben ser **aleatorias**.
5. Cambiar las luces cada cierto tiempo usando `setInterval`.
6. Limpiar correctamente el intervalo cuando el componente se desmonta.
7. Usar clases de Bootstrap para los colores de las luces:

   * `bg-success`
   * `bg-danger`
   * `bg-primary`
   * `bg-warning`
   * `bg-info`
8. Aplicar la clase `is-on` solo a las luces encendidas para activar el efecto glow.

---

## 💡 Pistas

* Usa `useState` para guardar qué luces están encendidas.
* Usa `useEffect` para manejar el temporizador.
* Puedes usar un array normal o un bucle `for` para crear las luces.
* Revisa bien la limpieza del intervalo (`clearInterval`).

---

## ▶️ ¿Cómo comenzar a codificar?

* Instala los paquetes con `$ npm install`.
* Ejecuta el servidor de webpack con `$ npm run start`.

---

## 🚀 Extras (Opcional)

Si terminas el ejercicio básico, puedes intentar:

* Añadir un botón **Start / Stop**.
* Permitir cambiar el número de luces encendidas.
* Variar la velocidad del intervalo.
* Cambiar los colores de forma aleatoria.
* Añadir animaciones CSS suaves.

---

## 👥 Contribuidores

Esta plantilla fue creada como parte del
[Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) de **4Geeks Academy** por
[Alejandro Sánchez](https://twitter.com/alesanchezr), **Carlos Atanes Vences** y otros contribuyentes.

Descubre más sobre nuestro
[Curso de Desarrollo Full Stack](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer)
y
[Bootcamp de Ciencia de Datos](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

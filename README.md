# Gaia hours
MVP de app para cargar horas de Gaia, usado para dar una intro a React Native

## Tools
* React native
* React navigation
* React context
* Redux
* Expo

## Que necesito saber para desarrollar React native si vengo de ReactJS?
* No estás en un browser, por lo tanto no podés hacer uso de las herramientas que te da uno, no tenés CSS, sino un StyleSheet de React native, que mediante una api "CSS-like" te permite definir los estilos de tu app.
* No hay devtools integradas, tenemos el debugger de React native que nos provee Expo en el cual podemos ver algunas cosas, como la consola. También podemos instalar el `React native debugger` que nos va a permitir inspeccionar algunas cosas más (como network, Redux, etc).
* No estás en un browser (devuelta), no hay HTML, no hay divs. Hay componentes que nos provee React native como reemplazo de los que usamos habitualmente, `View` en vez de div, envolvemos los textos sueltos con `Text` y más cosas que vas a aprender mientras te vayas metiendo.
* Estás en un celular. Algunos eventos cambian, onClick es onPress, no necesitamos media queries, todo esta en display flex por defecto y más cosas con las que vas a putear seguramente.

## Qué es Expo?
Expo es un framework y plataforma para desarrollar aplicaciones React universales. Es un conjunto de herramientas y servicios creados en torno a React native y plataformas nativas que nos ayudan a desarrollar, construir, implementar e iterar rápidamente en iOS, Android y aplicaciones web con el mismo código JavaScript / TypeScript.

## Por que Expo?
Simplicidad, mientras que usando la CLI de React native nos permite codear e integrar modulos nativos en Java, Android, Objective-C, Swift. Usar Expo nos permite poder llegar a todas las plataformas (iOS, Android y Web) con solo un source code, probarlo y distribuirlo fácilmente mediante las apps mobile de Expo, herramientas y componentes ya integrados en Expo y más.

## Corriendo el proyecto
Para correr el proyecto simplemente hacemos:
```bash
npm start
```
Si querés ver como crear tu propio proyecto con Expo de 0 podés verlo [acá](https://expo.io/learn)

## Branches
* `step-0` - MVP
* `step-1` - React navigation
* `master` - React navigation + Context
* `bonus` - React navigation + Context + Redux

## TODO
Aparentemente en master y bonus cuando cargamos horas no se ven reflejadas en nuestro dashboard, posiblemente por que react navigation no desmonta las vistas on leave, por lo tanto no se refetchean las horas luego de cargarlas, solucionalo!

## Disclaimer
No soy un dev mobile ni React native, no lo usé en muchas oportunidades pero me encontré con los problemas que se encuentra alguien que viene del mundo web a la hora de usarlo, suficiente como para introducir a alguien en las bases del mismo.

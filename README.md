# Tetsing in React

## Testen von React-Anwendungen mit @testing-library/react

```bash
npm install --save-d vitest jsdom @testing-library/react
```
``` 

`@testing-library/react` ist eine Bibliothek, die zum Testen von React-Anwendungen verwendet wird. Sie bietet eine Reihe nützlicher Funktionen und Methoden zum Testen von React-Komponenten.

## jsdom

`jsdom` ist eine JavaScript-Bibliothek, die eine browserähnliche Umgebung in Node.js bereitstellt und es ermöglicht, DOM-Manipulationen und -Interaktionen für Testzwecke durchzuführen.

## afterEach

`afterEach` wird verwendet, um die Komponente nach jedem Test zu entladen, um sicherzustellen, dass das DOM zwischen den Tests sauber und isoliert ist.

## test

`test` wird verwendet, um einen einzelnen Testfall zu definieren, der eine 
bestimmte Funktionalität der Anwendung überprüft.

## screen

`screen` ist ein Hilfsobjekt in Testing Library, das verwendet wird, um auf DOM-Elemente zuzugreifen und mit ihnen zu interagieren.

## expect

`expect` wird verwendet, um zu überprüfen, ob eine bestimmte Bedingung erfüllt ist und ob das erwartete Verhalten eingetreten ist.

## waitFor

`waitFor` wird verwendet, um auf asynchrone Ereignisse zu warten.

## getAllByRole

`getAllByRole` wird verwendet, um alle DOM-Elemente zu finden, die eine bestimmte Rolle haben.

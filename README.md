# Testing en JavaScript

Este proyecto demuestra la evolución y diferentes enfoques para realizar pruebas en JavaScript, desde las más básicas hasta la implementación de un mini framework de testing.

## Estructura del Proyecto

El proyecto contiene tres archivos principales que muestran diferentes niveles de implementación de pruebas:

### 1. Pruebas Básicas (`01-app.js`)
- Implementación de pruebas básicas utilizando condicionales `if/else`
- Comparación simple de resultados esperados vs obtenidos
- Ejemplo con una función de suma básica

### 2. Implementación Intermedia (`02-app.js`)
- Introducción a un estilo más estructurado de testing
- Implementación básica de assertions con el método `toBe`
- Uso de una función `expected()` que simula frameworks de testing modernos
- Mantiene la misma función de suma como ejemplo

### 3. Mini Framework de Testing (`03-app.js`)
- Implementación de un mini framework de testing más completo
- Características implementadas:
  - Función `expect()` con método `toBe` para assertions
  - Función `test()` para manejar casos de prueba individuales
  - Soporte para pruebas asíncronas con async/await
  - Mensajes de error más descriptivos con emojis
  - Manejo de errores con try/catch
- Incluye ejemplos tanto síncronos como asíncronos

## Conceptos Practicados

- Fundamentos de testing en JavaScript
- Assertions y comparaciones
- Manejo de pruebas síncronas y asíncronas
- Estructuración de casos de prueba
- Implementación de un mini framework de testing
- Manejo de errores y feedback visual en pruebas
- Promesas y async/await en el contexto de testing

## Tecnologías Utilizadas

- JavaScript vanilla
- Programación asíncrona (Promises, async/await)
- Manejo de errores (try/catch)
- Console API para feedback de pruebas

Este proyecto sirve como una introducción práctica a los conceptos fundamentales del testing en JavaScript, mostrando la evolución desde pruebas básicas hasta un enfoque más estructurado y profesional.

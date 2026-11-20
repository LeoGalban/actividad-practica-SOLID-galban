# Salida original de los ejercicios

Salida de los 5 ejercicios **antes** de refactorizar, usando Node v24.19.0 (`node ejercicios/XX.ts`).
Sirve para comprobar que, después del refactor, el comportamiento visible es el mismo.

## 01-srp

```text
(sin salida)
```

El archivo define `UserManager` pero no lo usa, así que no imprime nada.

## 02-ocp

```text
Pagando $100 con tarjeta
```

## 03-lsp

Con `node ejercicios/03-lsp.ts` **no corre**: usa *parameter properties*
(`constructor(protected width: number, ...)`), y Node no las soporta en modo "type stripping":

```text
SyntaxError [ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX]: TypeScript parameter property is not supported in strip-only mode
```

Para ver la salida que el programa quiere mostrar, lo compilé aparte con `tsc` y lo ejecuté:

```text
Area esperada: 50. Area obtenida: 50
Area esperada: 50. Area obtenida: 100
```

La segunda línea muestra el error de diseño: el cuadrado da 100 en vez de 50.

## 04-isp

```text
Imprimiendo: tarea.txt
```

## 05-dip

```text
Pedido creado
Correo para ana@example.com: Tu pedido fue creado
```

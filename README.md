# Sumadora

Aplicacion web simple que suma dos numeros ingresados por el usuario.

## Estructura del proyecto

```
Claudio APP/
├── index.html   # Interfaz de usuario
├── app.js       # Logica de la suma
├── style.css    # Estilos visuales
└── README.md    # Documentacion
```

## Como usar

1. Abre `index.html` en tu navegador.
2. Ingresa el primer numero en el campo "Primer numero".
3. Ingresa el segundo numero en el campo "Segundo numero".
4. Haz clic en el boton **Sumar**.
5. El resultado aparecera debajo del boton.

## Funcionamiento

### `app.js` - Funcion principal

```js
function sumar()
```

- Lee los valores de los dos campos de entrada.
- Valida que ambos valores sean numeros. Si no lo son, muestra un mensaje de error.
- Calcula la suma y muestra el resultado en pantalla.

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)

## Requisitos

Solo un navegador web. No requiere instalacion ni dependencias.

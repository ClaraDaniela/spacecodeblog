---

title: 'Un universo que no es binario'
description: 'Astronomía, física y código para entender por qué no todo se reduce a dos opciones.'
date: '2026-04-06'
modified_date: '2026-04-06'
image: /assets/images/posts/bisexual.jpg
----------------------------------------

Durante mucho tiempo intentamos explicar el mundo en términos simples: blanco o negro, sí o no, verdadero o falso.
Sin embargo, cuando observamos con mayor atención, tanto la ciencia como la experiencia humana muestran algo distinto: la realidad rara vez se ajusta a categorías tan rígidas.

---

## El universo tampoco elige bandos

En física, muchas de las ideas más fundamentales desafían nuestras intuiciones.

La luz, por ejemplo, puede comportarse como partícula y como onda.
Las estrellas presentan una enorme diversidad, y los sistemas que forman no responden a una única estructura.

Incluso la atracción —la fuerza que mantiene a los planetas en órbita— depende de múltiples factores como la masa y la distancia.

La **Ley de Gravitación Universal** describe cómo todos los cuerpos con masa se atraen entre sí.
Sin embargo, esa atracción no siempre implica cercanía, contacto o cambio. En muchos casos existe, pero no alcanza para modificar una trayectoria.

---

## La incertidumbre como límite fundamental

En la física cuántica, el trabajo de Werner Heisenberg introdujo una idea central: el **Principio de Incertidumbre**.

Este principio establece que no es posible conocer con precisión absoluta, al mismo tiempo, la posición y el momento de una partícula.

Esta relación se expresa mediante la desigualdad:

![Error](@@baseUrl@@/assets/images/posts/formulaincertidumbre.png)

donde:

* (\Delta x) representa la incertidumbre en la posición
* (\Delta p) representa la incertidumbre en el momento
* (\hbar) es una constante fundamental de la naturaleza

El significado de esta expresión es el siguiente: cuanto más precisamente intentamos determinar la posición de una partícula, menos precisión podemos tener sobre su velocidad, y viceversa.

No se trata de una limitación experimental, sino de una propiedad intrínseca del universo.

---

## Cómo interpretar esta idea

En la física clásica se asumía que todos los sistemas poseen propiedades bien definidas, incluso si no las conocemos.
La mecánica cuántica introduce un cambio profundo: algunas propiedades no pueden estar simultáneamente definidas con precisión arbitraria.

Esto no implica ignorancia, sino un límite estructural del conocimiento físico.

Este tipo de cuestiones se discute también en obras de divulgación como *¿Existe el mundo cuando no lo miras?*, donde se plantea hasta qué punto la observación forma parte de la realidad que describimos.

---

## Una ilustración con código

Aunque no es posible reproducir directamente un sistema cuántico con herramientas clásicas, sí es posible ilustrar la idea de incertidumbre mediante funciones matemáticas.

Una función muy localizada en el espacio tiende a volverse más dispersa cuando se analiza en términos de momento. Esta relación puede observarse utilizando una transformada de Fourier.

```python
import numpy as np
import matplotlib.pyplot as plt

# Espacio
x = np.linspace(-10, 10, 1000)

# Función gaussiana (posición)
sigma = 1
psi = np.exp(-x**2 / (2 * sigma**2))

# Transformada de Fourier (momento)
psi_k = np.fft.fft(psi)
k = np.fft.fftfreq(len(x), d=(x[1] - x[0]))

# Gráficos
plt.figure(figsize=(10,4))

plt.subplot(1,2,1)
plt.plot(x, psi)
plt.title("Posición")

plt.subplot(1,2,2)
plt.plot(k, np.abs(psi_k))
plt.title("Momento")

plt.tight_layout()
plt.show()
```

Si se modifica el valor de `sigma`, puede observarse el efecto:

* valores pequeños → la función está más concentrada en posición y más dispersa en momento
* valores grandes → la función se dispersa en posición y se concentra en momento

Esto ilustra, de manera visual, la relación que expresa el principio de incertidumbre.

---

## Pensar más allá de lo binario

En programación, todo parece reducirse a valores discretos como 0 y 1.
Sin embargo, al construir sistemas más complejos, aparecen múltiples estados, condiciones intermedias y comportamientos no lineales.

```python
def atraccion(persona):
    if persona.genero in ["hombre", "mujer"]:
        return True
    return False
```

Este ejemplo simplifica una realidad que, en la práctica, puede ser mucho más amplia.

---

## Una reflexión personal

Durante mucho tiempo intenté pensar en términos definidos, como si fuera necesario encajar en una única categoría para que todo tuviera sentido.

Con el tiempo entendí que no siempre es posible reducir la experiencia a una definición única.
Algunas cosas requieren aceptar matices, ambigüedades y procesos.

Aceptar esto no elimina la incertidumbre, pero permite convivir con ella de una manera más honesta.

![Error](@@baseUrl@@/assets/images/posts/suspenso.gif)

sarasaraa, como diría Jorge suspenso.
---

El problema no es la complejidad, sino la tendencia a simplificar en exceso.

El universo no es binario.
La física no es binaria.
Y, en muchos casos, nosotros tampoco.

Comprender esto no proporciona respuestas definitivas, pero sí abre la posibilidad de formular mejores preguntas.


---

title: '¿Qué pasaría si cambiamos la masa del Sol?'
description: 'Una simulación en Python para entender cómo la masa afecta las órbitas de los planetas.'
date: '2026-04-09'
modified_date: '2026-04-09'
image: /assets/images/posts/sol.png
----------------------------------------

Cuando pensamos en el sistema solar, solemos asumir que todo es estable: los planetas orbitan, el Sol permanece en el centro, y las trayectorias parecen inmutables.

Sin embargo, esa estabilidad depende de un equilibrio muy delicado.

Una de las variables más importantes en ese equilibrio es la masa del Sol.

---

## La fuerza que mantiene todo en movimiento

La interacción entre el Sol y los planetas se describe mediante la **Ley de Gravitación Universal**.

En términos simples, cuanto mayor es la masa del Sol, mayor es la fuerza con la que atrae a los planetas.

Esto tiene una consecuencia directa:

* más masa → órbitas más cerradas
* menos masa → órbitas más abiertas

Pero, ¿qué ocurre si modificamos esa masa?

---

## La idea del experimento

Vamos a simular un planeta orbitando el Sol, pero con una diferencia:

=> vamos a cambiar la masa del Sol y observar qué sucede

---

## Simulación en Python

```python id="n7d9sl"
import numpy as np
import matplotlib.pyplot as plt

G = 6.67430e-11

# Probá cambiar este valor
M = 1.989e30  # masa real del Sol

# Posición inicial (como la Tierra)
pos = np.array([1.5e11, 0.0])

# Velocidad inicial
vel = np.array([0.0, 30000])

dt = 60 * 60  # 1 hora

trayectoria = []

for _ in range(20000):
    r = np.linalg.norm(pos)
    
    acc = -G * M * pos / r**3
    
    vel += acc * dt
    pos += vel * dt
    
    trayectoria.append(pos.copy())

trayectoria = np.array(trayectoria)

plt.plot(trayectoria[:,0], trayectoria[:,1])
plt.scatter(0, 0)
plt.title("Órbita simulada")
plt.axis("equal")
plt.show()
```

---
Resultado con la masa normal del sol:

![Error](@@baseUrl@@/assets/images/posts/orbitaplanetaria1.png)

## Qué deberías observar

Probá cambiar la masa del Sol (`M`) y compará resultados:

### 🔹 Si aumentás la masa

```python id="x1k2mn"
M = 3.0e30
```
![Error](@@baseUrl@@/assets/images/posts/orbitaplanetaria2.png)


* la atracción es mayor
* la órbita se vuelve más cerrada
* el planeta se mueve más rápido

---

### 🔹 Si reducís la masa

```python id="p8z3qa"
M = 1.0e30
```
![Error](@@baseUrl@@/assets/images/posts/orbitaplanetaria3.png)


* la atracción disminuye
* la órbita se agranda
* el planeta se mueve más lento

---

### 🔹 Si la masa es muy baja

```python id="l0s9df"
M = 5.0e29
```
![Error](@@baseUrl@@/assets/images/posts/orbitaplanetaria4.png)


* el planeta puede escapar
* deja de orbitar
* la trayectoria se vuelve abierta

---

## Qué está pasando realmente

La órbita de un planeta no depende solo de su velocidad, sino del equilibrio entre:

* la velocidad inicial (que lo impulsa hacia adelante)
* la gravedad (que lo atrae hacia el centro)

Cambiar la masa del Sol rompe ese equilibrio.

---

## Una forma distinta de pensarlo

Podemos imaginarlo como una tensión constante:

* demasiada atracción → el planeta cae
* muy poca → el planeta se aleja

La órbita existe en ese punto intermedio.

---

## Conclusión

El sistema solar no es rígido ni inmutable.
Es el resultado de un equilibrio preciso entre fuerzas.

Modificar una sola variable, como la masa del Sol, es suficiente para cambiar completamente el comportamiento de un planeta.

Y quizás eso sea lo más interesante:
lo que parece estable, en realidad depende de condiciones muy específicas.


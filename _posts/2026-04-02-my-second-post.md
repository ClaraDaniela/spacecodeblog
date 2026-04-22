---

title: '¿Por qué los planetas más lejanos son más lentos?'
description: 'Una explicación clara y fundamentada de por qué la velocidad orbital disminuye con la distancia al Sol.'
date: '2026-04-03'
modified_date: '2026-04-03'
image: /assets/images/posts/orbitas.png
------------------------------------------------

Al observar el sistema solar, se nota un patrón claro: los planetas más cercanos al Sol se mueven más rápido, mientras que los más lejanos lo hacen más lentamente. Esta diferencia no es casual, sino que responde a leyes físicas bien establecidas.

---

## La gravedad como fuerza dominante

El movimiento de los planetas está gobernado por la **Ley de Gravitación Universal**, que describe cómo dos cuerpos con masa se atraen entre sí.

En este caso, el Sol ejerce una fuerza gravitatoria sobre cada planeta. Esta fuerza depende de la distancia: cuanto más lejos se encuentra un planeta, menor es la atracción que experimenta.

---

## Equilibrio entre gravedad y movimiento

Para que un planeta permanezca en órbita, debe existir un equilibrio entre:

* La fuerza gravitatoria, que lo atrae hacia el Sol

* Su velocidad, que tiende a mantenerlo en movimiento

Si la velocidad es demasiado baja, el planeta caería hacia el Sol. Si es demasiado alta, escaparía de su órbita. La velocidad orbital es, por lo tanto, el resultado de ese equilibrio.

---

## Relación entre velocidad y distancia

La velocidad necesaria para mantener una órbita circular se puede expresar mediante la siguiente relación:

$$
v = \sqrt{\frac{GM}{r}}
$$

Donde:

* (G) es la constante de gravitación universal

* (M) es la masa del Sol

* (r) es la distancia entre el planeta y el Sol

Esta expresión muestra que la velocidad disminuye a medida que aumenta la distancia. Es decir, los planetas más alejados requieren menor velocidad para mantenerse en órbita.

---

## Ejemplos en el sistema solar

Este comportamiento se observa claramente en los datos reales:

* Mercurio, el planeta más cercano, tiene una velocidad orbital muy alta
* La Tierra se mueve aproximadamente a 30 km/s
* Saturno, mucho más distante, se desplaza alrededor de 9.6 km/s
* Planetas aún más lejanos presentan velocidades menores

---
## Simulación con código

Acá simule la orbita de saturno y el planeta tierra, ya que tienen un enorme contraste entre sí.

```python
import numpy as np
import matplotlib.pyplot as plt

G = 6.67430e-11
M = 1.989e30

dt = 60 * 60 * 24  # 1 día

# Planetas
planetas = [
    {
        "nombre": "Tierra",
        "pos": np.array([1.5e11, 0.0]),
        "vel": np.array([0.0, 30000]),
        "trayectoria": [],
        "color": "blue"
    },
    {
        "nombre": "Saturno",
        "pos": np.array([1.43e12, 0.0]),
        "vel": np.array([0.0, 9600]), #saturno tarda 29 años terrestres en dar la vuelta al sol
        "trayectoria": [],
        "color": "orange"
    }
]

# Simulación
for _ in range(11000):  # ~30 años
    for planeta in planetas:
        pos = planeta["pos"]
        vel = planeta["vel"]

        r = np.linalg.norm(pos)
        acc = -G * M * pos / r**3

        vel += acc * dt
        pos += vel * dt

        planeta["pos"] = pos
        planeta["vel"] = vel
        planeta["trayectoria"].append(pos.copy())

# Graficar
plt.figure(figsize=(6,6))

for planeta in planetas:
    trayectoria = np.array(planeta["trayectoria"])
    plt.plot(trayectoria[:,0], trayectoria[:,1], label=planeta["nombre"], color=planeta["color"])

plt.scatter(0, 0, s=100, label="Sol")
plt.legend()
plt.axis("equal")
plt.title("Órbitas simuladas")
plt.show()
```
---

## Resultado
Este es el colab que utilice para que puedan ir a verlo:

https://colab.research.google.com/drive/1oRbKPteT6S3-18z8Uc8tjnHzZL84fBYw?usp=sharing

Imagen de ejemplo:

![Órbita simulada](@@baseUrl@@/assets/images/posts/OrbitaPlanetariaCaptura2.png)

Vas a ver cómo los planetas describen una órbita alrededor del Sol.
Dependiendo de los valores iniciales, puede ser más circular o más elíptica.


---
## Interpretación intuitiva

Una forma de entenderlo es pensar en un movimiento circular controlado. Cuanto más cerca se está del centro de atracción, mayor debe ser la velocidad para no caer hacia él. A mayor distancia, la influencia gravitatoria disminuye y se requiere menos velocidad para mantener la trayectoria.

---

## Aplicación en simulaciones

Este principio es fundamental al simular órbitas mediante programación. Al ajustar la distancia inicial de un planeta en un modelo, su velocidad orbital debe modificarse en consecuencia. De lo contrario, la simulación no representará un comportamiento realista.

---

## Conclusión

Los planetas más lejanos se mueven más lentamente porque la fuerza gravitatoria del Sol disminuye con la distancia. Como resultado, necesitan menor velocidad para mantenerse en órbita estable.

Este principio no solo explica la estructura del sistema solar, sino que también permite modelarlo con precisión mediante herramientas computacionales.


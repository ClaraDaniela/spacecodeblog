---

title: '¿Cómo sabemos que la Tierra no es plana?'
description: 'Una explicación basada en ciencia, historia y un poco de código.'
date: '2026-04-06'
modified_date: '2026-04-06'
image: /assets/images/posts/tortuga.png
------------------------------------------

A veces se piensa que la idea de una Tierra esférica es moderna.
Sin embargo, ya en la Antigua Grecia había evidencia suficiente para entender la forma del planeta.

Mucho antes de la electricidad, los satélites o internet, pensadores como Eratóstenes lograron medir la circunferencia de la Tierra con una precisión sorprendente.

---

## El experimento de Eratóstenes
En el libro Introduccion a la ciencia de Isaac Asimov, nos habla de los experimentos de Eratóstenes, el cual observó algo simple:

* En una ciudad, el Sol iluminaba un pozo completamente (no había sombra)
* En otra ciudad, al mismo tiempo, un objeto sí proyectaba sombra

A partir de ese ángulo, y conociendo la distancia entre ambas ciudades, pudo calcular la circunferencia terrestre.

Este método no requiere tecnología moderna, solo observación, geometría y razonamiento.

---

## La idea detrás del cálculo

La lógica es:

* Si la Tierra fuera plana, las sombras serían iguales
* Como no lo son, la superficie debe estar curvada

Podemos representarlo de forma simplificada:

```python id="eqr8fd"
import math

angulo = 7.2  # grados medidos
distancia = 800  # km entre ciudades

circunferencia = 360 / angulo * distancia

print(circunferencia)
```

Este cálculo da un valor cercano al real.

---

## Evidencias modernas

Hoy tenemos muchas más pruebas:

* Imágenes satelitales
* Diferentes husos horarios
* La curvatura observable en vuelos
* La forma en que desaparecen los barcos en el horizonte

Todas estas observaciones son coherentes entre sí.

---

## El problema no es la falta de información

La información está disponible.
El desafío real es cómo interpretamos la evidencia.

La ciencia no se basa en creer, sino en:

* observar
* medir
* contrastar


La idea de una Tierra esférica no es nueva, ni compleja.
Es el resultado de siglos de observación y pensamiento crítico.

Entender esto no requiere tecnología avanzada, sino algo mucho más importante: curiosidad y disposición a cuestionar lo que creemos saber.


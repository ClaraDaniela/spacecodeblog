---
title: 'Programando en silencio'
description: 'Se puede entender la ecuación de Drake con programación, claramente.'
date: '2026-05-07'
modified_date: '2026-05-07'
image: /assets/images/posts/drake-code.jpg
---

# Programando el Gran Silencio: Simulación de la Ecuación de Drake

Siempre nos preguntamos si estamos solos en el universo, y si hay tantas estrellas, es lógico pensar que entre todas ellas debe haber otra "tierra", pero si así fuera, habría más "ruido". Con proyectos como SETI (busqueda de inteligencia extraterrestre), se intento captar esas señales, pero nos dimos cuenta que era algo más complicado que solo captar una onda, sino que esta debería tener determinadas características para ser esa "onda" o comunicación que estamos buscando, como por ejemplo, que el ancho de banda o la frecuencia sean muy baja o estrecha, que no sea simple y que sea continua. Y con estos filtros, el silencio se hizo más estruendoso.

![Error](@@baseUrl@@/assets/images/posts/miguelito.jpg)
Lo que queremos saber es:

> si el universo es tan grande, ¿por qué no vemos señales de otras civilizaciones?

Este cuestión se conoce como la **Paradoja de Fermi**, y una de las herramientas o formula más utilizada para analizarlo es la **Ecuación de Drake**.

---

# ¿Qué es la Ecuación de Drake?

La ecuación de Drake no es una predicción exacta, sino un modelo probabilístico.

Su objetivo es estimar:

> cuántas civilizaciones tecnológicas podrían existir al mismo tiempo en la galaxia.

Se expresa así:

```text
N = R* × fp × ne × fl × fi × fc × L
```
# ¿Qué representa cada término?

Cada variable representa un filtro progresivo:

R*: tasa de formación de estrellas (cual es la natalidad de estrellas por año)

fp: fracción de estrellas con planetas (un solecito con sus planetas orbitando)

ne: número de planetas habitables por sistema (cantidad de planetas que se encuentran en la zona habitable, esto es, esa zono donde no esta tan cerca del sol como para achicharrarse ni tan lejos como para congelarse, aunque, no es 100% fiable, porque estar en la zona habitable no significa que va a serlo, por ejemplo, en nuestro sistema solar tenemos a Venus, que está en la zona).

fl: probabilidad de que aparezca vida (aca es donde se calcula, de los planetas que tengo en la zona habitable, qué porcentaje creo que puede llegar a desarrollar vida).

fi: probabilidad de que surja inteligencia (en la tierra tuvimos "suerte" de aparecer porque hubieron extinciones masivas que lo posibilitaron, como la del periodo Jurásico).

fc: probabilidad de desarrollar tecnología detectable (nosotros tenemos las tecnologías pero lo más complicado es que ese mensaje se detecte, ya que estos pueden ser interrumpidos por ruido cosmico, como lo son radiacion de las estrellas, explosiones de supernovas, etc, y porque el mensaje llegaria pero luego de mucho tiempo por las largas distancias, las mejores señales son de corta distancia, entonces tenemos que usar señales debiles y encima que viajen a través de todo ese ruido).

L: duración de una civilización tecnológica (si leyeron la máquina del tiempo, puede ser que el mensaje que enviemos justo caiga en la era de los Morlocks)

# ¿Qué significa realmente N?

El resultado final N no significa “vida en el universo”.

Significa algo más específico:

cuántas civilizaciones podrían existir simultáneamente en este momento.

Esto es clave para entender el problema.

Ejemplo:

N < 1 → probablemente somos la única civilización activa en la galaxia

N ≈ 1 → podríamos ser una civilización única o casi única

N > 1 → podrían existir varias civilizaciones al mismo tiempo

# La Paradoja de Fermi

Aunque Fermi fue un físico nuclear, su nombre también está asociado a una idea famosa: Fermi Paradox

Esta paradoja surge de una pregunta que él planteó,

> Si el universo es tan grande y viejo, ¿dónde está todo el mundo?

Esto genera una contradicción aparente:

> si debería haber vida, ¿por qué el universo parece silencioso?

# Vamo a programar

El problema de Drake es que casi todos sus parámetros son desconocidos.

No tenemos valores exactos para:

aparición de vida
aparición de inteligencia
duración de civilizaciones

Por eso, en lugar de un único resultado, podemos simular múltiples escenarios, según la teoria que tengamos nosotros, si pensamos en escenarios optimistas donde la vida es posible y hay un paralelismo entre estas en su existencia, entonces esta ecuación nos va a plantear escenarios donde si haya vida inteligente, pero si somos poco optimistas y pensamos que esto es muy complejo, entonces nos va a arrojar escenarios pesimistas.

## Implementación en Python
6.1 Función base
```python
def drake(R, fp, ne, fl, fi, fc, L):
    return R * fp * ne * fl * fi * fc * L
```

Esta función simplemente multiplica todos los factores.

La idea es que cada uno actúa como un filtro:

si uno es pequeño, el resultado total disminuye mucho
si todos son grandes, el resultado crece
6.2 Simulación de escenarios

```python
def simular(nombre, valores):
    N = drake(*valores)

    print(f"\nEscenario: {nombre}")
    print(f"Civilizaciones simultáneas estimadas: {N}")

    if N < 1:
        print("Interpretación: es probable que no haya otras civilizaciones activas ahora.")
    else:
        print("Interpretación: podrían existir múltiples civilizaciones simultáneas.")
```

## Escenario 1: parámetros muy restrictivos
```
simular("vida rara", (1, 0.5, 0.3, 0.001, 0.001, 0.1, 10000))
```

## Escenario 2: parámetros más favorables
```
simular("vida más común", (3, 1.0, 1.0, 0.1, 0.1, 0.3, 50000))
```
## Qué estamos realmente simulando

Este código no predice el universo real.

Lo que hace es explorar:

cómo cambia el resultado cuando cambiamos nuestras suposiciones sobre lo desconocido.

Cada ejecución representa un “universo posible”.

## El factor más importante: L

El parámetro más sensible es L, la duración de una civilización.

Esto introduce un punto clave:

una civilización puede existir solo un corto período de tiempo
incluso si hay muchas, pueden no coincidir temporalmente

Esto conecta directamente con la Paradoja de Fermi:

el problema no es solo espacial, sino temporal.

La Ecuación de Drake no responde si hay vida.

Lo que hace es más interesante, transforma una pregunta filosófica en un modelo programable de incertidumbre.
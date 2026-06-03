---
title: 'Ya somos como en Pluribus'
description: '¿Por qué los relojes de péndulo, las luciérnagas y las sociedades humanas terminan haciendo exactamente lo mismo? Un vistazo desde las matemáticas y la filosofía'
date: '2026-06-03'
modified_date: '2026-06-03'
image: /assets/images/posts/RickYMorty.jfif
---

Nos encanta llenarnos la boca hablando de la individualidad, del libre albedrío y de cómo cada uno de nosotros es un ser único e irrepetible tomando decisiones en base a su compleja psicología. Hermoso cuento. Lástima que al universo le importa muy poco tu originalidad. 

Si algo nos enseña la física de los sistemas acoplados es que, si ponés un montón de cosas distintas a interactuar el tiempo suficiente, el sistema va a forzar a que todas terminen marchando al mismo paso. Y lo peor es que la filosofía y la neurociencia están de acuerdo.

---

## El misterio de los relojes que se ponen de acuerdo solos

La culpa de descubrir este complot cósmico contra la individualidad la tuvo Christiaan Huygens en 1665. El tipo estaba enfermo en cama, mirando dos relojes de péndulo que había colgado de la misma pared. Al principio, cada péndulo iba a su propio ritmo. Pero Huygens notó algo rarísimo: pasadas unas horas, los dos relojes se habían puesto de acuerdo. Oscilaban en perfecta sincronía, uno hacia la izquierda y el otro hacia la derecha, de forma simétrica.

¿Qué pasó? ¿Magia? ¿Macumba? No, pura dinámica de sistemas. Los relojes estaban **acoplados**. Cada vez que el péndulo del reloj A se movía, transmitía una microvibración invisible a través de la madera de la pared. El reloj B recibía ese sutil empujón y viceversa. Al final, el sistema disipó el desorden y encontró el único estado matemáticamente estable: la homogeneidad absoluta.

La naturaleza odia el caos asincrónico. Las luciérnagas se juntan en miles de árboles y terminan parpadeando todas exactamente al mismo milisegundo. Las células de tu corazón hacen lo mismo para que no te dé un paro cardíaco como le paso a mi profesor de la facultad que despues se volvio loco y perdió la memoria. 

---

## David Hume y el instinto de la manada

Esto que la física explica con ecuaciones de acoplamiento, el filósofo David Hume ya lo había scripteado desde el lado de la naturaleza humana. Hume destruyó la ilusión de que somos criaturas puramente racionales. Para él, nos movemos por **contagio de pasiones y hábitos**. 

Hume explicaba que los seres humanos funcionamos por una especie de "simpatía" mecánica: tendemos a seguir a la manada de forma casi involuntaria. En la dinámica social, no todos los péndulos pesan lo mismo. Están las mentes con caracteres fuertes —aquellas capaces de imponer su ritmo y mover la pared de madera— y los caracteres más débiles o influenciables, que simplemente carecen de la inercia necesaria para resistir el empuje del entorno. 

Ir en contra de la corriente genera un gasto de energía tremendo (fricción estática, si queremos ponernos técnicos). Para la mayoría, es físicamente más barato dejarse arrastrar por la frecuencia del grupo que sostener una oscilación propia. La masa se fagocita al individuo por pura economía de energía.

---

## El lavado de cabeza biológico: Sincronía interencefálica

Si combinamos a Huygens con Hume, llegamos a la neurociencia moderna, donde la cosa se pone un poco más distópica. Hoy sabemos que existe un fenómeno llamado **acoplamiento cerebro a cerebro**. 

Cuando escuchás un discurso político masivo, vas a un concierto o te metés en una masa enfurecida, tus ondas cerebrales (medidas por electroencefalograma) empiezan a encajar con las del resto como piezas de tetris.

El estímulo externo actúa exactamente como la pared de madera de los relojes. Los cerebros de toda esa multitud se acoplan en una sola frecuencia dinámica. Tu pensamiento "individual" e "independiente" se diluye en un atractor colectivo. El entorno te programa el cerebro para que sientas y pienses lo mismo que el desconocido que tenés al lado. Los "fuertes" dominan la frecuencia del emisor; los débiles simplemente sintonizan el canal.

---

## Modelando la mente colmena en Python

Para ver cómo el universo destruye el caos individual y nos obliga a ser iguales, podemos usar el **Modelo de Kuramoto**, el estándar matemático para simular osciladores acoplados. Imaginemos que cada línea es una persona (o un reloj) que arranca con una frecuencia mental totalmente aleatoria. Miren lo que pasa cuando el acoplamiento social hace su trabajo:

```python
import numpy as np
import matplotlib.pyplot as plt

def simular_kuramoto(num_osciladores=50, acoplamiento=1.5, pasos=200):
    # Fases iniciales aleatorias entre 0 y 2pi (el caos del principio)
    fases = np.random.uniform(0, 2 * np.pi, num_osciladores)
    # Frecuencias naturales de cada uno (cada loco con su tema)
    frecuencias = np.random.normal(1.0, 0.1, num_osciladores)
    
    historial = [fases.copy()]
    dt = 0.05
    
    for _ in range(pasos):
        nuevas_fases = np.zeros(num_osciladores)
        for i in range(num_osciladores):
            # Ecuación de Kuramoto: sumamos la influencia de los demás
            influencia = np.sum(np.sin(fases - fases[i]))
            # El estado mental depende de su propia inercia + el acoplamiento social
            nuevas_fases[i] = fases[i] + (frecuencias[i] + (acoplamiento / num_osciladores) * influencia) * dt
        fases = nuevas_fases % (2 * np.pi)
        historial.append(fases.copy())
        
    return np.array(historial)

historial_fases = simular_kuramoto()

plt.figure(figsize=(10, 5))
for i in range(historial_fases.shape[1]):
    plt.plot(historial_fases[:, i], linewidth=0.8, alpha=0.6)

plt.title("El fin de la individualidad: Modelo de Kuramoto")
plt.xlabel("Tiempo (Interacción Social)")
plt.ylabel("Estado Mental / Fase (0 a 2π)")
plt.grid(True)
plt.show()
```

# ¿Qué nos muestra la simulación?

![sincronizacion](@@baseUrl@@/assets/images/posts/sincronizacionmodelo.png)

Al principio del gráfico, las líneas son un manojo de cables enredados: cada uno va a su propia velocidad, reclamando su supuesta independencia. Pero a medida que avanza el tiempo y la interacción (el acoplamiento) hace lo suyo, las líneas se enderezan y se pegan, marchando todas en un bloque ultra compacto. El sistema obligó al desorden a convertirse en una masa uniforme deforme.

La teoría de sistemas dinámicos nos demuestra que el aislamiento es una fantasía de nuestro ego. Estamos conectados a hilos invisibles que todo el tiempo están limando nuestras diferencias para que encajemos en la frecuencia del entorno. 

Hume tenía razón: la razón es esclava de las pasiones colectivas. Quizás esa idea tan romántica de "conectar con el resto" no sea más que la física recordándote que, si no sos lo suficientemente fuerte como para mover la pared, estás destinado a oscilar al ritmo que te imponga la manada, y creo que no hay mayor horror que perder la individualidad o estar conciente de que en realidad no la hay.
---

title: '¿Cómo calcular la órbita de un planeta con Python?'
description: 'Simulá el movimiento de un planeta alrededor del Sol usando Python y conceptos básicos de física.'
date: '2026-04-03'
modified_date: '2026-04-03'
image: /assets/images/posts/orbitas.png
----------------------------------------------

¿Alguna vez te preguntaste cómo se mueven los planetas alrededor del Sol?
En este artículo vamos a simular una órbita usando Python y un poco de física básica.

---


## La idea detrás de la órbita

Todo se basa en la gravedad: los planetas son atraídos por el Sol, pero como también tienen velocidad, terminan girando alrededor de él.

Esto está explicado por la Ley de Gravitación Universal, que nos dice que la fuerza depende de:


* la masa de los cuerpos

* la distancia entre ellos

---

## ¿Qué vamos a hacer?

Vamos a simular:

* Un planeta

* Orbitando alrededor del Sol

* En un plano 2D

---

## Código en Python

Primero, vamos a ingresar a colab para poder programar con Python sin necesidad de instalar un IDE. Esta herramienta es de google drive, y se puede encontrar en este link: 


https://colab.research.google.com/

Si aún así no pudiste ingresar y utilizarlo porque es tu primera vez, te recomiendo que veas este video:
https://youtu.be/8VFYs3Ot_aA?si=OXR5EqGtJffpeZ2v


Una vez hayas iniciado sesión con tu email, y hayas ingresado al link, vas a dar clic en "Nuevo notebook". Se te va a abrir una pestaña donde vas a poder ingresar el siguiente código.


Este código calcula la posición del planeta en el tiempo:


```python
import numpy as np #Es para calculos matematicos como vectores
import matplotlib.pyplot as plt # libreria para dibujar la órbita

# Constante gravitacional (G), esto es cuán sensible es un cuerpo para atraer a 
#otro, cuanto más masa más atraccion, algo interesante, porque no es la gravedad 
#del sol o del planeta en sí, sino que es una constante universal, y la verdad es 
#que sabemos que vale G≈6.67×10^−11 pero no sabemos por qué aún.*\
G = 6.67430e-11

# Masa del Sol
M = 1.989e30

# Posición inicial (x, y)
pos = np.array([1.5e11, 0.0])  
# distancia aproximada Tierra-Sol, más o mes 150 millones de km de distancia, el 
#sol estaría en el origen [0,0]

# Velocidad inicial, que es 30000 m/s, es el equilibrio justo para que pueda 
#orbitar, el sol atrae al planeta, quiere que caiga, pero la velocidad a la que va 
#es lateral y quiere que siga derecho por eso puede orbitar.
vel = np.array([0.0, 30000])  # m/s

# Paso de tiempo (1 hora), por cada hora vamos a tener su posición
dt = 60 * 60

trayectoria = []
​
for _ in range(10000):
    r = np.linalg.norm(pos) #se calcula r(radio)=raíz de (x2+y2), que es la distancia entre el planeta y el sol, por hora
    
    # Aceleración gravitatoria, posicion del planeta hacia el sol
    acc = -G * M * pos / r**3
    
    # Actualizar movimiento
    vel += acc * dt #v=v+acc*t
    pos += vel * dt #x=x+v.t
    
    trayectoria.append(pos.copy()) #guarda cada punto para luego graficarlo

trayectoria = np.array(trayectoria)

# Graficar órbita
plt.plot(trayectoria[:,0], trayectoria[:,1]) #trayectoria[:,0] es el eje x, y trayectoria[:,1] es el eje y
plt.scatter(0, 0)  # Sol
plt.title("Órbita simulada")
plt.xlabel("X")
plt.ylabel("Y")
plt.axis("equal")
plt.show()
```

---

## Explicación

Esta es la formula de Newton, esa que nos daban en la secundaria: 
![Órbita simulada](@@baseUrl@@/assets/images/posts/formulaNewton.png)
 Como $F = m \cdot a$, las masas del planeta se cancelan y nos queda que la aceleración es $a = \frac{G \cdot M}{r^2}$. Este seria la formula principal, la cual esta representada en esta linea: acc = -G * M * pos / r**3.

 ¿Por qué aparece r**3 en el código?Es un truco vectorial. En Python, pos es un vector $(x, y)$. Para que la aceleración sea un vector que apunte hacia el Sol, multiplicamos la magnitud por el vector unitario de la posición:$$\vec{a} = -\frac{GM}{r^2} \cdot \frac{\vec{pos}}{r} = -\frac{GM \cdot \vec{pos}}{r^3}$$El signo negativo es vital: indica que la aceleración "tira" hacia el centro (el Sol), contraria a la posición del planeta.

## Resultado
Este es el colab que utilice para que puedan ir a verlo:
https://colab.research.google.com/drive/1oRbKPteT6S3-18z8Uc8tjnHzZL84fBYw?usp=sharing

Imagen de ejemplo:

![Órbita simulada](@@baseUrl@@/assets/images/posts/OrbitaPlanetariaCaptura1.png)

Vas a ver cómo el planeta describe una órbita alrededor del Sol.
Dependiendo de los valores iniciales, puede ser más circular o más elíptica.

---

## Cómo hecerlo más interesante 

Podés:

* Agregar más planetas

* Simular órbitas elípticas

* Crear animaciones

* Usar datos reales de la NASA

* Hacerlo interactivo

---


Con unas pocas líneas de código, podés simular uno de los fenómenos más importantes del universo.

Y lo mejor: este mismo principio es el que se usa en misiones espaciales reales.

---


---

title: 'Cómo usar la API de NASA para obtener datos reales del espacio'
description: 'Una guía simple para empezar a trabajar con datos reales de la NASA usando código.'
date: '2026-04-07'
modified_date: '2026-04-07'
image: /assets/images/posts/logonasa.jpg
----------------------------------------

Trabajar con simulaciones está bien, pero en algún momento surge una pregunta inevitable:
¿y si usamos datos reales?

La API de la NASA permite acceder a información pública del espacio de forma sencilla.

---

## Obtener una API key

Para empezar, necesitás una clave:

1. Ir a https://api.nasa.gov
2. Registrarte
3. Obtener tu API key

![Error](@@baseUrl@@/assets/images/posts/apinasa.png)

También existe una clave pública:

```
DEMO_KEY
```

Pero tiene límites de uso.

---

## Ejemplo: imagen del día (APOD)

Una de las APIs más simples es **Astronomy Picture of the Day**.

---

## Código en Python

```python
import requests

url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

response = requests.get(url)
data = response.json()

print(data["title"])
print(data["url"])
print(data["explanation"])
```

---

## ¿Qué estamos haciendo?

* hacemos una petición HTTP
* recibimos datos en formato JSON
* accedemos a sus propiedades

---

## 🌐 Usarlo en una web

En JavaScript:

```js
fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## Nota importante

Para proyectos reales:

* no expongas tu API key
* usá variables de entorno o backend

---



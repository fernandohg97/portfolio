---
path: '/Nodejs-y-el-Event-Loop'
date: '2018-12-22'
title: 'Nodejs y el Event Loop'
author: 'Fernando Hernandez'
description: 'Learn javascript at the backend!'
---

Estos dos conceptos son cosas básicas del lenguaje de programación Javascript.
Debido a que dicho lenguaje trabaja bajo el paradigma de programación asíncrona.

Así que, decidí compartir este articulo para dar a entender lo que son los
callback y las promesas. Dos características para llevar a cabo las operaciones
asíncronas.

Bueno, sigamos 👍

### Callbacks

![](https://cdn-images-1.medium.com/max/800/0*aQG_MSgMwRJc4L-6)
<span class="figcaption_hack">Photo by [Berkeley
Communications](https://unsplash.com/@berkeleycommunications?utm_source=medium&utm_medium=referral)
on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)</span>

Para entender los callback haré una breve analogía.

> Supongamos que nos encontramos hablando por teléfono. Al estar hablando nos
> surge una situación por resolver de manera inmediata. Ponemos la llamada en
espera, realizamos lo que tenemos que hacer y cuando terminamos, volvemos a la
llamada que dejamos en espera.

Bueno, simplemente con esto ejemplo podamos darnos una idea de manera general,
lo que es un callback. Básicamente, como el nombre lo dice es, llamar de
regreso.

Ahora, hablando en lenguaje de programación.

Un callback **es una función que será ejecutada cuando una operación asíncrona
se haya completado**. En el caso de la analogía, seria esa situación urgente, y
cuando este hecho, ejecutará el callback.

Un callback **se pasa como argumento a una operación asíncrona. **Normalmente,
éste se pasa como el último argumento de la función. Es una buena práctica
hacerlo de esta manera.

Enseguida, se muestra la estructura de un callback:

![](https://cdn-images-1.medium.com/max/800/1*eglxCKygfeBhOsn4czfAXA.png)

Lo que hicimos fue, declarar una función el cual imprime en consola un mensaje.
Posteriormente, utilizamos un *timer *llamado **setTimeout**. Este es una
operación asíncrona, el cual ejecuta una función (callback) después de cierto
tiempo. En este caso, después de 3000ms (3 segundos) se ejecuta nuestra función
saludar.

### Patrón del Callback

Como mencionamos al principio, como buenos desarrolladores debemos de respetar
la posición del callback como parámetro. El cual **siempre debe colocarse como
el último**. A esto se le llama el *patrón del callback* o *callback pattern.*

De esta manera, nuestro código será más legible y será mantenido con mayor
facilidad cuando otros programadores trabajen en el.

Veamos otro ejemplo utilizando una libreria de Nodejs:

![](https://cdn-images-1.medium.com/max/800/1*eQUHbxiB5rvEzTXFKQt4_w.png)

En el código de arriba, estamos utilizando una librería de Nodejs para poder
hacer operaciones en nuestro sistema de archivos. En este ejemplo, hacemos uso
de la función *readFile, *el cual sirve para poder leer un archivo. Esta función
recibe dos parámetros (la ruta del archivo y el callback). Como podemos darnos
cuenta el callback que tiene por nombre* onReadFile, *se encuentra como último
parámetro.

> Es común que el callback se declare de manera anónima, pero es una buena
> práctica asignarle un nombre, para en caso de algún error, identificarlo con
mayor facilidad.

Finalmente, ese callback se ejecutará hasta que nuestro código termine de leer
el archivo solicitado. Javascript seguirá ejecutando código durante este proceso
en caso de que exista.

**Te recomiendo leer mi artículo **[Nodejs y el Event
Loop](https://medium.com/@_ferh97/nodejs-y-el-event-loop-21b33fea6b03)** para
comprender con mayor profundidad cómo trabaja Nodejs.**

### Callback Hell

Es emocionante el haber comprendido cómo funcionan los callback y ponerlo en
práctica en nuestro código. Pero como un buen desarrollador hay que saber
emplearlo y así evitar código desagradable como el *callback hell.*

*Callback hell* se le llama al mal uso de los callback. Por lo regular se ve
algo así:

![](https://cdn-images-1.medium.com/max/800/1*SqgtBki-UP96zCOodGjkhQ.png)

Básicamente, el hacer uso de callback anidados es una mala práctica y
visualmente produce una especie de pirámide, como podemos observar. Esto se
vuelve un código difícil de mantener y leer y no queremos eso.

#### ¿Cómo evitar el callback hell?

* Nombrar funciones: Como dije anteriormente, la primer cosa que puedes hacer es
nombrar tus funciones (callbacks). Así cuando se genere un error, te indicará de
manera específica con el nombre de la función el error. Además, de que permites
que tu código sea más descriptivo y al momento de que otros programadores lo
lean, sea más fácil para ellos mantenerlo.
* Modularizar: Una vez, hayas nombrado tus funciones, puedes optar por declararlas
por separado. De esta manera, solamente colocaras el nombre del callback.
Primero, empieza por declararlas en el mismo archivo en la parte de abajo de tu
código. Después, otra opción es hacerlo en un módulo (archivo) aparte. Así
podremos exportarlo e importarlo en el archivo donde lo vayas a utilizar.

Esto permite reusabilidad del código, mayor legibilidad y fácil mantenimiento.

* Manejar errores: Al escribir código debemos tener en mente que siempre podrán
ocurrir errores. Para poder identificarlos fácilmente, es muy importante
escribir código manejando los errores que puedan pasar.

En un callback, por lo general, los errores se pasan como primer parámetro.
Podríamos manejar un error de la siguiente manera:

![](https://cdn-images-1.medium.com/max/800/1*Zqotgg7XqredySmBERBPCA.png)

Aplicando buenas prácticas de código, hace que el resto de los programadores no
te odien por el resto de tu vida! 🙏

*****

### Promesas

![](https://cdn-images-1.medium.com/max/800/0*-C6_By6RL9BW5z4-)
<span class="figcaption_hack">Photo by [Hunter
Newton](https://unsplash.com/@hun7er?utm_source=medium&utm_medium=referral) on
[Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)</span>

Las promesas en Javascript son precisamente eso, promesas. Sabemos que cuando
hacemos una promesa, significa que haremos todo lo posible por lograr el
resultado esperado. Pero, también sabemos que una promesa no siempre se puede
llegar a cumplir por alguna razón.

Tal cual como una promesa es en la vida real, es en Javascript, representado de
otra manera; en código.

Veamos un ejemplo de una promesa:

![](https://cdn-images-1.medium.com/max/800/1*BiAQ3F4QbN1IUQJs5LK0wQ.png)

Una promesa es una clase nativa de Javascript (a partir de ES6).

El constructor de una promesa recibe un argumento: un callback, el cual posee
dos parámetros:

* resolve
* reject

Estas son funciones ya definidas en Javascript, así que no debemos de
construirlas nosotros.

A este callback que cuenta con estas dos funciones como parámetros, se le llama
el **executor.**

El **executor **se ejecuta inmediatamente cuando se crea una promesa.

#### ¿Qué es lo que va a ejecutar la función executor?

Bueno, dentro de este, pondremos todo el código necesario para que nuestra
promesa se cumpla.

Una vez el executor termine de ejecutarse, mandaremos llamar una de las
funciones que tiene como argumento.

* **En caso de que se cumpla**, usaremos la función *resolve.*
* **En caso de que falle por alguna razón**, usaremos la función *reject.*

Las funciones *resolve *y *reject*, solamente reciben un argumento. A la función
reject es común que se le pase un error, como pudimos observar en el ejemplo
anterior.

Las promesas cuentan con tres estados únicos:

* Pending: La operación asíncrona no se ha completado aún.
* Fulfilled: La operación asíncrona se ha completado y retornó un valor.
* Rejected: La operación asíncrona fallo y se indica el motivo por el que falló.

El objeto promesa cuenta con dos propiedades:

* State: Indica el estado de la promesa.
* Result: Almacena el valor de la promesa en caso de ser cumplida o el error en
caso de ser rechazada.

Inicialmente, el estado de una promesa es ‘pending’ y el resultado es
‘undefined’.

Una vez la promesa haya terminado su ejecución, el estado y resultado de la
promesa serán modificados al valor correspondiente. Dependiendo si la promesa
fue completada o rechazada.

Veamos los siguientes gráficos para comprenderlo mejor.

Caso 1:

![](https://cdn-images-1.medium.com/max/800/0*R8Da8QHXBi2qCZAY)

Caso 2:

![](https://cdn-images-1.medium.com/max/800/1*6EiK9fL7zzJNKocGawxw8A.png)

Una vez las promesas cambien su estado no se podrá revertir.

#### ¿Cómo consumir o llamar una promesa?

Para consumir una promesa que hemos creado, utilizaremos las funciones *then *y
*catch*. En código, se verían algo así:

![](https://cdn-images-1.medium.com/max/800/1*85uF0--MRmaCENrzaRqiSQ.png)

* *Then*, nos permitirá manejar las promesas que sean completadas o que se
cumplan.
* *Catch*, nos permitirá manejar las promesas que sean rechazadas.

> En la función *then*, podemos manejar también las promesas rechazadas. Para
> esto, el manejador recibe dos argumentos. El primero será en caso de que la
promesa se cumpla y el segundo en caso de que se rechace. De esta manera:

![](https://cdn-images-1.medium.com/max/800/1*NZ2l1D3Ax3f6rJEKYvDR_w.png)

* Los manejadores *then *y *catch *son asíncronos. Básicamente, éstos* *se
ejecutarán una vez Javascript termine de ejecutar todo el código que esté
después.

Ejemplo:

![](https://cdn-images-1.medium.com/max/800/1*NpSbzE9lAkFz396v20axJA.png)

Podríamos pensar que primero se imprimirá en consola el valor o error de la
promesa. Pero al saber que son **operaciones asíncronas**, debemos tener en
cuenta que** toman un tiempo mínimo para ser ejecutados**, por lo tanto el
mensaje *‘Hola mundo’* es mostrado primero.

*****

La clase Promise tiene un método llamado *all, *la cual sirve para ejecutar un
arreglo de promesas. Se ve algo así:

![](https://cdn-images-1.medium.com/max/800/1*3MDO5bn4fHpyEGK2-vKRtw.png)

El manejador *then, ***imprimirá en consola un arreglo de los resultados de cada
promesa.**

Si una de las promesas es rechazada, esta función será rechazada con un error.
Tal cual como se muestra en la siguiente imagen:

![](https://cdn-images-1.medium.com/max/800/1*CWBrphx41dyhvLTJHfbOCw.png)

Existe otro método similar a *all*, pero con una diferencia. Es el método
*race.*

Al igual que la función *all, *este recibe un arreglo de promesas, pero va a
retornar la promesa que sea completada o rechazada primero. Veamos un ejemplo de
código:

![](https://cdn-images-1.medium.com/max/800/1*MBmQuio7omCj04h1xayefA.png)

Como podemos observar, el valor que nos retorna es únicamente la respuesta de la
segunda promesa. Esto se debe a que **la segunda promesa se ejecuta primero.**

Veamos otro ejemplo con una promesa que es rechazada.

![](https://cdn-images-1.medium.com/max/800/1*TFTMA8D0MVb2q4-2kak2Pw.png)

En este código, la funcion *race, *lo que va a imprimir es el error que encontró
en la tercer promesa que declaramos. Ya se pueden imaginar porque.
Efectivamente, la promesa tres se ejecuta primero que las demás.

Entonces, el método *race, *sin importar que la promesa sea rechazada o
completada**, ejecutará la que primero termine su ejecución e ignorará las
demás.**

*****

Hasta este punto, espero haberme dado a entender sobre callbacks y promesas.
Básicamente, estas dos características de Javascript sirven para el manejo de
operaciones asíncronas. Lo cual es en lo que este lenguaje se basa y por ello su
popularidad. 😊

Continuaré con otro artículo pronto sobre la última funcionalidad de Javascript
para manejar la asincronía. Async — Await. 😉


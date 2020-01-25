---
path: '/post-three'
date: '2019-01-29'
title: 'Conociendo callbacks y promesas'
author: 'Fernando Hernandez'
description: 'The basic async javascript functionalities!'
---

Como todos sabemos Javascript nació siendo un lenguaje de programación
únicamente para la web. Esto indica que solamente funciona en un navegador.

Del lado del servidor podíamos usar cualquier lenguaje de programación que
queramos a excepción de Javascript. Java, C#, Ruby, Python, PHP, etc.

Pero eso cambió hasta hace unos años… 😲

Una persona en el año 2009 decidió crear un entorno de desarrollo para ejecutar
código Javascript del lado del servidor. Se construyó bajo el motor [V8
](https://v8.dev/)de Google. Nodejs realmente tiene poco en el mercado y se ha
vuelto muy popular y agradable para muchos desarrolladores. Sobre todo para
aquellos que usaban Javascript. Pero de la misma manera muchos de ellos
decidieron probar Javascript para empezar a desarrollar con Node y ver el
potencial que tenía para programar en el backend.

Y vaya que lo tiene! Claro, tiene sus ventajas y desventajas como cualquier
tecnología, pero se convirtió en el encanto de muchos programadores.

Bueno, entonces básicamente podemos simplificar que Nodejs es una herramienta
para correr código Javascript en el lado del servidor.

Pero 😑

*****

#### **¿Qué es lo que Nodejs tiene de diferente a otros lenguajes de programación?**

Bueno, Node tiene algo muy distintivo de los demás. El cual es trabajar con un
solo hilo. Si tienes tiempo programando con otros lenguajes, sabrás que muchos
de ellos pueden usar más de un hilo. Esto se debe a que un lenguaje como Java,
se ejecuta de manera secuencial y cuando encuentra un proceso que lleva mucho
tiempo para ejecutarse, el programa debe esperar forzosamente a que el proceso
termine para seguir ejecutando todo el código que hay después de él.

Eso, de alguna manera se puede solucionar, creando nuevos hilos y hacer que
ciertas tareas se ejecuten en segundo plano para continuar con la ejecución**
**del programa.

Pues, aquí es donde entra Nodejs y lo innovador que tiene. Cosas como el *Event
loop, Call Stack, Programación Asíncrona, Callbacks*, etc. Todos estos son
conceptos en común que son la base del funcionamiento de Nodejs y creo que es
indispensable saber cómo y porqué trabaja de esta manera. Así, podremos sacarle
el máximo provecho a la herramienta y escribir un mejor código.

Bueno, empecemos ahora por explicar como trabaja Nodejs.

*****

Como mencioné anteriormente, Node, trabaja con un solo hilo. Esto significa que
solo ejecutará** **un proceso a la vez.

Como desarrolladores de Javascript debemos tener mucho cuidado al programar de
no bloquear este único hilo. Aquí entra la parte de *Blocking* y *Non-Blocking.*

#### Blocking

Es básicamente esperar a que un proceso termine para después continuar con la
ejecución del programa. Esto se hace usando operaciones síncronas, ciclos
infinitos, etc.

#### **Non-Blocking**

Permite que tu programa siga corriendo sin la obligación de esperar a que un
proceso termine su ejecución. Esto se lleva a cabo usando operaciones
asíncronas.

#### ¿**Pero qué son las operaciones síncronas y asíncronas? 😕**

Las *operaciones síncronas*** **nos obligan a esperar a que la tarea termine por
completo su ejecución. En la librería de nodejs, muchas de las operaciones
cuentan con métodos síncronos y asíncronos a la vez.

Las *operaciones asíncronas* nos dan la capacidad de diferir una tarea para
seguir ejecutando las demás. Es decir, el programa se encuentra con una
operación que va a llevar tiempo en completarse, entonces deja que esta corra y
continua con lo demás. Una vez se complete la operación en espera, la ejecuta.

Aprovechando, toquemos el tema de *callbacks.*

#### Callbacks

Los *callbacks* son funciones que se pasan como parámetro de otra función. Son
parte esencial de las operaciones asíncronas.

Por ejemplo, al escribir una función que se encarga de leer un archivo del disco
duro, puedo pasarle una función o mejor llamado callback, el cual va a ser
llamado una vez termine de leer el archivo y va a ejecutar lo que esté dentro de
él. Por ello, el nombre *callback.*

Ahora, pasemos a algo sumamente importante en Nodejs.

#### **Event Loop**

El event loop es el que se encarga de implementar las operaciones asíncronas o
el non-blocking. El event loop corre en el único hilo que existe en Node y como
mencionamos anteriormente, al bloquear el único hilo de node, estamos bloqueando
el event loop.

> **Importante**: Libuv (una librería escrita en C), es el que permite que el
> event loop funcione y todo el comportamiento asíncrono en Node. Puedes conocer
más sobre esta librería ingresando a su [sitio ](https://libuv.org/)oficial.

#### **Call Stack**

Cada vez que una función va a ser ejecutada pasa por el call stack. Como ya
sabemos, al trabajar con operaciones asíncronas, estas poseen callbacks, que se
ejecutarán una vez el proceso de la operación haya terminado y que se irán
añadiendo al *callback queue*.

#### **Callback Queue**

Aquí se agregan los callback o funciones que se ejecutan una vez las operaciones
asíncronas hayan terminado. Se utiliza el método **FIFO** (first input, first
output), traducido, *primero en entrar, primero en salir.*

El event loop es el que se encarga de revisar que el call stack este vacío para
añadir lo que está dentro del *callback queue* y ejecutarlo.

Mostraré lo anteriormente mencionado con un ejemplo de código para lograr
entender de una mejor manera el trabajo del event loop. 😉

![](https://cdn-images-1.medium.com/max/800/1*Wa6DuSyM3yzvDWqc43-ejA.png)

Brevemente explicaré que hace el snippet de código mostrado.

* Linea 1: Obtenemos la librería File System de Nodejs para poder leer un archivo
del disco duro.
* Linea 3: Implementamos la operación asíncrona *readFile, *el cual recibirá como
parámetros la ruta del archivo y el callback.
* Linea 4: Se encuentra un timer, en este caso, *setTimeout *la cual es una
operación asíncrona y posee una función llamada *timeout2* que se ejecutará
después de 4 segundos.
* Linea 9: Operación síncrona que imprimirá en consola el mensaje correspondiente.
* Linea 11: Un timer que posee una función llamada *timeout *que se ejecutará
después de 5 segundos.

Ahora si puedes, piensa por un momento, cómo crees que será el orden en que se
va a ejecutar este código y cuál será el orden en el que se imprimirá en
consola. 😣

*****

Bueno, pasemos a explicar todo el trabajo que Nodejs hace para correr el
programa que escribimos.

![](https://cdn-images-1.medium.com/max/800/1*_vTb8PdvbS9bYy03duP0Pw.png)

Primeramente, se agrega la operación *readFile *al call stack, debido a que es
la primera del programa.

Al ser una operación asíncrona, esta se mueve a la sección de APIs donde ahi
esperaremos a que las herramientas encargadas hagan lo necesario para completar
la tarea.

![](https://cdn-images-1.medium.com/max/800/1*0UcfZpRNXp-OEjJSsqcaLg.png)

El programa estará esperando a que el archivo termine de leerse, pero él
continuará con la ejecución del programa. En este caso, se encuentra una
operación síncrona (se ejecuta de manera muy rápida) que imprime en consola el
mensaje.

![](https://cdn-images-1.medium.com/max/800/1*_NhUtsMan3PQhEKNOCDQnA.png)

Ahora, vemos que la operación de leer el archivo terminó. Por lo tanto, pasa al
*callback queue. *También, vemos que en el call stack se encuentra un timer.
Esto porque es lo que esta después del *console.log anterior.*

![](https://cdn-images-1.medium.com/max/800/1*ZQ72pbgAO383hNjxvmNtEA.png)

El timer posee una función llamada *timeout *que se va a ejecutar después de 5
segundos e imprimirá en consola un mensaje. Por ello, pasa a la sección de APIs
y espera los 5 segundos. Ahora, el event loop revisa si esta vacío el call stack
para ejecutar el *callback *de la operación *readFile*.

![](https://cdn-images-1.medium.com/max/800/1*6tGSp9iraXieXS_NSrAOwg.png)

Al ejecutar el *callback *de la operación *readFile *nos encontramos con otra
operación asíncrona. Un timer, con una función llamada *timeout2*, la cual se
ejecutará dentro de 4 segundos. Seguimos esperando a que pasen los 5 segundos
del primer timer.

![](https://cdn-images-1.medium.com/max/800/1*D8u5VYiddpdEH5Fds4bzIQ.png)

Se agrega la función *timeout2 *a la sección de APIs a esperar que los segundos
pasen.

![](https://cdn-images-1.medium.com/max/800/1*ZmaLd4mE5n4YjTCI1ChouA.png)

Podemos observar que la función *timeout2 *ya terminó su tiempo. Por lo tanto,
pasa al *callback queue *y como el call stack no contiene ninguna operación en
ejecución, lo ejecuta.

![](https://cdn-images-1.medium.com/max/800/1*2egjCVogk59WODAzrydwIg.png)

Se ejecuta el callback de la funcion timeout2, el cual imprime en consola el
archivo en formato JSON. También, vemos que la operación *timeout *culmino y se
agrega al *callback queue.*

![](https://cdn-images-1.medium.com/max/800/1*uriotJoRdulyfvOOQCFhVg.png)

Finalmente, el event loop vuelve a revisar el *call stack* y ejecuta el
*callback *de la función que estaba en el *callback queue.*

*****

Al no encontrar nada mas el event loop dentro del call stack, el programa se
acaba. El resultado final del programa seria el siguiente:

    Hello Event Loop
    {name: Fernando Hernández, age: 21}
    Hi, I’m executed

Te recomiendo leer las guías de la documentación oficial de nodejs en su
[sitio](https://nodejs.org/en/docs/guides/).


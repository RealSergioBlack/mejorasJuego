# Actividad de programacion master
# Mejoras Pablo:

    Update gitignore file
    El texto de la puntuación ya sigue a la cámara manteniéndose en la esquina superior izquierda todo el tiempo (punto 4)
    La puntuación del jugador ya se suma y además empieza en 0 y no en 1, ya que no ha recogido ninguna seta al comienzo (punto 5)
    Creada la clase Score para manejar todo lo relacionado con los puntos del personaje (arreglo puntos 4 y 5)
    El texto de la puntuación es negro y no se ve sobre el fondo negro, asi que ahora es azul a menos que alguien quiera juguetear con el fondo (creo Albert le estaba echando un ojo)
    Eliminado el warning de las animaciones de caminar
    generateFrameNames: Frame missing: walk-17 from texture: sprites_jugador phaser.min.js:1:337942
    generateFrameNames: Frame missing: walk-18 from texture: sprites_jugador phaser.min.js:1:337942
    Refactoring adicional en algunas clases y comentarios añadidos

# Mejoras Sergio
Más detalles en los comentarios de los commits que vendrán bien para escribir brevemente una bonita memoria para Ismael
  * Realizada separación de clases y código inicial:
    - Separado el cargado de recursos a una nueva clase la cual permita realziar la carga de recursos
    - Separada creación de objetos (npc/setas) a una nueeva clase la cual permite realziar la carga de objetos del juego
  * Mejorada movilidad del jugador:
    - El jugador ya no puede moverse a la izquierda y salirse del mapa
    - En caso de caerse el jugador, vuelve a la posicion inicial
    - Modificada velocidad de salto del jugador de forma consistente
    
# Mejoras Albert

  * Se han arreglado las capas del tilemap fondo y suelo. Se ha generado un nuevo Map.Json con Tiled
  * Mejoras jugador:
    - Ajuste tamaño del collider (body) cargando un bitmap en ResourceLoader.js un bitmap con el tamaño del jugador. Se aplica un offset al body.
    - En Player.js se ajusta el tamaño de las animaciones (cantidad de frames) del jugador para que no salgan los warnings.
    -La velocidad de movimiento y salto variaban mucho en funcion del equipo en que se ejecutaba. Se elimina delta. Delta tiene sentido si movemos el jugador por           posición , pero no por velocidad. Esta no debe variar en funcion del framerate
* Correcciones Cielo de fondo.
    - Se escala el tamaño del tilemap para que tenga el mismo tamaño en altura que el mapa. Se aplica un offset para que la esquina superior del mapa y la del tieset coincidan.
    - Como es necesario saber las dimensiones del mapa antes de aplicar el escalaso la lines de declaracion de map se pone al principio.



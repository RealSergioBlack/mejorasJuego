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

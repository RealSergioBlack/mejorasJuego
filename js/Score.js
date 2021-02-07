/**
 * Clase Score
 * Representa la puntuación del jugador.
 * 
 */
class Score {

    constructor(scene) {
        // escena
        this.scene = scene;
        // puntos por defecto al inicio
        this.points = 0;
        // puntos en texto
        this.text = 'PUNTOS : ';
    }

    /**
     * Inicializar la puntuación a 0 puntos al principio de la sesión de juego, ya que, el jugador no ha recogido ninguna seta.
     */
    initScore() {
        // hacemos setup del texto que muestra la puntuación y lo añadimos a la escena
        this.scene.scoreText = this.scene.add.text(16, 16, "", { 
            fontSize: '20px', 
            fill: '#000', 
            fontFamily: 'verdana, arial, sans-serif'
        });
        // añadimos los puntos, 0 al inicializar, al texto de la puntuación y a la puntuación numérica
        this.addPointsToScore(this.points);
    }

    /**
     * Suma la cantidad de puntos obtenidos a la puntuación y actualiza el texto que los muestra con dicha cantidad.
     * @param {los puntos obtenidos a añadir a la puntuación} points 
     */
    addPointsToScore(points) {
        this.points = this.points + points;
        this.scene.scoreText.setText(this.text + this.points);
        // esta es una forma de hacer que el texto siga al jugador, igual que hace la camara, cuando se mueve
        this.scene.scoreText.setScrollFactor(0);
        this.scene.scoreText.setColor('#00f');
    }

}
/**
 * Clase Setup
 * Inicializa algunos objetos utilizados en la escena como la puntiación, el object creator para inicializar las setas y la cámara
 * con su configuración por defecto.
 */
class Setup {

    constructor(scene, map) {
        this.scene = scene;
        this.map = map;
    }

    /**
     * Inicializa y crea una instancia del objeto score que representa la puntuación del jugador.
     */
    setupScore() {
        this.scene.score = new Score(this.scene);
        this.scene.score.initScore();
    }

    /**
     * Inicializa y crea una instancia del creador de objectos, en este caso el que será el cargador de setas en la escena.
     */
    setupObjects() {
        this.scene.objecCreator = new ObjectCreator(this.scene, this.map);
        this.scene.objecCreator.createObjects();
    }
 
    /**
     * Inicializa y configura la camara asociada a la escena.
     * @param {la referencia a la cámara} camera 
     * @param {la posición en el eje X} x 
     * @param {la posición en el eje Y} y 
     * @param {la achura en píxeles} widthInPixels 
     * @param {la altura en píxeles} heightInPixels 
     */
    setupMainCamera(camera, x, y, widthInPixels, heightInPixels) {
        camera.startFollow(this.scene.player);
        camera.setBounds(x, y, widthInPixels, heightInPixels);
    }

}
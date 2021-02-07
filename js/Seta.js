/**
 * Clase Seta
 * Representa el objeto seta que recoge y da puntos al jugador.
 */
class Seta extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y)
    {
        super(scene,x+16,y-16,'tilesSprites',114);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.allowGravity = false;
        // añadirmos puntos que vale coger la seta
        this.points = 1;
    }


    update(time,delta)
    {

    }

    /**
     * Configura el collider entre la seta y el jugador, así como, el método que se dispara cuando el jugador colisiona con la seta.
     */
    setupSetaCollider() {
        // añadimos la funcionalidad de añadir sus puntos al colisionar con el jugador
        this.scene.physics.add.overlap(this, this.scene.player, this.OnCollisionEnter, null, this.scene);
        // hacemos la seta inamovible ya que por defecto cuando se añade un collider puede ser movida al colisionar
        this.body.immovable = true;
    }

    /**
     * Define y procesa la lógica que se ejecuta cuando el jugador colisiona con la seta.
     */
    processSetaColision() {
        // sumar puntos antes de destruir la seta
        this.scene.score.addPointsToScore(this.points);
        // destruir la seta para desaparezca de la pantalla
        this.destroy(true);
    }

    /**
     * Procesa el evento de colisión entre una seta y el jugador
     * @param {la referencia de la seta colisionada por el jugador} seta 
     * @param {la referencia del jugador que colisiona con la seta} player 
     */
    OnCollisionEnter(seta, player) {
        seta.processSetaColision();
    }
}
/**
 * Clase MainScene
 * Representa la escena principal.
 */
class MainScene extends Phaser.Scene
{
    /**
     * Precargamos los recursos en la escena
     */
    preload()
    {
        this.resourceLoader = new ResourceLoader(this);
        this.resourceLoader.loadResources();
    }

    create()
    {
        let bg_1 = this.add.tileSprite(0, 0, windows.width*2, windows.height*2, 'bg-1');
        bg_1.fixedToCamera = true;

        // instanciamos el player
        this.player = new Player(this,50,100);

        // mapa de tiles     
        let map = this.make.tilemap({ key: 'map' });
        let tiles = map.addTilesetImage('Plataformas', 'tiles');
        
        // capas
        let layerFondo = map.createLayer('Fondo', tiles, 0, 0);
        let layerSuelo = map.createLayer('Suelo', tiles, 0, 0);

        // enable collisions for every tile
        layerSuelo.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.player, layerSuelo);

        // hacemos el setup de objetos que controlan la cámara, la puntuación y cargan las seta en la escena
        this.setup = new Setup(this, map);
        this.setup.setupMainCamera(this.cameras.main, 0, 0, map.widthInPixels, map.heightInPixels);
        this.setup.setupObjects(this);
        this.setup.setupScore(this);
    }
    
    update (time, delta)
    {
        this.player.update(time,delta);
        // Comprobamos si la y del jugador es mayor  a 420 (final del mapa)
        if(this.player.y > 420) {
            /* Hay dos opciones añadir una pantalla de muerte o de reinicio o directamente reiniciar
             en este caso reiniciaremos directamente al llamar al metodo restartLevel hacemos una llamadqa
             al metodo create que vuelve a poner todos los elementos de forma inicial
             */

            this.restartLevel()
        }
        if(this.player.x <= 0) {
            /*
            En este caso añadimos un "muro" estableciendo la posicion del jugador a 0 siempre que esta sea
            0 o menor que 0 evitando asi que se mueva
            */
            this.player.x = 0
        }
    }

    /**
     * Reiniciamos el nivel cuando el jugador muere.
     * En nuestro caso cuando se cae al abismo o al agua.
     */
    restartLevel () {
        this.create()
    }

}
/**
 * Clase ResourceLoader
 * Define y carga recursos en la escena como el fondo, los tiles del mapa de tiles o el sprite del jugador.
 */
class ResourceLoader {
    
    constructor (scene) {
        this.scene = scene
    }

    /**
     * Carga los recursos en la escena.
     */
    loadResources () {
        // El cargado de los recursos de imagenes quiza pueda añadirse directamente en
        // el constructor, en este caso lo añado en este metodo
        this.scene.load.image('tiles','res/Tileset.png');
        this.scene.load.tilemapTiledJSON('map','res/Map.json');
        this.scene.load.image('bg-1', 'res/sky.png');
        this.scene.load.image('sea', 'res/sea.png');
        this.scene.load.image('player', 'res/player_init.png');
        //Phaser.Physics.Arcade.Sprite
        // https://gammafp.com/tool/atlas-packer/
        this.scene.load.atlas('sprites_jugador','res/player_anim/player_anim.png',
        'res/player_anim/player_anim_atlas.json');
        this.scene.load.spritesheet('tilesSprites','res/Tileset.png',
        { frameWidth: 32, frameHeight: 32 });
    }
}
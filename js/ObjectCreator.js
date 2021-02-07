/**
 * Clase ObjectCreator
 */
class ObjectCreator {
    
    constructor (scene, map) {
        this.scene = scene;
        this.map = map;
    }

    createObjects () {
        this.scene.objetos = this.map.getObjectLayer('objetos')['objects'];
        this.scene.setas = [];
        for(var i = 0; i < this.scene.objetos.length; ++i)
        {
            var obj = this.scene.objetos[i];
            if(obj.gid == 115) // en mi caso la seta
            {
                // instanciamos un objeto tipo seta
                var seta = new Seta(this.scene, obj.x, obj.y);
                // añadimos su collider y funcionalidad asociada
                seta.setupSetaCollider();
                // añadimos la nueva seta a nuestra colección de setas
                this.scene.setas.push(seta);
            }
        }
    }
}
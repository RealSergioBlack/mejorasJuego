class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene,x,y)
    {
        super(scene,x,y,'player');
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        //continuación
        this.cursor = this.scene.input.keyboard.createCursorKeys();
       

        this.anims.create({
            key: 'walk',
            frames: this.scene.anims.generateFrameNames('sprites_jugador', { start: 1, end: 18, prefix: 'walk-' }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'idle',
            frames: this.scene.anims.generateFrameNames('sprites_jugador', { start: 1, end: 4, prefix: 'idle-' }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            frames: this.scene.anims.generateFrameNames('sprites_jugador', { start: 1, end: 4, prefix: 'jump-' }),
            frameRate: 5,
            repeat: -1
        });
        
		this.body.width = 23;  //Ajuste del tamaño collider (body) para que encaje con el sprite del jugador
        this.body.height = 50;
        this.body.setOffset(24,16);
        
    }

    update(time,delta)
    {
        if(this.cursor.left.isDown)
        {
            this.setVelocityX(-10*delta);
            
            this.setFlipX(true); 
        }
        else if(this.cursor.right.isDown)
        {
            this.setVelocityX(10*delta);
            this.setFlipX(false); 
        }
        else
        {
            //Parado
            this.setVelocityX(0);
        }

        if (this.cursor.space.isDown && this.body.onFloor()) {
            
            this.setVelocityY(-20*delta);
        }


        if(!this.body.onFloor())
            this.play('jump', true);
        else if(this.body.velocity.x != 0)
            this.play('walk', true);
        else
            this.play('idle', true);
    }
}

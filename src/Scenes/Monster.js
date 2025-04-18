class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.aKey = null;
        this.dKey = null;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");

        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "mouthA.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "mouth_closed_fangs.png");

        my.sprite.happyEye = this.add.sprite(this.bodyX, this.bodyY - 50, "monsterParts", "eye_yellow.png");
        my.sprite.angryEye = this.add.sprite(this.bodyX, this.bodyY - 50, "monsterParts", "eye_red.png");

        my.sprite.rightHorn = this.add.sprite(this.bodyX + 50, this.bodyY - 90, "monsterParts", "snot_large.png");
        my.sprite.leftHorn = this.add.sprite(this.bodyX - 50, this.bodyY - 90, "monsterParts", "snot_large.png");
        my.sprite.leftHorn.flipX = true;
        
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 50, this.bodyY + 135, "monsterParts", "leg_whiteC.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 50, this.bodyY + 135, "monsterParts", "leg_whiteC.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.rightArm = this.add.sprite(this.bodyX + 85, this.bodyY + 50, "monsterParts", "arm_greenB.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX - 85, this.bodyY + 50, "monsterParts", "arm_greenB.png");
        my.sprite.leftArm.flipX = true;

        my.sprite.fangs.visible = false;
        my.sprite.angryEye.visible = false;

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        sKey.on('down', (key, event) => {
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
            my.sprite.happyEye.visible = true;
            my.sprite.angryEye.visible = false;
        });
        
        //Event input: regular smile
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        fKey.on('down', (key, event) => {
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
            my.sprite.happyEye.visible = false;
            my.sprite.angryEye.visible = true;
        });
        
        

        if (this.dKey.isDown) {
            my.sprite.body.x += 5;
            my.sprite.fangs.x += 5;
            my.sprite.smile.x += 5;
            my.sprite.happyEye.x += 5;
            my.sprite.angryEye.x += 5;
            my.sprite.rightHorn.x += 5;
            my.sprite.leftHorn.x += 5;
            my.sprite.rightArm.x += 5;
            my.sprite.leftArm.x += 5;
            my.sprite.rightLeg.x += 5;
            my.sprite.leftLeg.x += 5;
            

        } else if (this.dKey.isUp) {
            my.sprite.body.x += 0;
            my.sprite.fangs.x += 0;
            my.sprite.smile.x += 0;
            my.sprite.happyEye.x += 0;
            my.sprite.angryEye.x += 0;
            my.sprite.rightHorn.x += 0;
            my.sprite.leftHorn.x += 0;
            my.sprite.rightArm.x += 0;
            my.sprite.leftArm.x += 0;
            my.sprite.rightLeg.x += 0;
            my.sprite.leftLeg.x += 0;

        }

        if (this.aKey.isDown) {
            my.sprite.body.x -= 5;
            my.sprite.fangs.x -= 5;
            my.sprite.smile.x -= 5;
            my.sprite.happyEye.x -= 5;
            my.sprite.angryEye.x -= 5;
            my.sprite.rightHorn.x -= 5;
            my.sprite.leftHorn.x -= 5;
            my.sprite.rightArm.x -= 5;
            my.sprite.leftArm.x -= 5;
            my.sprite.rightLeg.x -= 5;
            my.sprite.leftLeg.x -= 5;
           

        } else if (this.aKey.isUp) {
            my.sprite.body.x;
            my.sprite.fangs.x;
            my.sprite.smile.x;
            my.sprite.happyEye.x;
            my.sprite.angryEye.x;
            my.sprite.rightHorn.x;
            my.sprite.leftHorn.x;
            my.sprite.rightArm.x;
            my.sprite.leftArm.x;
            my.sprite.rightLeg.x;
            my.sprite.leftLeg.x;

        }


       
    }

}
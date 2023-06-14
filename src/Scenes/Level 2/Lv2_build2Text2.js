class Lv2_build2Text2 extends Phaser.Scene {
    constructor(){
        super('lv2build2text2Scene')
    }

    create() {
        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            color: '#FFFFFF',
            align: 'center',
            fixedWidth: 300
        }

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        this.screenText = this.add.text(game.config.width/2, game.config.height/2, "Gah. Head is throbbing...", textConfig).setOrigin(0.5);
        this.time.delayedCall(3000, () => {
            this.screenText.setText("Why do I feel like I need\nto head to the bathroom?")
        })
        this.time.delayedCall(6000, () => {
            this.scene.start('lv2build2_noObjects_Scene')
        })
    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('lv2build2_noObjects_Scene');
        }
    }
}
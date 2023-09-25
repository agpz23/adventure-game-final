class Player extends Sprite {
    constructor({ collisionBlocks = [], imageSrc, frameRate, animations }) {
        super({imageSrc, frameRate, animations })
        this.position = {
            x: 100,
            y: 100,
        }

        this.velocity = {
            x: 0,
            y:0,
        }

        this.sides = {
            bottom: this.position.y + this.height
        }
        this.gravity = 1
        this.collisionBlocks = collisionBlocks
    }

    update() {
        this.position.x += this.velocity.x

        this.checkForHorizontalCollisions()
        this.applyGravity()
        this.checkForVerticalCollisions()
    }

    switchSprite(name) {
        if (this.image === this.animations[name].image) return
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
        

    }

    checkForHorizontalCollisions() {
        // check for horizontal collisions
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]   
        if (
            this.position.x <= collisionBlock.position.x + collisionBlock.width &&
            this.position.x + this.width >= collisionBlock.position.x &&
            this.position.y + this.height >= collisionBlock.position.y &&
            this.position.y <= collisionBlock.position.y + collisionBlock.height
        ) {
            //collision on x axis going to the left
            if (this.velocity.x < 0) {
                this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                break
            }
            if (this.velocity.x > 0) {
                this.position.x = collisionBlock.position.x - this.width - 0.01
                break
                }

            }
        }
    }
    applyGravity() {
         // apply gravity
         this.velocity.y += this.gravity
         this.position.y += this.velocity.y
    }
    checkForVerticalCollisions() {
        // check for vertical collisions
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]   
        if (
            this.position.x <= collisionBlock.position.x + collisionBlock.width &&
            this.position.x + this.width >= collisionBlock.position.x &&
            this.position.y + this.height >= collisionBlock.position.y &&
            this.position.y <= collisionBlock.position.y + collisionBlock.height
        ) {
            //collision on x axis going to the left
            if (this.velocity.y < 0) {
                this.velocity.y = 0
                this.position.y = 
                collisionBlock.position.y + collisionBlock.height + 0.01
                break
            }
            if (this.velocity.y > 0) {
                this.velocity.y = 0
                this.position.y = collisionBlock.position.y - this.height - 0.01
                break
                }

            }
        }
    }
}
        // above bottom of canvas
      /*  if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.sides.bottom = this.position.y + this.height
        } else this.velocity.y = 0
    }
} 
*/
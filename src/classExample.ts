class Bird {
    // In a class you can declare properties just like you can for an object
    name: string
    canFly: boolean
    // The above properties are just placeholders
    // They do not have any value tied to them
    
    // This property we are assigning it a permantent value
    hasFeathers: boolean = true

    flapWings() {
        if(this.canFly === true){
            console.log(`The ${this.name} flaps it's wings and majestically takes off into the sky`)
        }
        else {
            console.log(`The ${this.name} flaps it's wings, but is too heavy to leave the ground`)
        }
    }

    // Next up let's make our constructor
    // In our constructor we'll give parameters for our constructor to use 
    // in order to change the above properties
    constructor(name, canFly) {
        // The word 'this' in typescript is referring back to anything currently inside of this class
        // We'll want to use the parameters in the constructor to alter the values of the properties we'll
        // need to change.
        this.name = name
        this.canFly = canFly
    }
}
let myBirds: Array<Bird> = [
    new Bird('Goldfinch', true),
    new Bird('Robin', true),
    new Bird('Peacock', true),
    new Bird('Kiwi', false),
    new Bird('Emu', false)
]

myBirds[3].flapWings()

let toucan: Bird = new Bird('Toucan', true)
let penguin: Bird = new Bird('Emperor Penguin', false)

toucan.flapWings()
penguin.flapWings()
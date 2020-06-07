/** Example of using discriminated unions */

interface Bird {
    /** adding literal type */
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    /** adding literal type */
    type: 'horse'
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal): void {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed); 
} 

moveAnimal({type: 'bird', flyingSpeed: 100})

function getAnimals(animal){
    for(let key in animal){
        if(animal.hasOwnProperty(key)){
            console.log(key + ' = ' + animal[key])
        }
    }
}

const dog = {
    name: 'Mira',
    age: 4,
    breed: 'pinscher'
}


getAnimals(dog)
function Device(name){
    this.name = name,
    this.switch = true,
    this.power = 0
}

Device.prototype.info = function() {
    console.group(`Инфорация об устройстве -  ${this.name}`)
    console.log(`Потребляемая мощность ${this.power} Вт`)
    this.switch ? console.log(`Прибор включен`) : console.log(`Прибор выключен`)
    console.groupEnd()
}

Device.prototype.switcher = function() {
    if (this.switch) {
        this.switch = false
        console.log(`Прибор ${this.name} выключен`)
    } else {
        this.switch = true
        console.log(`Прибор ${this.name} включен`)
    }
    return this.switch
}

function Lamp(name, power, color){
    this.name = name,
    this.power = power,
    this.color = color
}
Lamp.prototype = new Device()

function Computer(name, power, type){
    this.name = name,
    this.power = power,
    this.type = type
}

Computer.prototype = new Device()

const lamp1 = new Lamp('Настольная лампа', 80, 'red')
const computer1 = new Computer('PC1', 95, 'настольный')

lamp1.info()
lamp1.switcher()
console.log(lamp1)

computer1.info()
computer1.switcher()
console.log(computer1)

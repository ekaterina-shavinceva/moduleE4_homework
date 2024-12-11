class Device {
    constructor(name) {
        this.name = name;
        this.switch = true;
        this.power = 0;
    }

    info() {
        console.group(`Информация об устройстве -  ${this.name}`);
        console.log(`Потребляемая мощность: ${this.power} Вт`);
        this.switch ? console.log(`Прибор включен`) : console.log(`Прибор выключен`);
        console.groupEnd();
    }

    switcher() {
        if (this.switch) {
            this.switch = false;
            console.log(`Прибор ${this.name} выключен`);
        } else {
            this.switch = true;
            console.log(`Прибор ${this.name} включен`);
        }
        return this.switch;
    }
}

class Lamp extends Device {
    constructor(name, power, color) {
        super(name);
        this.power = power;
        this.color = color;
    }
}

class Computer extends Device {
    constructor(name, power, type) {
        super(name);
        this.power = power;
        this.type = type;
    }
}

const lamp1 = new Lamp('Настольная лампа', 80, 'red');
const computer1 = new Computer('PC1', 95, 'настольный');

lamp1.info();
lamp1.switcher();
console.log(lamp1);

computer1.info();
computer1.switcher();
console.log(computer1);
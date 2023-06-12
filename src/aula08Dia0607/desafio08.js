class Forma {
    calcularArea() {

    }
}

class Retangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = parseFloat(base);
        this.altura = parseFloat(altura);
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

class Trapezio extends Forma {
    constructor(baseMaior, baseMenor, altura) {
        super();
        this.baseMaior = parseFloat(baseMaior);
        this.baseMenor = parseFloat(baseMenor);
        this.altura = parseFloat(altura);
    }

    calcularArea() {
        return (this.baseMaior + this.baseMenor) * this.altura / 2;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = parseFloat(raio);
    }

    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}

const retangulo = new Retangulo(10, 20);
const trapezio = new Trapezio(20, 10, 30);
const circulo = new Circulo(10);

console.log(retangulo.calcularArea());
console.log(trapezio.calcularArea());
console.log(circulo.calcularArea());
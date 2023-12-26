
class Heroi{
    constructor(name, age, tipo){
        this.name =  name;
        this.age = age;
        this.tipo = tipo;
    }
    Atacar(){
        let atacar;
        switch(this.tipo){
            case 'guerreiro':
                atacar = "espada"
            break;
            case 'mago':
                atacar = "magia"
            break;
            case 'monge':
                atacar = "artes marciais"
            break;
            case 'ninja':
                atacar = "shuriken"
            break;
        }
        console.log(`O ${this.tipo} atacou usando ${atacar}`);
    }
}

const guerreiro = new Heroi("Gabrielly", 20, "guerreiro");
const mago = new Heroi("Chico", 10, "mago");
const monge = new Heroi("Josefino", 50, "monge");
const ninja = new Heroi("Caramelo", 26, "ninja");

guerreiro.Atacar();
mago.Atacar();
monge.Atacar();
ninja.Atacar();

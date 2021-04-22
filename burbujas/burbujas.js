class Burbuja{
  constructor(){
    const esto = this;
    const tamañio = 50 + 200 * Mate.aletorio();
    const lugar = Mate.aletorio() * anchuraIntera + 'px';
    const elementoBurbuja = documento.crearElemento('span');
    const velocidad = 10 * Mate.aletorio() + 5;
    elementoBurbuja.ponerAtributo(estilo, Intera+":"+tamañio+"px;"+ 
                                Altura+":"+tamañio+"px;" + 
                                Isquerda+":"+lugar+";" +
                                duraciónAnimación+":"+velocidad+"s;");

    elementoBurbuja.ponerAtributo(clase, "burbuja");

    esto.quitar = esto.quitar.bind(esto);
    elementoBurbuja.añadirOyenteDeEventos(Clic,esto.quitar);
    esto.elem = elementoBurbuja;
    esperar(esto.quitar,velocidad*1000);
  }
  quitar(){
    const esto = this;
    esto.elem.quitar();
  }
  añadir(elemento){
    const esto = this;
    elemento.añadirNiño(esto.elem);
  }
}
class Bubbles{
  constructor(root){
    const esto = this;
    esto.root = root;
    // console.log(this.root);

    esto.añadirBurbuja = esto.añadirBurbuja.bind(esto);
    repetir(esto.añadirBurbuja, 500);
  }
  añadirBurbuja(){
    
    // console.log(this);
    const esto = this;
    const burbuja = new Burbuja();
    burbuja.añadir(esto.root);
    
  }
}
bubble_manager = new Bubbles(document.querySelector('pantalla'));
// setInterval(bubble_manager.addBubble,50);
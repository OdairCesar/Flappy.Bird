/* Criando as barreias */
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reserva = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reserva ? corpo : borda)
    this.elemento.appendChild(reserva ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

/** TESTANDO A CRIAÇÃO DE BARREIRA */

// const b = new Barreira(true)
//b.setAltura(300)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)

/* Posicionando as Barreiras */
function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    /** Separando uma em cima e outra em baixo*/
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior

        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    /** Funções para mover as Barreiras da direita para esquerda */
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

/** TESTANDO A DUPLA DE BARREIRAS E SEU POSICIONAMENTO */
//const b = new ParDeBarreiras(700, 200, 800)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)
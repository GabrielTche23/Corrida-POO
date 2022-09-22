let resultado = 0
let carros = []

class Carro{
    NomeEquipe
    Potencia
    VelocidadeMax
    Aceleracao

    TempoEmSegundos(distanciaParametro){
        return resultado = distanciaParametro / (this.VelocidadeMax / this.Aceleracao)
    }
}

let carro1 = new Carro()
carro1.NomeEquipe = "McLaren"
carro1.Potencia = 500
carro1.VelocidadeMax = 260
carro1.Aceleracao = 5

let carro2 = new Carro()
carro2.NomeEquipe = "Ferrari"
carro2.Potencia = 600
carro2.VelocidadeMax = 280
carro2.Aceleracao = 6

let carro3 = new Carro()
carro3.NomeEquipe = "Mercedez"
carro3.Potencia = 800
carro3.VelocidadeMax = 300
carro3.Aceleracao = 4

carros.push(carro1)
carros.push(carro2)
carros.push(carro3) 

class Corrida{
    NomeLocal
    Tipo
    Distancia
    Vencedor

    VerificarVencedor(){
        let menorTempo = Infinity
        let vencedor
        carros.forEach((carro,index) =>{
        tempo = carro.TempoEmSegundos(this.Distancia)
        if(tempo < menorTempo ){
            menorTempo = tempo
            vencedor = carro.NomeEquipe
        } 
        })
        return this.Vencedor
    }

    ExibirVencedor(){
        console.log(this.Vencedor)
    }
}

let muriaeCorrida = new Corrida()
muriaeCorrida.NomeLocal = "Muriaé"
muriaeCorrida.Tipo = "Stock Car"
muriaeCorrida.Distancia = 10000
muriaeCorrida.Vencedor = 0
muriaeCorrida.ExibirVencedor()
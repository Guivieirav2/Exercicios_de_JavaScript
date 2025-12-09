
    class Carros {
        marca;
        cor;
        gastoMedioPorKm;

        constructor(marca, cor, gastoMedioPorKm){
            this.marca = marca;
            this.cor = cor;
            this.gastoMedioPorKm = gastoMedioPorKm;
        }
        calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
            return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
           
        
        }
    }

    const uno = new Carros('Fiat', 'prata', 1/12);
    console.log(uno.calcularGastoDePercurso(70, 5));
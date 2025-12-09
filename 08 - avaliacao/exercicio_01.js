
const { gets, print } = require ('./funcoes-auxiliares_01');

const media = gets();

if(media < 5){
    print('reprovado');
} else if (media >= 5 && media < 7) {
    print('recuperação');
} else {
    print('reprovado');
}



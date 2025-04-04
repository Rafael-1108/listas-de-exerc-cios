let numero1 = 50;
let numero2 = 10;
let operacao = "adição";

let subtracao = numero1 - numero2
let adicao = numero1 + numero2
let divisao = numero1 / numero2
let multiplicacao = numero1 * numero2

switch (operacao) {
    case "subtração":
        console.log(subtracao);
break;
    case "adição":
        console.log(adicao);
break;
    case "divisão":
        console.log(divisao);
break;
    case "multiplicação":
        console.log(multiplicacao);
break;
    default:
        console.log("Operação ou número(os) inválidos")
}

//Rafael - 04/04 - 08:18
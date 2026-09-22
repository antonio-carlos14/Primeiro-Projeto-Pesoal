// Calendário de estudos mensal (DEZEMBRO)
let dezembro_1 = true
let dezembro_2 = true
let dezembro_3 = true
let dezembro_4 = true
let dezembro_5 = true
let dezembro_6 = true
let dezembro_7 = true
let dezembro_8 = true
let dezembro_9 = true
let dezembro_10 = true
let dezembro_11 = true
let dezembro_12 = true
let dezembro_13 = true
let dezembro_14 = true
let dezembro_15 = true

// ================================================================================= //
// DEFINA O DIA EM QUE VOCÊ DESEJA CONSULTAR
let diaAtual = 1
// ================================================================================= //

// CONDICIONAIS DE DEZEMBRO (Usando 'else if' e o operador '&&')

if (diaAtual === 1 && dezembro_1) {
    console.log("Matemática financeira, destina-se 4 horas");
} else if (diaAtual === 1 && !dezembro_1) {
    console.log("Atividade não realizada");
} else if (diaAtual === 2 && dezembro_2) {
    console.log("Aprofundamento sobre geometrias, destina-se 4 horas");
} else if (diaAtual === 2 && !dezembro_2) {
    console.log("Atividade não realizada");
} else if (diaAtual === 3 && dezembro_3) {
    console.log("Revisar/finalizar conteúdos vistos em sala, destina-se 4 horas");
} else if (diaAtual === 3 && !dezembro_3) {
    console.log("Atividade não realizada");
} else if (diaAtual === 4 && dezembro_4) {
    console.log("Física, destina-se 2 horas");
} else if (diaAtual === 4 && !dezembro_4) {
    console.log("Atividade não realizada");
} else if (diaAtual === 5 && dezembro_5) {
    console.log("Linguagens, destina-se 2 horas");
} else if (diaAtual === 5 && !dezembro_5) {
    console.log("Atividade não realizada");
} else if (diaAtual === 6 && dezembro_6) {
    console.log("Estudo livre, destina-se 1:30");
} else if (diaAtual === 6 && !dezembro_6) {
    console.log("Atividade não realizada");
} else if (diaAtual === 7 && dezembro_7) {
    console.log("Geometria espacial, destina-se 4 horas");
} else if (diaAtual === 7 && !dezembro_7) {
    console.log("Atividade não realizada");
} else if (diaAtual === 8 && dezembro_8) {
    console.log("Revisar noções de cálculo, destina-se 3 horas");
} else if (diaAtual === 8 && !dezembro_8) {
    console.log("Atividade não realizada");
} else if (diaAtual === 9 && dezembro_9) {
    console.log("Estudar geometria analítica, destina-se 4 horas");
} else if (diaAtual === 9 && !dezembro_9) {
    console.log("Atividade não realizada");
} else if (diaAtual === 10 && dezembro_10) {
    console.log("Estudar geometria plana, destina-se 3:30");
} else if (diaAtual === 10 && !dezembro_10) {
    console.log("Atividade não finalizada");
} else if (diaAtual === 11 && dezembro_11) {
    console.log("Estudar geometria não euclidiana, destina-se 4 horas");
} else if (diaAtual === 11 && !dezembro_11) {
    console.log("Atividade não realizada");
} else if (diaAtual === 12 && dezembro_12) {
    console.log("Estudar geometria fractal, destina-se 2 horas");
} else if (diaAtual === 12 && !dezembro_12) {
    console.log("Atividade não realizada");
} else if (diaAtual === 13 && dezembro_13) {
    console.log("Estudar geometria descritiva, destina-se 3 horas");
} else if (diaAtual === 13 && !dezembro_13) {
    console.log("Atividade não finalizada");
} else if (diaAtual === 14 && dezembro_14) {
    console.log("Estudar cálculo integral, destina-se 4 horas");
} else if (diaAtual === 14 && !dezembro_14) {
    console.log("Atividade não realizada");
} else if (diaAtual === 15 && dezembro_15) {
    console.log("Estudar cálculo vetorial, destina-se 2:30");
} else if (diaAtual === 15 && !dezembro_15) {
    console.log("Atividade não realizada");
} else {
    console.log("Dia não cadastrado no cronograma");
}

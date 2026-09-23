  // Calendário de estudos mensal (9 ANO) //
 // ESTUDO VOLTADO Á PREPARAÇÃO PARA O ENSINO MÉDIO //
// ÁREA DAS EXATAS //
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
// DEFINA O DIA EM QUE VOCÊ DESEJA CONSULTAR //
let diaAtual = 15
// ================================================================================= //
// EXIBIÇÃO DA TAREFA DO DIA SELECIONADO 
// AS CONDICIONAIS APRESENTARÃO A SITUAÇÃO DOS ESTUDOS,SE REALIZADOS OU NÃO

// DIA 1
if (diaAtual === 1 && dezembro_1 === true) {
    console.log("Estudo sobre números reais, destina-se 4 horas")
} else if (diaAtual === 1 && dezembro_1 === false) {
    console.log("Atividade não realizada")
}

// DIA 2
if (diaAtual === 2 && dezembro_2 === true) {
    console.log("Revisão sobre números reais, destina-se 4 horas")
} else if (diaAtual === 2 && dezembro_2 === false) {
    console.log("Atividade não realizada")
}

// DIA 3
if (diaAtual === 3 && dezembro_3 === true) {
    console.log("Estudo sobre potenciação e radiciação, destina-se 4 horas")
} else if (diaAtual === 3 && dezembro_3 === false) {
    console.log("Atividade não realizada")
}

// DIA 4
if (diaAtual === 4 && dezembro_4 === true) {
    console.log("Revisão sobre potenciação e radiciação, destina-se 2 horas")
} else if (diaAtual === 4 && dezembro_4 === false) {
    console.log("Atividade não realizada")
}
// DIA 5
if (diaAtual === 5 && dezembro_5 === true) {
    console.log("Estudo sobre álgebra, destina-se 2 horas")
} else if (diaAtual === 5 && dezembro_5 === false) {
    console.log("Atividade não realizada")
}

// DIA 6
if (diaAtual === 6 && dezembro_6 === true) {
    console.log("Revisão sobre álgebra, destina-se 1:30")
} else if (diaAtual === 6 && dezembro_6 === false) {
    console.log("Atividade não realizada")
}

// DIA 7
if (diaAtual === 7 && dezembro_7 === true) {
    console.log("Estudo sobre funções do segundo grau, destina-se 4 horas")
} else if (diaAtual === 7 && dezembro_7 === false) {
    console.log("Atividade não realizada")
}

// DIA 8
if (diaAtual === 8 && dezembro_8 === true) {
    console.log("Revisar funções do segundo grau, destina-se 3 horas")
} else if (diaAtual === 8 && dezembro_8 === false) {
    console.log("Atividade não realizada")
}

// DIA 9
if (diaAtual === 9 && dezembro_9 === true) {
    console.log("Estudar introdução das funções, destina-se 4 horas")
} else if (diaAtual === 9 && dezembro_9 === false) {
    console.log("Atividade não realizada")
}

// DIA 10
if (diaAtual === 10 && dezembro_10 === true) {
    console.log("Revisar introdução das funções, destina-se 3:30")
} else if (diaAtual === 10 && dezembro_10 === false) {
    console.log("Atividade não realizada")
}

// DIA 11
if (diaAtual === 11 && dezembro_11 === true) {
    console.log("Estudar trigonometria, destina-se 4 horas")
} else if (diaAtual === 11 && dezembro_11 === false) {
    console.log("Atividade não realizada")
}

// DIA 12
if (diaAtual === 12 && dezembro_12 === true) {
    console.log("Revisar trigonometria, destina-se 2 horas")
} else if (diaAtual === 12 && dezembro_12 === false) {
    console.log("Atividade não realizada")
}

// DIA 13
if (diaAtual === 13 && dezembro_13 === true) {
    console.log("Estudar estatística, destina-se 3 horas")
} else if (diaAtual === 13 && dezembro_13 === false) {
    console.log("Atividade não realizada")
}

// DIA 14
if (diaAtual === 14 && dezembro_14 === true) {
    console.log("Revisar estatística, destina-se 4 horas")
} else if (diaAtual === 14 && dezembro_14 === false) {
    console.log("Atividade não realizada")
}

// DIA 15
if (diaAtual === 15 && dezembro_15 === true) {
    console.log("Estudo geral de geometrias, destina-se 2:30")
} else if (diaAtual === 15 && dezembro_15 === false) {
    console.log("Atividade não realizada")
}


// ================================================================================= //
// 2. CÁLCULO FINAL PROGRESSIVO DO DIA SELECIONADO (DO DIA 1 AO 15)
// ================================================================================= //
// AS CONDICIONAIS IRÃO MOSTRAR A CONCLUSÃO DOS ESTUDOS PERANTE DETERMINADAS ÁREAS
// CONDICIONAIS AVALIAM SOMENTE NÚMEROS IMPARES,SENDO VÁLIDO PRIMORDIALMENTE O CONTEÚDO AO INVÉS DA REVISÃO

// DIA 1
if (diaAtual === 1 && dezembro_1 === true && dezembro_2 === true) {
    console.log("Parabéns! conteúdo de números reais finalizado")
} else if (diaAtual === 1 && (dezembro_1 === false || dezembro_2 === false)) {
    console.log("Estudos de números reais incompleto")
}

// DIA 3
if (diaAtual === 3 && dezembro_3 === true && dezembro_4 === true) {
    console.log("Parabéns! conteúdo de radiciação e potenciação finalizado")
} else if (diaAtual === 3 && (dezembro_3 === false || dezembro_4 === false)) {
    console.log("Estudos de radiciação e potenciação incompleto")
}

// DIA 5
if (diaAtual === 5 && dezembro_5 === true && dezembro_6 === true) {
    console.log("Parabéns! conteúdo de álgebra finalizado")
} else if (diaAtual === 5 && (dezembro_5 === false || dezembro_6 === false)) {
    console.log("Estudos de álgebra incompleto")
}

// DIA 7
if (diaAtual === 7 && dezembro_7 === true && dezembro_8 === true) {
    console.log("Parabéns! conteúdo de equações do segundo grau finalizado")
} else if (diaAtual === 7 && (dezembro_7 === false || dezembro_8 === false)) {
    console.log("Estudos de equações do segundo grau incompleto")
}

//DIA 9
if (diaAtual === 9 && dezembro_9 === true && dezembro_10 === true) {
    console.log("Parabéns! conteúdo de funções finalizado")
} else if (diaAtual === 9 && (dezembro_9 === false || dezembro_10 === false)) {
    console.log("Estudos de funções incompleto")
}

// DIA 11
if (diaAtual === 11 && dezembro_11 === true && dezembro_12 === true) {
    console.log("Parabéns! conteúdo de trigonometria finalizado")
} else if (diaAtual === 11 && (dezembro_11 === false || dezembro_12 === false)) {
    console.log("Estudos de trigonometria incompleto")
}

// DIA 13
if (diaAtual === 13 && dezembro_13 === true && dezembro_14 === true) {
    console.log("Parabéns! conteúdo de estatística finalizado")
} else if (diaAtual === 13 && (dezembro_13 === false || dezembro_14 === false)) {
    console.log("Estudos de estatística incompleto")
} 

// DIA 15
if (diaAtual === 15 && dezembro_15 === true) {
    console.log("Parabéns! conteúdo geral de geometrias finalizado")
} else if (diaAtual === 15 && dezembro_15 === false) {
    console.log("Estudos de geometrias incompleto")
}


// VERACIDADE E CHECAGEM DE ESTUDOS
if ( dezembro_1 === true &&dezembro_2 === true &&dezembro_3 === true &&dezembro_4 === true &&dezembro_5 === true &&dezembro_6 === true && dezembro_7 === true && dezembro_8 === true && dezembro_9 === true &&
    dezembro_10 === true && dezembro_11 === true &&dezembro_12 === true &&dezembro_13 === true &&dezembro_14 === true && dezembro_15 === true) {
    console.log("Parabens! conteúdos de revisão do 9 ano concluídos com sucesso")
} else {
    console.log("Estudos incompletos, mais atenção e responsabilidade nos próximos afazeres escolares!")
}

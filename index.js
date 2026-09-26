  // Calendário de estudos mensal (9 ANO) //
 // ESTUDO VOLTADO Á PREPARAÇÃO PARA O ENSINO MÉDIO //
// ÁREA DAS EXATAS //
let dezembro1 = true
let dezembro2 = true
let dezembro3 = true
let dezembro4 = true
let dezembro5 = true
let dezembro6 = true
let dezembro7 = true
let dezembro8 = true
let dezembro9 = true
let dezembro10 = true
let dezembro11 = true
let dezembro12 = true
let dezembro13 = true
let dezembro14 = true
let dezembro15 = true

// ================================================================================= //
// DEFINA O DIA EM QUE VOCÊ DESEJA CONSULTAR //
let diaAtual = 15
// ================================================================================= //
// EXIBIÇÃO DA TAREFA DO DIA SELECIONADO 
// AS CONDICIONAIS APRESENTARÃO A SITUAÇÃO DOS ESTUDOS,SE REALIZADOS OU NÃO

// DIA 1
if (diaAtual === 1 && dezembro1 === true) {
    console.log("Estudo sobre números reais, destina-se 4 horas")
} else if (diaAtual === 1 && dezembro1 === false) {
    console.log("Atividade não realizada")
}

// DIA 2
if (diaAtual === 2 && dezembro2 === true) {
    console.log("Revisão sobre números reais, destina-se 4 horas")
} else if (diaAtual === 2 && dezembro2 === false) {
    console.log("Atividade não realizada")
}

// DIA 3
if (diaAtual === 3 && dezembro3 === true) {
    console.log("Estudo sobre potenciação e radiciação, destina-se 4 horas")
} else if (diaAtual === 3 && dezembro3 === false) {
    console.log("Atividade não realizada")
}

// DIA 4
if (diaAtual === 4 && dezembro4 === true) {
    console.log("Revisão sobre potenciação e radiciação, destina-se 2 horas")
} else if (diaAtual === 4 && dezembro4 === false) {
    console.log("Atividade não realizada")
}
// DIA 5
if (diaAtual === 5 && dezembro5 === true) {
    console.log("Estudo sobre álgebra, destina-se 2 horas")
} else if (diaAtual === 5 && dezembro5 === false) {
    console.log("Atividade não realizada")
}

// DIA 6
if (diaAtual === 6 && dezembro6 === true) {
    console.log("Revisão sobre álgebra, destina-se 1:30")
} else if (diaAtual === 6 && dezembro6 === false) {
    console.log("Atividade não realizada")
}

// DIA 7
if (diaAtual === 7 && dezembro7 === true) {
    console.log("Estudo sobre funções do segundo grau, destina-se 4 horas")
} else if (diaAtual === 7 && dezembro7 === false) {
    console.log("Atividade não realizada")
}

// DIA 8
if (diaAtual === 8 && dezembro8 === true) {
    console.log("Revisar funções do segundo grau, destina-se 3 horas")
} else if (diaAtual === 8 && dezembro8 === false) {
    console.log("Atividade não realizada")
}

// DIA 9
if (diaAtual === 9 && dezembro9 === true) {
    console.log("Estudar introdução das funções, destina-se 4 horas")
} else if (diaAtual === 9 && dezembro9 === false) {
    console.log("Atividade não realizada")
}

// DIA 10
if (diaAtual === 10 && dezembro10 === true) {
    console.log("Revisar introdução das funções, destina-se 3:30")
} else if (diaAtual === 10 && dezembro10 === false) {
    console.log("Atividade não realizada")
}

// DIA 11
if (diaAtual === 11 && dezembro11 === true) {
    console.log("Estudar trigonometria, destina-se 4 horas")
} else if (diaAtual === 11 && dezembro11 === false) {
    console.log("Atividade não realizada")
}

// DIA 12
if (diaAtual === 12 && dezembro12 === true) {
    console.log("Revisar trigonometria, destina-se 2 horas")
} else if (diaAtual === 12 && dezembro12 === false) {
    console.log("Atividade não realizada")
}

// DIA 13
if (diaAtual === 13 && dezembro13 === true) {
    console.log("Estudar estatística, destina-se 3 horas")
} else if (diaAtual === 13 && dezembro13 === false) {
    console.log("Atividade não realizada")
}

// DIA 14
if (diaAtual === 14 && dezembro14 === true) {
    console.log("Revisar estatística, destina-se 4 horas")
} else if (diaAtual === 14 && dezembro14 === false) {
    console.log("Atividade não realizada")
}

// DIA 15
if (diaAtual === 15 && dezembro15 === true) {
    console.log("Estudo geral de geometrias, destina-se 2:30")
} else if (diaAtual === 15 && dezembro15 === false) {
    console.log("Atividade não realizada")
}


// ================================================================================= //
// 2. CÁLCULO FINAL PROGRESSIVO DO DIA SELECIONADO (DO DIA 1 AO 15)
// ================================================================================= //
// AS CONDICIONAIS IRÃO MOSTRAR A CONCLUSÃO DOS ESTUDOS PERANTE DETERMINADAS ÁREAS
// CONDICIONAIS AVALIAM SOMENTE NÚMEROS IMPARES,SENDO VÁLIDO PRIMORDIALMENTE O CONTEÚDO AO INVÉS DA REVISÃO

// DIA 1
if (diaAtual === 1 && dezembro1 === true && dezembro2 === true) {
    console.log("Parabéns! conteúdo de números reais finalizado") //MERAMENTE TEXTO
} else if (diaAtual === 1 && (dezembro1 === false || dezembro2 === false)) {
    console.log("Estudos de números reais incompleto")
}

// DIA 3
if (diaAtual === 3 && dezembro3 === true && dezembro4 === true) {
    console.log("Parabéns! conteúdo de radiciação e potenciação finalizado") //MERAMENTE TEXTO
} else if (diaAtual === 3 && (dezembro3 === false || dezembro4 === false)) {
    console.log("Estudos de radiciação e potenciação incompleto")
}

// DIA 5
if (diaAtual === 5 && dezembro5 === true && dezembro6 === true) {
    console.log("Parabéns! conteúdo de álgebra finalizado") //MERAMENTE TEXTO
} else if (diaAtual === 5 && (dezembro5 === false || dezembro6 === false)) {
    console.log("Estudos de álgebra incompleto")
}

// DIA 7
if (diaAtual === 7 && dezembro7 === true && dezembro8 === true) {
    console.log("Parabéns! conteúdo de equações do segundo grau finalizado") //MERAMENTE TEXTO
} else if (diaAtual === 7 && (dezembro7 === false || dezembro8 === false)) {
    console.log("Estudos de equações do segundo grau incompleto")
}

//DIA 9
if (diaAtual === 9 && dezembro9 === true && dezembro10 === true) {
    console.log("Parabéns! conteúdo de funções finalizado") //MERAMENTE TEXTO
} else if (diaAtual === 9 && (dezembro9 === false || dezembro10 === false)) {
    console.log("Estudos de funções incompleto")
}

// DIA 11
if (diaAtual === 11 && dezembro11 === true && dezembro12 === true) {
    console.log("Parabéns! conteúdo de trigonometria finalizado") //MERAMENTE TEXTO
} else if (diaAtual === 11 && (dezembro11 === false || dezembro12 === false)) {
    console.log("Estudos de trigonometria incompleto")
}

// DIA 13
if (diaAtual === 13 && dezembro13 === true && dezembro14 === true) {
    console.log("Parabéns! conteúdo de estatística finalizado") //MERAMENTE TEXTO
} else if (diaAtual === 13 && (dezembro13 === false || dezembro14 === false)) {
    console.log("Estudos de estatística incompleto")
} 

// DIA 15
if (diaAtual === 15 && dezembro15 === true) {
    console.log("Parabéns! conteúdo geral de geometrias finalizado") //MERAMENTE TEXTO
} else if (diaAtual === 15 && dezembro15 === false) {
    console.log("Estudos de geometrias incompleto")
}


// VERACIDADE E CHECAGEM DE ESTUDOS
if ( dezembro1 === true &&dezembro2 === true &&dezembro3 === true &&dezembro4 === true &&dezembro5 === true &&dezembro6 === true && dezembro7 === true && dezembro8 === true && dezembro9 === true &&
    dezembro10 === true && dezembro11 === true &&dezembro12 === true &&dezembro13 === true &&dezembro14 === true && dezembro15 === true) {
    console.log("Parabens! conteúdos de revisão do 9 ano concluídos com sucesso")
} else {
    console.log("Estudos incompletos, mais atenção e responsabilidade nos próximos afazeres escolares!")
}

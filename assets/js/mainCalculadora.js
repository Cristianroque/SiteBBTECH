//Autônomo: Variable Quantidade
const qt1 = document.querySelector("#qt1");
const qt2 = document.querySelector("#qt2");
const qt3 = document.querySelector("#qt3");
const qt4 = document.querySelector("#qt4");
const qt5 = document.querySelector("#qt5");
const qt6 = document.querySelector("#qt6");
const qt7 = document.querySelector("#qt7");
const qt8 = document.querySelector("#qt8");
const qt9 = document.querySelector("#qt9");
const qt10 = document.querySelector("#qt10");
const qt11 = document.querySelector("#qt11");


//Autônomo: Variable subTotal
const sub1 = document.querySelector("#sub1");
const sub2 = document.querySelector("#sub2");
const sub3 = document.querySelector("#sub3");
const sub4 = document.querySelector("#sub4");
const sub5 = document.querySelector("#sub5");
const sub6 = document.querySelector("#sub6");
const sub7 = document.querySelector("#sub7");
const sub8 = document.querySelector("#sub8");
const sub9 = document.querySelector("#sub9");
const sub10 = document.querySelector("#sub10");
const sub11 = document.querySelector("#sub11");
const sub12 = document.querySelector("#sub12");
const sub13 = document.querySelector("#sub13");
const sub14 = document.querySelector("#sub14");
const sub15 = document.querySelector("#sub15");
const sub16 = document.querySelector("#sub16");
const sub17 = document.querySelector("#sub17");

//Autônomo: Variable Não
const nao1 = document.querySelector("#nao1");
const nao2 = document.querySelector("#nao2");
const nao3 = document.querySelector("#nao3");
const nao4 = document.querySelector("#nao4");
const nao5 = document.querySelector("#nao5");
const nao6 = document.querySelector("#nao6");
const nao7 = document.querySelector("#nao7");
const nao8 = document.querySelector("#nao8");
const nao9 = document.querySelector("#nao9");
const nao10 = document.querySelector("#nao10");

//Reta Final: Variable Não
const nao1b = document.querySelector("#nao1b");
const nao2b = document.querySelector("#nao2b");
const nao3b = document.querySelector("#nao3b");
const nao4b = document.querySelector("#nao4b");

//Teleoperado: Variable Quantidade
const qt1a = document.querySelector("#qt1a");
const qt2a = document.querySelector("#qt2a");
const qt3a = document.querySelector("#qt3a");
const qt4a = document.querySelector("#qt4a");
const qt5a = document.querySelector("#qt5a");
const qt6a = document.querySelector("#qt6a");
const qt7a = document.querySelector("#qt7a");
const qt8a = document.querySelector("#qt8a");
const qt9a = document.querySelector("#qt9a");

//Teleoperado: Variable subTotal
const sub1a = document.querySelector("#sub1a");
const sub2a = document.querySelector("#sub2a");
const sub3a = document.querySelector("#sub3a");
const sub4a = document.querySelector("#sub4a");
const sub5a = document.querySelector("#sub5a");
const sub6a = document.querySelector("#sub6a");
const sub7a = document.querySelector("#sub7a");
const sub8a = document.querySelector("#sub8a");
const sub9a = document.querySelector("#sub9a");

//Reta Final: Variable subTotal
const sub1b = document.querySelector("#sub1b");
const sub2b = document.querySelector("#sub2b");
const sub3b = document.querySelector("#sub3b");
const sub4b = document.querySelector("#sub4b");

//Resultados
const resultado = document.querySelector("#resultado");
const resultadoA = document.querySelector("#resultadoA");
const resultadoB = document.querySelector("#resultadoB");
const resultadoC = document.querySelector("#resultadoC")
const resultadoG = document.querySelector("#resultadoGeral");

                                                                                                                              

sub7.value = 0;
sub8.value = 0;
sub9.value = 0;

sub1a.value = 0;
sub2a.value = 0;
sub3a.value = 0;
sub4a.value = 0;
sub5a.value = 0;

sub1b.value = 0;
sub2b.value = 0;
sub3b.value = 0;
sub4b.value = 0;

var aux1 = 0;
var aux2 = 0;
var aux3 = 0;
var aux4 = 0;
var auxx1 = 0;
var auxx2 = 0;
var auxx3 = 0;
var auxx4 = 0;
var auxx5 = 0;

nao2.addEventListener("click", () => {
    if (nao2.value === "Não") {
        nao2.value = "Sim"
        sub7.value = 3
        sub7.textContent = sub7.value
    } else {
        nao2.value = "Não"
        sub7.value = 0
        sub7.textContent = 0
    }
});
nao3.addEventListener("click", () => {
    if (nao3.value === "Não") {
        nao3.value = "Sim"
        sub8.value = 4
        sub8.textContent = sub8.value
    } else {
        nao3.value = "Não"
        sub8.value = 0
        sub8.textContent = 0
    }
});
nao4.addEventListener("click", () => {
    if (nao4.value === "Não") {
        nao4.value = "Sim"
        sub9.value = 6
        sub9.textContent = sub9.value
    } else {
        nao4.value = "Não"
        sub9.value = 0
        sub9.textContent = 0
    }
});



nao1b.addEventListener("click", () => {
    if (nao1b.value === "Não") {
        nao1b.value = "Sim";;
        sub1b.value = 3;
        sub1b.textContent = sub1b.value

    } else {
        nao1b.value = "Não";
        sub1b.value = 0;
        sub1b.textContent = 0
    }
});

nao2b.addEventListener("click", () => {
    if (nao2b.value === "Não") {
        nao2b.value = "Sim";
        sub2b.value = 10;
        sub2b.textContent = sub2b.value;

    } else {
        nao2b.value = "Não";
        sub2b.value = 0;
        sub2b.textContent = 0
    }
});

nao3b.addEventListener("click", () => {
    if (nao3b.value === "Não") {
        nao3b.value = "Sim";
        sub3b.value = 20;
        sub3b.textContent = sub3b.value;

    } else {
        nao3b.value = "Não";
        sub3b.value = 0;
        sub3b.textContent = 0
    }
});

nao4b.addEventListener("click", () => {
    if (nao4b.value === "Não") {
        nao4b.value = "Sim";
        sub4b.value = 2;
        sub4b.textContent = sub4b.value;

    } else {
        nao4b.value = "Não";
        sub4b.value = 0;
        sub4b.textContent = 0
    }
});



function calcular() {
    // Cone(s) no Terminal
    sub1.value = Number(qt1.value*3);
    sub1.textContent = sub1.value;

    //Cone(s) na Junção Térrea
    sub2.value = Number(qt2.value * 4);
    sub2.textContent = sub2.value;

    //Cone(s) na Junção Baixa
    sub3.value = Number(qt3.value * 6);
    sub3.textContent = sub3.value;

    //Cone(s) na Junção Média
    sub4.value = Number(qt4.value * 8);
    sub4.textContent = sub4.value;

    //Cone(s) na Junção Alta
    sub5.value = Number(qt5.value * 12);
    sub5.textContent = sub5.value;

    sub10.value = Number(qt6.value * 3);
    sub10.textContent = sub10.value;

    resultado.textContent = Number(sub1.value + sub2.value + sub3.value + sub4.value + sub5.value + sub10.value)
    aux1 = Number(sub1.value + sub2.value + sub3.value + sub4.value + sub5.value + sub10.value)
    aux4 = aux1 + aux2 + aux3;
    resultadoG.textContent = aux4;
}

function calcularA() {

    sub1a.value = Number(qt1a.value*2);
    sub1a.textContent = sub1a.value;

    sub2a.value = Number(qt2a.value * 3);
    sub2a.textContent = sub2a.value;

    sub3a.value = Number(qt3a.value * 5);
    sub3a.textContent = sub3a.value;

    sub4a.value = Number(qt4a.value * 5);
    sub4a.textContent = sub4a.value;

    sub5a.value = Number(qt5a.value * 2);
    sub5a.textContent = sub5a.value;

    sub6a.value = Number(qt6a.value * 6);
    sub6a.textContent = sub6a.value;

    sub7a.value = Number(qt7a.value * 10);
    sub7a.textContent = sub7a.value; 
   
    resultadoA.textContent = Number(sub1a.value + sub2a.value + sub3a.value + sub4a.value + sub5a.value + sub6a.value + sub7a.value);
    aux2 =  Number(sub1a.value + sub2a.value + sub3a.value + sub4a.value + sub5a.value + sub6a.value + sub7a.value);
    aux4 = aux1 + aux2 + aux3;
    resultadoG.textContent = aux4;
}

function calcularB() {

    sub8a.value = Number(qt8a.value * 5 *(-1));
    sub8a.textContent = sub8a.value;

    sub9a.value = Number(qt9a.value * 12 *(-1));
    sub9a.textContent = sub9a.value;

    resultadoB.textContent = Number(sub9a.value + sub8a.value);
    aux3 = Number(sub9a.value + sub8a.value)
    aux4 = aux1 + aux2 + aux3;
    resultadoG.textContent = aux4;
    
}


nao9.addEventListener("click", () => {
    if (nao9.value === "Não") {
        nao9.value = "Sim";
        auxx3 = 1;

    } else {
        nao9.value = "Não";
        auxx3 = 0;
    }
});
nao10.addEventListener("click", () => {
    if (nao10.value === "Não") {
        nao10.value = "Sim";
        auxx4 = 1;

    } else {
        nao10.value = "Não";
        auxx4 = 0;
    }
});

function calcularC(){

    if(qt7.value >= 3 && qt8.value >= 4){
    auxx1 = 1;
    } else if(qt8.value >= 5) {
        auxx1 = 1;
    } else if(qt8.value < 5 || qt7.value < 3) {
        auxx1 = 0;
    }
    if(qt9.value >= 26) {
        auxx2 = 1;
    } else {
        auxx2 = 0;
    }
    if(auxx3 == 1 && auxx4 == 0) {
        auxx5 = 1;
    } else if(auxx3 == 0 && auxx4 == 1) {
        auxx5 = 2;
    } else {
        auxx5 = 0;
    }

    resultadoC.textContent = Number(auxx1 + auxx2 + auxx5);
}





function convDE() {

    let conv_ENTRADA = document.frm1.v1.value.replace(".", "").replace(".", ",");
    let DOLAR_F = document.getElementById("resDOLAR").innerHTML
    let EURO_F = document.getElementById("resEURO").innerHTML
    var ENTRADA = document.getElementById("mudar")
    if ((conv_ENTRADA != "") && (parseFloat(conv_ENTRADA, 10) > 0)) {
        V1_F = conv_ENTRADA.replace(",", ".");
        ENTRADA.value = ENTRADA.value.replace(".", "").replace(".", ",");
        let DOLAR = parseFloat(V1_F, 10) / parseFloat(4.99, 10)
        let EURO = parseFloat(V1_F, 10) / parseFloat(5.39, 10)
        DOLAR_F = DOLAR.toFixed(2).replace(".",",")
        EURO_F = EURO.toFixed(2).replace(".",",")
        document.getElementById("resEURO").innerHTML = EURO_F
        document.getElementById("resDOLAR").innerHTML = DOLAR_F
    }else{
        alert("ERRO ! CAMPO VAZIO OU VALOR NEGATIVO OU IGUAL A ZERO!    ")
    }
}
function Ap_TUDO(){
    document.getElementById("resDOLAR").innerHTML=""
    document.getElementById("resEURO").innerHTML=""
}

function EnterTab(BOTAO,Evento){
    if(Evento.keyCode == 13){
        document.getElementById(BOTAO).focus()
    }
}
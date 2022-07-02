function fechar(){
    document.getElementById('tampa').style.display = "none";
}

function abreContatos(){
    document.getElementById('tampa').style.display = "block";

    document.getElementById('menuMobile').style.display = "none";
}


function fecharQuest1(){
    document.getElementById('textQuest1').style.display = "none";
    document.getElementById('setaBaixo1').style.display = "none";
    document.getElementById('seta1').style.display = "block";
}

function fecharQuest2(){
    document.getElementById('textQuest2').style.display = "none";
    document.getElementById('setaBaixo2').style.display = "none";
    document.getElementById('seta2').style.display = "block";
}

function fecharQuest3(){
    document.getElementById('textQuest3').style.display = "none";
    document.getElementById('setaBaixo3').style.display = "none";
    document.getElementById('seta3').style.display = "block";
}

function abreQuest1(){
    document.getElementById('textQuest1').style.display = "block";
    document.getElementById('setaBaixo1').style.display = "block";
    document.getElementById('seta1').style.display = "none";
}

function abreQuest2(){
    document.getElementById('textQuest2').style.display = "block";
    document.getElementById('setaBaixo2').style.display = "block";
    document.getElementById('seta2').style.display = "none";
}

function abreQuest3(){
    document.getElementById('textQuest3').style.display = "block";
    document.getElementById('setaBaixo3').style.display = "block";
    document.getElementById('seta3').style.display = "none";
}

function abreMenu(){
    let menu = document.getElementById('menuMobile ');
    let menuStyle = menuMobile .style.display;
    if(menuStyle == "none"){
        document.getElementById('menuMobile').style.display = "inline";
        menuStyle = "inline";
    }
    else{
        document.getElementById('menuMobile').style.display = "none";
        menuStyle = "none"
    }
}

function sobreMim(){
    document.getElementById('menuMobile').style.display = "none";
    window.scroll(0,findPos(document.getElementById("sobreMim2")));
}

function terapia(){
    document.getElementById('menuMobile').style.display = "none";
    window.scroll(0,findPos(document.getElementById("sobreATerapia")));
}

function contatos(){
    document.getElementById('menuMobile').style.display = "none";
    window.scroll(0,findPos(document.getElementById("footer")));
}

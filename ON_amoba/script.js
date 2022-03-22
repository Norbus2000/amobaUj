window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS (elem){
    return document.getElementsByClassName(elem);
}
function $(elem){
    return document.querySelectorAll(elem);
}

function jatekter() {
    var txt="";
    var mezomeret=9;
    for (let index = 0; index < mezomeret; index++) {
        txt += '<div class="jatekter" id="'+index+'"><p></p></div>';
        /*txt += '<div class="jatekter" ><id="mezo'+index+'"><p></p></div>';
        if (index%3==0) {
            txt+='<br>';
            txt += '<div class="jatekter" ><id="mezo'+index+'"><p></p></div>';
        }else{
            txt += '<div class="jatekter" ><id="mezo'+index+'"><p></p></div>';
        }
        */
    }
    
    ID("container").innerHTML=txt;
    
    for (let index = 0; index < mezomeret; index++) {
        $(".jatekter")[index].style.border="5px solid black";
        /* $(".jatekter")[index].style.paddingBottom="20px";*/
        ID(index).addEventListener("click",eger);
    }
}
function init() {
    jatekter();
    
}

szimbolum="";
var lista = [];
jatekosJon="";
var lepes=1;
function karakter () {
    if (lepes%2==0) {
        szimbolum="0";
        lista.push(szimbolum);
        lepes++;
        /*
        jatekosJon += '<div><p>Az O játékos következik.</p></div>';
        ID("#jatekosKiiras").innerHTML=jatekosJon;
        */
    } else {
        szimbolum="X";
        lista.push(szimbolum);
        lepes++;
        /*
        jatekosJon += '<div><p>Az X játékos következik.</p></div>';
        ID("#jatekosKiiras").innerHTML=jatekosJon;
        */
    }
}
function eger () {
    karakter();
    console.log(event.target.id);
    var katt = event.target.id;
    ID(katt).innerHTML="<p>"+szimbolum+"</p>";
    ID(katt).removeEventListener("click",eger);
}
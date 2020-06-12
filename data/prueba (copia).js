

var texto = document.getElementById("nombre");
var texto_nombre = document.getElementById("mi_nombre");
var li_color = document.getElementById("li_activa");


var texto_yo = document.getElementById("tipo_yo");

var incColor = 0;

function color(hsv){


    var auxColor = 1;

    texto.style.backgroundColor = "hsl(" + incColor + ", 100%, 50%";
    texto.style.borderColor = "hsl(" + incColor + ", 100%, 50%";

    texto_nombre.style.backgroundColor = "hsl(" + incColor + ", 100%, 50%";
    texto_nombre.style.borderColor = "hsl(" + incColor + ", 100%, 50%";

    texto_yo.style.backgroundColor = "hsl(" + incColor + ", 100%, 50%";
    texto_yo.style.borderColor = "hsl(" + incColor + ", 100%, 50%";

    li_color.style.backgroundColor = "hsl(" + incColor + ", 85%, 50%";

    //console.log(incColor);
    //incColor = incColor + 1;
    incColor = incColor + hsv;

    if (incColor >= 360) { incColor = 0;}
/*
    var cuentaColor = setInterval(function incrementoColor() {

        incColor = incColor + 1;

        if(auxColor >= 360){
            clearInterval(cuentaColor);
        }

        texto.style.backgroundColor = "hsl(" + incColor + ", 100%, 50%";
        console.log(incColor);

        //texto.style.backgroundColor="hsl(" + 200 + ", 100%,50%)";

        auxColor++;
    }, 1000);
*/
}


//setInterval(color, 50);











var triangle = document.getElementById("triangle");
var incColor = 0;

// Get the id of the <path> element and the length of <path>
var length = triangle.getTotalLength() * 1;
console.log(length);

// The start position of the drawing
triangle.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;
var scrollpercent = 0;

function firma(hsv){

    //var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    var cuenta_firma = setInterval(function incremento_firma() {

        // Reverse the drawing (when scrolling upwards)
        triangle.style.strokeDashoffset = length - scrollpercent;


        //console.log(draw);
        //incColor = incColor + 1;
        scrollpercent = scrollpercent + 3;


        if(scrollpercent >= 1355){
            clearInterval(cuenta_firma);
            scrollpercent = 0;
        }

    }, 5);





}


//setInterval(firma, 5);





var Texto_Footer_Dec;
var Texto_Footer;
var Palabra_Footer;

var Texto_Top_Dec;
var Texto_Top;
var Palabra_Top;




function palabra(word){

    var tamy = word.length;
    //word = word + "";
    caracteres = word.split('');
    var inc = 0;
    conta = 0;
    var letra = caracteres[conta];
    var aux = 1;
    Palabra_Top = word;

    ////console.log(tamy);

    //color(30);
    var cuenta = setInterval(function incremento() {
        //console.log(inc + "inc");
        inc = inc + 0.2;

        if(aux >= tamy){
            clearInterval(cuenta);
            clearInterval(Texto_Top);
            Texto_Top_Dec = setTimeout(textos_decremento, 2000);
        }


        //texto.style.opacity = inc;
        texto.innerHTML = letra;
        //console.log(aux);
        letra = letra + caracteres[aux];
        aux++;
    }, 100);



    //texto.style.opacity = 0.1;
    //texto.innerHTML = tipo[conta];
    ////console.log('conta' + conta);
}

function textos_decremento(){

    var tamyD = Palabra_Top.length;;
    var auxOne = 1;

    var cuentad = setInterval(function decremento() {

        if(auxOne >= tamyD){
            clearInterval(Texto_Top_Dec);
            clearInterval(cuentad);
            //console.log("out decremento2");

            Texto_Top = setInterval(textos, 3000);
        }

        var str = Palabra_Top;
        str = str.substring(0, str.length - auxOne);
        //console.log(str);

        texto.innerHTML = str;
        auxOne++;
    }, 100);
}




function palabra2(wordy){

    var tamy22 = wordy.length;
    caracteres22 = wordy.split('');

    var inc22 = 0;
    conta22 = 0;
    var letra22 = caracteres22[conta22];
    var aux22 = 1;
    Palabra_Footer = wordy;

    //color(60);
    firma();
    //console.log( "inicio" );
    var cuenta22 = setInterval(function incremento2() {
        inc22 = inc22 + 0.2;

        texto_yo.innerHTML = letra22;
        letra22 = letra22 + caracteres22[aux22];
        //console.log( letra22 );
        aux22++;

        if(aux22 > tamy22){
            clearInterval(cuenta22);
            //texto_yo.innerHTML = "ss";
            //console.log("listo!");
            //console.log(Texto_Footer);
            clearInterval(Texto_Footer);

            Texto_Footer_Dec = setTimeout(textos33_decremento, 2000);
        }


    }, 100);


    //texto_yo.innerHTML = "a";
    //texto_yo.innerHTML = wordy;
    //console.log("fin");

}


function textos33_decremento(){

    var tamy22d = Palabra_Footer.length;;
    var aux33 = 1;

    var cuenta22d = setInterval(function decremento2() {

        if(aux33 >= tamy22d){
            clearInterval(Texto_Footer_Dec);
            clearInterval(cuenta22d);
            //console.log("out decremento2");

            Texto_Footer = setInterval(textos33, 1500);
        }

        var str = Palabra_Footer;
        str = str.substring(0, str.length - aux33);
        //console.log(str);

        texto_yo.innerHTML = str;
        aux33++;
    }, 100);
}








//var cadenas = ["Meloso", "Ángel", "Gato", "Raspberry", "Ardilla", "abogado"];
//var cadenas = ["PROGRAMACIÓN", "ROBÓTICA", "TECNOLOGÍA", "ELECTRÓNICA", "INNOVACIÓN", "INGENIERÍA"];
var cadenas = ["Soy Programador.", "Soy Autodidacta.", "Soy Electricista.", "Soy Analítico.", "Soy Optimista.", "Soy Ingeniero Mecatrónico."];

var tipos = ["mecatrónicos", "programadores", "ingenieros", "empresarios", "personajes", "innovadores"];


var contaAux = 0;
function textos(){
    palabra( cadenas[contaAux] );
    //palabra2( tipos[contaAux] );
    contaAux++;
    var tama = cadenas.length;
    if (contaAux >= tama){
        contaAux = 0;
    }

}

function textos33(){
    palabra2( tipos[contaAux] );
}

//////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('visibilitychange', onVisibilityChange, false);


function onVisibilityChange(e) {
    if(document.hidden) {
        clearInterval(Texto_Top);
        clearInterval(Texto_Footer);
        clearInterval(Firma_Footer);
        clearInterval(Texto_Footer_Dec);
        clearInterval(Texto_Top_Dec);
        clearInterval(loopa);
        console.log("hidden");
    } else {
        Texto_Top = setInterval(textos, 3000);
        Texto_Footer = setInterval(textos33, 3000);
        //setInterval(off, )
    }
}








var tras = 0;
var Firma_Footer = setTimeout(function firma(){
    var cuadro = document.getElementById("firma_yo");
    //cuadro.style.visibility = "hidden";


    var cuenta2 = setInterval(function incremento2() {
        //console.log(inc + "inc");
        tras = tras + 70;

        if(tras >= 1000){
            clearInterval(cuenta2);
            cuadro.style.visibility = "hidden";
            onVisibilityChange(false);
        }

        ///cuadro.style.opacity = opa;
        //texto.innerHTML = tipo[conta];
        //letra = letra + tipo[aux];
        cuadro.style.transform = "translateY(" + tras + "px)";
    }, 25);


}, 500);






/*
var tras2 = 0;
var tras2neg = -100;
*/
function loopy(){
    var tras2 = 0;
    var tras2neg = -100;

    var parrafo = document.getElementById("tepetla");
    var in_1 = document.getElementById("inactivo_1");
    //cuadro.style.visibility = "hidden";

    parrafo.visibility = "visible";
    in_1.visibility = "hidden";

    var cuenta3 = setInterval(function incremento3() {
        //console.log(inc + "inc");
        tras2 = tras2 + 5;

        if(tras2 >= 30){
            clearInterval(cuenta3);
            parrafo.style.visibility = "hidden";
        }

        ///cuadro.style.opacity = opa;
        //texto.innerHTML = tipo[conta];
        //letra = letra + tipo[aux];
        parrafo.style.transform = "translateY(" + tras2 + "px)";
    }, 30);
    in_1.style.visibility = "visible";


    var cuenta4 = setInterval(function incremento4() {
        //console.log(inc + "inc");
        tras2neg = tras2neg + 25;

        if(tras2neg >= 0){
            clearInterval(cuenta4);
            parrafo.style.visibility = "hidden";
        }

        ///cuadro.style.opacity = opa;
        //texto.innerHTML = tipo[conta];
        //letra = letra + tipo[aux];
        in_1.style.transform = "translateY(" + tras2neg + "px)";
    }, 40);

    in_1.style.transform = "translateY(0px)";

    in_1.id = "tepetla";
    parrafo.id = "inactivo_1";

};


//var cadenas = ["Meloso", "Ángel", "Gato", "Raspberry", "Ardilla", "abogado"];
var palabras = ["PROGRAMACIÓN", "ROBÓTICA", "TECNOLOGÍA", "ELECTRÓNICA", "INNOVACIÓN", "INGENIERÍA"];
var contaAux2 = 0;

function textos2(){
    /*
    loopy( palabras[contaAux2] );
    contaAux++;
    var tama = cadenas.length;
    if (contaAux >= tama){
        contaAux = 0;
    }*/
    loopy();

}

var loopa = setInterval(textos2, 4000);
//setInterval(off, )


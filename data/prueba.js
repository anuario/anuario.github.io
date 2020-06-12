

var Top_Texto_Soy_Frase  =  document.getElementById("Soy_Frase_Top");
var Top_Texto_Mi_Nombre  =  document.getElementById("Mi_Nombre_Top");
var Footer_Texto_Soy     =  document.getElementById("Soy_Footer");

var li_color         =  document.getElementById("li_activa");

var incColor = 0;


function Color(hsv){
    var auxColor = 1;

    Top_Texto_Soy_Frase.style.backgroundColor = "hsl(" + incColor + ", 100%, 50%";
    Top_Texto_Soy_Frase.style.borderColor = "hsl(" + incColor + ", 100%, 50%";

    Top_Texto_Mi_Nombre.style.backgroundColor = "hsl(" + incColor + ", 100%, 50%";
    Top_Texto_Mi_Nombre.style.borderColor = "hsl(" + incColor + ", 100%, 50%";

    Footer_Texto_Soy.style.backgroundColor = "hsl(" + incColor + ", 100%, 50%";
    Footer_Texto_Soy.style.borderColor = "hsl(" + incColor + ", 100%, 50%";

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

        Top_Texto_Mi_Nombre.style.backgroundColor = "hsl(" + incColor + ", 100%, 50%";
        console.log(incColor);

        //Top_Texto_Mi_Nombre.style.backgroundColor="hsl(" + 200 + ", 100%,50%)";

        auxColor++;
    }, 1000);
*/
}
//setInterval(color, 50);











var triangle = document.getElementById("triangle");
var incColor = 0;

// Get the id of the <path> element and the length of <path>
var length = triangle.getTotalLength() * 1;

///console.log(length);

// The start position of the drawing
triangle.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;
var scrollpercent = 0;

function firma(inicio, fin, paso, caso)
{
    //var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    var cuenta_firma = setInterval(function incremento_firma()
    {

        triangle.style.strokeDashoffset = length - scrollpercent;
        //console.log(draw);
        //incColor = incColor + 1;
        scrollpercent = scrollpercent + paso;
        //console.log(scrollpercent);

        if(scrollpercent >= fin)
        {
            clearInterval(cuenta_firma);
            //console.log("reset");

            if(caso == 1){
                scrollpercent = fin;
            }
            else if(caso == 2){
                scrollpercent = 0;
            }
        }

    }, 5);


}


//setInterval(firma, 5);

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


var Texto_Footer_Dec;
var Texto_Footer;
var Palabra_Footer;

var Texto_Top_Dec;
var Texto_Top;
var Palabra_Top;


function Cambia_Palabra_Top( palabra_in )
{

    var caracteres = palabra_in.split('');
    var inc = 0;  // checar si se usa en otra funcion

    var letra_actual = caracteres[0];
    var indice_caracter = 1;

    Palabra_Top = palabra_in;

    //Color(30);
    var incremento_top = setInterval(function incremento()
    {
        //console.log(inc + "inc");

        inc = inc + 0.2;

        if( indice_caracter >= palabra_in.length )
        {
            clearInterval(incremento_top);
            clearInterval(Texto_Top);
            Texto_Top_Dec = setTimeout(Texto_Decremento_Top, 2000);
        }

        //Top_Texto_Mi_Nombre.style.opacity = inc;
        /////Top_Texto_Soy_Frase.innerHTML = letra_actual;
        //console.log(indice_caracter);
        letra_actual = letra_actual + caracteres[indice_caracter];
        indice_caracter++;
    }, 100);

    //Top_Texto_Mi_Nombre.style.opacity = 0.1;
    //Top_Texto_Mi_Nombre.innerHTML = tipo[conta];
    ////console.log('conta' + conta);
}


function Texto_Decremento_Top()
{
    var indice_decremento = 1;

    var decremento_top = setInterval(function decremento()
    {

        if( indice_decremento >= Palabra_Top.length )
        {
            clearInterval(Texto_Top_Dec);
            clearInterval(decremento_top);

            //console.log("out decremento2");
            Texto_Top = setInterval(Call_Texto_Top, 3000);
        }

        var string_decremento = Palabra_Top;
        string_decremento = string_decremento.substring(0, string_decremento.length - indice_decremento);
        //console.log(string_decremento);

        //////Top_Texto_Soy_Frase.innerHTML = string_decremento;
        indice_decremento++;
    }, 100);
}






function Cambia_Palabra_Footer( palabra_in )
{

    caracteres_footer = palabra_in.split('');

    var inc22 = 0;  // revisar para que es

    var letra_actual_footer = caracteres_footer[0];
    var indice_caracter_footer = 1;
    Palabra_Footer = palabra_in;

    //Color(60);
    //firma(0, 1355, 3);
    firma(0, 700, 3, 1);

    var incremento_footer = setInterval(function incremento_foot()
    {
        inc22 = inc22 + 0.2;  // revisar para que es

        Footer_Texto_Soy.innerHTML = letra_actual_footer;
        letra_actual_footer = letra_actual_footer + caracteres_footer[indice_caracter_footer];
        indice_caracter_footer++;

        if( indice_caracter_footer > palabra_in.length )
        {
            clearInterval(incremento_footer);
            clearInterval(Texto_Footer);
            Texto_Footer_Dec = setTimeout(Texto_Decremento_Footer, 2000);
        }


    }, 100);

    //Footer_Texto_Soy.innerHTML = "a";
    //Footer_Texto_Soy.innerHTML = palabra_in;
}


function Texto_Decremento_Footer()
{

    var indice_decremento_footer = 1;
    firma(700, 1355, 3, 2);

    var decremento_footer = setInterval(function decremento_foot()
    {

        if( indice_decremento_footer >= Palabra_Footer.length )
        {
            clearInterval(Texto_Footer_Dec);
            clearInterval(decremento_footer);
            Texto_Footer = setInterval(Call_Texto_Footer, 1500);
        }

        var string_decremento_footer = Palabra_Footer;
        string_decremento_footer = string_decremento_footer.substring(0, string_decremento_footer.length - indice_decremento_footer);
        //console.log(string_decremento_footer);

        Footer_Texto_Soy.innerHTML = string_decremento_footer;
        indice_decremento_footer++;
    }, 100);
}


var Cadenas_Top = ["Soy Programador.", "Soy Autodidacta.", "Soy Electricista.", "Soy Analítico.", "Soy Optimista.", "Soy Ingeniero Mecatrónico."];
var Tipos_Footer = ["mecatrónicos", "programadores", "ingenieros", "empresarios", "personajes", "innovadores"];
var Indice_Cadena = 0;

function Call_Texto_Top()
{
    Cambia_Palabra_Top( Cadenas_Top[Indice_Cadena] );
    //Cambia_Palabra_Footer( Tipos_Footer[Indice_Cadena] );
    Indice_Cadena++;

    if (Indice_Cadena >= Cadenas_Top.length )
    {
        Indice_Cadena = 0;
    }

}

function Call_Texto_Footer()
{
    Cambia_Palabra_Footer( Tipos_Footer[Indice_Cadena] );
}



/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('visibilitychange', onVisibilityChange, false);

function onVisibilityChange(e)
{
    if(document.hidden)
    {
        clearInterval(Texto_Top);
        clearInterval(Texto_Footer);
        //clearInterval(Firma_Footer);
        clearInterval(Texto_Footer_Dec);
        clearInterval(Texto_Top_Dec);
        //clearInterval(loopa);
        console.log("hidden");
    }
    else
    {
        Texto_Top = setInterval(Call_Texto_Top, 3000);
        Texto_Footer = setInterval(Call_Texto_Footer, 3000);
        //setInterval(off, )
    }

}








var Inc_Firma = 0;

var Cuadro_Firma_Cover = setTimeout(function firma_cover()
{
    var cuadro_firma = document.getElementById("Cover_Mi_Firma");
    //cuadro_firma.style.visibility = "hidden";

    var incremento_firma_cover = setInterval(function incremento_cuadro_firm()
    {
        //console.log(inc + "inc");
        Inc_Firma = Inc_Firma + 70;

        if( Inc_Firma >= 1000 )
        {
            clearInterval(incremento_firma_cover);
            clearInterval(Cuadro_Firma_Cover);
            cuadro_firma.style.visibility = "hidden";
            onVisibilityChange(false);
        }

        ///cuadro_firma.style.opacity = opa;
        //Top_Texto_Mi_Nombre.innerHTML = tipo[conta];
        //letra = letra + tipo[aux];
        cuadro_firma.style.transform = "translateY(" + Inc_Firma + "px)";
    }, 25);

}, 500);






/*
//var tras2 = 0;
//var tras2neg = -100;

function loopy(){
    var tras2 = 0;
    var tras2neg = -100;

    var parrafo  =  document.getElementById("Seccion_3_Soy_Activo");
    var in_1     =  document.getElementById("Seccion_3_Soy_Inactivo_1");
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
        //Top_Texto_Mi_Nombre.innerHTML = tipo[conta];
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
        //Top_Texto_Mi_Nombre.innerHTML = tipo[conta];
        //letra = letra + tipo[aux];
        in_1.style.transform = "translateY(" + tras2neg + "px)";
    }, 40);

    in_1.style.transform = "translateY(0px)";

    in_1.id = "Seccion_3_Soy_Activo";
    parrafo.id = "Seccion_3_Soy_Inactivo_1";

};


//var cadenas = ["Meloso", "Ángel", "Gato", "Raspberry", "Ardilla", "abogado"];
var palabras = ["PROGRAMACIÓN", "ROBÓTICA", "TECNOLOGÍA", "ELECTRÓNICA", "INNOVACIÓN", "INGENIERÍA"];
var contaAux2 = 0;

function textos2(){
    loopy();

}

var loopa = setInterval(textos2, 4000);
//setInterval(off, )
*/


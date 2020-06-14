var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}



var Top_Texto_Soy_Frase  =  document.getElementById("Soy_Frase_Top");
var Top_Texto_Mi_Nombre  =  document.getElementById("Mi_Nombre_Top");
var Footer_Texto_Soy     =  document.getElementById("Soy_Footer");

var li_color         =  document.getElementById("li_activa");



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

        


    }, 100);

    //Footer_Texto_Soy.innerHTML = "a";
    //Footer_Texto_Soy.innerHTML = palabra_in;
}



var Cadenas_Top = ["Soy Programador.", "Soy Autodidacta.", "Soy Electricista.", "Soy Analítico.", "Soy Optimista.", "Soy Ingeniero Mecatrónico."];
var Tipos_Footer = ["mecatrónicos", "programadores", "ingenieros", "empresarios", "personajes", "innovadores"];
var Indice_Cadena = 0;



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
        clearInterval(Texto_Footer);
        //clearInterval(Firma_Footer);
        clearInterval(Texto_Footer_Dec);
        clearInterval(Texto_Top_Dec);
        ///clearInterval(Texto_Top);
        //clearInterval(loopa);
        //console.log("hidden");
    }
    else
    {
        ///Texto_Top = setInterval(Call_Texto_Top, 3000);
        //Texto_Top = setInterval(Call_Texto_Top, 3000);
        Texto_Footer = setInterval(Call_Texto_Footer, 3000);
    }

}


$(document).ready( function iniciar(){
   console.log("inicio!");
} );



/////////////////////////////////////////////////////////////////////////////////////////////////

var Cadenas_Topp = ["angel", "cinco"];
var Tipos_Footer = ["mecatrónicos", "programadores", "ingenieros", "empresarios", "personajes", "innovadores"];
var Indice_Cadena = 0;











  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


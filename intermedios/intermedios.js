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
        //clearInterval(loopa);
        console.log("hidden");
    }
    else
    {
        Texto_Footer = setInterval(Call_Texto_Footer, 3000);
    }

}











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


  anime.timeline({loop: true})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});
var frases = [
    "A terra dará uma volta em torno de si mesma",
    "Você irá acordar cansado(a)",
    "Alguém postará merda no Facebook",
    "O Sol emitirá raios solares",
    "O mar molhará a areia das praias",
    "Seu celular gastará bateria",
    "Você beberá água",
    "Alguém te dará bom dia",
    "Você usará roupas",
    "Algum conhecido seu irá trabalhar",
    "O cinema passará um filme",
    "A temperatura vai variar de acordo com a temperatura",
    "O metrô estará lotado de manhã",
    "Você irá piscar seu olho",
    "Você irá ao banheiro",
    "Haverá um acidente de carro no Brasil",
    "O céu será azul e as nuvens serão brancas",
    "A paixão chegará a ti",
    "Andarás",
    "A tua mente verterá á vossa maior companhia",
    "O Noticiario mostrará algo de teu interesse",
    "O mundo conspirará contra ti, causando arrependimento",
    "Olharás que horas são e perceberá que tua percepção de tempo não é precisa",
    "Comprará algo que considere necessário ou importante",
    "Matará tempo com coisas futeis e sem sentido lógico"
]

var buttons = document.getElementsByClassName("fodase")
$("#descobrir").prop( "disabled", true );

for (var i = 0; i < buttons.length; ++i) {
    var element = buttons[i];
    element.onclick = function() {
        $("#escolha").html("Foda-se")

        $("#descobrir").prop( "disabled", false );
    }
}

var lastRng = -1
var rng = -1
document.getElementById("descobrir").onclick = function() {

    $("#descobrir").html("Descobrir futuro novamente!")

    while (rng === lastRng) {
        rng = Math.floor(Math.random() * frases.length)
    }

    lastRng = rng

    var fraseAleatoria = frases[rng]


    $("#frase").html(fraseAleatoria)
}

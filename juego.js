import { gameOver, restartGame } from "./start.js";
let mainCharacter = {
    name: "Fernando II de Aragòn",
    age: 63,
    wife: {
        name: "Isabel I de Castilla",
        age: 73,
        daughter: {
            name: "Juan Aragòn",
            age: 19,
            neighbor: {
                name: "Rodrigo",
                age: 40,
            }
        }
    }
};

export function startingQuestions() {
    alert("Serás Juan Aragòn");
    alert("El hijo de los reyes catolicos");
    alert("Debes ayudar a tu familia");
    alert("Has notado que tus padres se encuentran algo preocupante");
    firstQuestion();
}

function firstQuestion() {
    alert("Usa 1 para decírselo a un familiar, usa 2 para decírselo a tu madre, usa 3 para decírselo a tu padre");
    let preguntaUno = prompt("Selecciona tu respuesta");

    if (preguntaUno == "1") {
        alert("Tu vecino trato de ayudar pero no le hicieron caso.");
        alert("Faltan tres preguntas más.");
        secondQuestion();
    } else if (preguntaUno == "2" || preguntaUno == "3") {
        delete mainCharacter.wife.daughter.neighbor;
        document.getElementById('messageContainerOne').innerHTML = Objeto actual: ${JSON.stringify(mainCharacter)};
        console.log(JSON.stringify(`mainCharacter`));
        console.log(mainCharacter.wife.daughter.neighbor);
        alert("Después de 'ese día', tu vecino murió 1 días después, el estresarse asi le produjo la muerte.");
        alert("Todavía jugando");
        secondQuestion();
    } else {
        alert("Esa no es una opción. Inténtalo de nuevo.");
        firstQuestion();
    }
}

function secondQuestion() {
    alert("Me case en el año 1469.");
    alert("Su nombre es Fernando II con quien has tenido un lindo hijo.");
    alert("¿han salido a correr por el sector y quien sera el primero en llegar a la meta?");
    let preguntaDos = prompt("Selecciona tu respuesta: 1.- El vecino. 2.- Tú 3.- Tu hijo");

    if (preguntaDos == "3") {
        delete mainCharacter.wife.daughter;
        document.getElementById('messageContainerTwo').innerHTML = `Objeto actual: ${JSON.stringify(mainCharacter)}`;
        console.log(JSON.stringify(mainCharacter));
        alert("Después de eso, tu hijo fue secuestrado y Murió.");
        alert("Todavía jugando");
        thirdQuestion();
    } else if (preguntaDos == "2" || preguntaDos == "1") {
        alert("los policias se detienen y se encuetra toda la familia reunida.");
        alert("Todavía jugando");
        thirdQuestion();
    } else {
        alert("Esa no es una opción. Inténtalo de nuevo.");
        secondQuestion();
    }
}

function thirdQuestion() {
    alert("Ahora eres Juan, debes salvar a tus padres de la pelea.");
    alert(" Has decidido crear un traje para potegerte de los enemigos, has hecho muchas pruebas, pero al final los has conseguido.");
    alert("haras pruebas con tus padres para salvarlos, debes ver el dia, ya que se hiran de viaje.");

    let preguntaTres = prompt("Selecciona tu respuesta: 1.- despues del paseo 2.- hacer la pruebas antes del paseoo 3.- seguir experimentando");
    if (preguntaTres == "2") {
        alert("Has salvado a tu padres. Estan muy orgullosos de ti.");
        alert("falta poquito, para terminar lo haces muy bien, animo,animo :D.");
        fourthQuestion();
    } else if (preguntaTres == "1" || preguntaTres == "3") {
        delete mainCharacter.wife;
        document.getElementById('messageContainerThree').innerHTML = `Objeto actual: ${JSON.stringify(mainCharacter)}`;
        console.log(mainCharacter.wife);
        alert("Tus padres fallecieron la leusemia acabo con ellos.");
        alert("aun tienes a tu familia, debes cuidarlos.");
        fourthQuestion();
    } else {
        alert("Esa no es una opción. Inténtalo de nuevo.");
        thirdQuestion();
    }
}

function fourthQuestion() {
    alert("Ahora vives en Medina del Campo");
    alert("Algo malo sucederá en unas horas.");
    alert("Tu nombre: Juan Aragòn.");
    alert("¿debes elegir que hacer?");

    let preguntaCuatro = prompt("Selecciona tu respuesta: 1.- Seguir trabajando . 2.- Quedarte en el reino. 3.- Tener tu día normal");
    if (preguntaCuatro == "2" || preguntaCuatro == "2") {
        delete mainCharacter.name;
        delete mainCharacter.age;
        mainCharacter = null;
        console.log("Fin");
        document.getElementById('messageContainerFour').innerHTML = `Objeto actual: ${JSON.stringify(mainCharacter)}`;
        console.log(JSON.stringify(mainCharacter));
        alert("te obsecionaste tanto con el enfrentamiento, que descuidaste a tu familia");
        alert("tus logros siempre existiran lastima.");
        alert("Tu impacto perdura, aunque has sufrido la pérdida de tus seres queridos.");
        alert("Gracias por jugar");
        gameOver();
    } else if (preguntaCuatro == "1") {
        alert("Lo hiciste bien.");
        alert("cambiaste la historia.");
        alert("¡GRACIAS POR JUGAR!");
        restartGame();
    } else {
        alert("Esa no es una opción.");
        alert("¡INTÉNTALO DE NUEVO!");
        fourthQuestion();
    }
}
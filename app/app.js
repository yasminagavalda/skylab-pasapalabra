var questions = [
    { letter: "a", answer: ["abducir", "adular", "abeja"], status: 0, question: [("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"), ("CON LA A. Hacer o decir con intención, a veces inmoderadamente, lo que se cree que puede agradar a otro."), ("CON LA A. Insecto himenóptero, de unos quince milímetros de largo, de color pardo negruzco y vello rojizo, que vive en colonias y produce cera y miel.")] },
    { letter: "b", answer: ["bingo", "barajar", "beber"], status: 0, question: [("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"), ("CON LA B. En el juego de naipes, mezclar unos con otros antes de repartirlos"), ("CON LA B. Ingerir un líquido.")] },
    { letter: "c", answer: ["churumbel", "carta", "cantar"],  status: 0, question: [("CON LA C. Niño, crío, bebé"), ("CON LA C. Papel escrito, y ordinariamente cerrado, que una persona envía a otra para comunicarse con ella."), ("CON LA C. Producir con la voz sonidos melodiosos, formando palabras o sin formarlas.")] },
    { letter: "d", answer: ["diarrea", "docena", "danes"], status: 0, question: [("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"), ("CON LA D. Conjunto de doce unidades"), ("CON LA D. Natural de Dinamarca")] },
    { letter: "e", answer: ["ectoplasma", "eructar", "enredadera" ], status: 0, question: [("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"), ("CON LA E. Expeler con ruido por la boca los gases del estómago"), ("CON LA E. Dicho de una planta: De tallo voluble o trepador, que se enreda en las varas u otros objetos salientes.")] },
    { letter: "f", answer: ["facil", "fundir", "fuego"], status: 0, question: [("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"), ("CON LA F. Derretir y licuar los metales, los minerales u otros cuerpos sólidos."), ("CON LA F. Fenómeno caracterizado por la emisión de calor y de luz, generalmente con llama.")] },
    { letter: "g", answer: ["galaxia", "ginebra", "guerra" ], status: 0, question: [("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"), ("CON LA G. Bebida alcohólica obtenida de semillas y aromatizada con las bayas del enebro"), ("CON LA G. Lucha armada entre dos o más naciones o entre bandos de una misma nación.")] },
    { letter: "h", answer: ["harakiri", "hacha", "hielo" ], status: 0, question: [("CON LA H. Suicidio ritual japonés por desentrañamiento"), ("CON LA H. Herramienta cortante, compuesta de una gruesa hoja de acero, con filo algo convexo, ojo para enastarla, y a veces con peto."), ("CON LA H. Agua convertida en cuerpo sólido y cristalino por un descenso suficiente de temperatura.")] },
    { letter: "i", answer: ["iglesia", "igneo", "ileso" ], status: 0, question: [("CON LA I. Templo cristiano"), ("CON LA I. De fuego o que tiene la naturaleza del fuego."), ("CON LA I. Que no ha recibido lesión o daño")] },
    { letter: "j", answer: ["jabali", "jinete", "jaque"], status: 0, question: [("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"), ("CON LA J. Persona diestra en la equitación"), ("CON LA J. Lance del ajedrez en que un jugador, mediante el movimiento de una pieza, amenaza directamente al rey del otro, con obligación de avisarlo")] },
    { letter: "k", answer: ["kamikaze", "karaoke", "ketchup"], status: 0, question: [("CON LA K. Persona que se juega la vida realizando una acción temeraria"), ("CON LA K. Diversión consistente en interpretar una canción sobre un fondo musical grabado, mientras se sigue la letra que aparece en una pantalla."), ("CON LA K. Salsa de tomate condimentada con vinagre, azúcar y especias.")] },
    { letter: "l", answer: ["licantropo", "lacon", "litio"], status: 0, question: [("CON LA L. Hombre lobo"), ("CON LA L. Brazuelo del cerdo."), ("CON LA L. Elemento químico metálico, alcalino, de núm. atóm. 3, muy poco denso, escaso en la corteza terrestre, donde se encuentra disperso en ciertas rocas")] },
    { letter: "m", answer: ["misantropo", "martir", "martillo"], status: 0, question: [("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"), ("CON LA M. Persona que muere o sufre grandes padecimientos en defensa de sus creencias o convicciones."), ("CON LA M. Herramienta de percusión compuesta de una cabeza, por lo común de hierro, y un mango, generalmente de madera.")] },
    { letter: "n", answer: ["necedad", "nacer", "nocivo"], status: 0, question: [("CON LA N. Demostración de poca inteligencia"), ("CON LA N. Dicho de un ser vivo: Salir del vientre materno, del huevo o de la semilla."), ("CON LA N. Dañoso, pernicioso, perjudicial.")] },
    { letter: "ñ", answer: ["señal", "ñu", "señoria"], status: 0, question: [("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."), ("CON LA Ñ. Mamífero rumiante africano de la familia de los antílopes, de color pardo grisáceo, cuya cabeza recuerda la de un toro."), ("CONTIENE LA Ñ. Tratamiento que se da a quienes corresponde por su dignidad, como jueces o parlamentarios")] },
    { letter: "o", answer: ["orco", "ortodoncia", "ornitorrinco"], status: 0, question: [("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"), ("CON LA O. Tratamiento para corregir defectos de la dentadura."), ("CON LA O. Mamífero del orden de los monotremas, del tamaño aproximadamente de un conejo, con hocico semejante al pico de un pato, pies palmeados, con el cuerpo y la cola, larga y aplanada, cubiertos de pelo gris muy fino, que vive en Australia y se alimenta de larvas, de insectos y de pececillos.")] },
    { letter: "p", answer: ["protoss", "pintauñas", "piraña"], status: 0, question: [("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"), ("CON LA P. Cosmético de laca, de secado rápido, usado para colorear las uñas y darles brillo."), ("CON LA P. Pez teleósteo de los ríos de América del Sur, de pequeño tamaño y boca armada de numerosos y afilados dientes, temido por su gran voracidad.")] },
    { letter: "q", answer: ["queso", "quirofano", "buque"], status: 0, question: [("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"), ("CON LA Q. Local convenientemente acondicionado para hacer operaciones quirúrgicas"), ("CONTIENE LA Q. Barco de gran tonelaje con cubierta o cubiertas.")] },
    { letter: "r", answer: ["raton", "rencor", "riqueza"], status: 0, question: [("CON LA R. Roedor"), ("CON LA R. Resentimiento arraigado y tenaz."), ("CON LA R. Abundancia de bienes y cosas preciosas.")] },
    { letter: "s", answer: ["stackoverflow", "sibilino", "sicario"], status: 0, question: [("CON LA S. Comunidad salvadora de todo desarrollador informático"), ("CON LA S. Misterioso u oscuro, a veces con apariencia de importante."), ("CON LA S. Asesino asalariado.")] },
    { letter: "t", answer: ["terminator", "teniente", "tortilla"], status: 0, question: [("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"), ("CON LA T. Oficial de graduación inmediatamente superior al alférez e inferior al capitán."), ("CON LA T. Alimento preparado con huevo batido, cuajado con aceite en la sartén y de forma redonda o alargada, al que a veces se añaden otros ingredientes.")] },
    { letter: "u", answer: ["unamuno", "utopia", "universal"], status: 0, question: [("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"), ("CON LA U. Plan, proyecto, doctrina o sistema deseables que parecen de muy difícil realización."), ("CON LA U. Perteneciente o relativo al universo.")] },
    { letter: "v", answer: ["vikingos", "varicela", "vino"], status: 0, question: [("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"), ("CON LA V. Enfermedad contagiosa, aguda y febril, caracterizada por una erupción parecida a la de la viruela benigna, pero cuyas vesículas supuran moderadamente."), ("CON LA V. Bebida alcohólica que se hace del zumo de las uvas exprimido, y cocido naturalmente por la fermentación.")] },
    { letter: "w", answer: ["sandwich", "wifi", "show"], status: 0, question: [("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"), ("CON LA W. Sistema de conexión inalámbrica, dentro de un área determinada, entre dispositivos electrónicos, y frecuentemente para acceso a internet."), ("CONTIENE LA W. Espectáculo de variedades.")] },
    { letter: "x", answer: ["botox", "boxeo", "exhibir"], status: 0, question: [("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"), ("CONTIENE LA X. Deporte que consiste en la lucha de dos púgiles, con las manos enfundadas en guantes especiales y de conformidad con ciertas reglas."), ("CONTIENE LA X. Manifestar, mostrar en público.")] },
    { letter: "y", answer: ["peyote", "yuca", "yeso"], status: 0, question: [("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"), ("CON LA Y. Planta de América tropical, de la familia de las liliáceas, con tallo arborescente, cilíndrico, lleno de cicatrices, de hasta dos metros de altura, coronado por un penacho de hojas largas, gruesas, rígidas y ensiformes, que tiene flores blancas, casi globosas, colgantes de un escapo largo y central, y raíz gruesa, de la que se saca harina alimenticia, y que se cultiva en Europa como planta de adorno."), ("CON LA Y. Sulfato de calcio hidratado, de color blanco, usado en construcción y en escultura por su propiedad de endurecerse rápidamente al mezclarse con agua.")] },
    { letter: "z", answer: ["zen", "zarigueya", "zapatilla"], status: 0, question: [("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"), ("CON LA Z. Mamífero marsupial americano, trepador, de aspecto parecido a la rata, de hocico alargado, pelaje gris y cola prensil."), ("CON LA Z. Calzado cómodo y ligero, de paño, piel, etc., y con suela delgada, que se usa para estar en casa.")] },
]

// Text to display (welcome and questions).
var text = "Bienvenido a Pasapalabra! Presiona START para jugar."
document.getElementById('text').innerHTML = (text)

// Variable to show result at end of game
var result = ""

// Function that assigns a random number between 0 and 2. Each letter of "questions" contains 3 questions. This random number will determine the question number that will be asked in each game
function questionN () {
    return Math.round(Math.random()*2)
}

// Function that recognizes enter key and executes function "aceptar"
function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==13) {
        aceptar()
    }
}

var questionNumber = questionN() // Contains number of question to ask for each letter

var count = 0 // Counter to pass letter after each question

var correct = 0 // Counter for correct answers

var fail = 0 // Counter for failed answers

var suma = 0 // Counter for correct and failed answers

var time = 130 // Time to play each game

// Timer function.
function functionTimer () {
    time-=1
    document.getElementById('time').innerHTML = (time)
    timer=setTimeout("functionTimer(time);",1000);
    if (time === 0) {
        alert("Your time is over!")
        text = "¡Se ha acabado el tiempo!"
        result = "Has acertado " + correct + " respuestas y has fallado " + fail + "."
        document.getElementById('text').innerHTML = (text)
        document.getElementById('result').innerHTML = (result)
        clearTimeout(timer)
    }
}

// Game start function. Start timer and launch first question.
function start () {
    text = questions[count].question[questionNumber]
    document.getElementById('text').innerHTML = (text)
    document.getElementById('time').innerHTML = (time)
    timer=setTimeout("functionTimer();",1000);       
}

// Function that is executed when you press the "ACEPTAR" button after answering a question. Check if the answer is correct or incorrect and change the background color of the letter in question. Add units to the corresponding counters and if the last question, shows the result.
function aceptar() {
    var answer = (document.getElementById("answer").value).toLowerCase()
    var letter = (questions[count].letter).toUpperCase()
    
    if (answer === questions[count].answer[questionNumber]){
        questions[count].status = 1
        document.getElementById(letter).style.background = "green"
        correct +=1 
        count += 1
        suma += 1
    } else {
        questions[count].status = 2
        document.getElementById(letter).style.background = "red"
        fail +=1
        count += 1
        suma += 1
    }

    if (suma === questions.length) {
        count = -1
        text = "¡Has completado el rosco!"
        result = "Has acertado " + correct + " respuestas y has fallado " + fail + "."
        document.getElementById('text').innerHTML = (text)
        document.getElementById('result').innerHTML = (result)   
        clearTimeout(timer)
    }

    if (count >= questions.length) {
        count = 0
    }
    if (count !== -1) {
        while (questions[count].status !== 0) {
            count += 1
            if (count >= questions.length) {
                count = 0
            }
        }
    }
    document.getElementById("answer").value="";
    document.getElementById("answer").placeholder="Enter your answer";
    text = questions[count].question[questionNumber]
    document.getElementById('text').innerHTML = (text)
}

// Function that is executed when pressing "PASAPALABRA" button.
function pasapalabra() {
    count += 1
    if (count >= questions.length) {
        count = 0
    }
    while (questions[count].status !== 0) {
        count += 1
        if (count >= questions.length) {
            count = 0
        }
    }
    text = questions[count].question[questionNumber]
    document.getElementById('text').innerHTML = (text)
    document.getElementById("answer").innerHTML.placeholder = "Enter your answer"
}

// Function that is executed when pressing "STOP" button. Stops game and timer and displays the result.
function stop () {
    text = "Has detenido el juego."
    result = "Has acertado " + correct + " respuestas y has fallado " + fail + "."
    document.getElementById('text').innerHTML = (text)
    document.getElementById('result').innerHTML = (result)
    clearTimeout(timer)
}


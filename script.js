const eventos = [
    { 
        anio: "Sumeria", 
        texto: `La antigua Sumeria, considerada la cuna de la civilización, fue una de las primeras sociedades en registrar formalmente las transacciones inmobiliarias. A través de tablillas de arcilla, los sumerios mantenían un sistema detallado para registrar la compra, venta y arrendamiento de tierras y propiedades. En esta época, la propiedad de la tierra no era un derecho individual absoluto, sino que estaba vinculada a la organización política y religiosa. Los acuerdos inmobiliarios eran fundamentales para el funcionamiento económico de la ciudad-estado, y los contratos se realizaban con el respaldo de autoridades locales o templos. La propiedad de la tierra era vista como un bien primordial que se transmitía a través de generaciones, y la primera forma de corretaje inmobiliario involucraba intermediarios que ayudaban a formalizar acuerdos.`,
        bibliografia: "Sumeria"
    },
    { 
        anio: "Egipto y Grecia", 
        texto: `En el Egipto Antiguo, la propiedad de tierras estaba estrechamente vinculada al poder y la riqueza, especialmente en torno a los templos y las figuras religiosas. El faraón, considerado dueño de toda la tierra, otorgaba terrenos a las personas a cambio de impuestos y trabajo. Aunque el concepto de "corretaje inmobiliario" no existía en su forma moderna, las transacciones de tierras se realizaban principalmente entre los nobles y las clases altas, quienes gestionaban las propiedades y las heredaban. En el mundo griego, particularmente en Atenas, la propiedad de la tierra estaba muy valorada, y los contratos de compra-venta se realizaban en mercados abiertos, con la asistencia de un notario. La cidadanía estaba fuertemente ligada a la posesión de tierras, y los acuerdos inmobiliarios eran una forma de asegurar estatus social y poder. Aunque no existían agentes especializados como los actuales, el intercambio de tierras y propiedades se realizaba mediante la negociación directa entre las partes involucradas.`,
        bibliografia: "Egipto y Grecia"
    },
    { 
        anio: "Roma", 
        texto: `En el Imperio Romano, el sistema inmobiliario alcanzó un grado de sofisticación nunca antes visto. Los romanos fueron pioneros en la formalización de contratos y en la creación de leyes que regulaban las transacciones de propiedades. El derecho romano estableció las bases del mercado inmobiliario moderno, y muchas de las estructuras legales utilizadas en la actualidad, como los contratos de compra, venta y arrendamiento, tienen sus orígenes en esa época. La propiedad en Roma estaba regulada por el estado y se protegía mediante un sistema judicial muy avanzado. A medida que el Imperio se expandía, las ciudades romanas crecían rápidamente, lo que generó una mayor demanda de terrenos tanto para viviendas como para infraestructuras comerciales. El corretaje inmobiliario en Roma era manejado por intermediarios llamados "agentes", quienes facilitaban las transacciones y aseguraban que ambas partes cumplieran con los términos establecidos en los contratos.`,
        bibliografia: "Roma"
    },
    { 
        anio: "Azteca", 
        texto: `La civilización Azteca tenía un sistema de distribución de tierras bastante diferente al de las culturas occidentales. Aunque no existía el concepto de propiedad privada tal como lo conocemos hoy, la asignación de tierras a las familias era parte de un sistema centralizado. Los terrenos eran distribuidos por el gobierno central, y las personas que los trabajaban podían utilizarlos, pero no poseerlos de manera absoluta. En este sentido, el corretaje inmobiliario en el sentido moderno no existía, pero había ciertos intermediarios que ayudaban a organizar el uso de tierras para los distintos fines de la sociedad azteca. La gestión de estos recursos tenía un fuerte componente social y económico, pues las tierras cultivables eran un bien preciado que sostenía a la población. Los acuerdos relacionados con la transferencia de tierras entre distintas entidades, como las tribus y los gobernantes, se llevaban a cabo a través de registros específicos en códices, y el trueque era una práctica común.`,
        bibliografia: "Azteca"
    },
    { 
        anio: "Edad Media", 
        texto: `Durante la Edad Media, el sistema feudal dominaba gran parte de Europa, y la propiedad inmobiliaria estaba centralizada en manos de la nobleza y la iglesia. Los campesinos no eran propietarios de las tierras que trabajaban, sino que las arrendaban de los señores feudales, quienes eran los verdaderos dueños. El corretaje inmobiliario no existía en el sentido moderno; sin embargo, las transacciones de tierras, ya fuera por compra, arrendamiento o herencia, eran esenciales para el mantenimiento del sistema feudal. Las tierras podían ser adquiridas por medio de donaciones o a través de intermediarios que ayudaban a los nobles a gestionar sus propiedades. A pesar de la falta de un sistema de corretaje formal, los contratos de arrendamiento y los acuerdos de venta de tierras eran cruciales para el funcionamiento de la economía medieval, especialmente en un contexto de control feudal y jerarquía social.`,
        bibliografia: "Edad Media"
    },
    { 
        anio: "Revolución industrial", 
        texto: `La Revolución Industrial trajo consigo una transformación radical en la economía inmobiliaria. A medida que las ciudades crecían rápidamente debido al desarrollo de fábricas y la urbanización, las tierras y propiedades se convirtieron en un recurso muy demandado. La venta y el alquiler de propiedades industriales y residenciales se convirtió en una actividad común, y surgieron los primeros agentes inmobiliarios como intermediarios profesionales. Las transacciones inmobiliarias eran ahora más accesibles, y los contratos de compraventa se formalizaban mediante la intervención de notarios y abogados. Este período también marcó el comienzo del auge de los barrios obreros, donde las viviendas se construían rápidamente para albergar a los trabajadores de las fábricas. El corretaje inmobiliario en este contexto empezó a estructurarse de manera más formal, con el establecimiento de agencias dedicadas exclusivamente a la compra, venta y alquiler de propiedades.`,
        bibliografia: "Revolución industrial."
    },
    { 
        anio: "México", 
        texto: `El mercado inmobiliario en México ha experimentado una evolución interesante a lo largo de su historia. Desde la época colonial, donde la propiedad de la tierra estaba concentrada en manos de las instituciones religiosas y los grandes terratenientes, hasta la era moderna, donde la urbanización y el crecimiento de las ciudades han impulsado el sector inmobiliario. Después de la Revolución Mexicana, las reformas agrarias dieron lugar a la redistribución de tierras, lo que transformó el panorama de la propiedad en el país. En la actualidad, el corretaje inmobiliario en México es un sector competitivo que involucra tanto a agentes inmobiliarios tradicionales como a plataformas digitales. Las grandes ciudades, como Ciudad de México y Monterrey, se han convertido en focos de desarrollo inmobiliario, y las transacciones inmobiliarias se realizan a través de profesionales capacitados que gestionan desde pequeñas propiedades hasta grandes desarrollos comerciales.`,
        bibliografia: "México"
    },
    { 
        anio: "Actualidad en Argentina", 
        texto: `En Argentina, el corretaje inmobiliario es una actividad clave en la economía del país. Buenos Aires, Córdoba y Rosario son las ciudades más activas en términos de compra y venta de propiedades, tanto en el sector residencial como comercial. La profesionalización del corretaje inmobiliario ha avanzado, y ahora existen asociaciones y colegios que regulan las actividades de los agentes inmobiliarios. Las propiedades son vistas como una forma de inversión segura, y en un contexto de inflación y devaluación de la moneda, muchos argentinos han optado por adquirir propiedades para preservar su capital. El corretaje inmobiliario en Argentina está altamente influenciado por factores económicos, políticos y sociales, y los agentes inmobiliarios juegan un papel fundamental en guiar a los compradores e inversionistas a través de un mercado competitivo y fluctuante.`,
        bibliografia: "Argentina"
    }
];


const timelineEvents = document.getElementById("timeline-events");
const bibliographySection = document.getElementById("bibliography-list");
const bibliographies = new Set();

function toggleContraste() {
    const body = document.body;
    const isActive = body.classList.toggle("alto-contraste");

    if (isActive) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        localStorage.setItem("modoAltoContraste", "true");
    } else {
        body.style.backgroundColor = "";
        body.style.color = "";
        localStorage.removeItem("modoAltoContraste");
    }
}


function crearEvento(evento) {
    const div = document.createElement("div");
    div.classList.add("event");
    div.innerHTML = `
        <h3>${evento.anio}</h3>
        <p>${evento.texto}</p>
        <p><strong>Bibliografía:</strong> ${evento.bibliografia}</p>
    `;
    return div;
}

function renderizarEventos() {
    eventos.forEach(evento => {
        const div = crearEvento(evento);
        timelineEvents.appendChild(div);
        bibliographies.add(evento.bibliografia);
    });
}

function renderizarBibliografias() {
    bibliographies.forEach(biblio => {
        const li = document.createElement("li");
        li.textContent = biblio;
        bibliographySection.appendChild(li);
    });
}

function revealOnScroll() {
    const elements = document.querySelectorAll(".event");
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight * 0.8) {
            el.classList.add("visible");
        }
    });
}

function actualizarBarraProgreso() {
    const progressBar = document.querySelector('.progress-bar');
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / scrollableHeight) * 100;
    progressBar.style.height = `${progress}%`;
}

function manejarScroll() {
    revealOnScroll();
    actualizarBarraProgreso();
}

function configurarAccesibilidad() {
    const increaseBtn = document.getElementById("increase-font");
    const decreaseBtn = document.getElementById("decrease-font");
    const resetBtn = document.getElementById("reset-font");

    let fontSize = parseInt(localStorage.getItem("fontSize")) || 16;
    const minSize = 12;
    const maxSize = 40;

    const aplicarTamañoFuente = () => {
        document.body.style.fontSize = `${fontSize}px`;
        localStorage.setItem("fontSize", fontSize);
    };

    increaseBtn.addEventListener("click", () => {
        if (fontSize < maxSize) {
            fontSize += 2;
            aplicarTamañoFuente();
        }
    });

    decreaseBtn.addEventListener("click", () => {
        if (fontSize > minSize) {
            fontSize -= 2;
            aplicarTamañoFuente();
        }
    });

    resetBtn.addEventListener("click", () => {
        fontSize = 16;
        aplicarTamañoFuente();
    });

    aplicarTamañoFuente();
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnAltoContraste").addEventListener("click", toggleContraste);
    
    // Aplicar alto contraste si estaba activado
    if (localStorage.getItem("modoAltoContraste") === "true") {
        document.body.classList.add("alto-contraste");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }

    renderizarEventos();
    renderizarBibliografias();
    configurarAccesibilidad();
    revealOnScroll(); // Mostrar al cargar
});

// Scroll
window.addEventListener("scroll", manejarScroll);
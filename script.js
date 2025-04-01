const eventos = [
    { anio: "Sumeria", texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. del auge inmobiliario. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis." },
    { anio: "Egipto y Grecia", texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. del auge inmobiliario. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis." },
    { anio: "Roma", texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. del auge inmobiliario. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis." },
    { anio: "Azteca", texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. del auge inmobiliario. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis." },
    { anio: "Edad Media", texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. del auge inmobiliario. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis." },
    { anio: "Revolución industrial", texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. del auge inmobiliario. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis." },
    { anio: "Mexico", texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. del auge inmobiliario. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis." },
    { anio: "Actualidad en Argentina", texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis. del auge inmobiliario. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur laborum fugiat ipsa, eos iure expedita rem blanditiis adipisci laudantium sit quam harum tempora aut sequi velit voluptas deserunt rerum debitis." }
];

const timelineEvents = document.getElementById("timeline-events");

eventos.forEach((evento) => {
    const div = document.createElement("div");
    div.classList.add("event");
    div.innerHTML = `<h3>${evento.anio}</h3><p>${evento.texto}</p>`;
    timelineEvents.appendChild(div);
});

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
window.addEventListener("scroll", () => {
    revealOnScroll();
    const progressBar = document.querySelector('.progress-bar');
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / scrollableHeight) * 100;
    progressBar.style.height = progress + '%';
  });

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

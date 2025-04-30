const preguntas = [
    {
      pregunta: "¿Qué tipo de documento se usaba en Sumeria para registrar transacciones inmobiliarias?",
      opciones: ["Papiro ilustrado", "Manuscritos en cuero", "Tablillas de arcilla con escritura cuneiforme", "Rollos de seda"],
      respuesta: "Tablillas de arcilla con escritura cuneiforme"
    },
    {
      pregunta: "¿Quién supervisaba las ventas de tierras en Sumeria para garantizar su validez?",
      opciones: ["Los sacerdotes", "El rey", "Los escribas y testigos oficiales", "Los comerciantes"],
      respuesta: "Los escribas y testigos oficiales"
    },
    {
      pregunta: "¿Cómo se registraban los bienes inmuebles en el Antiguo Egipto?",
      opciones: ["Mediante contratos orales", "A través de registros del faraón o del templo", "En tablillas de arcilla", "Por medio de grabados en piedra"],
      respuesta: "A través de registros del faraón o del templo"
    },
    {
      pregunta: "¿Qué institución solía controlar las tierras en Egipto?",
      opciones: ["Las familias nobles", "El ejército", "Los templos y el Estado", "Las aldeas"],
      respuesta: "Los templos y el Estado"
    },
    {
      pregunta: "¿Cómo se transfería la propiedad de la tierra entre los aztecas?",
      opciones: ["Por herencia exclusivamente", "Mediante actos rituales y autorización del calpulli", "Con permisos del emperador", "A través de contratos escritos"],
      respuesta: "Mediante actos rituales y autorización del calpulli"
    },
    {
      pregunta: "¿Existía la propiedad privada en el Imperio Azteca?",
      opciones: ["No, toda la tierra era del emperador", "Sí, y era totalmente libre", "Sí, pero mayormente la tierra era comunal", "Solo para los comerciantes"],
      respuesta: "Sí, pero mayormente la tierra era comunal"
    },
    {
      pregunta: "¿Qué era un argentarius en Roma?",
      opciones: ["Un notario", "Un terrateniente", "Un banquero/mediador que podía actuar como corredor", "Un recaudador de impuestos"],
      respuesta: "Un banquero/mediador que podía actuar como corredor"
    },
    {
      pregunta: "¿Cómo se garantizaban los acuerdos en las ventas de tierras en Roma?",
      opciones: ["Con juramentos", "Con contratos escritos y testigos", "Por decreto del Senado", "Con sellos imperiales"],
      respuesta: "Con contratos escritos y testigos"
    },
    {
      pregunta: "¿Qué institución garantizaba la confianza entre compradores y vendedores?",
      opciones: ["La iglesia", "El rey", "Los gremios", "Los señores feudales"],
      respuesta: "Los gremios"
    },
    {
      pregunta: "¿Por qué se dificultaban las operaciones inmobiliarias en la Edad Media?",
      opciones: ["Por la inflación", "Porque gran parte de la tierra pertenecía a señores feudales", "Por la falta de escritura", "Porque no había corredores"],
      respuesta: "Porque gran parte de la tierra pertenecía a señores feudales"
    },
    {
      pregunta: "¿Qué normativa regulaba las ventas de tierras en la época colonial?",
      opciones: ["El Código de Comercio", "Las Leyes de Indias y la Recopilación de Leyes de Castilla", "El Fuero Juzgo", "La Constitución de Cádiz"],
      respuesta: "Las Leyes de Indias y la Recopilación de Leyes de Castilla"
    },
    {
      pregunta: "¿Qué figura era responsable de redactar contratos en el México colonial?",
      opciones: ["El juez", "El alcalde", "El escribano público", "El sacerdote"],
      respuesta: "El escribano público"
    },
    {
      pregunta: "¿Qué código influyó en la regulación del corretaje moderno en Europa?",
      opciones: ["El Código Justiniano", "El Código Napoleónico", "El Código Germánico", "El Código de Comercio inglés"],
      respuesta: "El Código Napoleónico"
    },
    {
      pregunta: "¿Qué institución comenzaba a reconocer legalmente al corredor como intermediario?",
      opciones: ["Los bancos", "Las universidades", "Los tribunales comerciales", "Las notarías"],
      respuesta: "Los tribunales comerciales"
    },
    {
      pregunta: "¿Cómo cambió el corretaje inmobiliario durante la Revolución Industrial?",
      opciones: ["Desapareció por falta de necesidad", "Aumentó su importancia por el crecimiento urbano y la propiedad privada", "Se volvió ilegal", "Se fusionó con la banca"],
      respuesta: "Aumentó su importancia por el crecimiento urbano y la propiedad privada"
    },
    {
      pregunta: "¿Qué nuevos registros surgieron con la industrialización?",
      opciones: ["Bibliotecas de tierras", "Registros de propiedad o catastros", "Archivos eclesiásticos", "Códices municipales"],
      respuesta: "Registros de propiedad o catastros"
    },
    {
      pregunta: "¿Qué herencia legal regía antes del Código de Vélez Sarsfield?",
      opciones: ["El derecho francés", "El derecho italiano", "El derecho español: la Recopilación de Indias y el derecho castellano", "El derecho romano"],
      respuesta: "El derecho español: la Recopilación de Indias y el derecho castellano"
    },
    {
      pregunta: "¿Qué decía el Acta 30 de la Recopilación sobre la responsabilidad del corredor?",
      opciones: ["Que podía fijar precios", "Que debía jurar lealtad al comprador", "Que respondía si ocultaba información o actuaba con dolo", "Que era considerado funcionario público"],
      respuesta: "Que respondía si ocultaba información o actuaba con dolo"
    },
    {
      pregunta: "¿El Código Civil de Vélez considera al corredor como parte del contrato?",
      opciones: ["Sí, como co-contratante", "No, solo como intermediario", "Sí, como avalista", "Depende del tipo de contrato"],
      respuesta: "No, solo como intermediario"
    },
    {
      pregunta: "¿Qué artículo del Código de Vélez regula el corretaje?",
      opciones: ["Artículos 105 al 109", "Artículos 2085 al 2089", "Artículos 1501 al 1505", "Artículos 3000 al 3009"],
      respuesta: "Artículos 2085 al 2089"
    }
  ];

  
  let nombreJugador = "";
  let preguntasSeleccionadas = [];
  let indiceActual = 0;
  let puntaje = 0;
  
  function comenzarTrivia() {
    const inputNombre = document.getElementById("nombre");
    if (!inputNombre.value.trim()) {
      alert("Por favor ingresá tu nombre.");
      return;
    }
  
    nombreJugador = inputNombre.value.trim();
    preguntasSeleccionadas = preguntas.sort(() => Math.random() - 0.5).slice(0, 10);
    document.getElementById("inicio").style.display = "none";
    document.getElementById("pregunta").style.display = "block";
    mostrarPregunta();
  }
  
  function mostrarPregunta() {
    const actual = preguntasSeleccionadas[indiceActual];
    document.getElementById("textoPregunta").textContent = actual.pregunta;
  
    const opcionesContenedor = document.getElementById("opciones-container");
    opcionesContenedor.innerHTML = "";
  
    actual.opciones.forEach(opcion => {
      const btn = document.createElement("button");
      btn.textContent = opcion;
      btn.onclick = () => validarRespuesta(opcion);
      opcionesContenedor.appendChild(btn);
    });
  }
  
  function validarRespuesta(opcionElegida) {
    const actual = preguntasSeleccionadas[indiceActual];
    if (opcionElegida === actual.respuesta) {
      puntaje++;
    }
  
    // Deshabilitar todos
    document.querySelectorAll("#opciones-container button").forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === actual.respuesta) {
        btn.style.backgroundColor = "lightgreen";
      } else if (btn.textContent === opcionElegida) {
        btn.style.backgroundColor = "#f88";
      }
    });
  }
  
  function siguientePregunta() {
    if (indiceActual < preguntasSeleccionadas.length - 1) {
      indiceActual++;
      mostrarPregunta();
    } else {
      terminarJuego();
    }
  }
  
  function terminarJuego() {
    document.getElementById("pregunta").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("puntajeFinal").textContent = `${nombreJugador}, tu puntaje final es de: ${puntaje}/10`;
  
    const gifContenedor = document.getElementById("gifResultado");
    let gifRuta = "";

    if (puntaje <= 5) {
      gifRuta = "img/0a5.gif";
    } else if (puntaje <= 8) {
      gifRuta = "img/6a8.gif";
    } else if (puntaje === 9) {
      gifRuta = "img/9.gif";
    } else if (puntaje === 10) {
      gifRuta = "img/10.gif";
    }
    

  gifContenedor.innerHTML = `<img src="${gifRuta}" alt="Resultado" style="max-width: 100%; height: auto;">`;
  console.log("Ruta del gif seleccionada:", gifRuta);

  }
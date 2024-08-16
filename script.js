
let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
  .pauseFor(2500)
  .typeString('Yazmin Guerrero')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Frontend JR')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Estudiante en Tecnologias de la Informacion')
  .pauseFor(1000)
  .deleteAll()
  .typeString('<3 <3')
  .pauseFor(200)
  .start();



let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
loop: true,
delay: 75,
});
  
  // Usar el punto es para llamar a una propiedad o a una acción del objeto.
  // Acciones se distinguen por los paréntesis ()
  typewriterFrase
    .pauseFor(2500)
    .typeString('Unos de los graves riesgos de la vida, es nunca atreverse a arriesgar')
    .pauseFor(300)
    .deleteAll()
    .typeString('Oprah Winfrey')
    .pauseFor(1000)
    .start();
    let audioElement; // Variable para almacenar el objeto Audio


    const mainElement = document.querySelector('main'); // Seleccionar la etiqueta <main>
    
    mainElement.addEventListener('click', function() {
        if (!audioElement) {
            audioElement = new Audio('assets/music/musica.mp3');
        }
        audioElement.play();
    });
    
    const pauseButton = document.getElementById('pauseButton');
    
    pauseButton.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play();
            pauseButton.textContent = "Pausar";
        } else {
            audioElement.pause();
            pauseButton.textContent = "Reanudar";
        }
    });
    
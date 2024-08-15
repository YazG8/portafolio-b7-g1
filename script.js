let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 50,
});

typewriter
    .pauseFor(2500)
    .typeString('Sofia Camacho')
    .pauseFor(300)
    .deleteChars(15)
    .typeString('Estudiante de TI ')
    .typeString('Desarrollo de Software')
    .pauseFor(1000)
    .start();

let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 50,
});

typewriterFrase
    .pauseFor(2500)
    .typeString('Sino puedes imaginarlo, puedes programarlo')
    .pauseFor(300)
    .deleteChars(45)
    .typeString('Por: Alejandro Taboada')
    .pauseFor(1000)
    .start();
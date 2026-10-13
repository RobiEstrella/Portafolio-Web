const animacion = ScrollReveal({
    distance: '40px',
    duration: 1200,
    easing: 'ease-in-out',
    reset: false
});

animacion.reveal('.reveal-top', {
    origin: 'top',
    delay: 100
});

animacion.reveal('.reveal-bottom', {
    origin: 'bottom',
    interval: 150
});

animacion.reveal('.reveal-left', {
    origin: 'left',
    delay: 200
});
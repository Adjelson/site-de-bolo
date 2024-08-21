window.onload = function() {
    // Seu código que depende de todos os recursos carregados




 // Inicializa o AOS
    AOS.init();

 };document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    function checkFooterVisibility() {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (footerPosition <= windowHeight) {
            footer.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility(); // Verifica a visibilidade ao carregar a página
});
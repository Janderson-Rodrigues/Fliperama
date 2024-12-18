alert("ATENÇÃO, MINISTÉRIO DOS GAMES ADVERTE, ESTE JOGO PODE CAUSAR EXTRESSE🤬🤬🤬😡")
document.addEventListener('DOMContentLoaded', () => { 
    const button = document.getElementById('ta-amarrado');
    const imagem = document.getElementById('fundo');

    button.addEventListener('mousemove', () => { 
        moveButtonRandomly(button);
    });
    
    button.addEventListener('click', () => { 
        imagem.setAttribute("src", "MIDIAS/sim.jpg");
    });

    falaTexto("h1", "Quer casar comigo?");

    setTimeout(() => {
        responsiveVoice.speak("Pq você está demorando para responder? Você não me ama mais?", 'Brazilian Portuguese Female', {rate:0.9});
    }, 8000);

    setTimeout(() => {
        imagem.setAttribute("src", "MIDIAS/eleaceita.jpg");
        responsiveVoice.speak("Gente ele está muito emocionado, eu vou responder por ele. ele aceita", 'Brazilian Portuguese Female', {rate:1.0});
    }, 15000);
    
});

function falaTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.textContent = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}

function moveButtonRandomly(button) { 
    const gameArea = button.parentElement; 
    const areaWidth = gameArea.clientWidth; 
    const areaHeight = gameArea.clientHeight; 
    const buttonWidth = button.offsetWidth; 
    const buttonHeight = button.offsetHeight; 
    
    const randomX = Math.random() * (areaWidth - buttonWidth); 
    const randomY = Math.random() * (areaHeight - buttonHeight); 
    
    button.style.left = `${randomX}px`; 
    button.style.top = `${randomY}px`; 
}


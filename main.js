console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
// Criando um novo elemento para o canvas
let canvas = document.createElement('canvas');
canvas.width = window.innerWidth; // Largura da tela
canvas.height = window.innerHeight; // Altura da tela
document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');

// Array de flores com suas propriedades
let flores = [
    { x: 100, y: 100, color: 'red', dx: 2, dy: 1 },
    { x: 200, y: 150, color: 'blue', dx: -2, dy: 2 },
    { x: 300, y: 200, color: 'green', dx: 3, dy: -1 },
    { x: 400, y: 250, color: 'yellow', dx: -3, dy: 2 },
    { x: 500, y: 300, color: 'orange', dx: 1, dy: -2 }
];

// Função para desenhar uma flor
function desenharFlor(x, y, color) {
    ctx.fillStyle = color;
    // Desenha as pétalas
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x + 20 * Math.cos((i * 2 * Math.PI) / 5), y + 20 * Math.sin((i * 2 * Math.PI) / 5), 15, 0, Math.PI * 2);
        ctx.fill();
    }
    // Desenha o centro da flor
    ctx.beginPath();
    ctx.fillStyle = 'yellow'; // Centro da flor
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();
}

// Função para desenhar as flores
function desenharFlores() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    flores.forEach(flor => {
        desenharFlor(flor.x, flor.y, flor.color);

        // Atualiza a posição da flor
        flor.x += flor.dx;
        flor.y += flor.dy;

        // Verifica se a flor atingiu as bordas do canvas
        if (flor.x + 20 > canvas.width || flor.x - 20 < 0) {
            flor.dx = -flor.dx; // Inverte a direção
        }
        if (flor.y + 20 > canvas.height || flor.y - 20 < 0) {
            flor.dy = -flor.dy; // Inverte a direção
        }
    });
}

// Animação das flores
function animar() {
    desenharFlores();
    requestAnimationFrame(animar); // Chamando a função de animação
}

// Iniciando a animação
animar();


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(340,340,50,50);
ctx.strokeRect(340,340,50,50);
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
function escrever(contexto, lw, cor_fill, cor_linha, texto, x,y){
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.fillStyle = cor_fill;
    contexto.strokeStyle = cor_linha;
    contexto.font = "90px Arial"
    contexto.textAlign = "center";
    contexto.strokeText(texto,x,y)
    contexto.fillText(texto,x,y);
    contexto.closePath();
}
	
escrever(ctx, 2, 'blue', 'red', 'Olá', 200, 350)
escrever(ctx, 2, 'green', 'yellow', 'oi', 350, 100)
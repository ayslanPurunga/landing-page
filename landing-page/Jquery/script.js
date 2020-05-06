//clicar no botao1 e mudar paragrafo
document.getElementByid('botao1').onclick = function() {
	//adicionar um html no paragrafo
	document.querySelector('p').innerHTML = 'mudei o texto';
}

//getElementbyId -> busca por um id
//querySelector -> busca por uma TAG

//clicar no botao e mudar o paragrafo com jquery
//document.queryselector('h1').innerHTML = ('Olá JQuery');

//(objeto).evento
$(document).ready(function(){
	$('h1').html('Olá JQuery');

	$('#botao2').click(function(){
		$('h2').html('Mudei broe!');

	})

	$("#esconder").click(function() {
		$('')
	}
}


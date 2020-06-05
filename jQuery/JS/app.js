var main = function(){
	'use strict';

	var adicionarComentarioDoInput = function(){
		var $novoComentario = $("<p>");
		var textoComentario = $('.comment-input input').val();
		if(textoComentario !== ''){
			$novoComentario.text(textoComentario);
			$novoComentario.hide();
			$(".comments").append($novoComentario);
			$novoComentario.fadeIn();
			$('.comment-input input').val('');
		}
	}
	$(".comment-input input").on("keypress", function(event){
		if(event.keyCode === 13){
			adicionarComentarioDoInput();
		}
	});
	$(".comment-input button").on("click", function(event) {
		adicionarComentarioDoInput();		
	});
};
$(document).ready(main);



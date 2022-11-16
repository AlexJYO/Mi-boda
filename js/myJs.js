

	let btMapa = document.getElementById('bt-mapa');
	let btAndrea = document.getElementById('bt-andrea');
	let btArturo = document.getElementById('bt-arturo');


	btMapa.onclick = function(){
		window.open("https://goo.gl/maps/ubEC1KcszmVzR8p46", '_blank');
	};
	btAndrea.onclick = function(){
		window.open("https://api.whatsapp.com/send?phone=524622519363&text=Creo que me perdí", '_blank');
	};
	btArturo.onclick = function(){
		window.open("https://api.whatsapp.com/send?phone=524622363795&text=Creo que me perdí", '_blank');
	};

	let btConfirmar = document.getElementById('Confirmar');
	btConfirmar.onclick = function(){
		//window.open("https://goo.gl/maps/ubEC1KcszmVzR8p46", '_blank');
	};


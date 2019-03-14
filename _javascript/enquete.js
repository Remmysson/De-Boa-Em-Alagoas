window.onload = function()
{
	var botao = document.getElementsByTagName("button")[0];
	botao.onclick = enquete();
}
function enquete(){
	return function(){
		var x = 0;
		var praia = document.getElementsByTagName("input");
		for(x; x < praia.length; x++)
		{
			if(praia[x].checked)
			{
				switch(praia[x].value)
				{
					case "gunga": alert("Você votou na Praia do Gunga!");
					break;
					case "frances": alert("Você votou na Praia do Francês!");
					break;
					case "pajucara": alert("Você votou na Praia da Pajuçara!");
					break;
					case "ponta verde": alert("Você votou na Praia da Ponta Verde!");
					break;
					case "ipioca": alert("Você votou na Praia de Ipioca!");
					break;
					case "maragogi": alert("Você votou na Praia de Maragogi!");
					break;
					case "outra": prompt("Qual?");
					break;
				}
			}
		}
	}
}

function variar(){
	var variacaoBolsa = Math.round(Math.random() * (10 -1)+1);
	console.log(variacaoBolsa);
	
	if(variacaoBolsa <= 4){
		document.getElementById("valorVariacao").innerHTML ="Queda de " + "</br>" + "<span>" + "-"+ variacaoBolsa;
	}
	
	if(variacaoBolsa > 4){
		document.getElementById("valorVariacao").innerHTML ="Ganho de "  + "</br>" + "<span>" + "+"+ variacaoBolsa;
	}
	if(variacaoBolsa == 5){
		document.getElementById("valorVariacao").innerHTML ="Bolsa equilibrada";
	}
}




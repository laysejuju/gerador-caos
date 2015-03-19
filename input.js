function variar(){
	var variacaoBolsa = Math.round(Math.random() * (10 -1)+1);
	console.log(variacaoBolsa);
	
	if(variacaoBolsa <= 4){
		document.getElementById("valorVariacao").innerHTML ="Queda de " + "</br>" + "<span>" + "-"+ variacaoBolsa;
	}
	
	if(variacaoBolsa == 5){
		document.getElementById("valorVariacao").innerHTML ="Bolsa equilibrada";
	}
	
	if(variacaoBolsa == 6){
		document.getElementById("valorVariacao").innerHTML ="Ganho de "  + "</br>" + "<span>" + "+1";
	}
	
	if(variacaoBolsa == 7){
		document.getElementById("valorVariacao").innerHTML ="Ganho de "  + "</br>" + "<span>" + "+2";
	}
	
	if(variacaoBolsa == 8){
		document.getElementById("valorVariacao").innerHTML ="Ganho de "  + "</br>" + "<span>" + "+3";
	}
	
	if(variacaoBolsa == 9){
		document.getElementById("valorVariacao").innerHTML ="Ganho de "  + "</br>" + "<span>" + "+4";
	}
	
	if(variacaoBolsa == 10){
		document.getElementById("valorVariacao").innerHTML ="Ganho de "  + "</br>" + "<span>" + "+5";
	}

}




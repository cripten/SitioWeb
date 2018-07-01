// A $( document ).ready() block.
$( document ).ready(function() {
	//carga los datos del json
    var mydata = JSON.parse(data);
    var i = 1;
    //recorre los datos del json
    for(datos in mydata){
    	//crea la vitrina de productos
    	if(i <= 5){
    		$("#vitrina").append("<div class='col-12 col-md-6 col-lg-2'><div class='card'><img class='card-img-top item img-style mx-auto' src='img/"+mydata[datos].foto+"' alt='Card image cap'><div class='card-body'><h4 class='card-title'><p class='price-card text-right'>$"+mydata[datos].precio+"</p></h4><div class='row'><div class='col'><p'>"+mydata[datos].nombre+"<img class='izq-align' src='img/Group 2493.png'>12</p></div><div class='col'><a href='#' class='btn btn-sm '>COMPRAR</a><button class='izq-align-img'><img src='img/ico-down.png'>1<img src='img/ico-up.png'></button</div></div></div></div><br><br></div>");
    	}
        if(i == 5){
            $("#vitrina").append("<div class='col-12 col-md-6 col-lg-1'></div>");
        }
    	if(i > 5 && i<=10){
    		$("#recomendados").append("<div class='col-12 col-md-6 col-lg-2'><div class='card'><img class='card-img-top item img-style mx-auto' src='img/"+mydata[datos].foto+"' alt='Card image cap'><div class='card-body'><h4 class='card-title'><p class='price-card text-right'>$"+mydata[datos].precio+"</p></h4><div class='row'><div class='col'><p'>"+mydata[datos].nombre+"<img class='izq-align' src='img/Group 2493.png'>12</p></div><div class='col'><a href='#' class='btn btn-sm '>COMPRAR</a><button class='izq-align-img'><img src='img/ico-down.png'>1<img src='img/ico-up.png'></button</div></div></div></div><br><br></div>");
    	}
        if(i == 10){
            $("#recomendados").append("<div class='col-12 col-md-6 col-lg-1'></div>");
        }
        if(i > 10 && i<=14){
            $("#similares").append("<div class='col-12 col-md-6 col-lg-2'><div class='card'><img class='card-img-top item img-style mx-auto' src='img/"+mydata[datos].foto+"' alt='Card image cap'><div class='card-body'><h4 class='card-title'><p class='price-card text-right'>$"+mydata[datos].precio+"</p></h4><div class='row'><div class='col'><p'>"+mydata[datos].nombre+"<img class='izq-align' src='img/Group 2493.png'>12</p></div><div class='col'><a href='#' class='btn btn-sm '>COMPRAR</a><button class='izq-align-img'><img src='img/ico-down.png'>1<img src='img/ico-up.png'></button</div></div></div></div><br><br></div>");
        }
        if(i == 14){
            $("#similares").append("<div class='col-12 col-md-6 col-lg-1'></div>");
        }
    	i++;
	}
	 
 });
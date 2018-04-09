// A $( document ).ready() block.
$( document ).ready(function() {
	//carga los datos del json
    var mydata = JSON.parse(data);
    var i = 1;
    //recorre los datos del json
    for(datos in mydata){
    	//crea la vitrina de productos
    	if(i <= 3){
    		$("#vitrina").append("<div class='col-12 col-md-6 col-lg-4'><div class='card'><img class='card-img-top item' src='img/"+mydata[datos].foto+"' alt='Card image cap'><div class='card-body'><h4 class='card-title'  style='text-align:center;'><a href='product.html' title='View Product'>"+mydata[datos].nombre+"</a></h4><div class='row'><div class='col'><p style='text-align:center;'>$"+mydata[datos].precio+"</p></div><div class='col'><a href='#' class='btn btn-success btn-block'>AGREGAR AL CARRITO</a></div></div></div></div><br><br></div>");
    	}
    	if(i > 3 && i<=6){
    		$("#recomendados").append("<div class='col-12 col-md-6 col-lg-4'><div class='card'><img class='card-img-top item' src='img/"+mydata[datos].foto+"' alt='Card image cap'><div class='card-body'><h4 class='card-title'  style='text-align:center;'><a href='product.html' title='View Product'>"+mydata[datos].nombre+"</a></h4><div class='row'><div class='col'><p style='text-align:center;'>$"+mydata[datos].precio+"</p></div><div class='col'><a href='#' class='btn btn-success btn-block'>AGREGAR AL CARRITO</a></div></div></div></div><hr class='hr-divi'></div>");
    	}
    	i++;
	}
	 
 });
$( document ).ready(function() {

  console.log("Desarrollador : Victor Padilla ");
  console.log("Empresa       : www.mesos.cl     ");
  console.log("Fecha         : 09-03-20202    ");
  console.log("Descripcion   : Sistema de compra seguro obligatorio ");
  console.log("Version       : Produccion");
  console.log("--------------------------------------------------------");
  console.log("Se inicia el procesos de validaciones y recoleccion de datos");
  $("#logoMesos").hide();
  $("#logoPortillo").hide();
  $(".cont-body").hide();
    console.log( "Sistemas Cargados!" );
	
	var query = window.location.search.substring(1);
	//console.log(query);
	var vars = query.split("&");
	//console.log(vars);

 if(query.length<=0){
  window.location.href = "https://www.mesos.cl/Soap/error.html";

 }
	var id = "";
  var propuestaConvenio = "";
  var precio64 = "";
	var precio = "";
	var valor3 = "";
	var token = "";
	for (var i=0; i < vars.length; i++) {
       var pair = vars[i].split(":");
       if(pair[0] == "id") {
          id = pair[1];
       }else if(pair[0] == "pgo"){
       // console.log("Valor 64 : "+pair[1]);
          
        
       	  precio = pair[1];

        // console.log("valor decode : "+precio);
       }else if(pair[0] == "procon"){
          propuestaConvenio = pair[1];
       }
   	}
   	var proConv = propuestaConvenio.split("-");
   	var propuestaRuta = proConv[0];
   	var convenioRuta = proConv[1];

    if(convenioRuta == 2){
    $("#logoPortillo").show();
    $("html, body").addClass("portillo");
    }else if(convenioRuta == 1){
      $("#logoMesos").show();
      $("html, body").addClass("mesos");
      $("#cont-terminos").text("Por este acto, libre, voluntaria e informadamente, acepto que Mesos Corredora de Seguros Ltda. use los datos aquí aportados, con excepción de los datos de mi tarjeta de crédito, con la única finalidad de gestionar los contratos de seguros intermediados y asesorarme en relación a los mismos, así como para promocionar los servicios y productos de Mesos Corredora de Seguros Ltda. Los datos en cuestión no serán, bajo ninguna circunstancia, objeto de cesión, con la excepción de las entidades aseguradoras destinatarias de los contratos.");
    }if(convenioRuta == ""){
      $("#logoMesos").show();
      $("html, body").addClass("mesos");
    }

   // console.log("id="+id+" propuesta="+propuestaRuta+" convenio="+proConv+" precio="+precio); 
   	// console.log("pro : "+propuestaRuta+"  convenio : "+convenioRuta);


   	$("#propuestaid").val(propuestaRuta);
    $("#convenioid").val(convenioRuta);
    $("#precioid").val(precio);
    $("#idoperacion").val(id);
    
   	$("#idPrecio").text("Total $ "+precio);

   	// console.log("Valores : 1 -> "+propuestaRuta+" Valores 2: -> "+precio+" valores 3 -> "+valor3);


 	var valores = primerLlamado(propuestaRuta,convenioRuta);



// Pago Soap
$("#btn-pago").click(function(){
  limpiarError();
 // console.log("valor trim : "+$("#txtNombre").val().trim().length);

 
 if($("#txtNombre").val().trim().length <=2){
  console.log("ebtra en vaor nombre");
   $("#formNombre").addClass("has-error");
  }
if($("#txtPaterno").val().trim().length <=2){
  $("#formPaterno").addClass("has-error");
  }
if($("#txtMaterno").val().trim().length <=2){
  $("#formMaterno").addClass("has-error");
  }
if($("#txtTelefono").val().trim().length >8 || $("#txtTelefono").val().trim().length <8 ){
  $("#formTelefono").addClass("has-error");
  }
if($("#txtCorreo").val().trim().length <=5){
 $("#formCorreo").addClass("has-error");
  }
  if($("#txtNombre").val().trim().length >2 && $("#txtPaterno").val().trim().length >2 && $("#txtMaterno").val().trim().length >2 && $("#txtTelefono").val().trim().length == 8  && $("#txtCorreo").val().trim().length >5){
    

    if( $('#chbx-terminos').prop('checked') ) {
      $(".cont-body").fadeOut("slow");
    $(".contenedor-load").fadeIn("slow");
        pagoSoap();
    }else{
      $('#alertaModal').modal('toggle');
    }
    
  }else{
    $("html, body").animate({scrollTop:"0px"},1000);
  }


});


function limpiarError(){
  $("#formNombre").removeClass("has-error");
  $("#formPaterno").removeClass("has-error");
  $("#formMaterno").removeClass("has-error");
  $("#formTelefono").removeClass("has-error");
  $("#formCorreo").removeClass("has-error");
}


});

function siguiente(valores,propuestaRuta,convenioRuta)

{

	// console.log("pasado 9 seg");
	// console.log("valor "+valores.access_token);

	 var polizaapi = { "codCompania":"", "poliza":"","item":"","":"","propuesta":propuestaRuta,"convenio":convenioRuta,"tipoDoc":"PRO" };
	// console.log("token enviado : "+valores.token_type+" "+valores.access_token);
	if(valores.access_token.length >= 1){
 	//	console.log("tiene datos");
 	//	console.log("token : "+valores.access_token);
 		$.ajax({
     // url:"https://192.168.5.33:8480/Polizas/api/poliza",
   		url:"https://apiservice.mesos.cl/polizas",
   		//data : JSON.stringify({ "codCompania":"", "poliza":"","item":"","":"","propuesta":propuestaRuta,"convenio":convenioRuta,"tipoDoc":"PRO" }), 
   		data : JSON.stringify(polizaapi),
      type:"POST",
   		dataType: "json",
    	headers:{
    	"content-Type": "application/json",
			"Authorization":valores.token_type+" "+valores.access_token

   		}
		   }).done(function(datos) {
        
		   	$.each( datos, function( i, item ) {
		   		$.each(item, function(o, cant){
          //   console.log("pro ruta : "+propuestaRuta+" -  cant :"+cant.propuesta);
            if(propuestaRuta == cant.propuesta){
              var paterno = cant.nombreAsegurado.split(" ");
              var catNombres = paterno.length;

             
              $("#txtNombre").val(cant.nombre);
              $("#txtPaterno").val(cant.apePat);
              $("#txtMaterno").val(cant.apeMat);
              $("#txtRut").val(cant.rutAsegurado);
              $("#txtCorreo").val(cant.correo);
              $("#txtPatente").val(cant.patente);
              $("#txtMarca").val(cant.marca);
              $("#txtModelo").val(cant.modelo);
              $("#txtAnio").val(cant.annio);
              $("#txtChasis").val(cant.chasis);
              $("#txtMotor").val(cant.motor);
              $("#txtColor").val(cant.color);


          



              $(".cont-body").fadeIn("slow");
              $(".contenedor-load").fadeOut("slow");
             return false;
            }else{
             //  console.log("No encontrado");
              window.location.href = "https://www.mesos.cl/Soap/error.html";

            }
		   			
		   		})

		   		
		   	})
		});

 	}else{
    window.location.href = "https://www.mesos.cl/Soap/error.html";
 		console.log("no tiene datos");
 	}
}




function primerLlamado(propuestaRuta,convenioRuta){
	var recursos ;
	$.ajax({
   		url:"https://apiauth.mesos.cl/auth1/oauth/token?client_id=polizaspr&grant_type=client_credentials&client_secret=6f427476-6bf0-4bf3-8274-766bf0dbf355&scope=read",
   		type:"POST",
   		dataType: "json"
   		
   		

   	}).done(function(recursos) {
   	//	console.log(recursos);
	setTimeout(siguiente(recursos,propuestaRuta,convenioRuta), 6000);
			
   	//	siguiente(recursos);
   		token = recursos.access_token;
	
	}).fail(function(){
   // console.log("Error al obtener Token Datos");
      window.location.href = "https://www.mesos.cl/Soap/error.html";
  });

}




function pagoSoap(){
   //  console.log("Entra en funcion pagar soap"); 
     var datoSalida ;
  $.ajax({
      url:"https://apiauth.mesos.cl/auth1/oauth/token?client_id=polizaspr&grant_type=client_credentials&client_secret=6f427476-6bf0-4bf3-8274-766bf0dbf355&scope=readd",
      type:"POST",
      dataType: "json"
      
      

    }).done(function(datoSalida) {
    //  console.log(datoSalida.access_token);
      
      generarLinkPago(datoSalida);
  }).fail(function(){
   //  console.log("Error al obtener Token link de pago");
      window.location.href = "https://www.mesos.cl/Soap/error.html";
  });


}



function generarLinkPago(datoSalida){
  console.log("Entra en link de pago");
  console.log("datos entrada : "+datoSalida.access_token);
  var rutTotal = $("#txtRut").val().split("-");
  var jsonSalida ={ "patente":$("#txtPatente").val().toUpperCase(),
                "telefono":$("#txtTelefono").val(),
                "idOperacion": $("#idoperacion").val(),
                "propuesta":$("#propuestaid").val(),
                "codConvenio":$("#convenioid").val(),
                "nombre":$("#txtNombre").val(),
                "apePat":$("#txtPaterno").val(),
                "apeMat":$("#txtMaterno").val(),
                "rut":rutTotal[0],
                "dv":rutTotal[1],
                "usuario":"portal",
                "correo":$("#txtCorreo").val(),
                "precio":$("#precioid").val()}

    console.log("Json de salida : "+jsonSalida);
    console.log("token de salida : "+datoSalida.token_type+" "+datoSalida.access_token);
  $.ajax({
      url:"https://apiservice.mesos.cl/apiSoap",
      data : JSON.stringify(jsonSalida), 
      type:"POST",
      dataType: "json",
      headers:{

        "content-Type": "application/json",
      "Authorization":datoSalida.token_type+" "+datoSalida.access_token

      }
       }).done(function(datos) {
          console.log("Obteniendo ruta de pago");
          window.location.href = datos.urlPagoSoap;
        }).fail(function() {
          console.log("Error al obtener link de pago");
        window.location.href = "https://www.mesos.cl/Soap/error.html";
  });
}

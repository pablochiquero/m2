$(document).ready(function(){
	var msg ="";

	$("#registro span").click(function(){
		msg = "";
		$("#errors").html(msg);
		$("#errorsL").html(msg);
		$("#login").css("display","block");
		$("#registro").css("display","none");
		
	});	
	$("#login span").click(function(){
		msg = "";
		$("#errors").html(msg);
		$("#errorsL").html(msg);
		$("#login").css("display","none");
		$("#registro").css("display","block");
	});
	
	$("#registar").click(function(){

		msg = "";

		if($("#usuarioR").val() == ""){
			msg += "El campo usuario está vacío <br>";
			$("#usuarioR").css("border","1px solid red");
		} else {
			$("#usuarioR").css("border","1px solid grey");
		}
		if($("#contraR").val() == ""){
			msg += "El campo contraseña está vacío <br>";
			$("#contraR").css("border","1px solid red");
		} else {
			$("#contraR").css("border","1px solid grey");
		}

  		$("#errors").html(msg);

  		if(msg == ""){
  			$("#registro").submit();
  		}
	});

	$("#borrar").click(function(){
		$("#registro")[0].reset();
	});	


	$("#loginB").click(function(){

		msg = "";

		if($("#usuarioL").val() == ""){
			msg += "El campo usuario está vacío <br>";
			$("#usuarioL").css("border","1px solid red");
		} else {
			$("#usuarioL").css("border","1px solid grey");
		}
		if($("#contraL").val() == ""){
			msg += "El campo contraseña está vacío <br>";
			$("#contraL").css("border","1px solid red");
		} else {
			$("#contraL").css("border","1px solid grey");
		}

  		$("#errorsL").html(msg);

  		if(msg == ""){
  			$("#login").submit();
  		}
	});

	$("#borrar").click(function(){
		$("#registro")[0].reset();
	});	
});
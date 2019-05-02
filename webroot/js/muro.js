$(document).ready(function(){

	$("#modif_btn").click(function(){

		msg = "";

		if($("#usuarioM").val() == ""){
			msg += "El campo usuario está vacío <br>";
			$("#usuarioM").css("border","1px solid red");
		} else {
			$("#usuarioM").css("border","1px solid grey");
		}
		if($("#contraM").val() == ""){
			msg += "El campo contraseña está vacío <br>";
			$("#contraM").css("border","1px solid red");
		} else {
			$("#contraM").css("border","1px solid grey");
		}

  		$("#errorsM").html(msg);

  		if(msg == ""){
  			$("#modificar").submit();
  		}
	});


});
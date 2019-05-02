<!-- <?php //defined('BASEPATH') or exit ('No se permite acceso directo');?>

<h3>CONTACTO</h3> -->

<!-- LOGIN Y REGISTRO -->
<form method="post" id="registro" action="home/registro">
	<h3>REGISTRO</h3>
		<input type="text" name="usuarioR" id="usuarioR" placeholder="usuario">
		<input type="password" name="contraR" id="contraR" placeholder="contraseña">
			<div class="clearfix">
				<input type="button" class="btn" value="Registrar" id="registar">
				<input type="reset" class="btn" value="Borrar" id="borrar">
				<div class="clearfix"></div>
			</div>	
			<p>Ya estás registrado? <span>entra en la app</span></p>
			<div id="errorsR"></div>
</form>

<form method="post" id="login" action="home/dato">
	<h3>LOGIN</h3>
		<input type="text" name="usuarioL" id="usuarioL" placeholder="usuario">
		<input type="password" name="contraL" id="contraL" placeholder="contraseña">
			<div class="clearfix">
				<input type="button" class="btn" value="Entrar" id="loginBtn">
				<input type="reset" class="btn" value="Borrar" id="borrar">
				<div class="clearfix"></div>
			</div>
			<p>No estás registrado? <span>regístrate aquí</span></p>
			<div id="errorsL"></div>
</form>
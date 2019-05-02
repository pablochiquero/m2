<?php defined('BASEPATH') or exit ('No se permite acceso directo');

class contactoController extends Controller 
{

    public function index() 
    {

        $this->render('index');

    }

    public function registro()

    {
        if(isset($_POST['usuarioR']) && isset($_POST['contraR']))
        {

            $reg = Security::secure_input($_POST['usuarioR'] && $_POST['contraR']);

            require_once(ROOT . DS . 'app' . DS . 'models' . DS . 'contactoModel.php');

            $insertar = new contactoModel();

            $d['mensaje'] = $insertar->recUser($reg);
            var_dump($d);

            $this->set($d);
            $this->render('index');
        }

        else
        { //si no viene por POST, salta página 404

            header('Location: ' . BASE_DOMAIN_DIR_URL . 'webroot/404.php');

        }

    }


    



}



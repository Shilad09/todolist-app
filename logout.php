<?php

if(isset($_SESSION['id'])){
  session_start();

  session_unset();
  session_destroy();

  echo 1;
}
else{
  echo 0;
}

?>
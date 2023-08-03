<?php

$remail = $_POST['re_email'];
$rpassword = $_POST['re_password'];

$file_data = json_decode(file_get_contents('accounts.json'), true);



foreach($file_data as list('id' => $id, 'name' => $name, 'email' => $email, 'password' => $password)){
  if($email == $remail && $password == sha1($rpassword)){
    session_start();

    $_SESSION['id'] = $id;
    $_SESSION['name'] = $name;
  }
}

if(isset($_SESSION['id'])){
  echo $_SESSION['name'];
}
else{
  echo 0;
}
?>
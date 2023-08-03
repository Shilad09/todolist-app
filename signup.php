<?php

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

$file_data = json_decode(file_get_contents('accounts.json'), true);

if($file_data != NULL){
  foreach($file_data as list('email' => $e_email)){
    if($e_email == $email){
      echo -1;
      die();
    }
  }
}

$last_id = $file_data ? $file_data[sizeof($file_data) - 1]['id'] : 0;

$newArr = [
  'id' => ++$last_id,
  'name' => $name,
  'email' => $email,
  'password' => sha1($password)
];

$file_data[] = $newArr;
fopen("userlogs/{$newArr['id']}.json", "a");
  
if(file_put_contents('accounts.json', json_encode($file_data, JSON_PRETTY_PRINT))){
  echo 1;
}
else{
  echo 0;
}
?>
<?php

session_start();

if(isset($_SESSION['id'])){

  $dataId = $_SESSION['data-id'];

  $file_name = 'userlogs/' . $_SESSION['id'] . '.json';
  $file_data = json_decode(file_get_contents($file_name), true);

  unset($file_data[$dataId]);

  $file_data = array_values($file_data);

  if(file_put_contents($file_name, json_encode($file_data, JSON_PRETTY_PRINT))){
    echo 1;
  }
  else{
    echo 0;
  }
}
else{
  echo -1;
}

?>
<?php
session_start();

if(isset($_SESSION['id'])){
  $file_name = 'userlogs/' . $_SESSION['id'] . '.json';

  $date = $_POST['t_date'];
  $title = $_POST['t_title'];
  $desc = $_POST['t_desc'];

  $file_data = json_decode(file_get_contents($file_name), true);

  $newData = [
    'date' => $date,
    'title' => $title,
    'desc' => $desc
  ];

  $file_data[] = $newData;

  if(file_put_contents($file_name,json_encode($file_data, JSON_PRETTY_PRINT))){
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
<?php
session_start();

if(isset($_SESSION['id'])){
  
  $data_id = $_SESSION['data-id'];
  $file_name = 'userlogs/' . $_SESSION['id'] . '.json';
  $file_data = json_decode(file_get_contents($file_name), true);
  
  $edit_date = $_POST['e_date'];
  $edit_title = $_POST['e_title'];
  $edit_desc = $_POST['e_desc'];

  $file_data[$data_id]['date'] = $edit_date;
  $file_data[$data_id]['title'] = $edit_title;
  $file_data[$data_id]['desc'] = $edit_desc;

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
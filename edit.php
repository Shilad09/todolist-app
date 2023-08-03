<?php

$id = $_POST['r_id'];

session_start();

if(isset($_SESSION['id'])){

  $_SESSION['data-id'] = $id;
  $file_name = "userlogs/" . $_SESSION['id'] . ".json";

  $file_data = json_decode(file_get_contents($file_name), true);

  if($file_data == NULL){
    echo "<div class='no-records'>No records</div>";
  }
  else{

    echo "<form id='form-edit'>
        <input type='date' id='edit-date' name='e_date' value='{$file_data[$id]['date']}'>
          <input class='form-control' id='edit-title' name='e_title' type='text' value='{$file_data[$id]['title']}'>
          <input class='form-control' id='edit-desc' name='e_desc' type='text' value='{$file_data[$id]['desc']}'>
          <input class='btn btn-success' type='button' id='edit-submit' value='Save'>
          <input class='btn btn-danger' type='button' id='delete' value='Delete'>
        </form>";
  }
}
else{
  echo 0;
}

?>
<?php

session_start();

if(isset($_SESSION['id'])){
  $file_name = "userlogs/" . $_SESSION['id'] . ".json";

  $file_data = json_decode(file_get_contents($file_name), true);

  if($file_data == NULL){
    echo "<div class='no-records'>No records</div>";
  }
  else{
    $i = 0;
    foreach($file_data as list('date' => $date, 'title' => $title, 'desc' => $desc)){
      echo "<div class='records' data-id='{$i}'>
      <span>{$date}</span>
      <span><b>{$title}</b></span>
      <span>{$desc}</span>
      </div>";
      $i++;
    }
  }
}
else{
  echo 0;
}

?>
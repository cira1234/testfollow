<?php

$targetPath = "uploads/".basename($_FILES["files"]["name"]);
move_uploaded_file($_FILES["files"]["tmp_name"],$targetPath);

?>
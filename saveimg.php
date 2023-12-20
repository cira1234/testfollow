<?php  
if(isset($_POST['btn-post'])){
    $filename=$_FILES['uploadfile']['name'];
    $ext =pathinfo($filename,PATHINFO_EXTENSION);
    $allowed=array('jpg','png','gif');
    if(!in_array($ext,$allowed)){
        $_SESSION['RespClass']='danger';
        $_SESSION['RespDiaplay']='block';
        $_SESSION['RespMessage']='use file mp4 !';
    }
    else{
        $name=explode(".",$filename);
        $ext=$name[1];
        $milliseconds=round(microtime(true)*1000);
        $newfilename=$milliseconds.".".$ext;
        $fullnamefile=$name[0].".".$ext;

        $tmpanme=$_FILES['uploadfile']['tmp_name'];
        $moveto='./imgpost/'.$fullnamefile;
        // echo $fullnamefile;
        
        
        if(move_uploaded_file($tmpanme,$moveto)){
            chmod('./imgpost/'.$fullnamefile,0777);
            echo "<meta http-equiv='refresh' content='0;URL=showpost.html'>";
        }
    }

}
if($_SERVER['REQUEST_METHOD']==='POST'){
    if(isset($_FILES['file'])){
        $file=$_FILES['file'];
        $filename=$file['name'];
        $fileTmpPath=$file['tmp_name'];

        $uploadPath='imgpost/'.$filename;
        move_uploaded_file($fileTmpPath,$uploadPath);
    }
}


echo $fullnamefile;



$name=$_POST['name'];
$response=array(
    'message'=>"File Uploaded successfully. Name: $name, File: $filename"
);
header('Content-Type: application/json');
echo json_encode($response);
else{
    echo 'error';
}

// if(!empty($_FILES['images'])){
//     $targetDir="imgpost/";
//     $allowTypes=array('jpg','png','jpeg','gif');
//     $images_arr=array();
//     foreach($_FILES['images']['name'] as $key=>$val){
//         $image_name=$_FILES['images']['name'][$key];
//         $tmp_name=$_FILES['images']['tmp_name'][$key];
//         $size=$_FILES['images']['size'][$key];
//         $type=$_FILES['images']['type'][$key];
//         $error=$_FILES['images']['error'][$key];

//         $filename=basename($_FILES['images']['name'][$key]);
//         $targetFilePath=$targetDir.$filename;

//         $fileType=pathinfo($targetFilePath,PATHINFO_EXTENSION);
//         if(in_array($fileType,$allowTypes)){
//             if(move_uploaded_file($_FILES['images']['tmp_name'][$key],$targetFilePath)){
//                 $images_arr[]=$targetFilePath;
//             }
//         }
//     }



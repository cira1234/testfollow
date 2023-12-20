<?php
$n=1;
// isset($_POST['btn-submit'])
// if($n==1){
    if(isset($_POST['btn-submit'])){
    $filename=$_FILES['uploadfile']['name'];
    $filename2=$_FILES['uploadimg']['name'];

    $ext =pathinfo($filename,PATHINFO_EXTENSION);
    $ext2 =pathinfo($filename2,PATHINFO_EXTENSION);

    $allowed=array('mp4');
    $allowed2=array('jpg','jpeg','png','gif','PNG','JPG','JPEG','GIF');


    if(!in_array($ext,$allowed)){
        $_SESSION['RespClass']='danger';
        $_SESSION['RespDiaplay']='block';
        $_SESSION['RespMessage']='use file mp4 !';
    }
    else{
        $name=explode(".",$filename);
        $name2=explode(".",$filename2);

        $ext=$name[1];
        $ext2=$name2[1];

        $milliseconds=round(microtime(true)*1000);

        $newfilename=$milliseconds.".".$ext;
        $newfilename2=$milliseconds.".".$ext2;

        $fullnamefile=$name[0].".".$ext;
        $fullnamefile2=$name2[0].".".$ext2;

        $tmpanme=$_FILES['uploadfile']['tmp_name'];
        $tmpanme2=$_FILES['uploadimg']['tmp_name'];
        $moveto='./uploads/'.$fullnamefile;
        $moveto2='./uploads/'.$fullnamefile2;
        // echo $fullnamefile;
        
        
        if(move_uploaded_file($tmpanme,$moveto)){
            chmod('./uploads/'.$fullnamefile,0777);
            // echo "<meta http-equiv='refresh' content='0;URL=learn.html'>";
            echo $fullnamefile;
            if(move_uploaded_file($tmpanme2,$moveto2)){
                chmod('./uploads/'.$fullnamefile2,0777);
                echo $fullnamefile2;
                echo "<meta http-equiv='refresh' content='0;URL=learnadmin.html'>";
            }
        }
    }

}


?>


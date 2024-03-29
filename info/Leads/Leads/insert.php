<?php
//error_reporting(0);
include('Leads/db.php');
if($_SERVER['REQUEST_METHOD']=="POST")
{
	
/* $secretKey = '6LcuUf8iAAAAAKnoNZ3k4H7S_-IOzYTmcsA4fGeQ';
        $captcha = $_POST['g-recaptcha-response'];

        if(!$captcha){
          echo '<script>alert("Please check the the captcha");
		  window.location="javascript:history.go(-1)";
		  </script>';
          exit;
        }*/

	$name=$_POST['name'];
	$email=$_POST['email'];
	$contact=$_POST['phone'];
	
	$message=$_POST['message'];
	
	/* $ip = $_SERVER['REMOTE_ADDR'];
        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
        $responseKeys = json_decode($response,true);

        if(intval($responseKeys["success"]) !== 1) {
            echo '<script>alert("Please check the the captcha");
		  window.location="javascript:history.go(-1)";
		  </script>';
        } else { */
	
	$ins="insert into form(name,email,phone,message,datetime)
	values('$name','$email','$contact','$message',now())";
   $status=mysqli_query($con,$ins);
 
// echo $status;
 if($status)
{
	
	 echo "<script>alert('Successfully Sent Your Message. We will contact ASAP!');
	 window.location='index.html'</script>";
}
 else
{
 echo "<script>alert('Fail. More Deatils Plz call ');
	  window.location='index.html'</script>";
}

}
?>
<?php 
session_start();  // session store info in server level - initialize session
include('db.php');
if($_SERVER['REQUEST_METHOD']=="POST")
{ 
$email=$_POST['username'];
$password=$_POST['password'];
//echo $email,$password;
$sel="select * from user where username='$email' and password='$password'";
$status=mysqli_query($con,$sel);
$count=mysqli_num_rows($status);
//echo $count;
if($count!="0")
{
	$row=mysqli_fetch_array($status);  // fetching matched records from database
	$id=$row['id'];
	$username=$row['username'];
	$_SESSION['id']=$id;   // session variable to stor value
	$_SESSION['username']=$username;	
	echo "<script>alert('Successfully Login');
		window.location='result.php';
		</script>";
}
else
{
	echo "<script>alert('Invalid Username or Password');
		window.location='index.php';
		</script>";
}
}
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="robots" content="noimageindex, nofollow, noindex, nosnippet">
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <link href="https://cdn.datatables.net/1.10.25/css/dataTables.bootstrap5.min.css" rel="stylesheet" >
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
  
  

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  
  
    <title>Administrator - Login</title>
		
	<link rel="icon" href="images/favicon.png" sizes="32x32" />
  </head>
  <body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#"><img src="images/logo.png"></a>
	 <a href="logout.php" class="btn btn-primar border" id="logout">Logout</a>
  </div>
  </nav>
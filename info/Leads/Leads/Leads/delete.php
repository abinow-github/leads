<?php
include('db.php');
if($_GET['id']!="")
{
//posting value
$sno=$_GET['id'];
//insert record
$insert="DELETE from form where id='$sno'";
//echo $insert;
$status=mysqli_query($con,$insert);
if($status)
{
echo "<script>
alert('Successfully Deleted');
window.location='result.php';
</script>";
}
else 
{
echo "<script>alert('Fail');
window.location='result.php';
</script>";
}
}
else
{
echo "<script>alert('Please Select record');
window.location='result.php';
 </script>";
}
?>

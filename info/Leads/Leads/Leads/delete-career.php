<?php
include('db.php');
if($_GET['id']!="")
{
//posting value
$sno=$_GET['id'];
//insert record
$insert="DELETE from careers where id='$sno'";
//echo $insert;
$status=mysqli_query($con,$insert);
if($status)
{
echo "<script>
alert('Successfully Deleted');
window.location='career.php';
</script>";
}
else 
{
echo "<script>alert('Fail');
window.location='career.php';
</script>";
}
}
else
{
echo "<script>alert('Please Select record');
window.location='career.php';
 </script>";
}
?>

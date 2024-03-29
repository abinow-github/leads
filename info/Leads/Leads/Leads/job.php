<?php
session_start();
error_reporting(0);  // to ignore warining message
$id=$_SESSION['id'];
if($id!="")    
{
include('db.php');
// Check if delete button active, start this
if(isset($_POST['delete'])){
for($i=0;$i<count($_POST['checkbox']);$i++){
$del_id=$_POST['checkbox'][$i];
$sql = "DELETE FROM form WHERE id='$del_id'";

//echo $sql;
$result = mysqli_query($con,$sql);
}
// if successful redirect to delete_multiple.php
if($result)
{
echo "<meta http-equiv=\"refresh\" content=\"0;URL=result.php\">";
}
}

	
?>

<?php require('header.php') ?>
	  <style media="screen" type="text/css">
     td {
      max-width: 120px;
      white-space: wrap;
      text-overflow: ellipsis;
     }
	 table.dataTable td, table.dataTable th {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    text-align: center;
}
    </style>
    <style>
	

	td{
		font-size:13px;
		 word-wrap: break-word; 
	}
	
	div.container {
        width:100%;
    }
        
        @media (min-width: 768px)
        {
.sidebar {
    width: 14rem!important;
    display: none;
}
}


@media (min-width: 768px)
.sidebar.toggled {
    overflow: visible;
    width: 6.5rem!important;
    display: none;
}


    </style>
 






<div class="container-fluid my-5">
	<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link " href="result.php">Enquiry Form</a>
  </li>
  <li class="nav-item"> 
    <a class="nav-link" href="serviceinsert.php">Service Form</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="job.php">Job Application</a>
  </li>
  
</ul>	
	<div class="table-responsive">
	<table id="example" class="table table-striped table-light table-responsive" data-page-length='50' >
	
        <thead>
            <tr>
			    <th></th>
			    <th class="w-3">Id</th>
                <th class="w-7">Datetime</th>
                <th class="w-10">Name</th>
                <th class="w-10">Email</th>
                <th class="w-10">Contact No</th>
				<th class="w-10">Alternate Contact No</th>
				<th class="w-10">Qualification</th>
				<th class="w-10">Address</th>
				<th class="w-10">Subject</th>
				<th class="w-10">Gender</th>
				<th class="w-10">Fluency</th>
				<th class="w-10">Expirience</th>
				<th class="w-10">Age</th>
				
				<th class="w-10">Resume</th>
			

				
            </tr>
        </thead>
        <tbody>
		<!--form name='form1' method='post' action=''  onSubmit='return validate();'>
			 <input name="delete" type="submit" id="delete" value="Delete" style="float:right">-->
		 <?php
  //dbconnection
include('db.php');
$sel="select * from job ORDER BY id DESC ";
//echo $sel;
$status=mysqli_query($con,$sel);
$count=mysqli_num_rows($status);
//echo $count;

?>


<?php
if($count!="")
{
$i=1;
while($row=mysqli_fetch_array($status))
{
	$slno=$i++;
	$id=$row['id'];
    $name=$row['name'];
    $email=$row['email'];
	$contact=$row['contact'];
	$alternatecontact=$row['alternatecontact'];
	$qualification=$row['qualification'];
	$address=$row['address'];
	$subject=$row['subject'];
	$contact=$row['contact'];
	$contact=$row['contact'];

	$message=htmlspecialchars($row['message']);

	$datetime=$row['datetime'];		
	$newDate = date("d-M-y g:i a", strtotime($datetime.' +0 minutes')); 
	echo "<tr > 
	<td><a href='delete.php?id=$id'><i class='bi bi-trash-fill'></i></a> </td>
	<td>$id</td>
    <td>$newDate</td>
    <td>$name</td>
    <td>$email</td>
    <td>$contact</td>
	<td>$alternatecontact</td>

	<td>$message</td>
    
	
	</tr>";
}
}
else
{
	echo "<tr><td>No Records</td></tr>";
}
?>
</form>
            </tbody>
			
      
    </table>
	</div>
	</div>
	<?php
	require('footer.php') ;
}
	else
	{
			echo "<script>alert('if you want to access please login');
		window.location='index.php';
		</script>";
	}
	
	?>

	<script language="javascript">
function validate()
{
var chks = document.getElementsByName('checkbox[]');
var hasChecked = false;
for (var i = 0; i < chks.length; i++)
{
if (chks[i].checked)
{

hasChecked = true;
break;
}
}
if (hasChecked == false)
{
alert("Please select at least one Record.");
return false;
}
else
{
	var result = confirm("Do You Want to Delete Record!"); 
            if (result == true) { 
              return true;
            } else { 
                return false;
            } 
}
return true;
}

//search

</script>
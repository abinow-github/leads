<?php require('header.php') ?>
    <div class="container my-5">
	<div class="row">
	<div class="col-md-4 offset-md-4 border p-5">
	<form method="post" action="">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" name="username" class="form-control" placeholder="Enter Username" required id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" placeholder="Enter Password" required id="exampleInputPassword1">
  </div>
  
  <button type="submit" class="btn btn-primary">Login</button>
</form>
	</div>
	</div>
	</div>
	<style>
	#logout
	{
		display:none;
	}
	</style>
	
<?php require('footer.php') ?>
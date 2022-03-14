<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/css/style1css.css"/>
<meta charset="UTF-8">
<title>Welcome</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>


<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="/">JoinMe</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/home">View Local Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/register">Register</a>
      </li>
    </ul>
  </div>
</nav>



<div class="welcome row">
	<h2>Welcome to Join Me</h2>
</div>



<div class="container">

<div class="row test1">
		<div class="col">
			<p>Create events or add events in your area to the database</p>
			<p>See which of your friends are attending</p>
		</div>
	</div>
	
	<div class="row test">
	
		<div class="col">
			<h4>Log in</h4>
			<p><c:out value="${error}"/></p>
			<form action="/login" method="post">
				<div>
					<label for="email" for="email">Email</label>
				</div>
				<div>
					<input type="text" id="email" name="email"/>
				</div>
				<div>
					<label for="password" for="password">Password</label>
				</div>
				<div>
					<input type="password" id="password" name="password"/>
				</div>
				<div>
				<button>Login</button>
				</div>
			</form>
		</div>
	</div>
</div>

</body>
</html>
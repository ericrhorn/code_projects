<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/css/style1css.css"/>
<meta charset="UTF-8">
<title>Login and Registration</title>
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
        <a class="nav-link" href="/home">View Local Events</a>
      </li>
      </ul>
  </div>
</nav>




<!-- <div class="nav">
	<a href="/home">view local events</a>
</div>
 -->



<div id="wrapper">
	<section class="register">
	<div>
	<p><c:out value="${message}"/></p>
	<p><form:errors path="user.*"/></p>
	<h2>Register</h2>
	<form:form action="/register" method="post" modelAttribute="user">
		
		<div>
			<form:label path="name">Name:</form:label>
		</div>
		<div>
			<form:input path="name"/>
		</div>
			
		<div>
			<form:label path="email">Email:</form:label>
		</div>
		<div>
			<form:input path="email"/>
		</div>
		
		<div>
			<form:label path="password">Password:</form:label>
		</div>
		<div>
			<form:password path="password"/>
		</div>
		
		<div>
			<form:label path="pWConfirm">PW Confirm:</form:label>
		</div>
		<div>
			<form:password path="pWConfirm"/>
		</div>
		<div>
		<button>Register</button>
		</div>
		
	</form:form>
	</div>
	</section>
</div>
</body>
</html>
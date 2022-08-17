
const RegisterUser = (props) => {

    return (
        <div class="container mt-5 rounded-3 shadow p-3 bg-body" style={{width: 500, backgroundColor: 'white'}}>
        <h2>Register</h2>
        <form method="POST">
          <div class="mb-3 mt-3">
            <label for="first_name">First Name:</label>
            <input type="text" class="form-control" id="first_name" name="first_name" required/>
          </div>
          <div class="mb-3">
            <label for="last_name">Last Name:</label>
            <input type="text" class="form-control" id="last_name" name="last_name" required/>
          </div>
          <div class="mb-3">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" name="email"/>
          </div>
          <div class="mb-3">
            <label for="username">User Name:</label>
            <input type="text" class="form-control" id="username" name="username" required/>
          </div>
          <div class="mb-3">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password1" name="password1" required/>
          </div>
          <div class="mb-3">
            <label for="password_confirm">Password Confirm:</label>
            <input type="password" class="form-control" id="password2" name="password2" required/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )
}

export default RegisterUser;
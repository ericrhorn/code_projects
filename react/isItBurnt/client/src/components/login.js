import 'bootstrap/dist/css/bootstrap.min.css';

const LoginUser = (props) => {

    return (
        <div class="container mt-5 rounded-3 shadow p-3 bg-body" style={{width: 500, backgroundColor: 'white'}}>
        <h2>User Login</h2>
        <form method="POST">
            
            <div class="mb-3 mt-3">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required/>
            </div>
            <div class="mb-3">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" required/>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <div>
            <a href="{% url 'password_reset' %}">Reset Password</a>
        </div>
        </div>
    )
}

export default LoginUser;
## Explain endpoint

The web server offers several endpoints for managing user accounts and facilitating administrative tasks. The "GET /" route serves as the Super Admin registration endpoint, rendering the HTML for creating a single Super Admin account. Once an account is created, the endpoint becomes inactive, redirecting subsequent attempts to the login endpoint. The "POST /create/user" endpoint processes the Super Admin registration form, storing the data in the database, and securely hashing the password.

The "GET /" and "POST /login" endpoints handle user login functionality. The former renders the login page, while the latter allows users of all roles to log in. For users added from the dashboard by the Super Admin, the login process includes a "Create New Password" field rather than the traditional "Insert Your Password" field, ensuring a seamless and secure login experience.

Access to the "GET /dashboard" endpoint reveals the dashboard HTML, featuring a user table visible only to the Super Admin. The "POST /add/user" endpoint is reserved for the Super Admin to add users with different roles. Lastly, the "POST /logout" endpoint facilitates the logout process. </p>

## Setup 

- Clone Repository 
- Open the project folder with your terminal and type in the following code 

```bash
    # install repositories 
    npm install 
```
create a .env file and copy the code from the example.env to the .env file, you can modify the file as necessary

``` bash  
    # to start development server run 
    npm run dev
```

``` bash 
    # to start production server run 
    npm start
```

Open the server on your browser and enjoy :)
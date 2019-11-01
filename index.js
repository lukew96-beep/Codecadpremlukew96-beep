var frmvalidator  = new Validator("register")
frmvalidator.EnableOnPageErrorDisplay();
frmvalidator.EnableMsgsTogether();
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email address");
frmvalidator.addValidation("email","email","Please provide a valid email address");
 frmvalidator.addValidation("username","req","Please provide a username");
frmvalidator.addValidation("password","req","Please provide a password");
function Login(){
    if(empty($_POST['username']))
       {
         $this,HandleError("UserName is empty!");
         return false;
       }
         if(empty($_POST['password']))
    
       {
         $this,HandleError("Password is empty!");
          return false;
       }
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
        if(!$this,CheckLoginInDB($username,$password))
       {
        return false;
       }
         session_start();
        $_SESSION[$this,GetLoginSessionVar()] = $username;
         return true;
    }
    
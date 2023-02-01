import "../styles/SignIn.css";

function SignIn({googleBtnClick}) {
    
    return <div className="sign-in">
        <h1>Enter</h1>
        <button onClick={googleBtnClick}>Log In With Google</button>
    </div>

}

export default SignIn;

clicklogin();

function clicklogin() {
    const login = document.getElementById('btn_SignIn');
    login.addEventListener('click', () => {
       showlogin();
})
}

function showlogin(){
    const pic = document.getElementsByClassName('carousel');
    pic.style.display = 'none';
    logind.style.display = 'block';
    

}

const logind = document.getElementsByClassName('needs-validation')[0];
logind.style.display= 'none';

const signupd = document.getElementsByClassName('needs-validation')[0];
signupd.style.display= 'none';


clickSignup();

function clickSignup() {
    const signup = document.getElementById('btn_SignUp');
    signup.addEventListener('click', () => {
        showSignup();
})
}

function showSignup(){
    const pic = document.getElementsByClassName('carousel');
    pic.style.display = 'none';
    logind.style.display = 'block';
    

}

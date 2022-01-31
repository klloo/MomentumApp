const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

const greeting = document.querySelector('#greeting');

const HIDDEN_CLASNAME = 'hidden';
const USERNAME_KEY = 'username';

// 로그인 폼 제출하면 기본 이벤트 막아서 새로고침 막고, 
// 유저이름 로컬 스토리지에 저장하고 로그인 폼 히든 해서 안보이게 하고 그리팅 설정하기
function onLoginSubmit(e) {
    e.preventDefault();
    const username = loginInput.value.trim();
    localStorage.setItem(USERNAME_KEY,username);
    
    loginForm.classList.add(HIDDEN_CLASNAME);
    setGreeting(username);
}

// greeting에 글자 넣어주고 히든 클래스 없애서 보여주기 
function setGreeting(username) {
    greeting.innerText = `Hello, ${username} 👋🏻`;
    greeting.classList.remove(HIDDEN_CLASNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로컬 스토리지에 값이 없으면 로그인 폼의 히든 클래스 없애서 보여주기 
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    setGreeting(savedUsername);
}
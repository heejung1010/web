let isAuth = false;

function onlyNumber(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
}

function authCheck() {
  alert("본인인증 완료");
  isAuth = true;
}

function submitForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email1 = document.getElementById("email1").value.trim();
  const email2 = document.getElementById("email2").value.trim();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  const agree1 = document.getElementById("agree1").checked;
  const agree2 = document.getElementById("agree2").checked;
  const agree3 = document.getElementById("agree3").checked;

if (!isAuth) {
    alert("본인인증을 먼저 해주세요.");
    return;
}
if (!agree1 || !agree2 || !agree3) {
    alert("필수 약관에 동의해주세요.");
    return;
}

if (!name || !phone || !email1 || !email2 || !title || !content) {
    alert("모든 필수 입력값을 입력해주세요.");
    return;
}
const email = email1 + "@" + email2;
alert("등록이 완료되었습니다!\n이메일: " + email);
document.getElementById("form").reset();
isAuth = false; 
 
function clearErrors() {
document.querySelectorAll(".error").forEach(el => el.innerText = "");
}
}


function resetForm() {
  document.getElementById("form").reset();
  isAuth = false;
}
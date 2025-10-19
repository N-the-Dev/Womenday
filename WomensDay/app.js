const b = document.querySelector('button.button--no')
        b.addEventListener("mouseover", moveHover)

        function moveHover(){
            const i = Math.floor(Math.random()*500)+1 ;
            const j = Math.floor(Math.random()*500)+1 ;

            b.style.left=i+"px";
            b.style.top=j+"px";
        }

let btnyes = document.querySelector('.button--yes');
let mail = document.querySelector('.mail');
let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let yes = document.querySelector('#yes');
let no = document.querySelector('#no');

btnyes.onclick = function(){
    mail.classList.toggle('active')
    text1.classList.toggle('active')
    text2.classList.toggle('active')
    yes.classList.toggle('active')
    no.classList.toggle('active')
}
// --- Phần thêm mới ---
let clickedOnce = false;

btnyes.addEventListener('click', function() {
    // Nếu đã nhấn 1 lần rồi, lần sau sẽ chuyển sang trang video
    if (clickedOnce) {
        window.location.href = 'index2.html';
    } else {
        // Lần đầu nhấn: đổi giao diện nút
        no.style.display = 'none';
        setTimeout(() => {
            btnyes.textContent = 'Tiếp tục';
            
        },2000); // Đợi thư trượt xuống rồi mới đổi
        clickedOnce = true;
    }
});
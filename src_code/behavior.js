// biar load dlu
document.addEventListener('DOMContentLoaded', function(){
    faq();
}); 

window.addEventListener('load', function(){
    document.body.classList.add('loaded');
});

// untuk link form di button home page
document.getElementById('btnJoin').addEventListener('click', function() {
  window.open('https://forms.gle/wtYBWnBbtu8XUcCN9', '_blank');
});

// untuk FAQ
function faq(){
const questionSection5 = document.querySelectorAll('.faqQuestionSection5');

questionSection5.forEach(q => {q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    const isActive = q.classList.contains('active');

    //kalo lagi aktif tutup dulu
    if(isActive){
        answer.style.display = 'none';
        q.classList.remove('active');
    }else{
    //tutup semua dulu
    document.querySelectorAll('.faqAnswerSection5').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.faqAnswerSection5').forEach(btn => btn.classList.remove('active'));

    //buka yang dipilih
    answer.style.display = 'block';
    q.classList.add('active');
    }
})});
};

// untuk tombol whatsapp biar ga nabrak footer
document.addEventListener("DOMContentLoaded", function(){
    const whatsappBTN = document.querySelector(".whatsapp-btn");
    const footer = document.querySelector("#footer");

    function handleScroll(){
        const footerRect = footer.getBoundingClientRect();
        const btnHeight = whatsappBTN.offsetHeight;
        const windowHeight = window.innerHeight;

        //kalo tombol bakal masuk footer, bakal berhenti di atas footer
        if(footerRect.top < windowHeight){
            const overlap = windowHeight - footerRect.top;
            whatsappBTN.style.position = "fixed";
            whatsappBTN.style.bottom = `${overlap + 0}px`;//margin footer
    }else{
        whatsappBTN.style.position ="fixed";
        whatsappBTN.style.bottom =".625rem";
    }
}
//kalo resize layar
window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);
});
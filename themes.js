const themeToggle = document.getElementById('themeToggle');
if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark');
}
themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'pink');
    }
})
document.addEventListener('keydown', function(e){
    if(e.shiftKey && e.key === 'D'){
        themeToggle.click();
    }
})
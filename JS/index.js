var active = document.querySelectorAll('.links ul li a');
var links = document.querySelector('.links');
var bars = document.querySelector('button.bars');
var nav = document.querySelector('nav');
for (let i = 0; i < active.length; i++) {
    active[i].addEventListener('click',function(e) {
        for (let i = 0; i < active.length; i++){
            active[i].classList.remove('active');
        }
        active[i].classList.add('active');
    });
}

if(bars){
    bars.addEventListener('click',function(e){
        console.log(e.currentTarget);
        links.classList.toggle('menu');
    });
   document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
        links.classList.remove('menu');
    }
});

}

h2=document.getElementById('h22');
    
function color() {
    for (let i = 0; i < 1000; i++) {
        (function (i) {
            setTimeout(() => {

                h2.style.color=`rgb(${i%100},${(i+30)%150},${(i+20)%100})`;
            }, 100*i);
        
        })(i);
        
        
    } 
    setTimeout(() => {
        color();
    }, 10000);
}

color();
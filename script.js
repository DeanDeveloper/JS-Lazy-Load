let lazyloader = () => {

     let img = document.querySelectorAll('[data]');

     img.forEach(elemento => {
          

          if(elemento.getBoundingClientRect().top < (window.innerHeight - 100) ){
               elemento.src = elemento.getAttribute('data');
               elemento.classList.add('show-picture');
          } 


          if(elemento.getBoundingClientRect().top > (window.innerHeight - 50)) {
               elemento.removeAttribute('src')
               elemento.classList.remove('show-picture');
          } 
          
   
     })

};

window.onscroll = function () {
     lazyloader();
}

lazyloader();

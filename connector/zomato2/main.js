//  dropdown-section js


const accordion = document.querySelectorAll(".contentBox " );
for(i=0; i<accordion.length;i++){
    accordion[i].addEventListener('click' ,function(){
this.classList.toggle('active')
    });
}


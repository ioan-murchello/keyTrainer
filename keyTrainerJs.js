
document.addEventListener('DOMContentLoaded', () => {
    
    let index = 0;
    let firstL = document.querySelector('.first_letters');
        
    let secondL = document.querySelector('.second_letters');

    let falls = document.querySelector('.falls span');
        
    let keys = ['q','w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k','l',';',"'",'z','x','c','v','b','n','m',',','.','/', ' '];

    let str = '';
    let i = 0;
    let counter = '';

    falls.textContent = counter;
  
    let dspan;
    let span;

    function random(length){
    
        for(i; i < length; i++){
            if(str.length < 42){
                str += keys[randomLetter(0, keys.length - 1)];
                create(span, firstL, str[i], 'forspan')
                create(dspan, secondL,'','forspan') 
                }
            }
        }

    function randomLetter (min, max){
        return Math.floor(Math.random() * max - min + 1) + min;
    }

    function create(el, main, str,cla){
        el = document.createElement('span');
        el.classList.add(cla);
        el.textContent = str;
        main.append(el);
    }

    random(41)
    
    document.addEventListener('keyup', (e) => {

        document.querySelectorAll('.num').forEach(k => {

            if(e.key == k.textContent){
                k.style.background = ''
            }

            if(e.code === 'ShiftLeft' && k.getAttribute('data-left') === 'left'){
                k.style.background = ''
            }

            if(e.code === 'ShiftRight' && k.getAttribute('data-left') === 'right'){
                k.style.background = ''
            }

            if(e.code === 'Space' && k.textContent === 'space'){
                k.style.background = ''
            }
        
        })
    })
             
                
    let element = secondL.querySelectorAll('span');

        element[0].style.background = 'black';
        element[0].style.color = 'black';
        element[0].textContent = '.'
        element[index].classList.add('anim')
        

    let el = firstL.querySelectorAll('span');
        el[index].style.background = 'rgba(63, 172, 72, 0.835)';
        el[index].style.border = '1px solid black';
      
    function press(e){

        document.querySelectorAll('.num').forEach(k =>  {

            if(e.key === k.textContent){
                k.style.background = 'aqua';
            }

            if(e.code === 'ShiftLeft' && k.getAttribute('data-left') === 'left'){
                k.style.background = 'aqua'
            }

            if(e.code === 'ShiftRight' && k.getAttribute('data-left') === 'right'){
                k.style.background = 'aqua'
            }

            if(e.code === 'Space' && k.textContent === 'space'){
                k.style.background = 'aqua'
            }
        
     })
            ////////////////////

            element[index].style.background = 'black';
            element[index].style.color = 'yellow';
             
            element[index].textContent = e.key;
            element[index].classList.add('red_black')
   
        let last;

            if(index == 40 && e.key === el[index].textContent){
                index--;
                 
                document.removeEventListener('keypress', press);
                element[index].style.background = 'rgba(63, 172, 72, 0.835)';
                el[index].style.background = 'rgba(63, 172, 72, 0.835)';
                
                 location.reload();
            }

             if(e.key != el[index].textContent){
             counter++
             falls.textContent = counter;
                }
            
        if(e.key === el[index].textContent){
            
            el[index].style.background = 'rgba(63, 172, 72, 0.835)';
            // firstL.childNodes.style.background = 'rgba(63, 172, 72, 0.835)';
            el[index + 1].style.background = 'rgba(63, 172, 72, 0.835)';
            el[index + 1].style.border = '1px solid black';
            // el[index + 1].style.border = '1px solid black';
            el[index].style.border = '';
            

            element[index].textContent = el[index].textContent;
            element[index].style.color = 'black';

            console.log(element[index])
            element[index + 1].style.background = 'black';
            element[index + 1].textContent = '.'
            element[index].style.background = 'rgba(63, 172, 72, 0.835)';

            element[index].classList.remove('anim');
            element[index + 1].classList.add('anim');
             
            index++
            }

        }

        document.addEventListener('keypress', press);
 
        });

  
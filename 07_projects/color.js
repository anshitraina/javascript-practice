// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector("body ")

// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click', function(e){
//        console.log(e);
//         console.log(e.target);
//         if(e.target.id==='grey'){
//             body.style.backgroundColor='grey'
//         }
//         if(e.target.id==='red'){
//             body.style.backgroundColor='red'
//         }
//         if(e.target.id==='blue'){
//             body.style.backgroundColor='blue'
//         }
//         if(e.target.id==='yellow'){
//             body.style.backgroundColor='yellow'
//         }
//         if(e.target.id==='purple'){
//             body.style.backgroundColor='purple'
//         }
//         if(e.target.id==='cyan'){
//             body.style.backgroundColor='cyan'
//         }
//         if(e.target.id==='orange'){
//             body.style.backgroundColor='orange'
//         }
//         if(e.target.id==='green'){
//             body.style.backgroundColor='green'
//         }
//         if(e.target.id==='pink'){
//             body.style.backgroundColor='pink'
//         }
//         if(e.target.id==='white'){
//             body.style.backgroundColor='white'
//         }
//     })
// })


// Using Switch statement
const buttons  = document.querySelectorAll('.button')
const body= document.querySelector("body");

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function(e) {
        console.log(e);
        console.log(e.target);

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor='grey'
                break;
            case 'red':
                body.style.backgroundColor='red'
                break;
            case 'blue':
                body.style.backgroundColor='blue'
                break;
            case 'yellow':
                body.style.backgroundColor='yellow'
                break;
            case 'purple':
                body.style.backgroundColor='purple'
                break;
            case 'cyan':
                body.style.backgroundColor='cyan'
                break;
            case 'orange':
                body.style.backgroundColor='orange'
                break;
            case 'green':
                body.style.backgroundColor='green'
                break;
            case 'pink':
                body.style.backgroundColor='pink'
                break;
            case 'white':
                body.style.backgroundColor='white'
                break;                   
        
            default:
                break;
        }
        
    })
    
})
    
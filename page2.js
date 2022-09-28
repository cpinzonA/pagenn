const pedir=document.querySelector('#btn')
const lista=document.querySelector('#selection')
const modal=document.querySelector('.modal')
const escogido=document.querySelector('#producto-escogido')
const cancelar=document.querySelector('.cancel')

pedir.addEventListener('click',()=>{
    if(selection.options[selection.selectedIndex].value==='0'){  
  alert('No has escogido nada')
    }else {
        modal.style.top=0
       escogido.textContent=(selection.options[selection.selectedIndex].text) 
    }
})

cancelar.addEventListener('click', ()=>{
    modal.style.top='-3880px'
    selection.selectedIndex=0
})

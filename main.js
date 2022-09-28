const boton=document.getElementById('ingresar')
boton.addEventListener('click', e=>{
    e.preventDefault()
    const username=document.getElementById('username').value
    const password=document.getElementById('password').value

    if(username==='' || password==='' ){
        alert ('ERROR!! NO SE HA INGRESADO DATOS')
        }

    if(username==='christian' && password==='Cp3440238'){    
        document.body.style.background="green"
        alert('BIENVENIDO')
       setTimeout(()=>{
            location="./page2.html"
        },1000) 
    }else{
        document.querySelector('#mensaje').style.display='block'
        setTimeout(()=>{
            document.querySelector('#mensaje').style.display='none'
        },3000)

    }
})
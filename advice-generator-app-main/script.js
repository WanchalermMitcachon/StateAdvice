const diceBtn=document.getElementById('dice')
const idRandom=document.getElementById('random-id')
const textMain=document.querySelector('.text-main')



  async function showData(){
    try{
        const response=await fetch('https://api.adviceslip.com/advice');
        const data=await response.json();
        console.log(data.slip.id)
        idRandom.innerHTML=`${data.slip.id}`
        textMain.innerText=`${data.slip.advice}`

        }catch(error){
        console.log(error)
    }
}
diceBtn.addEventListener('click',()=>{
   loading()
    setTimeout(showData,1500)
   
})

function loading(){
    idRandom.innerText=`Loading`
    textMain.innerHTML=`Loading`
}


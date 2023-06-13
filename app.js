const textarea = document.querySelector('textarea')
const amount = document.querySelector('.amount')
let limit = document.querySelector('.limit')

textarea.addEventListener("keyup",()=>{

    let count = textarea.value.length
    amount.innerHTML = count

    if(count > 20){
        limit.classList.add("active")
    }else{
        limit.classList.remove("active")
    }
})
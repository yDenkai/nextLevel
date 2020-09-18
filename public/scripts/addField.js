const addTimeLine = document.querySelector("#adds-time")

addTimeLine.addEventListener('click', e =>{

    e = document.querySelector(".schedule-item").cloneNode(true)
    document.querySelector("#schedule-items").appendChild(e)
    
    const clearAdd = e.querySelectorAll("input")

    clearAdd.forEach((clearAdd) =>{
        
        clearAdd.value = ""
        
    })

});
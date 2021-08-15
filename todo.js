let list = document.querySelector(".list")
function add()
{
    let input1 = document.getElementById("txt1")
    let input2 = document.getElementById("txt2")
    

    let li = document.createElement("li")
    
    let text1 = document.createTextNode(`${input1.value} (description = ${input2.value})`)
    
    //btn se input karadia


    let remove1 = document.createElement("button")
    remove1.innerHTML =('<i class="fa fa-trash" aria-hidden="true"></i>')
    remove1.onclick = function removename(){
        li.remove()
    }
    //remove btn

    let check = document.createElement("button")
    check.innerHTML = ('<i class="fa fa-check" aria-hidden="true"></i>')
    check.onclick = function checkname(){
        li.style = "text-decoration:line-through;";
    }
    //check btn

    
//  sabko ek ek karke list m add karo
    
    li.appendChild(remove1)
    li.appendChild(check)
    li.appendChild(text1);
    list.appendChild(li)
    // list ko ul m add
    
   
    
   console.log(list.length) 
    

}

let wrapper = document.getElementById("wrapper")
let clearall = document.createElement("button")
    clearall.innerHTML = ('<button  id="clrall">Clear All</button>')
    
clearall.onclick = function clear(){
    list.remove()
}

//===============================================

function updatecount(){
    const count = document.getElementById("list").childElementCount
    document.getElementById("task").innerHTML = (`you have ${count} to-do's pending`);
    wrapper.appendChild(count)
}
wrapper.appendChild(clearall)

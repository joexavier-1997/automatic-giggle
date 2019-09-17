let a=1;
const TODO_POSTFIX = "_todolist";
const INPUT_POSTFIX = "_input";
const BUTTON_POSTFIX = "_button";
function create() {
    const todoId = a;
    let div1=document.createElement('div');
    div1.setAttribute("id",a.toString());
    document.body.appendChild(div1);
    a++;
    let inp = document.createElement('input')
    div1.appendChild(inp);
    inp.setAttribute("id", todoId + INPUT_POSTFIX);
    let b1=document.createElement('button');
    //let b2=document.createElement('button');
    let todoList = document.createElement("ol");
    todoList.setAttribute("id", todoId + TODO_POSTFIX);
    div1.appendChild(b1);
    //div1.appendChild(b2);
    div1.appendChild(todoList);
    
    b1.innerHTML="add";
    //b2.innerHTML="remove";
    let addFn = getAddItemFn(todoId);
    b1.addEventListener("click", addFn)
    inp.addEventListener("keydown",function(e){
        if(e.keyCode==13){
            addFn();
        }
    });
    
    b1.setAttribute("id",todoId + BUTTON_POSTFIX)
    todoList.addEventListener("click", function (e){
        var tgt = e.target;
        console.log(tgt);
        if (tgt.tagName == "LI") {
          tgt.parentNode.removeChild(tgt); 
        }
      });
}

function getAddItemFn(parentId) {
    return function(e) {
        var x = document.getElementById(parentId + INPUT_POSTFIX);
        if (x.value !== "") {
             var t = document.createTextNode(x.value);
             var cr = document.createElement("li");
             cr.setAttribute("id",x)
             cr.appendChild(t);
             document.getElementById(parentId + TODO_POSTFIX).appendChild(cr);
             x.value="";
        }
    }
}

// function getRemoveItemFn(parentId){
//     return function(e) {
//         let r = document.getElementById(parentId + TODO_POSTFIX);
//         let x = document.getElementById(parentId + INPUT_POSTFIX);
//         if(r.hasChildNodes()) 
//         x.value="";
//     }

// }

create();
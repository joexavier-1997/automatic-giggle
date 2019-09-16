let a=1;
const TODO_POSTFIX = "_todolist";
const INPUT_POSTFIX = "_input";

function create() {
    
    const todoId = a;


    // let div = createOuterDiv(todoId);
    // let inputBox = createInput(div);
    // let addBtn = createButton(div, getAddItemFn(todoId));
    // let removeBtn = createButton(div);

    let div1=document.createElement('div');
    div1.setAttribute("id",a.toString());
    document.body.appendChild(div1);
    a++;
    let inp = document.createElement('input')
    div1.appendChild(inp);
    inp.setAttribute("id", todoId + INPUT_POSTFIX);
    let b1=document.createElement('button');
    let b2=document.createElement('button');
    let todoList = document.createElement("ol");
    todoList.setAttribute("id", todoId + TODO_POSTFIX);
    div1.appendChild(b1);
    div1.appendChild(b2);
    div1.appendChild(todoList);
    
    b1.innerHTML="add";
    b2.innerHTML="remove";
    b1.addEventListener("click", getAddItemFn(todoId));
    b1.setAttribute("id",todoId + INPUT_POSTFIX)
    b2.addEventListener("click", getRemoveItemFn(todoId));
}
function enter(input){
    input.addEventListener("keyup",function(event){
    if(event.keyCode===13){
        event.preventDefault();
        document.getElementById(parentId + INPUT_POSTFIX).click();
    }
})
}

function getAddItemFn(parentId) {
    return function(e) {
        var x = document.getElementById(parentId + INPUT_POSTFIX);
       
        var t = document.createTextNode(x.value);
        var cr = document.createElement("li");
        cr.setAttribute("id",x)
        cr.appendChild(t);
        document.getElementById(parentId + TODO_POSTFIX).appendChild(cr);    
    }
}

function getRemoveItemFn(parentId){
    return function(e) {
        let r = document.getElementById(parentId + TODO_POSTFIX);
        r.removeChild(r.childNodes[0])
    }
}

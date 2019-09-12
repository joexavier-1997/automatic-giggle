function list() {
    console.log()
    var x = document.getElementById("input").value;
    var t = document.createTextNode(x);
    var cr = document.createElement("li");
    cr.setAttribute("id",input.value)
    cr.appendChild(t);
    document.getElementById("todolist").appendChild(cr);    
}

const todo_template = `
<div id='div_id'>
    <div>
        <input id="input">
        <button onclick="list()">add</button>
        <button onclick="remove_list()">remove</button>
    </div>
    <ol id="todolist">

    </ol>
</div>`

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
      return div.firstChild; 
  }

function remove_list() {
    var r=document.getElementById("todolist");
    // console.log(r);   
    var x = document.getElementById(input.value);
    // console.log(x);
    r.removeChild(x);
}
function newlist() {
    todo_list_element = createElementFromHTML(todo_template)
    // console.log
    // var div = document.getElementById('div_id'),
    // clone = div.cloneNode(true);
    // console.log(clone);
    // clone.id = 'some_id';
    document.body.appendChild(todo_list_element);
}
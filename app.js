var data = [];
var editIndex = -1;

function deleteTodo(index){
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    base_load();
    console.log("delete index: " + index);
}
function base_load() {
	var demo = document.getElementById("demo");
	data = JSON.parse(localStorage.getItem("data"));
    console.log(data);

    var str = "";
    for(var i=0; i<data.length; i++){
         str += "<p> name: " + data[i].name + "</p> <br />" + "<p> description: " + data[i].description +" </p> " +
       "<button type=" +'button'+ " onclick = " + 'editTodo('+ i + ")> EDIT </button> <button type=" + 'button' + " onclick ="+ 'deleteTodo(' + i +") >DELETE </button> <hr>";
        demo.innerHTML = str;
    }
}

function editTodo(i) {
    editIndex = i;
    document.getElementById("name_").value = data[i].name;
    document.getElementById("desc_").value = data[i].description;
   
}


function addData() {
    var name = document.getElementById("name_").value;
	var desc = document.getElementById("desc_").value;
    var obj = {"name": name,"description": desc};  
    
    if(editIndex > -1) {
        // update
        data.splice(editIndex, 1, obj);
        editIndex = -1; // reset
    } else {
        // add
        data.push(obj);
    }
    
    localStorage.setItem("data", JSON.stringify(data));
    base_load();
    resetForm();
}

function resetForm() {
    document.getElementById("name_").value = null;
        document.getElementById("desc_").value = null;
}

	

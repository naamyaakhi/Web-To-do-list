const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date")
const list = document.getElementById("list")
const input = document.getElementById("input")

//class names
const CHECK = "fa-check-circle";
const UCHECK = "fa-circle-thin";
const LINE_THROUGH = "linethrough";

//variables
let LIST,id;

let data = localStorage.getItem("TODO");


if(data){
    LIST = JSON.parsel(data);
    id = LIST.length;
    loadList;
}else{

    LIST = [];
    id = 0;
}

function loadList(array){
    array.forEach(function(item){
        addToDO(item.name,item.list,item.done,item.trash);
    });
}


clear.addEventListener('click',function(){
    localStorage.clear();
    location.reload();
});


const options = {weekday: "long",month:"short",day:"numeric"};
const today =new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US",options);

function addToDO(toDO,id,done,trash){
    if(trash){return;}
    const DONE = done? CHECK : UNCHECK;
    const LINE = done?LINE_THROUGH:"";

    const item = <li class ="item">
        <i check="fa ${DONE}co" job = "complete" id="$(id)"></i>
        <p class="text $(LINE)">${toDO}</p>
        <i class="fa fa-trash-o de" job="delete" id="$(id)"></i>
    </li>

    const position = "beforeend";
    list.insertAdjacentHTML(position,item);
}


document.addEventListener("keyup",function(even){
    if(even.keyCode == 13){
        const toDO = input.nodeValue;

        if(toDO){
            addToDO(toDO,id,false,false);

            LIST.push({
                name : toDO,
                id : id,
                done:false,
                trash:false,
            })
            localStorage.setItem("TODO",JSON.stringify(LIST));
            id++;
        }
    }
});
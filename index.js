const inpBox = document.getElementById('inpBox');
const list = document.getElementById('list');

function addTask(){
    if(inpBox.value === ''){
        alert('you must write')
    }else{
        const li = document.createElement("li");
        li.innerHTML = inpBox.value;
        list.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = '';
        li.appendChild(span);
    }
    inpBox.value = '';
}

list.addEventListener("click",(g) => {
    if(g.target.tagName === "LI"){
        g.target.classList.toggle('check');
    }
})
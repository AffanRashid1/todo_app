const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (item) => {
    if(item == ""){
        alert("First fill the field");
    }
    else{
        const listItem = document.createElement("li");
        listItem.innerHTML = `
               ${item}
              <i class="fas fa-times"></i>
          `;
      
        listItem.addEventListener("click", function () {
          this.classList.toggle("done");
        });
        listItem.querySelector("i").addEventListener("click", function () {
          listItem.remove();
        });
        toDoBox.appendChild(listItem);
    }
};

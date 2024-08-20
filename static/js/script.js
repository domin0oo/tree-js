function addNode(parent = document.getElementById("tree-root")) {
  const newLi = document.createElement("li");

  const addNewNode = document.createElement("button");
  addNewNode.textContent = "Add Child Node";
  addNewNode.addEventListener("click", () => addParentNode(newLi));

  const deleteNode = document.createElement("button");
  deleteNode.textContent = "Delete Child Node";
  deleteNode.addEventListener("click", () => newLi.remove());

  newLi.appendChild(addNewNode);
  newLi.appendChild(deleteNode);
  parent.appendChild(newLi);
}

function addParentNode(parent) {
  const newUl = document.createElement("ul");
  const newLi = document.createElement("li");

  const addNewNode = document.createElement("button");
  addNewNode.textContent = "Add Child Node";
  addNewNode.addEventListener("click", () => addParentNode(newLi));

  const deleteNode = document.createElement("button");
  deleteNode.textContent = "Delete Child Node";
  deleteNode.addEventListener("click", () => newLi.remove());

  newLi.appendChild(addNewNode);
  newLi.appendChild(deleteNode);
  newUl.appendChild(newLi);
  parent.appendChild(newUl);
}

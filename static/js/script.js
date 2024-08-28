function addNode(parent = document.getElementById("tree-root")) {
  const showAsTreeBtn = document.querySelector("button[data-tree]");
  const isTree = showAsTreeBtn.getAttribute("data-tree") === "true";
  
  const newLi = document.createElement("li");

  isTree ? parent.classList.add("ul-tree") & newLi.classList.add("li-tree") : null;

  const addNewNode = document.createElement("button");
  addNewNode.textContent = "Add Child Node";
  addNewNode.addEventListener("click", () => addParentNode(newLi));

  const deleteNode = document.createElement("button");
  deleteNode.textContent = "Delete Child Node";
  deleteNode.addEventListener("click", () => newLi.remove() & parent.classList.remove('ul-tree'));

  newLi.appendChild(addNewNode);
  newLi.appendChild(deleteNode);
  parent.appendChild(newLi);
}

function addParentNode(parent) {
  const showAsTreeBtn = document.querySelector("button[data-tree]");
  const isTree = showAsTreeBtn.getAttribute("data-tree") === "true";
  
  const newUl = document.createElement("ul");
  const newLi = document.createElement("li");

  isTree ? newUl.classList.add("ul-tree") & newLi.classList.add("li-tree") : null;

  const toggleButtons = parent.getElementsByClassName("toggle-button");
  const nearestToggle = toggleButtons.length > 0 ? toggleButtons[0] : null;
  if (nearestToggle && !nearestToggle.classList.contains("collapsed")) {
    nearestToggle.click();
  }

  const addNewNode = document.createElement("button");
  addNewNode.textContent = "Add Child Node";
  addNewNode.addEventListener("click", () => addParentNode(newLi));

  const deleteNode = document.createElement("button");
  deleteNode.textContent = "Delete Child Node";
  deleteNode.addEventListener("click", () => {
    const liNum = newLi.parentNode.children.length;
    if (liNum === 1) {
      newLi.parentNode.parentNode
        .getElementsByClassName("toggle-button")[0]
        .remove();
      newLi.parentNode.remove();
    } else {
      newLi.remove();
    }
  });

  newLi.appendChild(addNewNode);
  newLi.appendChild(deleteNode);

  if (parent.getElementsByClassName("toggle-button").length == 0) {
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle-button", "collapsed");
    toggleButton.addEventListener("click", (event) => {
      toggleButton.classList.toggle("collapsed");
      Array(event.target.parentNode.getElementsByTagName("ul")).forEach(
        (item) => [...item].map((element) => element.classList.toggle("hide"))
      );
    });
    parent.insertBefore(toggleButton, parent.firstChild);
    newUl.appendChild(newLi);
    parent.appendChild(newUl);
  } else {
    parent.querySelector("ul").appendChild(newLi);
  }
}

function showHideAll(event) {
  const showHideBtn = event.target;
  const isVisible = showHideBtn.getAttribute("data-visible") === "true";
  const toggleButtons = document.getElementsByClassName("toggle-button");
  Array.from(toggleButtons).forEach((btn) => {
    if (isVisible) {
      if (btn.classList.contains("collapsed")) {
        btn.click();
      }
    } else {
      if (!btn.classList.contains("collapsed")) {
        btn.click();
      }
    }
  });
  showHideBtn.setAttribute("data-visible", !isVisible);
}

function showAsTree(event) {
  const treeRoot = document.getElementById("tree-container");
  const showAsTreeBtn = event.target;
  const isTree = showAsTreeBtn.getAttribute("data-tree") === "true";

  const ulTags = treeRoot.querySelectorAll("ul");
  const liTags = treeRoot.querySelectorAll("li");

  isTree
    ? ulTags.forEach(ul=>ul.classList.remove("ul-tree")) & liTags.forEach(li=>li.classList.remove("li-tree"))
    : ulTags.forEach(ul=>ul.classList.add("ul-tree")) & liTags.forEach(li=>li.classList.add("li-tree"));

    showAsTreeBtn.setAttribute("data-tree", !isTree);
}

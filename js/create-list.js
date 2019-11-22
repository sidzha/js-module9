import createToDoItem from "./create_item.js";

export default function createListFromStorage(newList, toDoListElem) {
  let fragment = document.createDocumentFragment();
  for (let [key, value] of newList.getItems()) {
    //провереям значение объекта b в мапе, если true то добавляем class "checked"
    let newItem = createToDoItem(key, value.a);
    if (value.b) {
      newItem.classList.add("checked");
    }
    fragment.appendChild(newItem);
  }
  toDoListElem.appendChild(fragment);
}

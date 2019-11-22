"use strict";
let toDoListElem = document.querySelector(".js-ol");
let formInputElem = document.querySelector(".js-taskname");
let newTaskFormElem = document.querySelector(".js-form");

import StorageList from "./storagelist.js";
import createListFromStorage from "./create-list.js";
import createToDoItem from "./create_item.js";

let newList = new StorageList();

if (newList.getItems().size) {
  createListFromStorage(newList, toDoListElem);
}

newTaskFormElem.addEventListener("submit", function(evt) {
  evt.preventDefault();
  let inputValue = formInputElem.value;
  //вызываем 2 метода, созданного ранее класса
  newList.add(inputValue);
  newList.saveItems();
  //получаем ключ из Map
  let arr = Array.from(newList.getItems().keys());
  let key = arr[arr.length - 1];
  //создаем элементы для списка
  let newItem = createToDoItem(key, inputValue);
  toDoListElem.appendChild(newItem);
  this.reset();
});

toDoListElem.addEventListener("click", function(evt) {
  if (evt.target.tagName === "LI") {
    evt.target.classList.toggle("checked");
    let keyValue = evt.target.dataset.id;
    let objectValue = newList.isComlete(keyValue);
    newList.changeValue(keyValue, objectValue);
    newList.saveItems();
  }
});

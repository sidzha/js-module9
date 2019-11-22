export default function createToDoItem(key, inputValue) {
  //функция создания элемента
  let newItem = document.createElement("li");
  newItem.textContent = inputValue;
  //при генерации разметки, брать id(читай ключ по которому в мапе храниться объект описывающий дело)
  //и прописывать его в data-* атрибут, на приемлемый элемент!
  newItem.dataset.id = key;
  return newItem;
}

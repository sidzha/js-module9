export default class StorageList {
  constructor() {
    this.items = localStorage.getItem("items")
      ? new Map(JSON.parse(localStorage.items))
      : new Map();
  }

  getItems() {
    return this.items;
  }

  add(value) {
    let id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    let object = { a: value, b: false };
    this.items.set(id, object);
  }

  isComlete(keyValue) {
    return this.items.get(keyValue).b;
  }

  changeValue(keyValue, objectValue) {
    !objectValue
      ? (this.items.get(keyValue).b = true)
      : (this.items.get(keyValue).b = false);
  }

  saveItems() {
    localStorage.items = JSON.stringify(Array.from(this.items));
  }
}

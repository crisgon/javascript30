(function(){
  'use strict';

  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];

  
  function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name="item"]')).value;
    const item = {
      text,
      done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }
  
  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((item, index) => {
      return `
      <li>
      <input type="checkbox" data-index="${index}" id="item${index}" ${item.done? 'checked': '' }>
      <label for="item${index}">${item.text}</label>
      </li>
      `;
    }).join('');
  }
  
  function toggleDone(e) {
    if(!e.target.matches('input')) return;
    let index = e.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
  }

  populateList(items, itemsList);

  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
}());
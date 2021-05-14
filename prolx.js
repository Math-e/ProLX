let itemsProf = [], itemsPart = [];
const itemsAll = Array.from(document.getElementsByClassName('sc-1fcmfeb-2'));

createSelector();
getItems();

function changeProlx(option) {
  switch (option) {
    case "pro":
      itemsPart.forEach((x) => x.style.display = "none");
      itemsProf.forEach((x) => x.style.display = "list-item");
      break;
    case "part":
      itemsPart.forEach((x) => x.style.display = "list-item");
      itemsProf.forEach((x) => x.style.display = "none");
      break;
    case "disable":
      itemsAll.forEach((x) => x.style.display = "list-item");
  }
}

function createSelector() {
  let selDiv = document.createElement('div');
  let selector = document.createElement('select');
  let optProf = document.createElement('option');
  let optPart = document.createElement('option');
  let optDisable = document.createElement('option');
  
  selDiv.style.padding = "10px";
  optProf.value = "pro";
  optProf.text = "Apenas profissionais";
  optPart.value = "part";
  optPart.text = "Apenas particulares";
  optDisable.value = "disable";
  optDisable.text = "Não filtrar";
  selector.id = "prolx";
  
  selector.addEventListener('change', () => { changeProlx(selector.value) });
  selector.appendChild(optDisable);
  selector.appendChild(optProf);
  selector.appendChild(optPart);
  selDiv.appendChild(selector);
  
  const filterDiv = document.querySelectorAll('.atr1pv-0,.sc-19se6iy-0,.sc-8cftau-0,.jXpdDF');
  filterDiv[0].appendChild(selDiv);
}

function getItems() {
  itemsAll.forEach((x) => {
    if (x.innerHTML.trim().includes('hCbuBW')) {
      itemsProf.push(x);
    } else {
      itemsPart.push(x);
    }
  });
}
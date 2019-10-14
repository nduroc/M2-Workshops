inMemoryWorkshop = []


function getWorkshopList() {
  return new Promise((resolve, ) => {
    resolve(inMemoryWorkshop)
  })
}

function getWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error("name parameter is required"))
    }
    resolve(inMemoryWorkshop.find(workshop => workshop.name === name))
  })
}

function addWorkshop(name, description) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error("Workshop name required"))
    }
    if (!description) {
      reject(new Error("Workshop description required"))
    }
    inMemoryWorkshop.push({
      name,
      description
    })
    resolve()
  })
}

function removeWorkshopByName(name) {
  return new Promise((resolve, reject) => {
    workshopPresent = false;
    inMemoryWorkshop.forEach(element => {
      if (element.name === name) {
        inMemoryWorkshop.splice(inMemoryWorkshop.indexOf(element), 1);
        workshopPresent = true;
      }
      if(workshopPresent){
        element.id = (element.id - 1);
      }
    });
    if (workshopPresent) {
      resolve();
    }
    else {
      reject(new Error('There are no workshop with this name.'));
    }
  })
}

function updateWorkshop(oldName, name, description) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error("A name is needed for a workshop."));
    }
    if (!description) {
      reject(new Error("A description is needed for a workshop."));
    }
    inMemoryWorkshop.forEach(element => {
      if (element.name === oldName) {
        element.name = name;
        element.description = description;
        resolve();
      }
    });
    reject(new Error("The workshop you want to update doesn't exist."));
  })
}

module.exports = {
  getWorkshopList,
  getWorkshopByName,
  addWorkshop,
  removeWorkshopByName,
  updateWorkshop
}
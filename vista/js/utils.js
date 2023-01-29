const _createBody = (bodyJSON) =>{
  let formData = new FormData();
  const keys = Object.keys(bodyJSON);
  keys.forEach(key=>{
    formData.append(key,bodyJSON[key]);
  })
  return formData;
}

const _IsJsonString = (str) => {
  try { JSON.parse(str); }
  catch (e) { return false;}
  return true;
}

export const postFetch = async (urlEndPoint,bodyJSON) => {
  try{
    const formData = _createBody(bodyJSON);
    const response = await fetch(urlEndPoint,{method:'POST',body:formData});
    const data = await response.text();
    if(_IsJsonString(data)) return JSON.parse(data);
    else return data;
  }catch(error){ throw new Error(error);}
}


export const getFetch = async (urlEndPoint) => {
  try{
    const response = await fetch(urlEndPoint,{method:'GET'});
    const data = await response.text();
    if(_IsJsonString(data)) return JSON.parse(data);
    else return data;
  }catch(error){ throw new Error(error);}
}



export const postFetchAPI = async (urlEndPoint,bodyJSON) => {
  try{
    const response = await fetch(urlEndPoint,{
        headers: {'Content-Type': 'application/json'},
        method:'POST',
        body: JSON.stringify(bodyJSON)
    });
    const data = await response.json();
    return data;
  }catch(error){ throw new Error(error);}

}


// Ordenar un arreglo de objetos por alguna propiedad del objeto
export const orderArrayObject = (array,prop) => {
  return array.sort((a,b)=>{
    if(a[prop] > b[prop]) return 1;
    if(a[prop] < b[prop]) return -1;
    return 0;
  })
}

//Obtener un array sin elementos repetidos, pasando como parametro el arreglo y la propiedad indice
export const arrayWithoutRepeatElements = (array,prop) => {
  const auxArray = [...new Set(array.map(e=>e[prop]))];
  const newArray = [];
  auxArray.forEach(uniqueElement=>{
    const aux = array.find(e=>e[prop] == uniqueElement);
    newArray.push(aux);
  })
  return newArray;
}

export const getDateMDY = (date) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month<10? `0${month}`:month;
  day   = day<10? `0${day}`:day;
  return `${year}-${month}-${day}`;
}

export const sumarHoras= (hora,minutos)=>{
  /* Cuando las horas llegan con PM o AM, Ejemplo '03:40 PM' (revisar los espacios) */
  if (hora.includes('AM') || hora.includes('PM')){
    const horasAndMinutes = hora.split(' ')[0];
    const horas = horasAndMinutes.split(':')[0];
    const minutes = horasAndMinutes.split(':')[1];
    const total = parseInt(horas) * 60 + parseInt(minutes) + parseInt(minutos);
    let newHoras = Math.trunc(total/60);
    let newMinutes = total%60;
    let charHours = hora.split(' ')[1];
    if(newHoras>12){ newHoras = newHoras - 12; }
    if(horas < 12 && newHoras >=12){
      charHours = hora.includes('AM')? 'PM':'AM';
    }
    newHoras = newHoras<10? `0${newHoras}`:newHoras;
    newMinutes = newMinutes<10? `0${newMinutes}`:newMinutes;
    return `${newHoras}:${newMinutes} ${charHours}`
  }else{
    const horas = hora.split(':')[0];
    const minutes = hora.split(':')[1];
    const total = parseInt(horas) * 60 + parseInt(minutes) + parseInt(minutos);
    let newHours = Math.trunc(total/60);
    let newMinutes = total%60;
    if(newHours >= 24) newHours = newHours - 24;
    newHours = newHours<10? `0${newHours}`:newHours;
    newMinutes = newMinutes<10? `0${newMinutes}`:newMinutes;
    return `${newHours}:${newMinutes}`;
  }
}

//Mostrar alertas
export const showAlert = (title,content,callBack) =>{
  let confirmButton = null;
  let textCancelButton = 'OK';
  if(callBack!=null){
    confirmButton = '<button class="btn btn-primary" style="color: rgba(255,255,255,0.9);">SI</button>';
    textCancelButton = 'NO';
  }
  let objAlert = {
      title: title,
      content: content,
      animation: 'zoom',
      closeAnimation: 'zoom',
      confirmButton:confirmButton,
      cancelButton: '<button class="btn btn-danger" style="color: rgba(255,255,255,0.9);">'+textCancelButton+'</button>',
      keyboardEnabled: true,
      confirm: callBack
  }
  $.confirm(objAlert);
}
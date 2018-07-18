const boton = document.getElementById('btn');
 
boton.addEventListener('click', () => {
   let comments = document.getElementById('comment').value;// rescato el valor del texto que se introducesloggedOut
  document.getElementById('comment').value = '';// para mantener limpio el area de texto
  const cont = document.getElementById('cont');
  const newComments = document.createElement('div');loggedOut
  const like = document.createElement('i');
  like.classList.add('fa', 'fa-thumbs-up', 'like');
  //const smile = document.createElement('i');
 // smile.classList.add('fa', 'fa-smile-beam', 'smile');
  const heart = document.createElement('i');
  heart.classList.add('fa', 'fa-heart', 'heart');
  const trash = document.createElement('i');
  trash.classList.add('fa', 'fa-trash', 'trash');
  const contenedorElemento = document.createElement('p');
  let textNewComment = document.createTextNode(comments);
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(like);
  newComments.appendChild(heart);
  newComments.appendChild(trash);
 // newComments.appendChild(smile);
  newComments.appendChild(contenedorElemento);
  cont.appendChild(newComments);

 
  heart.addEventListener('click', () => {
    heart.classList.toggle('red');
  })
  trash.addEventListener('click', () => {
    cont.removeChild(newComments);
    borrarPublicacionesLocalStorage();
  })
  like.addEventListener('click', () => {
    like.classList.toggle('blue');
  })
 // smile.addEventListener('click', () => {
  //  smile.classList.toggle('yellow');
  //})
    document.addEventListener('DOMContentLoaded', localStorageReady);
agregarPublicacionesLocalStorage(comments);
})



// mostrar datos de local storage
function localStorageReady() {
  let comments;
  comments = obtenerPublicacionesLocalStorage();
  comments.forEach(function (mensaje) {
  
  });
}

//Agrega tarea a local storage
function agregarPublicacionesLocalStorage(texto) {
  let comments = obtenerPublicacionesLocalStorage();
   comments.push(texto);
  localStorage.setItem('comments', JSON.stringify(comments));
}


// Comprobar que haya elementos en local storage, retorna un arreglo
function obtenerPublicacionesLocalStorage() {
  let comments;
  if (localStorage.getItem('comments') === null) {
    comments = [];
  } else {
    comments = JSON.parse(localStorage.getItem('comments'));
  }
  return comments;
}
// Eliminar publicaciones de Local Storage
function borrarPublicacionesLocalStorage(publicacion) {
  
  
  let borrarPublicacion = publicacion.substring(0, tarea.length - 1);
  let publicacion = obtenerPublicacionesLocalStorage();
publicacion.forEach(function (textoArr, index) {
    if (borrarPublicacion === textoArr) {
      publicacion.splice(index, 1);
    }
  })
  
  localStorage.setItem('publicacion', JSON.stringify(publicacion));
  
  return borrarTareasLocalStorage;
}
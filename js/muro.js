// const boton = document.getElementById('btn');

// boton.addEventListener('click', () => {

//   // construyendo los elementos
//   let comments = document.getElementById('comment').value;// rescato el valor del texto que se introduces
//   document.getElementById('comment').value = '';// para mantener limpio el area de texto
//   const cont = document.getElementById('cont');
//   const newComments = document.createElement('div');loggedOut
//   const like = document.createElement('i');
//   const contenedorElemento = document.createElement('p');
//   let textNewComment = document.createTextNode(comments);
//   const heart = document.createElement('i');
//   const trash = document.createElement('i');

//   // agregando atributos (iconos)
//   like.classList.add('fa', 'fa-thumbs-up', 'like');
//   heart.classList.add('fa', 'fa-heart', 'heart');
//   trash.classList.add('fa', 'fa-trash', 'trash');

//   //se complementan los elementos(se le asignan a los padres sus hijos)
//   contenedorElemento.appendChild(textNewComment);
//   newComments.appendChild(like);
//   newComments.appendChild(heart);
//   newComments.appendChild(trash);
//   newComments.appendChild(contenedorElemento);
//   cont.appendChild(newComments);

//   // se crea el evento para los iconos (el de eliminar comentario al clickear el trash, y el heart en rojo al clickear)
//   heart.addEventListener('click', () => {
//     heart.classList.toggle('red');
//   })
//   trash.addEventListener('click', () => {
//     cont.removeChild(newComments);

//   })
//   like.addEventListener('click', () => {
//     like.classList.toggle('blue');
//   })

//   document.addEventListener('DOMContentLoaded', localStorageReady);
//   agregarPublicacionesLocalStorage(comments);
// })


// /*function creandoDom(text) {
// 	let text = document.getElementById('comment').value;// rescato el valor del texto que se introduces
// 	document.getElementById('comment').value = '';// para mantener limpio el area de texto
// 	const cont = document.getElementById('cont');
// 	const newComments = document.createElement('div');
// 	const like = document.createElement('i');
// 	const contenedorElemento = document.createElement('p');
// 	let textNewComment = document.createTextNode(text);
// 	const heart = document.createElement('i');
// 	const trash = document.createElement('i');

// 	like.classList.add('fa', 'fa-thumbs-up', 'like');
// 	heart.classList.add('fa', 'fa-heart', 'heart');
// 	trash.classList.add('fa', 'fa-trash', 'trash');

// 	contenedorElemento.appendChild(textNewComment);
// 	newComments.appendChild(like);
// 	newComments.appendChild(heart);
// 	newComments.appendChild(trash);
// 	newComments.appendChild(contenedorElemento);
// 	cont.appendChild(newComments);

// 	document.addEventListener('DOMContentLoaded', localStorageReady);
// 	agregarPublicacionesLocalStorage(comments);
// }*/
// // mostrar datos de local storage
// function localStorageReady() {
//   let comments;
//   comments = obtenerPublicacionesLocalStorage();
//   comments.forEach(function (text) {
//     //creandoDom(text);
//   });
// }

// //Agrega publicación a local storage
// function agregarPublicacionesLocalStorage(texto) {
//   let comments = obtenerPublicacionesLocalStorage();
//   comments.push(texto);
//   localStorage.setItem('comments', JSON.stringify(comments));
// }


// // Comprobar que haya elementos en local storage, retorna un arreglo
// function obtenerPublicacionesLocalStorage() {
//   let comments;
//   if (localStorage.getItem('comments') === null) {
//     comments = [];
//   } else {
//     comments = JSON.parse(localStorage.getItem('comments'));
//   }
//   return comments;
// }
// // Eliminar publicaciones de Local Storage
// function borrarPublicacionesLocalStorage(publicacion) {


//   let borrarPublicacion = publicacion.substring(0, tarea.length);
//   let publicacion = obtenerPublicacionesLocalStorage();
//   publicacion.forEach(function (textoArr, index) {
//     if (borrarPublicacion === textoArr) {
//       publicacion.splice(index, 1);
//     }
//   })

//   localStorage.setItem('publicacion', JSON.stringify(publicacion));


//   return borrarTareasLocalStorage;
// }
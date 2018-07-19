
var muro = {};// se crea obj muro
muro.muro_id = "prueba id";
console.log(muro.muro_id);
muro.post = [];
var post = {};// se crea obj post
post.tipo = "Texto";
post.likes = 1;
post.infomuro = "Mi muro";

muro.post.push(post);// agrego obj post al arr de muro
console.log(muro.post[0].post);

// instancia de firebase
var database = firebase.database();
function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl // aqui se debe agregar el llamado a la foto
    });
  }

funcion subirPost()
{
  let Post = {};//crea objeto post 
  Post.post =document.getElementById('muroContent').value;//agrega caracteristica y le da valor a post
  let user = firebase.auth().currentUser;//obtengo uid del usuario autentificado
  var ref =firebase.database().ref("muro/"+ user.uid +"/");//creo objeto que se posiciona en la direccion de database
  var newref =ref.push();//se crea metodo para agregar objeto con id diferente a la referencia
  newref.set(post);//se agrega el objeto post
}

// //  firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   }, function(error) {
//     if (error) {
//       // The write failed...
//     } else {
//       // Data saved successfully!
//     }
//   });
// }


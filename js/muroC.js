
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

function subirPost()
{
  //let Post = {};//crea objeto post 
  let contentPost =document.getElementById('comment').value;//agrega caracteristica y le da valor a post
  const newpostKey = firebase.database().ref().child("muro").push().key;
  let user = firebase.auth().currentUser;//obtengo uid del usuario autentificado
  console.log(user)
  firebase.database().ref("muro/"+ newpostKey +"/").set({contenido: contentPost, user: user.email, likes: 0});//se agrega el objeto post
}
firebase.database().ref('muro')
        .limitToLast(5) //Filtro de mensajes cuando se cargan los datos
        .on('child_added', (newGif)=>{ //Para escuchar datos más veces o doblegados
            cont.innerHTML += `
                <p>${newGif.val().contenido}</p>
                
                <p>${newGif.val().user}</p>
                
            `;
        });

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



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

// funcion de posteos  
function subirPost()
{
  //let Post = {};//crea objeto post 
  let contentPost =document.getElementById('publicacion').value;//agrega caracteristica y le da valor a post
  const newpostKey = firebase.database().ref().child("muro").push().key;
  let user = firebase.auth().currentUser;//obtengo uid del usuario autentificado
  console.log(user)
  firebase.database().ref("muro/"+ newpostKey +"/").set({contenido: contentPost, user: user.email, likes: 0});//se agrega el objeto post
}

   function subirPost()
  {
      let Post = {};// se crea objeto post
      Post.post = document.getElementById("publicacion").value;// se llena la caracteristica post con el contenido del muro
      var d = new Date(); // se crea objeto fecha
      var hora = d.getHours(); // se obtiene hora de la fecha
      var minutos = d.getMinutes(); // se obtoienen minutos de la fecha
      Post.metric = {};// se crea obj metric que guarda las metricas (fecha, hora post)
     
      let fecha = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay();// se le
      Post.metric.time = fecha+"--"+hora+"."+minutos;// se guarda fecha y hora
      let user = firebase.auth().currentUser;// obtenemos usuario logado
      var ref = firebase.database().ref("Muro/"+ user.uid + "/Posts");// referenciamos posicion de la base de datos
      var newRef = ref.push();// sube los datos
      console.log(Post.date);
      newRef.set(Post);//set se guardan datos en lugar de la referencia
  }
   
  function ObtenerPostUser()
  {
      let user = firebase.auth().currentUser;// obtener usuario
      console.log(user.uid)
      var ref = firebase.database().ref("Muro/"+user.uid);// se referencia posicion de la base de datos muro user
      ref.orderByChild('metric/time').on("child_added", function(snapshot){// se obtiene obj de la base de datos
          console.log(snapshot.val());
      });
  }
  // logout
function logoutWithFireBase() {// log out
  firebase.auth().signOut()
      .then(() => {
          location.href = "index.html";
          console.log('usuario finalizo su sesion')
      })
      .catch();
  }
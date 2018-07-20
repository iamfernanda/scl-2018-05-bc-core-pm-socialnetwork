
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
      let Post = {};
      Post.post = document.getElementById("MuroContent").value;
      var d = new Date();
      Post.date = d.toLocaleDateString('en-US');
      let user = firebase.auth().currentUser;
      var ref = firebase.database().ref("Muro/"+ user.uid + "/Posts");
      var newRef = ref.push();
      console.log(Post.date);
      newRef.set(Post);
  }

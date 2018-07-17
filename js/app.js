window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) { 
            location.href = "file:///home/cynthia/Documentos/social%20network/scl-2018-05-bc-core-pm-socialnetwork/muro.html";
            // loggedIn.style.display = "block";
            // loggedOut.style.display = "none";
            // username.innerText = user.displayName;
        } else { 
            loggedIn.style.display = "none";
            loggedOut.style.display = "block";
        }
        console.log("User > " + JSON.stringify(user));
    });
 
   
};
 
//Registro
function registerWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;
 
    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario creado con éxito");
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}
//Login
function loginWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;
 
    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario inició sesión con éxito");
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}
 
function logoutWithFirebase() {
    firebase.auth().signOut()
        .then(() => {
            console.log("Usuario finalizó su sesión");
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}
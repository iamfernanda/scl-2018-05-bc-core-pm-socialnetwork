//funcion para edicion de nombre de usuario//
function amigos() {
    document.getElementById("boxAmigos").style.visibility = "visible";
   }




function previewImg(file) {
    var reader = new FileReader();
    reader.onload = function() {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    }
    sendImage()
 }
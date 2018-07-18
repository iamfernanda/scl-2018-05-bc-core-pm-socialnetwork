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
export const imageDataToBase64 = (imageData)=>{
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    context.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
}

export const  Base64ToImageData= (imageDataBase64)=> {
    const img = new Image();
    img.src = imageDataBase64;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
    };
    return context.getImageData(0, 0, canvas.width, canvas.height);
}
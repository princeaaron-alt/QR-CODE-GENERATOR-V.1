//  let imgBox = document.getElementById('imgBox');
//   let qrImage = document.getElementById('qrImage');
//   let qrText = document.getElementById('qrText');

//     function generateQR(){
//   qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

//   imgBox.classList.add("show-img");
//     }

let imgBox = document.querySelector('#imgBox');
let qrText = document.querySelector('#qrText');
let qrImage = document.querySelector('#qrImage');

function generateQR(){
  qrImage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

imgBox.classList.add("show-img");
}
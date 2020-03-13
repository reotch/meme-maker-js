function update_text() {
    let userTextTop = document.getElementById("user_text_top");
    let userTextBottom = document.getElementById("user_text_botttom");
    let memeTextTop = document.getElementById("meme_text_top");
    let memeTextBottom = document.getElementById("meme_text_bottom");
    memeTextTop.innerHTML = userTextTop.value;
    memeTextBottom.innerHTML = userTextBottom.value;
}

function update_image() {
    let img = document.querySelector('img');
    let file = document.querySelector('input[type=file]').files[0];
    img.src = window.URL.createObjectURL(file);
}

// Want to put in a function that will resize and/or add black bars
// function resize_image() {
//     let scaled = document.querySelector('img');

// }
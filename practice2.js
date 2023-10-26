function change_colors() {
    let border_R = document.getElementById("border_R").value;
    let border_G = document.getElementById("border_G").value;
    let border_B = document.getElementById("border_B").value;
    let border_w = document.getElementById("border_w").value;
    let bkgrnd_R = document.getElementById("bkgrnd_R").value;
    let bkgrnd_G = document.getElementById("bkgrnd_G").value;
    let bkgrnd_B = document.getElementById("bkgrnd_B").value;
    let p = document.querySelector("p");
    p.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    p.style.borderWidth = border_w;
    p.style.backgroundColor = `rgb(${bkgrnd_R},${bkgrnd_G},${bkgrnd_B})`;
}
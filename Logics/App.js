



function showInfo() {
    let res = document.getElementById('res');
    res.innerHTML = "Hello My name is Homen nath";
    res.style.color = 'red';
    res.style.fontWeight = "700";
}
function showBack(){
    let res = document.getElementById('res');
    res.style.backgroundColor = "yellow";
}
const bgChanger = () =>{
    let bdy = document.getElementById('body');
    
    let possible = "ABCDEF0123456789";
    let bgColor = "";
    for(let i = 0; i<6; i++) {
        bgColor += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    bdy.style.backgroundColor = "#"+bgColor;
    document.getElementById('colorCode').innerText = "#"+bgColor;
    
}
const copyCode =()=>{
    var text = document.getElementById("colorCode").innerHTML;
    
    navigator.clipboard.writeText(text)
    alert(`Copied ${text}`);

}
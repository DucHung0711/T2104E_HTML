var t = document.getElementById("title");
//t.innerText = "Noi dung gi do";
t.style.color = "red";
t.style.fontSize = "25px";//object.stype.propety
//i.innerHTML = "<i>Noi dung gi do</i>"//nap vao 1 doan ma HTML thong qua JS
var footer = document.getElementById("footer");
var p = [
    {
        image: "Buoi3/img/ao.jpg",
        name: "PRODUCT NAME"
    },
    {
        image: "Buoi3/img/ao.jpg",
        name: "PRODUCT NAME"
    },
    {
        image: "Buoi3/img/ao.jpg",
        name: "PRODUCT NAME"
    },
    {
        image: "Buoi3/img/ao.jpg",
        name: "PRODUCT NAME"
    },
    {
        image: "Buoi3/img/ao.jpg",
        name: "PRODUCT NAME"
    },
    {
        image: "Buoi3/img/ao.jpg",
        name: "PRODUCT NAME"
    },
];//webFontend = building UI + binding data
for(var i=0;i<p.length;i++){
    var ct = "<div class=\"product\">\n" +
        "            <p><img src=\""+p[i].image+"\"></p>\n" +
        "            <h3>"+p[i].name+"</h3>\n" +
        "            <p>Product description In Public Health, as the buyer by Fiotec.</p>\n" +
        "            <h3>$ PRICE</h3>\n" +
        "            <div class=\"detail\"><h3>PRODUCT DETAILS</h3></div>\n" +
        "        </div>";
    footer.innerHTML += ct;
}

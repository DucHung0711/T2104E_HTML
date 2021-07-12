function loadMore (){
    var p = [];//ti na selay  tu
    $.ajax({
        url: "data/todaySpecial.json",
        method:"GET",
        success:function (rs){//callback
            p = rs.data;//chung ta can 1 array
            var row = $("#footer");
            for(var i=0;i<p.length;i++){
                var ct = "<div class=\"product\">\n" +
                    "                <p><img src=\""+p[i].image+"\"></p>\n" +
                    "                <h3>"+p[i].name+"</h3>\n" +
                    "                <p>Product description In Public Health, as the buyer by Fiotec.</p>\n" +
                    "                <h3>"+p[i].price+"</h3>\n" +
                    "                <div class=\"detail\"><h3>PRODUCT DETAILS</h3></div>\n" +
                    "            </div>";
                row.append(ct);// row.html(row.html()+ct)
                //row.prepend(ct);// row.hhtml(ct+row.html())
            }
        }
    });
}
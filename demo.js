//code javascri(js) viet tại day
var x;//khai bao biến
//kiểu du liệu: number,string,array,object
x = 15.14;// x là một number
console.log(x);// in ra các giá trị của x
x = "xin chao";
console.log(x);
x = x + 5;//xin chao 5
console.log(x)
var y = 20;
y = y + 5;//25
console.log(y);
/*
    number + number = number
    number + string = string
    string + string = string
*/
console.log("Xin chao đay la lơp T2014E, so hoc sinh la:"+25+"hoc sinh");
if(y>20){
    console.log("y>20");
}else{
    console.log("y<20");
}
for(var i=0;i<20;i++){
    console.log("i =" +i);//printf
}

var arr = [];//khai bao 1 mang - k giơi han so luong phan tu
arr[0] = 1001;
arr[1] = "xin chao";//khong rang buoc kieu giu lieu
arr[2] = "12";//nguy hiểm --> day la string khong phai number
arr[2]+=15;// 27 -->"1215"
console.log(arr[0]);
console.log(arr[2]);
console.log(arr);
arr[3] = [1,2,3,4];//ko gioi han cac chieu mang (mang 2 chieu)
arr[4] = ["xin chao",1,2,[1,2,3]];//mang 3 chieu ---> cây thư mục

var arr2 = [];
for(var i=0;i<20;i++){
    // arr2[i] = i*i;
    arr2.push(i*i);//thêm 1 phân tử có giá trị i*i vào mảng
}
arr2.push(500);//cho phan tu vào cuối danh sách // sood chỉ mục 20
arr2[22] = 99;//ok
arr2.push(777);//chỉ muc la 23
console.log(arr2);
var c = tinhtong(5,6);
console.log("c = "+ c);
function tinhtong (a,b){// a,b là gì khong biet
    return a+b;
}
function binhphuong (a){
    console.log(a*a);
}
console.log(arr2[21]);
/*
    Ưu điểm: - dễ viết(viết đúng cú pháp), dễ dùng
    Nhược điểm: - muốn hiểu phải là người viết, hay bị treo
 */
//các hàm có sẵn:

//alert("cấm trẻ em 18 tuổi vào trang web");//cảnh báo đến người dùng

// confirm("Bạn chắc chắn nộp bài thi?");

// var kt = confirm("Bn muốn nộp bài thu")
// if(kt){
//     alert("chúc mừng bạn vượt qua kỳ thi")
// }else{
//     alert("Bạn k vuột qua kỳ thi, ngu vcl")
// }

// var s = prompt("Nhập tuổi của bạn vào đây");//hiện ra 1 ô nhập cho ngườ dùng
// console.log(s);
// var t = parseInt(s);//chuyển string --> number//parsefloat
// console.log(t);

/*
    18 --> 18
    18A8 -->  18 : dừng lại khi gặp kí tự
    A18 --> not a number (NAN)
 */

// if(t != NaN && t>18){
//     window.location.href = "https://24h.com.vn";
// }else{
//     alert("vui lòng tiếp tục trang web");
// }

// setTimeout(function (){
//     alert("xin chào");
// },5000);//sau 5s sẽ thực hiện hàm

// var k = 0;
// var si = setInterval(function (){
//     alert("xin chao");
//     k++;
//     if(k>2){
//         clearInterval(si);//loại bỏ setInterval
//     }
// },5000);//cứ sau 5s thực hiền hàm 1 lần

// var count = 5;
// var random = Math.random()*100;// tạo ra một số ngẫu nhiên
// random = parseInt(random);//chuyển về số nguyên
// console.log("lucky: "+random);
// var loto = setInterval(function (){
//     var n = prompt("Nhập con số  may mắn  của bạn: ");
//     n = parseInt(n);
//     if(!isNaN(n)){//ktra xem n có phải NaN không
//         if( random == n){
//             alert("chúc mừng bạn đã trúng 10 tỉ");
//             clearInterval(loto);
//         }else{
//             alert("chúc bạn may mắn lần sau");
//         }
//         count--;
//     }else{
//         alert("Vui lòng nhập lại số");
//     }
//     if(count <= 0){
//         clearInterval(loto);
//     }
// },3000);

var s=0;
var m=2;
var timer = setInterval(function (){
    var m_txt = m>=10?m:"0"+m;//toán tử 3 ngôi
    //var s_txt = s>=10?min:"0"+s;
    //tương đương đoạn sau
    if(s>=10){
        var s_txt = s;
    }else{
        var s_txt = "0"+s;
    }
    console.log(m_txt +":"+ s_txt);
    s--;
    if(s<0){
        m--;
        s=59;
    }
    if(m<0){
        clearInterval(timer);
    }
},100);

//object: là đối tượng, kiểu dữ liệu đặc biệt dành cho việc lưu trữ
var tensinhvien = ["Lý Văn Hóa","Phạm Đức Minh"];
var diemthi = [6,8];

var obj1 = { // khai báo một đối tượng
    name: "Nguyễn Nhật lễ",
    age: 19,
    mark: 9,
    className:{
        nameofClass:"T2014E",
        room:"B8",
    },
    subject:["LBEP","BMGN"],
    run: function (){// phương thức: hành vi của đối tượng
        console.log(this.name +" Running.....");//this.name --> đói tượng ngầm định bên trong chính nó
        //Đối tượng nào đang chạy vò đây thì this đại diện cho đối tượng đó
    },
    chat: function (msg){
        console.log(msg);
    },
}

// obj1 là một biến có giá trị là 1 đối tượng
console.log(obj1.name);//lấy giá trị 1 thuộc tính của đối tượng
console.log(obj1.mark);//lấy giá trị 1 thuộc tính của đối tượng
obj1.mark=10;
console.log(obj1.mark);//lấy giá trị 1 thuộc tính của đối tượng
obj1.chat(msg"hello");

function showInfor(ob){
    console.log(ob.name);
    console.log(ob.age);
    console.log(ob.mark);
    console.log(ob.className.nameofClass);
    console.log(ob.className.room);
    console.log("Danh sách môn học là:");
    for(var i=0;i<ob.subject.length;i++){
        console .log(ob.subject[i]);
    }
}
showInfor(obj1);

//Đối tượng là thứ mang theo giá trị, dữ liệu được gắn theo các thuộc tính
//Hành động là công việc tác động bên ngoài, vào đối tượng
//Trong lập trình các hành vi hay vc làm gọi là phương thức(Phương thức ở đây gọi là các hàm)
obj1.run();// thực thi phương thức
//run();// k tồn tại
obj1.name = "Lê Quang Anh";
obj1.run();
var obj2 = Object.create(obj1);
obj2.name = "Tô Huyền Trang"
obj2.run();
var obj3 = Object.create(obj2);

var humans = [];
for(var i=0;i<10;i++){
    humans.push(Object.create(obj1));
}
/*
    Định nghĩa một dạng object gồm các thông tin gồm: tên, ảnh sp, mô tả, giá, số lượng,danh much (đối tượng)
    và các hành vi:
    - thêm sp vào giỏ hàng(có 1 biến cart và array bên ngoài)
    - xóa sp khỏi giỏ hàng
    - tăng số  lượng sp
    - điều chỉnh giá sp
 */
var product = {
    id:1,// mã sp
    name: "Product",//tên sp
    image: "/images/product.png",//ảnh sp
    description: "Product desciption",//mô tả sp
    price: 0,//giá sp
    qty: 1,//số lượng sp
    category: {//danh muc, cũng là một object
        name: "category",
        image: "/images/category.png"
    }
    //các hành vi
    addToCart: function (){
        //cần cho this vào trong cart
        //nếu sản phẩm đã có trong giỏ hàng thì sao?
        //nếu sp hết hàng thì sao?
        if(this.qty == 0){//het hàng
            console.log("Out of stock")
        }else{
            if(checkCart(this)){//ktra xem sp có trong giỏ hàng chưa
                for(var i=0;i<cart.length;i++){
                    if(cart[i].id == this.id){
                        cart[i].qty++;
                        this.qty--;
                    }
                }
            }else{
                cart.push(this);
                this.qty = this.qty--;
            }
        }
    },
    remoteFromCart: function (){
        if(checkCart(this)) {
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].id == this.id) {
                    this.qty = this.qty + cart[i].qty;
                    cart.splice(i, 1);
                }
            }
        }
    },
    changeStock: function (num){
        this.qty += num;
        this.qty = this.qty>0?this.qty:0;// để không có chuyện số lượng bị âm
    }
    changePrice: function (change){
        this.price += change;
        this.price = this.price>0?this.price:0;//để đảm bảo giá không bị âm
    }
};
function checkCart(p){
    for(var i=0;i<cart.length;i++){
        if(cart[i].id == p.id) return true;
    }
    return false;
}
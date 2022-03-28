function send()
{
    var userName = document.getElementById('fname').value;
    var numberPhone = document.getElementById('numberPhone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('rePassword').value;
    
    var aCong = email.indexOf("@");
    var dot = email.lastIndexOf(".");

    if(userName == "" )
    {
        alert("Bạn chưa nhập UserName");
        return false;
    }
    if(numberPhone == "" )
    {
        alert("Bạn chưa nhập số điện thoại");
        return false;
    }
    if(isNaN(numberPhone) == true)
    {
        alert('Điện thoại phải để định dang số');
        return false;
    }
    if(email == "" )
    {
        alert("Bạn chưa nhập email");
        return false;
    }
    if( aCong < 1 || dot < aCong + 2 || dot + 2 > email.length)
    {
        alert('Bạn nhập email không chính xác');
        return false;
    }
    if(password == "")
    {
        alert("Bạn chưa nhập mật khẩu");
        return false;
       
    }
    if(rePassword == "")
    {
        alert("Bạn chưa nhập lại mật khẩu");
        return false;
    }
    if(rePassword != password)
    {
        alert("Mật khẩu không trùng khớp");
        return false;
    }
    var choice = confirm("Đăng ký thành công");
    if(choice == 1)
    {
        location.href = "../SRC/login.html"
    }
}
function sendLogin()
{
    var userName = document.getElementById('fname').value;
    var password = document.getElementById('password').value;

    if(userName == "" )
    {
        alert("Bạn chưa nhập UserName");
        return;
    }
    else if(password == "" )
    {
        alert("Bạn chưa nhập mật khẩu");
        return;
    }
    confirm("Đăng nhập thành công");
}
var images = [
    "http://127.0.0.1:5500/IMG/ImgMid/bigM.jpg",
    "https://divineshop.vn/image/catalog/Banner/Netflix%20Share.png",
    "https://divineshop.vn/image/catalog/Anh-SP-New/Tien/Anh%20SP/7.7/CSGO-84232.png",
    "https://divineshop.vn/image/catalog/Anh/Banner%2014%20thang%2011/banner%20big.png",
    "https://divineshop.vn/image/catalog/Anh/Banner/ung%20dung%20giai%20tri.png",
    "./IMG/ImgMid/netflix.png"

    ];
    var num = 0;

    function next() {
        var slider = document.getElementById("slider");
        num++;
        if(num >= images.length) {
            num = 0;
        }
        slider.src = images[num];
    }

    function prev() {
        var slider = document.getElementById("slider");
        num--;
        if(num < 0) {
            num = images.length-1;
        }
        slider.src = images[num];
    }
   
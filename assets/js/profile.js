const updateProfile = e => {
    e.preventDefault();

    let //dp = document.getElementById('pp').src || null,
        username = document.getElementById('username').value,
        statement = document.getElementById('statement').value,
        Address = document.getElementById('location').value,
        primoeducation = document.getElementById('primoschool').value,
        seceducation = document.getElementById('secschool').value,
        campuseducation = document.getElementById('muk').value || null,
        hobbies1 = document.getElementById('hob1').value || null,
        hobbies2 = document.getElementById('hob2').value || null,
        hobbies3 = document.getElementById('hob3').value || null,
        hobbies4 = document.getElementById('hob4').value || null,
        hobbies5 = document.getElementById('hob5').value || null;
    any = document.getElementById('aob').value || null;


    //Setting profile attributes as user enters details
    document.getElementById("displayusername").innerHTML = username;
    document.getElementById("displaystatement").innerHTML = statement;
    document.getElementById("address").innerHTML = Address;
    document.getElementById("primo").innerHTML = primoeducation;
    document.getElementById("high").innerHTML = seceducation;
    document.getElementById("campus").innerHTML = campuseducation;
    document.getElementById("hobb1").innerHTML = hobbies1;
    document.getElementById("hobb2").innerHTML = hobbies2;
    document.getElementById("hobb3").innerHTML = hobbies3;
    document.getElementById("hobb4").innerHTML = hobbies4;
    document.getElementById("hobb5").innerHTML = hobbies5;



    //Storage of the data
    let user = {
        //img: dp,
        name: username,
        personalStatement: statement,
        primary: primoeducation,
        high: seceducation,
        campus: campuseducation,
        hobbie1: hobbies1,
        hobbie2: hobbies2,
        hobbie3: hobbies3,
        hobbie4: hobbies4,
        hobbie5: hobbies5,
        aob: any
    }

    if (JSON.parse(sessionStorage.getItem("users")) != null) {
        var users = JSON.parse(sessionStorage.getItem("users"));
        users.push(user);
        sessionStorage.setItem("users", JSON.stringify(users));
    } else {
        users = [];
        users.push(user);
        sessionStorage.setItem("users", JSON.stringify(users));
    }
    //sessionStorage.setItem("currentUser", username.value);
    sessionStorage.setItem("currentUserDetails", JSON.stringify(user));


    //Picking data from the session storage to show in all users section
    function retrievingUserData() {
        var userdata = [];
        for (let i = 0; i < sessionStorage.length; i++) {
            let storedUser = JSON.parse(sessionStorage.getItem("users"));
            storedUser.push(userdata);
            console.log(userdata);
        }
    }

    function RetrieveDataFromCart() {

        var elements = [];

        for (let i = 0; i < sessionStorage.length; i++) {
            var element = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
            elements.push(element);
            console.log(element.name);
        }

    }
    RetrieveDataFromCart();
    //retrievingUserData();
    location.href = "#profileSection"
    e.preventDefault();
}






function previewImage() {
    var profilepic = document.getElementById('displaypic');
    var mainpic = document.getElementById('pico');
    var actualPic = document.getElementById('pp').files;
    var reader = new FileReader();
    if (actualPic.length > 0) {

        reader.onload = function(e) {
            profilepic.setAttribute("src", e.target.result);
            mainpic.setAttribute("src", e.target.result);
        };


    } else {
        //var reader=new FileReader();
        //reader.onload = function(e) {
        profilepic.setAttribute("src", "assets/img/profile-img.png");
        mainpic.setAttribute("src", "assets/img/profile-img.png")
            //}
    }
    reader.readAsDataURL(actualPic[0]);
}
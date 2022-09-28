const updateProfile = e => {
    e.preventDefault();

    let //dp = document.getElementById('pp').src || null,
        username = document.getElementById('username').value,
        statement = document.getElementById('statement').value,
        primoeducation = document.getElementById('primoschool').value,
        seceducation = document.getElementById('secschool').value,
        campuseducation = document.getElementById('muk').value || null,
        hobbies1 = document.getElementById('hob1').value || null,
        hobbies2 = document.getElementById('hob2').value || null,
        hobbies3 = document.getElementById('hob3').value || null,
        hobbies4 = document.getElementById('hob4').value || null,
        hobbies5 = document.getElementById('hob5').value || null;
    any = document.getElementById('aob').value || null;


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
        sessionStorage.seItem("users", JSON.stringify(users));
    } else {
        users = [];
        users.push(user);
        sessionStorage.setItem("users", JSON.stringify(users));
    }
    sessionStorage.setItem("currentUser", username.value);
    sessionStorage.setItem("currentUserDetails", JSON.stringify(user));
    //console.log(JSON.parse(sessionStorage.getItem("users[1]")))
    e.preventDefault();
}






function previewImage() {
    var profilepic = document.getElementById('profile');
    var actualPic = document.getElementById('pp').files;
    var reader = new FileReader();
    if (actualPic.length > 0) {

        reader.onload = function(e) {
            profilepic.setAttribute("src", e.target.result);
        };


    } else {
        //var reader=new FileReader();
        //reader.onload = function(e) {
        profilepic.setAttribute("src", "avatar.png");
        //}
    }
    reader.readAsDataURL(actualPic[0]);
}
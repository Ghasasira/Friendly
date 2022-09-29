class User{
    constructor(username,statement,schools,hobbies){
        this.username = username;
        this.statement = statement;
        this.schools = schools;
        this.hobbies = hobbies;
    }
}
let usersHolder = document.getElementById('usersHolder');
let usr1 = new User('Brian Kitwe','Hold your head up high',['MIT Primary','MIT High','Makerere'],['Swimming','Eating']);
let usr2 = new User('Gasasira Swazznigga','Bulletproof homie',['Blacks Elementary','Bleach High','Makerere'],['Ruckus','TikTok']);
let usr3 = new User('Murife Sean','Chase your dreams.',['Nairobi Preparatory','Dubai Dunes Secondary','Makerere'],['TikTok','100m Relays']);
let usr4 = new User('Nannyindo Patricia','Ya am de one who can smell fear',['Python Academy','Ghostbusters Association','Makerere'],['git','Python Coding']);
let usr5 = new User('Dwayne Johnson','It\'s about drive, it\'s about power.',['Hart Elementary','Hollywood High','Action University'],['Laughing','Wrestling']);
let userlist = [usr1,usr2,usr3,usr4,usr5];

document.addEventListener("load",displayList());

function displayList() {
    userlist.forEach(person => {
        let user = document.createElement("div");
        user.className = "col-lg-4 col-md-6 col-sm-12 portfolio-item filter-card";
        let div2 = document.createElement("div");
        div2.className = "portfolio-wrap";
        let div3 = document.createElement("div");

        let head = document.createElement("h5");
        let statement = document.createElement("p");
        statement.appendChild(document.createTextNode("Statement: "));
        let schools = document.createElement("p");
        schools.appendChild(document.createTextNode("Went to: "));
        let hobbies = document.createElement("p");
        hobbies.appendChild(document.createTextNode("Hobbies: "));

        let headtext = document.createElement("span");
        headtext.className = "username";
        let headnode = document.createTextNode(person.username);
        headtext.appendChild(headnode);

        let statementtext = document.createElement("span");
        statementtext.className = "span";
        let statementnode = document.createTextNode(person.statement);
        statementtext.appendChild(statementnode);

        let schooltext = document.createElement("span");
        schooltext.className = "span";
        let schoolnode = document.createTextNode(person.schools[0]+", "+person.schools[1]+", "+person.schools[2]);
        schooltext.appendChild(schoolnode);

        let hobbytext = document.createElement("span");
        hobbytext.className = "span";
        let hobbynode = document.createTextNode("Hobbies: "+person.hobbies[0]+", "+person.hobbies[1]);
        hobbytext.appendChild(hobbynode);

        head.appendChild(headtext);
        statement.appendChild(statementtext);
        schools.appendChild(schooltext);
        hobbies.appendChild(hobbytext);

        div3.append(head,statement,schools,hobbies);

        div2.appendChild(div3);
        user.appendChild(div2);
        usersHolder.append(user);
    });   
}
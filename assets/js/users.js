class User{
    constructor(username,statement,schools,hobbies){
        this.username = username;
        this.statement = statement;
        this.schools = schools;
        this.hobbies = hobbies;
    }
}

let usr1 = new User('Kitwe','Hold your head up high',['Kitante Hill','Mbogo High','Kyambogo'],['Swimming','Eating']);
console.log(usr1);
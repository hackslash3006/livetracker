// const userControl = {
//     addDetails(newUser) {
//         var date = new Date();
//         var time = date.getTime();
//         var time2 = time;
//         var pro = new Promise((resolve,reject)=> {
//             firebase.database().ref('registeredUsers/'+newUser.mobReg).set(newUser,done);
//             resolve(console.log("job done"));            
//         })

//         function done() {
//             setCookie(newUser.name);
//             var userRef = firebase.database().ref('registeredUsers/'+newUser.mobReg);
//             userRef.on('value',(snapshot) => {
//                 var object = snapshot.val();
//                 console.log("Object is ",object);firebase.database().ref('userAcc/'+newUser.name+time2);
//                 for(let key in object) {
//                     //console.log(object[key]);
//                     var obj = object[key];
//                     for(let k in obj) {
//                         console.log(obj[k]);
//                     }
//                 }
//             })
            
//             // console.log(adminRef.name);
//             console.log("Inside resolve");
//             window.location = "index.html";
//             // window.location = "./../../admin.html";
//         }
//     },
//     checkUser(user) {
//         console.log("user object is",user);
//         console.log("Login data - user name- ",user.email)
//         var userRef = firebase.database().ref('userAcc/');
//         userRef.on('value',(snapshot)=> {
//             console.log("snapshot is",snapshot);
//             var object = snapshot.val();
//             console.log("Object is ",object);
//             for(let key in object) {
//                 // if (key.email === user.email) {
//                 //     if (key.pass === user.pass) {
//                 //         console.log("User Found!");
//                 //     }
//                 //     else  {}
//                 // }
//                 console.log(key);
//                 var obj = object[key];
//                 console.log(obj.email);

//                 if(user.email == obj.email) {
//                     if(user.pass == obj.pass) {
//                         console.log("Login Successful! as user");
//                         localStorage.username = obj.name;
//                         userWelcome(obj.name);
                        
//                     }
//                 }
//             }
//         })
//     }
// }
const userControl = {
    checkUser(userCredentials) {
        console.log("user object is",userCredentials);
        console.log("Login data - mob no - ",userCredentials.loginMob)
        var userRef = firebase.database().ref('registeredUsers/');
        userRef.on('value',(snapshot)=> {
            console.log("snapshot is",snapshot);
            var object = snapshot.val();
            console.log("Object is ",object);
            for(let key in object) {
                // if (key.email === user.email) {
                //     if (key.pass === user.pass) {
                //         console.log("User Found!");
                //     }
                //     else  {}
                // }
                console.log(key);
                var obj = object[key];
                console.log(obj.email);

                if(userCredentials.loginMob == obj.mobReg) {
                    if(userCredentials.loginPass == obj.passReg) {
                        console.log("Login Successful! as user");
                        localStorage.username = obj.firstName;
                        localStorage.mobReg = obj.mobReg;
                        liveLocation(obj);
                    }
                }
                else {
                    localStorage.username = null;
                }
                window.location = "userMenu.html";
            }
        })
    }
}
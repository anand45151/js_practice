const promiseOne = new Promise(function (resolve, reject) {


    setTimeout(function () {
        console.log("Task is completed A")
        resolve();
    }, 1000);

});

promiseOne.then(function () {
    console.log("Task is completed ")

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Task is completed B")
        resolve();

    }, 2000);

}).then(function () {
    console.log("New Task is completed ")

})

const promise3 = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Task is completed C")
        resolve({username :"ANAND" , email :"anand23@gmail.com"})
    } , 1000)
})

promise3.then(function(user){   

    console.log(user.username)
    console.log(user.email)


 })


 const promise4 = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Task from Promise 4 is started Now ")
        resolve({username : "SHnia" , email :"shn@3@gmailcom"})
    },2000)
 })

 promise4.then(function(userObj){

    console.log(userObj.username)
    console.log(userObj.email)

 })



 const promise5 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){

            resolve({username : "Akrit" , email:"akriti23@gmail.com"}

            )
            console.log("")
        } 
        else{
            reject("Error Occured")

        }
        console.log("Task from Promise 5 is started Now ")

    })
 })

const username =  promise5.then((userObje2) =>{

        console.log(userObje2);
        return userObje2.username


 }) .then((username)=>{

    console.log(username)
 }).catch(function(error){
    console.log(error)
 })
 .finally(()=>{
    
    console.log("Finally Block is executed ")

 })

const promise6 = new Promise(function(resolve,reject){
    setTimeout(function(){

        let error = false;
        if(!error){

            resolve({username : "JavaScript" , email:"akriti23@gmail.com"}

            )
        } 
        else{
            reject("Error Occured")

        }
        console.log("Task from Promise 5 is started Now ")

        console.log("Now the Task is 6")

    })
})

async function consumePromise6(){

    const response = await promise6
    console.log(response)

}

consumePromise6()

// promise6.then(function(){}) 

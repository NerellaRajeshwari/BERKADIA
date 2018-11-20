//example for promises

let clean=function()
{
    return new Promise(function(resolve,reject)
    {
        resolve("cleaned the room ");
    });
};

let remove=function(msg)
{
    return new Promise(function(resolve,reject)
    {
        resolve(msg +"remove garbage ");
    });
};
let chocolate=function(msg)
{
    return new Promise(function(resolve,reject)
    {
        resolve(msg +"chocolate treat ");
    });
};
clean().then(function(result)
{
    return remove(result);
}).then(function(result)
{
    return chocolate(result);
}).then(function(result)
{
    console.log(result+" all functions completed");
})


output:

PS C:\Users\Rajeshwary\Desktop\my-dream-app\e2e> node merge.js
cleaned the room remove garbage chocolate treat  all functions completed

//to complete all functions we use "all"
Promise.all([clean(),remove(),chocolate()]).then(function()
{
    console.log(" all finished")
});
//to complete only one function we use "race"
Promise.race([clean(),remove(),chocolate()]).then(function()
{
    console.log(" all finished")
});

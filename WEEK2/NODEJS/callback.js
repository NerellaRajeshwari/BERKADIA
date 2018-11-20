//callback
console.log("user1 made a request");
    setTimeout(callback,5000);
    console.log("user2 made a request");
    setTimeout(callback,5000);
    console.log("user3 made a request");
    setTimeout(callback,5000);

    function callback()
    {
        console.log("users request fullfilled");
    }

OUTPUT:

PS C:\Users\Rajeshwary\Desktop\my-dream-app\e2e> node merge.js
user1 made a request
user2 made a request
user3 made a request
users request fullfilled
users request fullfilled
users request fullfilled

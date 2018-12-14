//heads and tails program for odd and even using microservice

function randomNum(precision){
    return Math.floor(Math.random() * precision);
}

module.exports = (req,res)=>{
    //odd = heads , even = tails
    const coin = (randomNum (100) % 2) ? 'heads' : 'tails';
 return {
     data : coin 
 };

}

OUTPUT:

//in command prompt we have following output
C:\Users\Rajeshwary\Desktop\microex>npm start

> microex@1.0.0 start C:\Users\Rajeshwary\Desktop\microex
> micro

micro: Accepting connections on port 3000

//in localhost we have following output
{
"data":"heads"
}

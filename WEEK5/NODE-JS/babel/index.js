
import { add } from "./add"
console.log(add(1,2))

const emp = {
    name: 'rajee',
    age: 22,
    gender:'female'
}

const address = {
    street:'khairatbad',
    city:'hyderabad',
    country:'india'
}

const empWithAddress = {
    ...emp,
    ...address
}

console.log(empWithAddress)



OUTPUT:

C:\Users\Rajeshwary\Desktop\babeljs>npm start

> babeljs@1.0.0 start C:\Users\Rajeshwary\Desktop\babeljs
> babel-node index.js

3
{ name: 'rajee',
  age: 22,
  gender: 'female',
  street: 'khairatbad',
  city: 'hyderabad',
  country: 'india' }


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

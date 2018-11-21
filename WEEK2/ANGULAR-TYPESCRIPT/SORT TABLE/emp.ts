import {Data} from './datatable';


var employee:Data[]=[
{ename:'ram',eid:2,salary:10000,dept:"A1"},
{ename:'sita',eid:5,salary:20000,dept:"A2"},
{ename:'lucky',eid:3,salary:30000,dept:"A3"},
{ename:'bharath',eid:1,salary:30000,dept:"A3"},
{ename:'rani',eid:4,salary:20000,dept:"A2"},
{ename:'vani',eid:6,salary:10000,dept:"A1"}];


console.log("BEFORE SORTING THE EMPLOYEES");
console.table(employee);

console.log("AFTER SORTING THE EMPLOYEES BASED ON EID");
employee.sort(function(a,b)
{ 
  return a.eid-b.eid
});
console.table(employee);

output:
//in this program im displaying the output in command prompt

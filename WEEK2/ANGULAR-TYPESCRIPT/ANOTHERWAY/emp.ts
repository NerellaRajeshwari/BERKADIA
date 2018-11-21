//in this program we are using concole.table to show the table

import {Data} from './datatable';

var employee:Data[] =[  {eid:101,ename:"Ram",salary:10000,dept:"A1"},
                        {eid:102,ename:"Sita",salary:20000,dept:"A2"},
                        {eid:103,ename:"Lucky",salary:30000,dept:"A3"}, 
                        {eid:104,ename:"Bharath",salary:20000,dept:"A2"}, 
                        {eid:105,ename:"Kush",salary:30000,dept:"A3"}, 
                        {eid:106,ename:"Rani",salary:10000,dept:"A1"},
                        {eid:107,ename:"Siva",salary:20000,dept:"A2"},
                        {eid:108,ename:"Vani",salary:30000,dept:"A3"}, 
                    ];

console.table(employee);

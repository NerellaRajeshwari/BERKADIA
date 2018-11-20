import {Data} from './datatable';

class Display{
    table: HTMLTableElement = <HTMLTableElement> document.getElementById("main");
    tbody: HTMLTableElement = <HTMLTableElement> document.getElementById("tab");
    create(data:Array<Data>){
        var thead:string[]=["Eid","Ename","Salary","Dept"];
        var tr = document.createElement('TR');
        this.tbody.appendChild(tr);
        for (var head of thead) {
            var th = document.createElement('TH')
            th.appendChild(document.createTextNode(head));
            tr.appendChild(th);
        }
        for (var pupil of data) {
            var tr = document.createElement('TR');
            
                let td1 = document.createElement('TD');
                let td2 = document.createElement('TD');
                let td3 = document.createElement('TD');
                let td4 = document.createElement('TD');
                td1.appendChild(document.createTextNode(pupil.eid.toString()));
                td2.appendChild(document.createTextNode(pupil.ename.toString()));
                td3.appendChild(document.createTextNode(pupil.salary.toString()));
                td4.appendChild(document.createTextNode(pupil.dept.toString()));
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
          
            this.tbody.appendChild(tr);
        }
        this.table.appendChild(this.tbody);
    }
}
var employee:Data[] =[  {eid:101,ename:"Ram",salary:10000,dept:"A1"},
                        {eid:102,ename:"Sita",salary:20000,dept:"A2"},
                        {eid:103,ename:"Lucky",salary:30000,dept:"A3"}, 
                        {eid:104,ename:"Bharath",salary:20000,dept:"A2"}, 
                        {eid:105,ename:"Kush",salary:30000,dept:"A3"}, 
                        {eid:106,ename:"Rani",salary:10000,dept:"A1"},
                        {eid:107,ename:"Siva",salary:20000,dept:"A2"},
                        {eid:108,ename:"Vani",salary:30000,dept:"A3"}, 
                    ];

var dis = new Display();
dis.create(employee);

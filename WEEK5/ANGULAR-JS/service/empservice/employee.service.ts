import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1, "name":"rajee1", "age":21},
      {"id":2, "name":"rajee2", "age":22},
      {"id":3, "name":"rajee3", "age":23},
      {"id":4, "name":"rajee4", "age":24},
       {"id":5, "name":"rajee5", "age":25},
       {"id":6, "name":"rajee6", "age":26},
       {"id":7, "name":"rajee7", "age":27},
    ];
  }
}

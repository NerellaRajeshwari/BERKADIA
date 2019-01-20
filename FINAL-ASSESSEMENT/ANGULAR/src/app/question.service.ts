import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

 
  constructor(private http: HttpClient) { }
  
  getQuestions() {
    return this.http.get('http://api.myjson.com/bins/gij7c');
  }

}

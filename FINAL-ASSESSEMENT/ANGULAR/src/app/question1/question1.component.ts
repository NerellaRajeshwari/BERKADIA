import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';
@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

constructor(private service: QuestionService) { }

questions: any[];
correctAnswers:number;
wrongAnswers:number;
qlength: number;
responses: any[] = [];
answers: any[] = [];
tempAns: any[] = [];
viewMode = 'exam';
percentage: number;
current = 0;

ngOnInit() {
  this.service.getQuestions().subscribe(result => {
   
    this.questions = this.shuffleRandomly(result['results']);
   
    this.questions.forEach(q => {
      
      q.answers = this.shuffleRandomly([q.correct_answer].concat(q.incorrect_answers));
    })
    this.qlength = this.questions.length;
  });
}


markAnswer(id: number, ans: string) {
  if (this.tempAns.findIndex(ans => ans.id === id) === -1) {
    this.tempAns.push({
      id: id,
      answer: ans
    })
  }
  else {
    this.tempAns.find(ans => ans.id === id).answer = ans;
  }
  console.log(this.tempAns)
}


answerSubmission(id: number) {
  if ((this.responses.findIndex(ans => ans.id === this.tempAns.find(ans => ans.id === id).id)) === -1) {
    if (this.questions[this.tempAns.find(ans => ans.id === id).id].correct_answer === this.tempAns.find(ans => ans.id === id).answer) {
      this.responses.push({
        id: id,
        answer: this.tempAns.find(ans => ans.id === id).answer,
        res: true
      })
    }
    else {
      this.responses.push({
        id: id,
        answer: this.tempAns.find(ans => ans.id === id).answer,
        res: false
      })
    }
    console.log(this.responses)
  }
  else {
    if (this.questions[this.tempAns.find(ans => ans.id === id).id].correct_answer === this.tempAns.find(ans => ans.id === id).answer) {
      this.responses.find(ans => ans.id === this.tempAns.find(ans => ans.id === id).id).answer = this.tempAns.find(ans => ans.id === id).answer;
      this.responses.find(ans => ans.id === this.tempAns.find(ans => ans.id === id).id).res = true;
    }
    else {
      this.responses.find(ans => ans.id === this.tempAns.find(ans => ans.id === id).id).ans = this.tempAns.find(ans => ans.id === id).answer;
      this.responses.find(ans => ans.id === this.tempAns.find(ans => ans.id === id).id).res = false;
    }
    console.log(this.responses)
  }
}

checkSubmit(id: number) {
  if (this.tempAns.findIndex(ans => ans.id === id) === -1) {
    return false;
  }
  return true;
}


endExam() {
  this.answerSubmission(this.current);
  const correct = this.responses.filter(ans => ans.res === true).length;
  this.percentage = (correct / this.responses.length) * 100;
  this.correctAnswers=correct;
  this.wrongAnswers=50-correct;
  this.viewMode = 'summary';
}


getResponse(id: number) {
  return this.responses.find(ans => ans.id === id);
}


shuffleRandomly(array: any[]) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  
  while (0 !== currentIndex) {
    
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

  
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

isPrev() {
  if(this.current > 0) {
    return true;
  }
  return false;
}

isNext() {
  if(this.current == this.qlength - 1) {
    return false;
  }
  return true;
}
getQuestion() {
  return this.questions[this.current];
}


nextQuestion() {
  this.answerSubmission(this.current);
  this.current += 1;
  console.log(this.qlength, this.current)
}


previousQuestion() {
  this.current -= 1;
}

}

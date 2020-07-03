import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
message = '';
employees = ['Farhan Ahmed'];

myFunction() {
  this.message = 'You have double clicked';
}
  constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    this.message = 'Welcome to agular programming...';
  }
addEmployee(newEmployee: string) {
  if (newEmployee) {
    this.employees.push(newEmployee);
  }

}


}

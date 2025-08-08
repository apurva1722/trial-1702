
import{ Component, signal}from '@angular/core';
import{CurrencyPipe, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, NgFor} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GreetingsPipe } from './pipes/greetings-pipe';
import { GendergreetingPipe } from './pipes/gendergreeting-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor, UpperCasePipe, LowerCasePipe, CurrencyPipe, DatePipe, JsonPipe, GreetingsPipe, GendergreetingPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipes_demo');

  firstName = 'Apurva';
  lastName = 'Alhat';
  salary = 1000;

  product = {pId:101, pName: 'Laptop', price: 58000, pisinStock: true};
  orderData = new Date();

  employeeList = [
  {
    empNo: 101,
    empName: "Alice Johnson",
    empDesignation: "Software Engineer",
    empGender: "Female",
    empSal: 85000,
    empIsPermanent: true
  },
  {
    empNo: 102,
    empName: "Rajesh Kumar",
    empDesignation: "QA Analyst",
    empGender: "Male",
    empSal: 62000,
    empIsPermanent: false
  },
  {
    empNo: 103,
    empName: "Jamie Lee",
    empDesignation: "Product Manager",
    empGender: "Other",
    empSal: 95000,
    empIsPermanent: true
  },
  {
    empNo: 104,
    empName: "Maria Gomez",
    empDesignation: "UI/UX Designer",
    empGender: "Female",
    empSal: 72000,
    empIsPermanent: true
  },
  {
    empNo: 105,
    empName: "Daniel Wu",
    empDesignation: "DevOps Engineer",
    empGender: "Male",
    empSal: 80000,
    empIsPermanent: false
  },
  {
    empNo: 106,
    empName: "Chloe Smith",
    empDesignation: "Business Analyst",
    empGender: "Female",
    empSal: 69000,
    empIsPermanent: true
  },
  {
    empNo: 107,
    empName: "Mohammed Al-Farouq",
    empDesignation: "Security Specialist",
    empGender: "Male",
    empSal: 77000,
    empIsPermanent: true
  },
  {
    empNo: 108,
    empName: "Tobias Reed",
    empDesignation: "Database Administrator",
    empGender: "Male",
    empSal: 81000,
    empIsPermanent: false
  },
  {
    empNo: 109,
    empName: "Mei-Ling Chen",
    empDesignation: "Cloud Architect",
    empGender: "Female",
    empSal: 96000,
    empIsPermanent: true
  },
  {
    empNo: 110,
    empName: "Sam Rivera",
    empDesignation: "Frontend Developer",
    empGender: "Other",
    empSal: 73000,
    empIsPermanent: false
  }
];

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-former-employer',
  templateUrl: './former-employer.component.html',
  styleUrls: ['./former-employer.component.scss']
})
export class FormerEmployerComponent implements OnInit {

  constructor() {
      this.startYear = this.FormerEmployerGroup.get('startYear');
      this.stopYear = this.FormerEmployerGroup.get('stopYear');
      this.employer = this.FormerEmployerGroup.get('employer');
   }

  ngOnInit() { }

  FormerEmployerGroup = new FormGroup({
      employer: new FormControl('', [Validators.required]),
      startYear: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern("^[0-9]*$"), Validators.min(2010), Validators.max(2035)]),
      stopYear: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern("^[0-9]*$"), Validators.min(2010), Validators.max(2035)]),
      jobDescription: new FormControl(''),
  })

  startYear: AbstractControl;
  stopYear: AbstractControl;
  employer: AbstractControl;

}

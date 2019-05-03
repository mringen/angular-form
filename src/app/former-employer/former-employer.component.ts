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
      startYear: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("^[0-9]*$"), Validators.min(1990), Validators.max(2019)]),
      stopYear: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4), //Validators.pattern("^[0-9]*$"),
      this.ageRangeValidator]),
      jobDescription: new FormControl(''),
  })

  startYear: AbstractControl;
  stopYear: AbstractControl;
  employer: AbstractControl;


    ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
        let value = +control.value;
        console.log('ageRangeValidator', typeof control.value);
        if (value !== undefined && (isNaN(value) || value < 1990 || value > 2020)) {
            console.log('ageRangeValidator 2')
            return { 'ageRangeValidator': true };
        }
        return null;
    }

}

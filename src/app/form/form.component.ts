import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    constructor() {
        this.firstName = this.profileFormGroup.get('firstName');
        this.surname = this.profileFormGroup.get('surname');
        this.socialsecurityNumber = this.profileFormGroup.get('socialsecurityNumber');
        this.address = this.profileFormGroup.get('addressGroup').get('address');
        this.zipCode = this.profileFormGroup.get('addressGroup').get('zipCode');
        this.street = this.profileFormGroup.get('addressGroup').get('street');
    }

    ngOnInit() { }

    profileFormGroup = new FormGroup ({
        firstName: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        socialsecurityNumber: new FormControl('', [Validators.required]),
        addressGroup: new FormGroup({
            address: new FormControl('', [Validators.required]),
            zipCode: new FormControl('', [Validators.required]),
            street: new FormControl('', [Validators.required]),
        })
    });

    firstName: FormControl;
    surname: AbstractControl;
    socialsecurityNumber: AbstractControl;

    address: AbstractControl;
    zipCode: AbstractControl;
    Street: AbstractControl;

    checkButton() {
      console.log('button valid working')
    }
}

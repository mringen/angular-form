import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

interface Qualification {
    language: string;
    rating: number;
    isMarked: boolean;
}

@Component({
    selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    employersList: number[] = [1];
    numberOfEmployers: number = 1;
    markedRating: boolean;

    addNewEmployer() {
        this.numberOfEmployers = this.numberOfEmployers +=1;
        this.employersList.push(this.numberOfEmployers);
    }
    listOfQualification: Qualification[] = [
        {language: 'JavaScript', rating: 0, isMarked: false},
        {language: 'HTML5', rating: 4, isMarked: false },
        {language: 'Angular', rating: 5, isMarked: true},
        {language: 'React', rating: 0, isMarked: false},
        {language: 'Vue', rating: 0, isMarked: false}
    ];

    ratingValue: number[] = [1, 2, 3, 4, 5];

    showQualification(language: string, rating: number) {
        for(let i in this.listOfQualification) {

            if(this.listOfQualification[i].language == language) {
                this.listOfQualification[i].rating = rating
                break;
            }
        }
    }

    markedUserRating(objRating: number, userRating: number) {
            if(objRating == userRating) {
                return true;
            } else {
                return false;
            }
    }

    constructor() {
        this.firstName = this.profileFormGroup.get('firstName');
        this.surname = this.profileFormGroup.get('surname');
        this.address = this.profileFormGroup.get('addressGroup').get('address');
        this.zipCode = this.profileFormGroup.get('addressGroup').get('zipCode');
        this.description = this.profileFormGroup.get('description');
        this.education = this.profileFormGroup.get('education');
        this.graduationYear = this.profileFormGroup.get('graduationYear');
        this.qualification = this.profileFormGroup.get('qualification');
    }

    ngOnInit() { }

    profileFormGroup = new FormGroup ({
        firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
        addressGroup: new FormGroup({
            address: new FormControl('', [Validators.required, Validators.minLength(2)]),
            zipCode: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4)]),
        }),
        description: new FormControl('', [Validators.required, Validators.minLength(20)]),
        education: new FormControl('', [Validators.required]),
        graduationYear: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4)]),
        qualification: new FormControl(''),
    });

    firstName: AbstractControl;
    surname: AbstractControl;
    address: AbstractControl;
    zipCode: AbstractControl;
    description: AbstractControl;
    education: AbstractControl;
    graduationYear: AbstractControl;
    qualification:AbstractControl;

    checkButton() {
      console.log('button valid working')
    }
}





//

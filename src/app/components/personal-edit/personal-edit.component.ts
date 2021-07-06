import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personal } from 'src/app/interfaces/personal';
import { Types } from 'src/app/interfaces/type';
import { HttpPersonalService } from 'src/app/services/http-personal.service';

@Component({
  selector: 'app-personal-edit',
  templateUrl: './personal-edit.component.html',
  styleUrls: ['./personal-edit.component.css']
})
export class PersonalEditComponent implements OnInit {

  constructor(private HttpPersonalService: HttpPersonalService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute) { }
    personals!: Personal[];
    types!: Types[];
    personalForm!: FormGroup;
    id?: number | null = null;
    personal!: Personal;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
    this.id = params.id ? +params.id : null;     
    })   
   this.getPersonals();
  this.getTypes();  
  }
  async getPersonals(){
    const controls = {
      name: [null, [Validators.required, Validators.maxLength(100)]],
      surname: [null, [Validators.required, Validators.maxLength(100)]],
      patronymic: [null, [Validators.maxLength(100)]],
      type: [null, [Validators.required, Validators.maxLength(100)]]
    }
    this.personalForm = this.fb.group(controls);
    if (this.id) {
      try {
        this.personals = await this.HttpPersonalService.getPersonal(this.id)
        this.personalForm.patchValue(this.personals)
      } catch (error) {
      console.log(error)
      }
      
    }
  }
  async getTypes(){
    this.types = await this.HttpPersonalService.getTypes();
  }
  getTypeName(id: number) {
    let type = this.types?.find(x => x.id == id);
    return (type?.name);
  } 
async onAddPersonal(){
  if (this.id) {
    this.personalForm.controls['type'].value;
    this.personalForm.controls['surname'].value;
    this.personalForm.controls['name'].value;
    this.personalForm.controls['patronymic'].value;
    const personals = this.personalForm.value;
    const checkvalid = await this.HttpPersonalService.getPersonal(this.id)
    if (checkvalid.name == personals.name && checkvalid.surname == personals.surname && checkvalid.type == personals.type && checkvalid.patronymic == personals.patronymic) {
      
      this.router.navigate(['/personal-list']);
    }
    else {
      try {
        await this.HttpPersonalService.updatePersonal(this.id, personals)
        this.router.navigate(['/personal-list']);
      } catch (error) {

      }
    }
  }
  else {
    this.personalForm.controls['type'].value;
    this.personalForm.controls['surname'].value;
    this.personalForm.controls['name'].value;
    this.personalForm.controls['patronymic'].value;

    this.personals = this.personalForm.value;
    this.personalForm.patchValue(this.personals);
    try {
      await this.HttpPersonalService.postPersonal(this.personalForm.value);
      this.router.navigate(['/personal-list']);
    } catch (err) {
      console.log(err);
    }
  }
}
async onDeletePersonal(){
  if (this.id)
  try {
    await this.HttpPersonalService.deletePersonal(this.id)
    this.router.navigate(['/personal-list']);
  } catch (error) {

  }
this.router.navigate(['/personal-list'])
}
}



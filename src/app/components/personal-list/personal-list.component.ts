import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Personal } from 'src/app/interfaces/personal';
import { Types } from 'src/app/interfaces/type';
import { HttpPersonalService } from 'src/app/services/http-personal.service';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.css']
})
export class PersonalListComponent implements OnInit {

  constructor(private HttpPersonalService: HttpPersonalService, private fb: FormBuilder, private router: Router) { }
  personals!: Personal[];
  types!: Types[];
  personalForm!: FormGroup;
  ngOnInit(): void {
    const controls = {
      name: [null, [Validators.required], [Validators.maxLength(100)]],
      surname: [null, [Validators.required], [Validators.maxLength(100)]],
      patronymic: [null, [Validators.maxLength(100)]],
      type: [null, [Validators.required], [Validators.maxLength(100)]]
    }

    this.personalForm = this.fb.group(controls);
    this.getPersonals();
    this.getTypes(); 

  }async getPersonals(){
    this.personals = await this.HttpPersonalService.getPersonals();
  }
  async getTypes(){
    this.types = await this.HttpPersonalService.getTypes();
  }
  getTypeName(id: number) {
    let type = this.types?.find(x => x.id == id);
    return (type?.name);
  }  
  linkToItem(id?:number){
    if(id){
      this.router.navigate(["personal-edit", id]);
    } else{
      this.router.navigate(["personal-edit"]);
    }
  }
}

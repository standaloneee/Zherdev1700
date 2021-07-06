import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Types } from 'src/app/interfaces/type';
import { HttpPersonalService } from 'src/app/services/http-personal.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  constructor(private HttpPersonalService: HttpPersonalService,private fb: FormBuilder, private router: Router) { }
  types!: Types[];
  typesForm!: FormGroup;
  ngOnInit(): void {
    const controls = {
      name: [null, [Validators.required]]
    }
    this.typesForm = this.fb.group(controls);
    this.getTypes();
  }
  async getTypes(){
    this.types = await this.HttpPersonalService.getTypes();
  }
  linkToItem(id?:number){
    if(id){
      this.router.navigate(["type-edit", id]);
    } else{
      this.router.navigate(["type-edit"]);
    }
  }
}

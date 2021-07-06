import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Types } from 'src/app/interfaces/type';
import { HttpPersonalService } from 'src/app/services/http-personal.service';

@Component({
  selector: 'app-type-edit',
  templateUrl: './type-edit.component.html',
  styleUrls: ['./type-edit.component.css']
})
export class TypeEditComponent implements OnInit {
  types!: Types[];
  typesForm!: FormGroup;
  id?: number | null = null;
  
  constructor(private HttpPersonalService: HttpPersonalService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const controls = {
      name: [null, [Validators.required]]
    }
    this.typesForm = this.fb.group(controls);
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id ? +params.id : null;
      this.getTypes();
    })
  }
  async getTypes() {

    if (this.id) {
      try {
        this.types = await this.HttpPersonalService.getType(this.id);
      } catch (error) {
        console.log(error);
      }
      this.typesForm.patchValue(this.types);
    } else {
      this.typesForm.reset();
    }
  }
  async onAddType() {
    const type = this.typesForm.value;
    if(type.name == null){
      this.router.navigate(['/type-list'])

      return;
    }
    if (this.id) {
      this.typesForm.controls["name"].value;
      const checkvalid = await this.HttpPersonalService.getType(this.id)
      if (checkvalid.name == type.name ) {
      }
      else {
        try {
          const type = this.typesForm.value;
          const types = await this.HttpPersonalService.updateType(this.id, type)
        } catch (error) {

        }
      }

    }
    else {
      await this.HttpPersonalService.postType(type);
    }

    this.getTypes();
    this.router.navigate(['/type-list'])
  }

  async onDeleteType() {
    console.log(this.id)
    if (this.id)
      await this.HttpPersonalService.deleteType(this.id)
      this.router.navigate(['/type-list'])

  }

}

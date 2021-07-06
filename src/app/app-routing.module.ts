import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { PersonalEditComponent } from './components/personal-edit/personal-edit.component';
import { PersonalListComponent } from './components/personal-list/personal-list.component';
import { TypeEditComponent } from './components/type-edit/type-edit.component';
import { TypeListComponent } from './components/type-list/type-list.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children:[{
      path:"",
      component: MainComponent,
    },
    {
      path: "type-list",
      component: TypeListComponent,
    },
    {
      path: "personal-list",
      component: PersonalListComponent
    },
    {
      path: "personal-edit",
      component: PersonalEditComponent
    },
    {
      path: "personal-edit/:id",
      component: PersonalEditComponent
    },
    {
      path: "type-edit",
      component: TypeEditComponent
    },
    {
      path: "type-edit/:id",
      component: TypeEditComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

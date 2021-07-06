import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalListComponent } from './components/personal-list/personal-list.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TypeListComponent } from './components/type-list/type-list.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalEditComponent } from './components/personal-edit/personal-edit.component';
import { TypeEditComponent } from './components/type-edit/type-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalListComponent,
    HeaderComponent,
    LayoutComponent,
    TypeListComponent,
    MainComponent,
    PersonalEditComponent,
    TypeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

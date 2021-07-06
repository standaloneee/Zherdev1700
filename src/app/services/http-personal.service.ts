import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personal } from '../interfaces/personal';
import { Types } from '../interfaces/type';

@Injectable({
  providedIn: 'root'
})
export class HttpPersonalService {
  personalAPI = 'http://localhost:3000/Personals';
  typesAPI = 'http://localhost:3000/Types';
  constructor(private http: HttpClient) {}
  getPersonals():Promise<any>{
    return this.http.get(this.personalAPI).toPromise();
  }
  getPersonal(id:number):Promise<any>{
    return this.http.get(this.personalAPI+`/${id}`).toPromise();
  }
  postPersonal(data: Personal){   
    return this.http.post(this.personalAPI, data).toPromise();
  }
  updatePersonal(index: number, personal:any){
    return this.http.patch(this.personalAPI +`/${index}`,personal).toPromise();
  }
  deletePersonal(index: number){
    return this.http.delete(this.personalAPI+`/${index}`).toPromise();
  }

  
  getTypes():Promise<any>{
    return this.http.get(this.typesAPI).toPromise();
  }
  getType(id:number):Promise<any>{
    return this.http.get(this.typesAPI+`/${id}`).toPromise();
  }
  postType(type: Types){    
    return this.http.post(this.typesAPI, type).toPromise();
  }
  updateType(index: number, type:any){
    return this.http.patch(this.typesAPI +`/${index}`,type).toPromise();
  }
  deleteType(id:number){
    return this.http.delete(this.typesAPI+`/${id}`).toPromise();
  }

}

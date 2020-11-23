import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  readonly APIUrl = "https://localhost:44304/api";

  constructor(private http: HttpClient) { }

  GetAllContactInfo():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/contact/GetAll');
  }

  AddContact(contact : any){
    return this.http.post(this.APIUrl + '/contact/Create',contact);
  }

  UpdateContact(id : Number,contact : any){
    return this.http.put(this.APIUrl + '/contact/Edit/'+ id,contact);
  }

  DeleteteContact(id : Number){
    return this.http.delete(this.APIUrl + '/contact/Delete/'+ id);
  }
}

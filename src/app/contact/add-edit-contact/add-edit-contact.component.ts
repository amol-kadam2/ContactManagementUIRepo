import { Component, OnInit, Input } from '@angular/core';
import {ContactService} from '../../shared/contact.service';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {

  constructor(private _contactService:ContactService) { }

  @Input () contact:any;
  Id : Number;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Status: string;

  ngOnInit(): void {
    this.Id = this.contact.Id;
    this.FirstName = this.contact.FirstName;
    this.LastName = this.contact.LastName;
    this.Email = this.contact.Email;
    this.PhoneNumber = this.contact.PhoneNumber;
    this.Status = this.contact.Status;
  }

  addContact(){
   this.validateContact();
   var data ={FirstName:this.FirstName,LastName:this.LastName,Email:this.Email,PhoneNumber:this.PhoneNumber,Status:this.Status};
   this._contactService.AddContact(data).subscribe(resp => {
     if(resp){
      alert("Contact Added Successfully"); 
     } else{
      alert("An Error Occured while adding contact. please try again later.");
     }  
   }

   );
  }

  UpdateContact(){
    this.validateContact();
    var data ={FirstName:this.FirstName,LastName:this.LastName,Email:this.Email,PhoneNumber:this.PhoneNumber,Status:this.Status};
    this._contactService.UpdateContact(this.Id,data).subscribe(resp => {
      if(resp){
        alert("Contact Updated Successfully");
       
      } else{
       alert("An Error Occured while updating contact. please try again later.");
      }  
    }
 
    );
  }

  validateContact(){
    if(this.FirstName == "" || this.LastName == "" || this.Email == ""|| this.PhoneNumber== "" || this.Status == ""){
     alert('All fields are required!');
     return false;
    }

    if(this.FirstName == undefined || this.LastName == undefined || this.Email == undefined || this.PhoneNumber== undefined || this.Status == undefined){
      alert('All fields are required!');
      return false;
     }
  }

}

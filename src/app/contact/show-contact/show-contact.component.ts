import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../shared/contact.service';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {

  title : string = "Contact Management App";
  modalTitle : string ;
  ActivateAddEditContactComp : boolean = false;
  contact :any;

  constructor(private _contactService: ContactService) { }

  contactList:any=[];

  ngOnInit(): void {
    this.getContactListData();
  }

  addContactClick(){
   this.contact = {
    Id:0
   }
   this.modalTitle = "Add New Contact";
   this.ActivateAddEditContactComp = true;
  }

  editContactClick(con){
    this.contact = con;
    this.modalTitle = "Edit Contact";
    this.ActivateAddEditContactComp = true;
  }

  deleteContactClick(Id){
    if(confirm('Are you sure?')){
      this._contactService.DeleteteContact(Id).subscribe( data =>{
        if(data){
          alert("Contas has been successfully deleted");
          this.getContactListData();
        }else{
          alert("An Error Occured while deleting contact. please try again later.");
         } 
      }

      )
    }
  }
  
  closeModal(){
    this.ActivateAddEditContactComp = false;
    this.getContactListData();
  }

  getContactListData(){
    this._contactService.GetAllContactInfo().subscribe(
      data =>{
        this.contactList = data
      }
    );
  }

}

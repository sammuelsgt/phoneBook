import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';
import { PhoneBook } from 'src/app/interfaces/phone-book';
@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})


export class PhoneBookComponent {
  phoneBook :PhoneBook[] = [
    {name: '', email:'',phoneNumber:'',id:0, isEnabled:true}
  ];
  newName="";
  newPhoneNumber="";
  newEmail="";
  newId=1;
  
  addContact(){
    this.phoneBook?.push({
      name:this.newName,
      phoneNumber:this.newPhoneNumber,
      email:this.newEmail,
      id:this.newId,
      isEnabled:true}
      );
    this.newId+=1;
  }

  deleteContact(phoneBook: PhoneBook){
    this.phoneBook.forEach((item,index) => {if(item === phoneBook) this.phoneBook.splice(index,1)})
  }

  editContact(id:number){
    
   this.phoneBook.forEach((person) => {
    if(person.id ===id){
    person.isEnabled =!person.isEnabled}
   })
   console.log(this.phoneBook)
  }


    
    
    

}

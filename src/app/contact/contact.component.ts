import { Component,  } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  title= 'post api call'
  users:any;
  constructor(private userData: UserdataService, private router:Router){
    this.userData.users().subscribe((data)=>{
      this.users=data;

    });
    
  }
  getUserFormData(data:any) 
  {
    
    this.userData.saveUser(data).subscribe((result)=>{
      if(result){
        this.router.navigate(['thankyou'])

      }
    })
  }
 

}

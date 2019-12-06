import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, NgForm, ValidatorFn, Validators} from "@angular/forms";
import { Router } from '@angular/router';
// import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string = ""

  constructor(private router: Router) {    
   }

  ngOnInit() {
  }

  Login(){
    // alert('aaaa')
    this.router.navigate(['/channel']);
  }
}

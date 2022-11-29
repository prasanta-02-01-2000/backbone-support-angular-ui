import { Component, OnInit,Input } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { GlobalService } from 'src/app/Services/global.service';
import Swal from 'sweetalert2';
import { FormGroup,Validators,FormControl,FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  UserDetailsForm: FormGroup;
  isSubmitted = false;
  constructor(private service:UserService,private globalService:GlobalService,public formBuilder: FormBuilder) {
    
  }

  @Input()
  FullName:string;
  UserRole:string;
  UserEmail:string;
  UserMobileNumber:string;
  UserGender:string;
  UserDOB:string;
  UserName:string;
  Password:string;

  ngOnInit() {
    this.validationProvider();
  }

  validationProvider(){
    this.UserDetailsForm = this.formBuilder.group({
      FullName: ['', [Validators.required, Validators.minLength(3)]],
      UserRole:['',[Validators.required]],
      UserEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      UserMobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      UserGender:['',[Validators.required]],
      UserDOB:['',[Validators.required]],
      UserName:['',[Validators.required]],
      Password:['',[Validators.required,Validators.minLength(3)]]
    })
  }

  get errorControl() {
    return this.UserDetailsForm.controls;
  }
  
  submitUserDetailsForm(){
    this.isSubmitted = true;
    if (!this.UserDetailsForm.valid) {
      return false;
    }
    else{
    let postDataObj = {
        FULL_NAME:this.FullName,
        USER_ROLE:this.UserRole,
        USER_EMAIL:this.UserEmail,
        USER_MOBILE_NUMBER:this.UserMobileNumber.toString(),
        USER_GENDER:this.UserGender,
        USER_DOB:this.UserDOB,
        USER_NAME:this.UserName,
        PASSWORD:this.Password
    };
    console.log("submitUserDetailsForm obj - ",postDataObj);
    this.service.addUserDetails(postDataObj).subscribe( res => {
        console.log("submitUserDetailsForm response - ",res);
        if(res[0].status == "true"){
          this.globalService.showSuccessAlert(true, "success", res[0].response);
          this.UserDetailsForm.reset();
        }
        else if(res[0].status == "false"){
        }
        else{
          this.globalService.showErrorAlert(true, "error", "Oops Something Went Wrong!!");
        }
      },
      error => 
      {
        console.log("submitUserDetailsForm Error - ",error);
        this.globalService.showErrorAlert(true, "error", error.message);
      }
    );
    }
    
  }
  

}

import {Component} from "@angular/core";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {User, UserService} from "./user.service";

@Component({
  selector: 'user-form',
  template: `
    <form [formGroup]="userForm">
      <div class="form-field">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" formControlName="name">
      </div>
      <div class="form-field">
        <label for="firstname">Firstname</label>
        <input type="text" id="firstname" name="firstname" formControlName="firstName">
      </div>
      <button type="button" (click)="submit()">Submit</button>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }
  `],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class UserFormComponent {

  userForm = this.fb.group({
    name: ['', Validators.required],
    firstName: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  submit() {
    if (this.userForm.valid) {
      const {name, firstName} = this.userForm.value;
      this.userService.addUser({
        name,
        firstName
      } as User);
    }
  }
}

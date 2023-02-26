import {Component} from "@angular/core";
import {UserService} from "./user.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'user-list',
  template: `
    <h1>Users</h1>
    <div class="user" *ngFor="let user of users">
      {{user.name}} {{user.firstName}}
    </div>
  `,
  standalone: true,
  styles: [`
    .user {
      display: flex;
      padding: 10px;
      border: 1px solid black;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
      border-radius: 5px;
    }
  `],
  imports: [NgForOf]
})
export class UserListComponent {
  users = this.userService.getUsers();

  constructor(private userService: UserService) {
  }
}

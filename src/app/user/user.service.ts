import {Injectable, signal} from "@angular/core";

export interface User {
  name: string;
  firstName: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = signal<User[]>([]);

  public addUser(user: User) {
    this.users.mutate(state => state.push(user));
  }

  public getUsers(): User[] {
    return this.users();
  }
}

import { Component, OnInit } from "@angular/core";

import { User } from "../user.interface";
import { UserService } from "../user.service";

@Component({
  selector: "ns-users",
  templateUrl: "./users.component.html",
})
export class UsersComponent implements OnInit {
  public users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        console.log("Received data:", users);
        this.users = users;
      },
      error: (error) => {
        console.error("Error:", error);
      },
    });
  }

  onAdd() {
    console.log("TODO: add a user");
  }
}

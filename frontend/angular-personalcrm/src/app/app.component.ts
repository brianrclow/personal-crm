import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [HttpClient, UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        console.log('Received data:', users);
        this.users = users;
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  onUserClick(user: any) {
    // Navigate to the user detail page
    // this.router.navigate(['/user', user.id]);
  }

  onAdd() {
    console.log('add user');
  }

  editUser(user: User) {
    console.log('edit user');
  }
}

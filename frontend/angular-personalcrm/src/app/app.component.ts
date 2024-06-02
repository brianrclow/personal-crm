import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { User } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public users!: User[];

  constructor(private userService: UserService, public dialog: MatDialog) {}

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

  /**
   *
   * @param user 
   * @param mode add, edit, delete
   */
  openDialog(user: User, mode: string) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: { user: user, mode: mode },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
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

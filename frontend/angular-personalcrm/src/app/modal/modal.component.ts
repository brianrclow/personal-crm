import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  mode!: string; // 'add' | 'edit' | 'delete';
  user!: User;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private _UserService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.mode = data.mode;
      this.user = data.user;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(id: number) {
    console.log('Delete User with id: ', id);
    this._UserService.deleteUser(id).subscribe((response: void) => {
      console.log(response);
    })
  }

  onSave() {
    console.log('save');
  }
}

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { User } from '../user.interface'
import { UserService } from '../user.service'
import { Observable } from 'rxjs'



@Component({
  selector: 'ns-user-details',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  user$: Observable<User>

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.user$ = this.userService.getUserById(id)
  }
}

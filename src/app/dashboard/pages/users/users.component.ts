import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {
  private usersService = inject(UsersService);
}

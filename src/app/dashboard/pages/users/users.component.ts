import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TitleComponent } from '../../../shared/title/title.component';
import { UserResponse } from '../../interfaces/req-response';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [TitleComponent, RouterModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {
  public usersService = inject(UsersService);
}

import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleUserResponse, User } from '../../interfaces/req-response';
import { TitleComponent } from '../../../shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <shared-title title="Usuario:"/>
    @if(user()){
      <section>
        <img [srcset]="user()?.avatar" alt="user().firstName" />
        <div>
          <h3>{{texto()}}</h3>
        </div>
      </section>
    }@else {
      <p>Cargando Usuario</p>
    }
  `,
  styleUrl: './user.component.css'
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);
  public texto = computed(() => {
    if(this.user())
    {
      return `Informacion: ${this.user()?.email} - ${this.user()?.id}`
    }
    else{
      return 'Nothing Else Matters'
    }
  })
  //de obserbable a signal
  //parametros: obserbable
  public user = toSignal( 
    this.route.params.pipe(
      switchMap(({id}) => this.userService.getUserById(id))
    )
   )


}

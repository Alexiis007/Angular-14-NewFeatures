import { Injectable, computed, inject, signal } from '@angular/core';
import { SingleUserResponse, User, UserResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface State {
  users : User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  //#Signal privada (no es accesable)
  #state = signal<State>({
    loading:true,
    users:[]
  })
  //Las signals computadas solo son de lectura y con estas veremos los datos 
  //de la signal privada
  public users = computed(()=> this.#state().users);
  public loading = computed(()=> this.#state().loading);

  constructor() { 
   this.http.get<UserResponse>('https://reqres.in/api/users')
   .subscribe( res => {
    this.#state.set({
      loading:false,
      users:res.data,
    })
   })
  }
  public getUserById(id : string){
    return this.http.get<SingleUserResponse>('https://reqres.in/api/users/'+id)
    .pipe(
      map(res => res.data)
    )
  }
}

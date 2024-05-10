import { Component, Input, booleanAttribute, input } from '@angular/core';

@Component({
  selector:'shared-title',
  standalone: true,
  imports: [],
  template:`<h1 class="text-3xl mb-5">{{title}} - {{withShadow}}</h1>`,
  styles: ``
})
export class TitleComponent {
  //Hace que el valor del lado del html pida, exija un valor
  //Sino marcara un error
  @Input( {required: true} )
  public title !: string;
  //Permite saber si un atributo esta o no esta (esta=true/no esta=false)
  @Input({ transform: booleanAttribute })
  withShadow : boolean = false;
}

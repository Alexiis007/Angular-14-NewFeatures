import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-sidemenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: ``
})
export class SidemenuComponent {
  constructor(){}

  public menuItems = routes
  .map(
    route => route.children ?? []
  )
  //Solo muestra los datos puros
  .flat()
  //Elimina rutas inexistentes o con path vacios
  .filter(route => route && route.path)
  //Elimina rutas que contengan en su path ':'
  .filter(route => !route.path?.includes(':'))
}

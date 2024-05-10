import { Component } from '@angular/core';
import DeferViewsComponent from '../../dashboard/pages/defer-views/defer-views.component';

@Component({
  selector:'shared-low-loaders',
  standalone: true,
  imports: [],
  template: `<h1>s</h1>`,
})
export class HeavyLoadersLowComponent {
  
  constructor(){
    console.log('Heavi loader component');
    
  }
  
}

import { Component, Input } from '@angular/core';
import DeferViewsComponent from '../../dashboard/pages/defer-views/defer-views.component';
import { CommonModule } from '@angular/common';

@Component({
  selector:'shared-low-loaders',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">Heavy Loader Slow</section>
  `,
})
export class HeavyLoadersLowComponent {
  
  @Input({required:true}) cssClass !: string;

  constructor(){
    console.log('Heavi loader component');

      const start = Date.now();
      while(Date.now()-start<3000) {}

  
  }
  
}

import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <shared-title  title="View Transition"/>
    <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/237/200/300" style="view-transition-name: hero1" alt="Picsum" width="200" height="300">
      <div class="bg-blue-500 w-56 h-56" style="view-transition-name: hero2">
        
      </div>
    </section>
  `,
  // styleUrl: './view-transition.component.css'
})
export default class ViewTransitionComponent {

}

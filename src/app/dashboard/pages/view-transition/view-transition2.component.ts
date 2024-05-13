import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <shared-title  title="View Transition"/>
    <section class="flex justify-end">
      <img srcset="https://picsum.photos/id/237/200/300" style="view-transition-name: hero1" alt="Picsum" width="200" height="300">
      <div class="fixed bottom-16 right-10 bg-blue-800 w-36 h-36" style="view-transition-name: hero2">
        
      </div>
    </section>
  `,
  // styleUrl: './view-transition.component.css'
})
export default class ViewTransitionComponent {

}

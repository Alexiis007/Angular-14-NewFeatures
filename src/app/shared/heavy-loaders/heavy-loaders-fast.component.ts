import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector:'shared-fast-loaders',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full',cssClass]">
      <ng-content ></ng-content>
      
    </section>
  `,
})
export class HeavyLoadersFastComponent {
  @Input({required: true})
  cssClass !: string;
}

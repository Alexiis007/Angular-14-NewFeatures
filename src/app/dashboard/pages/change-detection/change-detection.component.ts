import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
    <shared-title title="Change Detection"/>
    <pre>{{frameworkSignal() | json}}</pre>
    <pre>{{frameworkProperty | json}}</pre>
  `,
})
export default class ChangeDetectionComponent {
  
  public frameworkSignal = signal({
      name:'Angular',
      releaseDate: 2016,
    }
  )
  public frameworkProperty = {
    name:'Angular',
    releaseDate: 2016,
  }

  constructor(){
    setTimeout(()=>{
      this.frameworkProperty.name = 'React'
      this.frameworkSignal.update(a=>({...a, name:'React'}));
      console.log('Echo pai :)');
    },3000)
  }
  
}

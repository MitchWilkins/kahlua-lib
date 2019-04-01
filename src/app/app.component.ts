import { Component } from '@angular/core';
import { FormPageComponent } from '../../projects/kahlua-lib/src/lib/pages/form-page/form-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends FormPageComponent {
  items: {content: string, hasBadge: boolean, badgeValue: string}[] = [
    {content: 'test', hasBadge: true, badgeValue: 'values'},
    {content: 'test', hasBadge: true, badgeValue: 'values'},
    {content: 'test', hasBadge: true, badgeValue: 'values'},
  ];

  public submit = (): void => {
    console.log('submit');
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, timer } from 'rxjs';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnsubscribeComponent {

  interval$ = timer(0, 1000);
}

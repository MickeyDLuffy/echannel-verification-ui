import { TuiRootModule } from '@taiga-ui/core';
import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';


@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    TuiRootModule
  ],
  selector: 'echannel-verification-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'echannel-verification';
}

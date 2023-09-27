import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'echannel-verification-verfication-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verfication-data.component.html',
  styleUrls: ['./verfication-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerficationDataComponent {}

import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  TuiTableFiltersModule,
  TuiTableModule,
  TuiTablePaginationModule,
} from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiLoaderModule, TuiPrimitiveCheckboxModule } from '@taiga-ui/core';
import { VerificationService } from './verification.service';
import { BehaviorSubject, tap } from 'rxjs';
// import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { suspensify } from '@jscutlery/operators';

@Component({
  selector: 'echannel-verification-verfication',
  standalone: true,
  imports: [
    TuiTableModule,
    NgIf,
    AsyncPipe,
    TuiPrimitiveCheckboxModule,
    TuiLoaderModule,
    DatePipe,
    NgFor,
    TuiTablePaginationModule,
    TuiTableFiltersModule,
    TuiButtonModule
  ],
  templateUrl: './verfication.component.html',
  styleUrls: ['./verfication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerficationComponent {
  srv = inject(VerificationService);

  #getVerifications = new BehaviorSubject(1);

  verificationsRes$ = this.#getVerifications.pipe(() =>
    this.srv.loadVerifications().pipe(suspensify())
  );

  data$ = this.srv.verifications$.pipe(tap((x) => console.log('are u mad', x)));
  sorter = null;

  columns = [
    'select',
    'created_on',
    'priority',
    'source_bu',
    'business_key',
    'dcp_reference',
    'account_name',
    'transaction_currency',
    'transaction_amount',
    'locked_by',
  ];
}

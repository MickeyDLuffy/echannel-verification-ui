import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { EchannelVerificationModel } from '@echannel-verification/data-interface';
import { VerificationHttpService } from '@echannel-verification/data-http-service';

@Injectable({
  providedIn: 'root',
})
export class VerificationService {
  httpSrv = inject(VerificationHttpService);

  #verifications$ = new BehaviorSubject<EchannelVerificationModel[]>([
    {
      account_name: 'ff',
      business_key: 'f',
      created_on: new Date(),
      dcp_reference: 'dd',
      locked_by: '',
      priority: 'dd',
      source_bu: 'eee',
      transaction_amount: 340,
      transaction_currency: 'GHC',
    },
    {
      account_name: 'ff',
      business_key: 'f',
      created_on: new Date(),
      dcp_reference: 'dd',
      locked_by: '',
      priority: 'dd',
      source_bu: 'eee',
      transaction_amount: 340,
      transaction_currency: 'GHC',
    },
    {
      account_name: 'ff',
      business_key: 'f',
      created_on: new Date(),
      dcp_reference: 'dd',
      locked_by: '',
      priority: 'dd',
      source_bu: 'eee',
      transaction_amount: 340,
      transaction_currency: 'GHC',
    },
    {
      account_name: 'ff',
      business_key: 'f',
      created_on: new Date(),
      dcp_reference: 'dd',
      locked_by: '',
      priority: 'dd',
      source_bu: 'eee',
      transaction_amount: 340,
      transaction_currency: 'GHC',
    },
    {
      account_name: 'ff',
      business_key: 'f',
      created_on: new Date(),
      dcp_reference: 'dd',
      locked_by: '',
      priority: 'dd',
      source_bu: 'eee',
      transaction_amount: 340,
      transaction_currency: 'GHC',
    },
    {
      account_name: 'ff',
      business_key: 'f',
      created_on: new Date(),
      dcp_reference: 'dd',
      locked_by: '',
      priority: 'dd',
      source_bu: 'eee',
      transaction_amount: 340,
      transaction_currency: 'GHC',
    },
  ]);
  verifications$ = this.#verifications$.asObservable();

  loadVerifications(queryParam?: Record<string, string | number>) {
    return this.httpSrv.getVerifications({ ...queryParam }).pipe(
      tap({
        next: (res) => {
          this.#verifications$.next(res);
        },
      })
    );
  }
}

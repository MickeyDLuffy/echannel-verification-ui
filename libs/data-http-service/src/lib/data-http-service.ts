import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APP_CONFIG } from '@echannel-verification/data-config';
import { EchannelVerificationModel } from '@echannel-verification/data-interface';

@Injectable({ providedIn: 'root' })
export class VerificationHttpService {
  private http = inject(HttpClient);
  private appConfig = inject(APP_CONFIG);
  private url = `${this.appConfig.baseUrl}/events`;

  getVerification(id: string) {
    return this.http.get<EchannelVerificationModel>(`${this.url}/${id}`);
  }

  getVerifications(query?: Record<string, string | number>) {
    return this.http.get<EchannelVerificationModel[]>(`${this.url}`, {
      params: { ...query },
    });
  }

  updateVerification(
    id: string,
    verification: Partial<EchannelVerificationModel>
  ) {
    return this.http.put<EchannelVerificationModel>(
      `${this.url}/${id}`,
      verification
    );
  }

  createVerification(verification: Partial<EchannelVerificationModel>) {
    return this.http.post<EchannelVerificationModel>(
      `${this.url}`,
      verification
    );
  }

  deleteVerification(id: string) {
    return this.http.delete<unknown>(`${this.url}/${id}`);
  }
}

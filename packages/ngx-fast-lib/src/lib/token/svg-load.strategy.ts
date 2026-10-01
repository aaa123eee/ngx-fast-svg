import { DOCUMENT, inject, Injectable } from '@angular/core';
import { from, Observable, of, switchMap } from 'rxjs';
import { getZoneUnPatchedApi } from '../internal/get-zone-unpatched-api';
import { SvgLoadStrategy } from './svg-load.strategy.model';

@Injectable()
export class SvgLoadStrategyImpl implements SvgLoadStrategy {
  document = inject(DOCUMENT);
  fetch = getZoneUnPatchedApi('fetch', this.document.defaultView as any);

  load(url$: Observable<string>): Observable<string> {
    return url$.pipe(switchMap((url) => {
      return from(fetch(url).then((res) => (!res.ok ? '' : res.text())));
    }));
  }

  config(url: string) {
    return of(url);
  }
}

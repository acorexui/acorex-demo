import {
  AXHolidayDate,
  AXHolidaysLoader,
  AXHolidaysLoaderOptions,
} from '@acorex/core/date-time';
import { AXFormatter } from '@acorex/core/format';
import {
  AXTranslation,
  AXTranslationLoader,
  AXTranslationLoaderOptions,
} from '@acorex/core/translation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable()
export class MyCustomHolidaysLoader implements AXHolidaysLoader {
  getHolidays(options?: AXHolidaysLoaderOptions): Promise<AXHolidayDate[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            date: new Date(2023, 8, 10),
            title: 'Test 1',
          },
          {
            date: new Date(2023, 8, 20),
            title: 'Test 2',
          },
        ]);
      }, 500);
    });
  }
}

@Injectable()
export class MyTranslationLoader implements AXTranslationLoader {
  constructor(private http: HttpClient) {}

  getTranslation(
    options: AXTranslationLoaderOptions
  ): Observable<AXTranslation> {
    // Simulated delay in milliseconds
    const simulatedDelay = 0; // 2 seconds

    return this.http
      .get<AXTranslation>(`/i18n/${options.lang}/${options.scope}.json`)
      .pipe(delay(simulatedDelay));
  }
}

export class MyNumberFormatPlugin implements AXFormatter {
  get name(): string {
    return 'mynumber';
  }

  format(value: unknown, ...args: unknown[]): string {
    const local: string = (args.length ? args[0] : null) as string;
    return 'test';
  }
}

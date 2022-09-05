import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizedDate',
  standalone: true,
})
export class NormalizedDatePipe extends DatePipe implements PipeTransform {
  override transform(value: any, format?: string, timezone?: string, locale?: string): any {
    return value !== 'Unknown' ? super.transform(value, format, timezone, locale) : '---';
  }
}

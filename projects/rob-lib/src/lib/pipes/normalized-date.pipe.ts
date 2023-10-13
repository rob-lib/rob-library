import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizedDate',
  standalone: true,
})
export class NormalizedDatePipe extends DatePipe implements PipeTransform {
  override transform(value: any, format?: string, timezone?: string, locale?: string): any {
    const processedValue = value === 'Unknown' ? undefined : value;
    return super.transform(processedValue, format, timezone, locale) ?? '---';
  }
}

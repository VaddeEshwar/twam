import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any[] = [];
    if (value.length === 0 || filterString === '' || propName === '') {
      return value;
    }
      value.forEach((a: any) => {
        if (a[propName].trim().toLowerCase.include(filterString.toLowerCase())) {
          result.push(a);
    }
  });
  return result;

    }
}

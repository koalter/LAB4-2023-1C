import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largo'
})
export class TextoLargoPipe implements PipeTransform {

  transform(value: string, limite: number = 7): string {
    if (value.length > limite) {
      return value.substring(0, limite) + '...';
    }

    return value;
  }

}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstaciones]'
})
export class EstacionesDirective {

  constructor(private el: ElementRef) { 
    const fecha = new Date();
    
    if (fecha.getDate() >= 21) {
      switch (fecha.getMonth()) {
        case 11: case 0: case 1:
          el.nativeElement.style.backgroundColor = 'yellow';
          break;
        case 2: case 3: case 4:
          el.nativeElement.style.backgroundColor = 'orange';
          break;
        case 5: case 6: case 7:
          el.nativeElement.style.backgroundColor = 'cyan';
          break;
        case 8: case 9: case 10:
          el.nativeElement.style.backgroundColor = 'green';
          break;  
      }
    } else {
      switch (fecha.getMonth()) {
        case 0: case 1: case 2:
          el.nativeElement.style.backgroundColor = 'yellow';
          break;
        case 3: case 4: case 5:
          el.nativeElement.style.backgroundColor = 'orange';
          break;
        case 6: case 7: case 8:
          el.nativeElement.style.backgroundColor = 'cyan';
          break;
        case 9: case 10: case 11:
          el.nativeElement.style.backgroundColor = 'green';
      }
    }
  }

}

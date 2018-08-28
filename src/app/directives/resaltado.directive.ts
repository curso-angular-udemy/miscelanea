import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private referencia: ElementRef) {
    console.log('Directiva llamada');
  }

  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar (null);
  }

  private resaltar (color: string) {
    this.referencia.nativeElement.style.backgroundColor = color;
  }

}

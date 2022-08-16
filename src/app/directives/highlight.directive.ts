import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  @HostListener('mousemove', ['$event']) mouseMove(event: MouseEvent) {
    let posX = event.offsetX;
    let posY = event.offsetY;
    const img = this.element.nativeElement.children[0];
    const overlay = this.element.nativeElement.children[1];
    if (posX < (img.offsetWidth / 2.96) && posY < (img.offsetHeight / 2.86)) {
      this.renderer.setStyle(overlay, 'left', '70%')
    } else {
      this.renderer.setStyle(overlay, 'left', '0')
    }
    if (posX < (img.offsetWidth / 2.63) && posY > (img.offsetHeight / 1.18)) {
      this.renderer.setStyle(img, 'cursor', 'url(../../assets/images/camera3.png)32 25, crosshair')
    } else {
      img.style.cursor = 'url((../../assets/images/camera.png)32 25, crosshair';
      this.renderer.setStyle(img, 'cursor', 'url(../../assets/images/camera.png)32 25, crosshair')
      this.renderer.setStyle(overlay, 'background-size', (img.offsetWidth * 2.3) + 'px ' + (img.offsetHeight * 2.3) + 'px')
      this.renderer.setStyle(overlay, 'background-position', (-posX * 2) + 'px ' + (-posY * 2) + 'px')
    }
    this.renderer.setStyle(overlay, 'display', 'inline-block')
  }
  @HostListener('mouseout') mouseOut() {
    const overlay = this.element.nativeElement.children[1];
    this.renderer.setStyle(overlay, 'display', 'none')
  }


}

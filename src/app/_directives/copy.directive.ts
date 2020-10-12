import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCopy]',
})
export class CopyDirective {
  @Input('appCopy') node: HTMLElement;

  @HostListener('click') copyElements($event): void {
    const range = document.createRange();
    const sel = getSelection();
    sel.removeAllRanges();

    try {
      range.selectNodeContents(this.node);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(this.node);
      sel.addRange(range);
    }

    document.execCommand('copy');
  }
}

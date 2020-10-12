import { Directive, HostListener, Input } from '@angular/core';
import { ExportService } from '../_services/export.service';

@Directive({
  selector: '[appExport]',
})
export class ExportDirective {
  constructor(private exportService: ExportService) {}

  @Input('appExport') data: any[];
  @Input() fileName = 'data';

  @HostListener('click', ['$event']) onClick($event): void {
    this.exportService.exportExcel(this.data, this.fileName);
  }
}

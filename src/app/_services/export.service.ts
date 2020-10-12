import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor() {}

  fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';

  exportExcel = (jsonData: any[], fileName: string): void => {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const wb: XLSX.WorkBook = { Sheets: { data: ws }, SheetNames: ['data'] };
    const buffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    const data: Blob = new Blob([buffer], { type: this.fileType });
    FileSaver.saveAs(data, `${fileName}${this.fileExtension}`);
    // tslint:disable-next-line: semicolon
  };
}

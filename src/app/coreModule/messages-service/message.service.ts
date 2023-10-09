import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Injectable()
export class MessageService {
  private toastrConfig: Partial<IndividualConfig> = {
    timeOut: 3000, 
    progressBar: false, 
    closeButton: false, 
    positionClass: 'toast-top-right', 
    enableHtml: true, 
    toastClass: 'ngx-toastr-custom', 
  };


  constructor(private toastr: ToastrService) {}

  public add(message: string): void {
    this.toastr.success(message, 'Message:', this.toastrConfig);
  }

  public addError(message: string): void {
    this.toastr.error(message, 'Message:', this.toastrConfig);
  }
}

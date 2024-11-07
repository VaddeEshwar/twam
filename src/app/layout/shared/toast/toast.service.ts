import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  error(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast : any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
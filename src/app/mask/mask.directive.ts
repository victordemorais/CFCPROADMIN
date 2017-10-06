import { Directive, HostListener, Input } from '@angular/core';

import {
  NG_VALUE_ACCESSOR, ControlValueAccessor
} from '@angular/forms';

@Directive({
  selector: '[proMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaskDirective,
    multi: true
  }]
})
export class MaskDirective implements ControlValueAccessor {
  onTouched: any;
  onChange: any;

  @Input('proMask') proMask: string;

  writeValue(value: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    let valor = $event.target.value.replace(/\D/g, '');
    const pad = this.proMask.replace(/\D/g, '').replace(/0/g, '_');
    const valorMask = valor + pad.substring(0, pad.length - valor.length);

    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      this.onChange(valor);
      return;
    }

    if (valor.length <= pad.length) {
      this.onChange(valor);
    }

    let valorMaskPos = 0;
    valor = '';
    for (let i = 0; i < this.proMask.length; i++) {
      if (isNaN(parseInt(this.proMask.charAt(i), 10))) {
        valor += this.proMask.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }

    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }

    $event.target.value = valor;
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    if ($event.target.value.length === this.proMask.length) {
      return;
    }
    this.onChange('');
    $event.target.value = '';
  }
}

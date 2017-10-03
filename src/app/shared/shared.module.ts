import { UserService } from './../users/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
@NgModule({
    declarations: [InputComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    exports: [InputComponent, CommonModule,
        FormsModule, ReactiveFormsModule]
})
export class SharedModule {
    static forRoot():ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [UserService]
        }
    }
}
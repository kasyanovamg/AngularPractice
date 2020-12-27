import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';

const APP_STORAGE = new InjectionToken('userInfo', {
  providedIn: 'root',
  factory: () => sessionStorage
});

@NgModule({
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    FormsModule
  ]
})

// todo: пока нигде не использую этот модуль, возможно надо удалить

export class LoginModule {
  static forRoot({name = 'app', storage = {}} = {}): ModuleWithProviders<any> {
    return {
      ngModule: LoginModule,
      providers: [
        {
          provide: APP_STORAGE,
          useValue: storage,
        }
      ]
    };
  }
}

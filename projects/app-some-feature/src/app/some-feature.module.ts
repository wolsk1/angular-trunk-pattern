import { AppModule } from './app.module';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({})
export class SomeFeatureModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
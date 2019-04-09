import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppModule } from './app.module';

@NgModule({})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}

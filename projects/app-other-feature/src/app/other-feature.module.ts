import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppModule } from 'projects/app-core/src/app/app.module';

@NgModule({})
export class OtherFeatureModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}

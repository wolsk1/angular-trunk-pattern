import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'projects/app-core/src/app/core.module';
import { SomeFeatureModule } from 'projects/app-some-feature/src/app/some-feature.module';
import { OtherFeatureModule } from 'projects/app-other-feature/src/app/other-feature.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SomeFeatureModule.forRoot(),
    OtherFeatureModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

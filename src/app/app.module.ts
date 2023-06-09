import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';

export function MSALInstanceFactory(): PublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '023d108a-403c-4200-9470-3f9da3550c0f',
      redirectUri: 'http://localhost:4200',
    },
  });
}

@NgModule({
  declarations: [AppComponent, PublicPageComponent, RestrictedPageComponent],
  imports: [BrowserModule, AppRoutingModule, MsalModule],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    MsalService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

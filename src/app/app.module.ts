import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule } from '@azure/msal-angular';
import { MSAL_INSTANCE } from '@azure/msal-angular/constants';
import { MsalService } from '@azure/msal-angular/msal.service';
import { PublicClientApplication } from '@azure/msal-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function MSALInstanceFactory(): PublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '023d108a-403c-4200-9470-3f9da3550c0f',
      redirectUri: 'http://localhost:4200',
    },
  });
}

@NgModule({
  declarations: [AppComponent],
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

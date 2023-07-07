import { EnvironmentProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/modules/routing/app-routing.module';
import { RootComponent } from './components/root/root.component';
import { DashboardComponent } from './hero/components/dashboard/dashboard.component';
import { HeroesComponent } from './hero/components/heroes/heroes.component';
import { HeroDetailComponent } from './hero/components/detail/hero-detail.component';
import { HeroSearchComponent } from './hero/components/search/hero-search.component';
import { MessagesComponent } from './message/component/messages.component';

// mock API
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './hero-mock/services/in-memory-data/in-memory-data.service';

const oEnvironmentProviders: EnvironmentProviders = provideClientHydration();

@NgModule({
  declarations: [
    RootComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [oEnvironmentProviders],
  bootstrap: [RootComponent],
})
export class AppModule {}

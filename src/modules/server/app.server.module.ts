import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from 'src/modules/app/app.module';
import { RootComponent } from 'src/modules/app/components/root/root.component';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [RootComponent],
})
export class AppServerModule {}

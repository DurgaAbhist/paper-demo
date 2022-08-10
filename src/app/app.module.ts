import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';
import { Block1aComponent } from './level1/blocka/blocka.component';
import { Block1bComponent } from './level1/blockb/blockb.component';
import { Block1cComponent } from './level1/blockc/blockc.component';
import { Block1dComponent } from './level1/blockd/blockd.component';
import { Block2aComponent } from './level2/blocka/blocka.component';
import { Block2bComponent } from './level2/blockb/blockb.component';
import { Block2cComponent } from './level2/blockc/blockc.component';
import { Block2dComponent } from './level2/blockd/blockd.component';
import { Block3aComponent } from './level3/blocka/blocka.component';
import { Block3bComponent } from './level3/blockb/blockb.component';
import { Block3cComponent } from './level3/blockc/blockc.component';
import { Block3dComponent } from './level3/blockd/blockd.component';

@NgModule({
  declarations: [
    AppComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    Block1aComponent,
    Block1bComponent,
    Block1cComponent,
    Block1dComponent,
    Block2aComponent,
    Block2bComponent,
    Block2cComponent,
    Block2dComponent,
    Block3aComponent,
    Block3bComponent,
    Block3cComponent,
    Block3dComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

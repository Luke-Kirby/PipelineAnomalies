import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarListComponent } from './side-bar/side-bar-list/side-bar-list.component';
import { CorrosionComponent } from './view/corrosion/corrosion.component';
import { MillingComponent } from './view/milling/milling.component';
import { GirthweldanomalyComponent } from './view/girthweldanomaly/girthweldanomaly.component';
import { DentComponent } from './view/dent/dent.component';
import { LaminationComponent } from './view/lamination/lamination.component';
import { CrackComponent } from './view/crack/crack.component';
import { BuckleComponent } from './view/buckle/buckle.component';
import { IllegaltapComponent } from './view/illegaltap/illegaltap.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SideBarListComponent,
    CorrosionComponent,
    MillingComponent,
    GirthweldanomalyComponent,
    DentComponent,
    LaminationComponent,
    CrackComponent,
    BuckleComponent,
    IllegaltapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

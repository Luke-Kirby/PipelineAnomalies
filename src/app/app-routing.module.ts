import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrosionComponent } from './view/corrosion/corrosion.component';
import { MillingComponent } from './view/milling/milling.component';
import { GirthweldanomalyComponent } from './view/girthweldanomaly/girthweldanomaly.component';
import { DentComponent } from './view/dent/dent.component';
import { LaminationComponent } from './view/lamination/lamination.component';
import { CrackComponent } from './view/crack/crack.component';
import { BuckleComponent } from './view/buckle/buckle.component';
import { IllegaltapComponent } from './view/illegaltap/illegaltap.component';

const routes: Routes = [
  { path: 'corrosion', component: CorrosionComponent },
  { path: 'milling', component: MillingComponent },
  { path: 'girthweldanomaly', component: GirthweldanomalyComponent },
  { path: 'dent', component: DentComponent },
  { path: 'lamination', component: LaminationComponent },
  { path: 'crack', component: CrackComponent },
  { path: 'buckle', component: BuckleComponent },
  { path: 'illegaltap', component: IllegaltapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

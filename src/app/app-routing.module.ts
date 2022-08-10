import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Level1Component } from './level1/level1.component';
import { Block1aComponent } from './level1/blocka/blocka.component';
import { Block1bComponent } from './level1/blockb/blockb.component';
import { Block1cComponent } from './level1/blockc/blockc.component';
import { Block1dComponent } from './level1/blockd/blockd.component';

import { Level2Component } from './level2/level2.component';
import { Block2aComponent } from './level2/blocka/blocka.component';
import { Block2bComponent } from './level2/blockb/blockb.component';
import { Block2cComponent } from './level2/blockc/blockc.component';
import { Block2dComponent } from './level2/blockd/blockd.component';

import { Level3Component } from './level3/level3.component';
import { Block3aComponent } from './level3/blocka/blocka.component';
import { Block3bComponent } from './level3/blockb/blockb.component';
import { Block3cComponent } from './level3/blockc/blockc.component';
import { Block3dComponent } from './level3/blockd/blockd.component';

const routes: Routes = [
  { path: 'level1', component: Level1Component,
    children:
    [
      { path: 'blocka', component: Block1aComponent },
      { path: 'blockb', component: Block1bComponent },
      { path: 'blockc', component: Block1cComponent },
      { path: 'blockd', component: Block1dComponent }
    ]
  },
  { path: 'level2', component: Level2Component,
    children: [
      { path: 'blocka', component: Block2aComponent },
      { path: 'blockb', component: Block2bComponent },
      { path: 'blockc', component: Block2cComponent },
      { path: 'blockd', component: Block2dComponent }
    ]
  },
  { path: 'level3', component: Level3Component,
    children: [
      { path: 'blocka', component: Block3aComponent },
      { path: 'blockb', component: Block3bComponent },
      { path: 'blockc', component: Block3cComponent },
      { path: 'blockd', component: Block3dComponent }
    ]
  },
  {
    path: '',
    redirectTo: '/level1/blocka',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

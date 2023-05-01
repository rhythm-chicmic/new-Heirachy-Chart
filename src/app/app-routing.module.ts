import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { FamilyComponent } from './family/family.component';

const routes: Routes = [
  {path:'home',component:ExampleComponent},
  {path:'family',component:FamilyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

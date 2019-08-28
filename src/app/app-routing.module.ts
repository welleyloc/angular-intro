import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationComponent } from "./animation/animation.component";
import { DefaultpageComponent } from './defaultpage/defaultpage.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  { path: '', redirectTo: '/defaultpage', pathMatch: 'full' },
  {path: 'animation', component: AnimationComponent, data: {animation: 'transition'}},
  {path: 'defaultpage', component: DefaultpageComponent},
  {path: 'formbuilder', component: FormbuilderComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'reactiveform', component: ReactiveformComponent},
  {path: 'templateform', component: TemplateformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

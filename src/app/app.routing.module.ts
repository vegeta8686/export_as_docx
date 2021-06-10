import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
const routes: Routes = [
  { path: '', redirectTo: 'homes', pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  { path: 'home', component: AppComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

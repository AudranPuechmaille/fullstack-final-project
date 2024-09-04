import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTypeFormComponent } from './components/user-type-form/user-type-form.component';
import { UserTypeListComponent } from './components/user-type-list/user-type-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'user-types', component: UserTypeListComponent },
  { path: 'add-user-type', component: UserTypeFormComponent },
  { path: 'edit-user-type/:id', component: UserTypeFormComponent },
  { path: 'users', component: UserListComponent },
  { path: 'add-user', component: UserFormComponent },
  { path: 'edit-user/:id', component: UserFormComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' } // Home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


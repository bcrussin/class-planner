import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: TasksListComponent },
      { path: 'new', component: TaskDetailsComponent },
      { path: ':id', component: TaskDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

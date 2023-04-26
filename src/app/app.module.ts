import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    MainLayoutComponent,
    TaskCardComponent,
    TaskDetailsComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

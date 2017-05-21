import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/topics/hot', pathMatch: 'full' },
  { path: 'topics/:type', component: TopicListComponent },
  { path: 'detail/:id', component: TopicDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

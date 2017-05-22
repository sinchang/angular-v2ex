import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicService } from './topic.service';
import { UserService } from './user.service';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TimeagoPipe } from './timeago.pipe';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    TopicDetailComponent,
    TimeagoPipe,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    TopicService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicService } from './topic.service';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    TopicDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    TopicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Topic } from '../topic';
import { Comment } from '../comment';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  topic: Topic;
  comments: Comment[];

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.topicService.fetchDetail(+params['id']))
      .subscribe(res => {
        this.topic = res;
      });

    this.route.params
      .switchMap((params: Params) => this.topicService.fetchComment(+params['id']))
      .subscribe(res => {
        this.comments = res;
      });
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import timeago from 'timeago.js';

@Pipe({
  name: 'timeago'
})
export class TimeagoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return timeago().format(value * 1000); // returns '11 hours ago'
  }
}

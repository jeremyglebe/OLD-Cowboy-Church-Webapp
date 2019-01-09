import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fireDate',
})
export class FireDatePipe implements PipeTransform {

  transform(value: any, ...args) {
    var month = (value.toDate().getMonth() + 1).toString();
    var day = value.toDate().getDate().toString();
    var year = value.toDate().getFullYear().toString();
    var hours = value.toDate().getHours();
    var minutes = value.toDate().getMinutes().toString();
    if (value.toDate().getMinutes() < 10){
      minutes = '0' + minutes;
    }
    var tod = 'AM';
    if (hours > 12){
      tod = 'PM';
      hours -= 12;
    } else if (hours == 0){
      hours = 12;
    }
    hours = hours.toString();
    return month + '/' + day + '/' + year + ' ' + hours + ':' + minutes + tod;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fromTwentyFour'
})
export class FromTwentyFourPipe implements PipeTransform {

    transform(value: number): any {
        let output = '';
        if (value == 0) {
            output = '12 AM';
        }
        else if (value < 12) {
            output = `${value} AM`;
        }
        else {
            output = `${value - 12} PM`;
        }
        return output;
    }

}

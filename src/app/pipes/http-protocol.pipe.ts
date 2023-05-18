import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'httpProtocol'
})
export class HttpProtocolPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

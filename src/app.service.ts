import { Injectable } from '@playwajs/common';

@Injectable()
export class AppService {
  say(message: string): string {
    return 'You said: ' + message;
  }
}

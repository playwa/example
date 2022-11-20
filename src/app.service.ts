import { Injectable } from '@playwa/common';

@Injectable()
export class AppService {
  say(message: string): string {
    return 'You said: ' + message;
  }
}

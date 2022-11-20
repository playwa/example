import { 
  Param,
  Command,
  Controller,
  On,
  WAEvent
} from '@playwa/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Command('/say :text')
  async say(@Param('text') text: string) {
    return this.appService.say(text);
  }

  @On(WAEvent.MESSAGES_UPSERT)
  async onMessage(msg) {
    console.log(msg.messages[0]);
  }
}

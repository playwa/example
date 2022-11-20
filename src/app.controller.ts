import { 
  Param,
  Command,
  Controller,
} from '@playwa/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Command('/say :text')
  async say(@Param('text') text: string) {
    return this.appService.say(text);
  }
}

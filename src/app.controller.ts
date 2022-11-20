import { WASocket } from '@adiwajshing/baileys';
import { TemplateMessageBuilder } from '@playwajs/builders';

import { 
  Param,
  Command,
  Controller,
  On,
  WAEvent,
  ButtonComponent,
  WebSocket,
} from '@playwajs/common';

import { 
  Cron, 
  CronExpression 
} from '@playwajs/schedule';

import { AppService } from './app.service';

@Controller()
export class AppController {
  @WebSocket()
  socket: WASocket;

  constructor(private readonly appService: AppService) {}

  @Command('/say :text')
  async say(@Param('text') text: string) {
    return this.appService.say(text);
  }

  @Command('hello')
  async hello() {
    return new TemplateMessageBuilder()
      .setText('Welcome to PlayWajs')
      .setFooter('Sent from @playwajs')
      .addComponents({
        index: 0,
        quickReplyButton: {
          displayText: 'Hi',
          id: 'hi'
        }
      })
  }

  @ButtonComponent('hi')
  async onYesButtonClicked() {
    return 'Button clicked';
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    this.socket.sendMessage(process.env.OWN_JID!, {
      text: 'Send this message every 10 seconds'
    });
  }

  @On(WAEvent.CONNECTION_UPDATE)
  async onConnectionUpdate(msg) {
    console.log(msg)
  }
}

import { Module } from '@playwajs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ScheduleModule } from '@playwajs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
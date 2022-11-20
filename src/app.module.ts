import { Module } from '@playwa/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
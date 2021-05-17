import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsocketGatewayModule } from './websocket-gateway/websocket-gateway.module';

@Module({
  imports: [
    WebsocketGatewayModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

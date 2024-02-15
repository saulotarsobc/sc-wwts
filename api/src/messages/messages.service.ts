import { Injectable } from '@nestjs/common';
import { WwtsService } from 'src/wwts/wwts.service';

@Injectable()
export class MessagesService {
  constructor(private readonly wwts: WwtsService) {}

  async sendMessage(body: any) {
    return this.wwts.client
      .sendMessage(body.id, body.message)
      .then((data) => data)
      .catch((e: Error) => {
        return {
          msg: e.message,
        };
      });
  }
}

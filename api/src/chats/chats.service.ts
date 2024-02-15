import { Injectable } from '@nestjs/common';
import { WwtsService } from 'src/wwts/wwts.service';

@Injectable()
export class ChatsService {
  constructor(private readonly wwts: WwtsService) {}

  async findAll() {
    return this.wwts.client
      .getChats()
      .then((data) => data)
      .catch((e: Error) => {
        return {
          msg: e.message,
        };
      });
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

@Injectable()
export class WwtsService {
  constructor() {
    this.client.on('qr', (qr) => {
      // console.log('QR RECEIVED', qr);
      qrcode.generate(qr, { small: true });
    });

    this.client.on('ready', () => {
      console.log('Client is ready!');
    });

    // this.client.on('message', (message) => {
    //   console.log(message.body);
    // });

    this.client.initialize();
  }

  private readonly logger = new Logger(WwtsService.name);

  client = new Client({
    authStrategy: new LocalAuth({ clientId: 'CLIENT' }),
    puppeteer: {
      args: ['--no-sandbox'],
    },
  });

  // services
  async info() {
    return {
      ...this.client.info,
    };
  }
}

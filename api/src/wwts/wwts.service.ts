import { Injectable, Logger } from '@nestjs/common';
import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

@Injectable()
export class WwtsService {
  constructor() {
    this.client.on('qr', (qrCode) => {
      this.logger.debug('Código QR', qrCode);
      qrcode.generate(qrCode, { small: true });
    });

    this.client.on('ready', () => {
      this.logger.debug('Client is ready!');
    });

    this.client.on('auth_failure', () => {
      this.logger.debug('Autenticação falhou');
    });

    this.client.on('authenticated', () => {
      this.logger.debug('Autenticado');
    });

    this.client.on('change_battery', (batteryInfo) => {
      this.logger.debug('Alteração na bateria', batteryInfo);
    });

    this.client.on('change_state', (state) => {
      this.logger.debug('Estado alterado', state);
    });

    this.client.on('chat_archived', (chat) => {
      this.logger.debug('Chat arquivado', chat);
    });

    this.client.on('chat_removed', (chat) => {
      this.logger.debug('Chat removido', chat);
    });

    this.client.on('contact_changed', (contact) => {
      this.logger.debug('Contato alterado', contact);
    });

    this.client.on('disconnected', (reason) => {
      this.logger.debug('Desconectado', reason);
    });

    this.client.on('group_admin_changed', (groupId: any, isAdmin: any) => {
      this.logger.debug('Administrador de grupo alterado', groupId, isAdmin);
    });

    this.client.on('group_join', (notification) => {
      this.logger.debug('Entrada em grupo', notification);
    });

    this.client.on('group_leave', (notification) => {
      this.logger.debug('Saída de grupo', notification);
    });

    this.client.on(
      'group_membership_request',
      (groupId: any, contactId: any, contactName: any) => {
        this.logger.debug(
          'Solicitação de adesão ao grupo',
          groupId,
          contactId,
          contactName,
        );
      },
    );

    this.client.on('group_update', (notification) => {
      this.logger.debug('Atualização de grupo', notification);
    });

    this.client.on('incoming_call', (call) => {
      this.logger.debug('Chamada recebida', call);
    });

    this.client.on('media_uploaded', (media) => {
      this.logger.debug('Mídia enviada', media);
    });

    this.client.on('message', (message) => {
      this.logger.debug('Mensagem recebida', message);
    });

    this.client.on('message_ack', (message) => {
      this.logger.debug('Confirmação de mensagem', message);
    });

    this.client.on('message_create', (message) => {
      this.logger.debug('Mensagem criada', message);
    });

    this.client.on('message_edit', (oldMessage, newMessage) => {
      this.logger.debug('Mensagem editada', oldMessage, newMessage);
    });

    this.client.on('message_reaction', (reaction) => {
      this.logger.debug('Reação de mensagem', reaction);
    });

    this.client.on('message_revoke_everyone', (message) => {
      this.logger.debug('Revogação de mensagem para todos', message);
    });

    this.client.on('message_revoke_me', (message) => {
      this.logger.debug('Revogação de mensagem para mim', message);
    });

    this.client.on('ready', () => {
      this.logger.debug('Pronto para uso');
    });

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

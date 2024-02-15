import { Body, Controller, Get, Post } from '@nestjs/common';
import { WwtsService } from './wwts.service';
import { InviteV4Data } from 'whatsapp-web.js';

@Controller('client')
export class WwtsController {
  constructor(private readonly wwtsService: WwtsService) {}

  @Get('info')
  info() {
    return this.wwtsService.client.info;
  }

  @Post('acceptGroupV4Invite')
  acceptGroupV4Invite(@Body('inviteInfo') inviteInfo: InviteV4Data) {
    return this.wwtsService.client.acceptGroupV4Invite(inviteInfo);
  }

  @Post('acceptInvite')
  acceptInvite(@Body('inviteCode') inviteCode: string) {
    return this.wwtsService.client.acceptInvite(inviteCode);
  }

  @Post('addOrRemoveLabels')
  addOrRemoveLabels(
    @Body('labelIds') labelIds: string[],
    @Body('chatIds') chatIds: string[],
  ) {
    return this.wwtsService.client.addOrRemoveLabels(labelIds, chatIds);
  }

  @Post('approveGroupMembershipRequests')
  approveGroupMembershipRequests(
    @Body('groupId') groupId: string,
    @Body('options') options: any,
  ) {
    return this.wwtsService.client.approveGroupMembershipRequests(
      groupId,
      options,
    );
  }

  @Post('archiveChat')
  archiveChat(@Body('chatId') chatId: string) {
    return this.wwtsService.client.archiveChat(chatId);
  }

  @Post('createGroup')
  createGroup(
    @Body('title') title: string,
    @Body('participants') participants: string[],
    @Body('options') options: any,
  ) {
    return this.wwtsService.client.createGroup(title, participants, options);
  }

  @Post('deleteProfilePicture')
  deleteProfilePicture() {
    return this.wwtsService.client.deleteProfilePicture();
  }

  @Post('destroy')
  destroy() {
    return this.wwtsService.client.destroy();
  }

  @Get('blockedContacts')
  getBlockedContacts() {
    return this.wwtsService.client.getBlockedContacts();
  }

  @Post('chatById')
  getChatById(@Body('chatId') chatId: string) {
    return this.wwtsService.client.getChatById(chatId);
  }

  @Post('chatLabels')
  getChatLabels(@Body('chatId') chatId: string) {
    return this.wwtsService.client.getChatLabels(chatId);
  }

  @Get('chats')
  getChats() {
    return this.wwtsService.client.getChats();
  }

  @Post('chatsByLabelId')
  getChatsByLabelId(@Body('labelId') labelId: string) {
    return this.wwtsService.client.getChatsByLabelId(labelId);
  }

  @Post('commonGroups')
  getCommonGroups(@Body('contactId') contactId: string) {
    return this.wwtsService.client.getCommonGroups(contactId);
  }

  @Post('contactById')
  getContactById(@Body('contactId') contactId: string) {
    return this.wwtsService.client.getContactById(contactId);
  }

  @Get('contacts')
  getContacts() {
    return this.wwtsService.client.getContacts();
  }

  @Post('countryCode')
  getCountryCode(@Body('number') number: string) {
    return this.wwtsService.client.getCountryCode(number);
  }

  @Post('formattedNumber')
  getFormattedNumber(@Body('number') number: string) {
    return this.wwtsService.client.getFormattedNumber(number);
  }

  @Post('groupMembershipRequests')
  getGroupMembershipRequests(@Body('groupId') groupId: string) {
    return this.wwtsService.client.getGroupMembershipRequests(groupId);
  }

  @Post('inviteInfo')
  getInviteInfo(@Body('inviteCode') inviteCode: string) {
    return this.wwtsService.client.getInviteInfo(inviteCode);
  }

  @Post('labelById')
  getLabelById(@Body('labelId') labelId: string) {
    return this.wwtsService.client.getLabelById(labelId);
  }

  @Get('labels')
  getLabels() {
    return this.wwtsService.client.getLabels();
  }

  @Post('numberId')
  getNumberId(@Body('number') number: string) {
    return this.wwtsService.client.getNumberId(number);
  }

  @Post('profilePicUrl')
  getProfilePicUrl(@Body('contactId') contactId: string) {
    return this.wwtsService.client.getProfilePicUrl(contactId);
  }

  @Get('state')
  getState() {
    return this.wwtsService.client.getState();
  }

  @Get('wWebVersion')
  getWWebVersion() {
    return this.wwtsService.client.getWWebVersion();
  }

  @Post('initialize')
  initialize() {
    return this.wwtsService.client.initialize();
  }

  @Post('isRegisteredUser')
  isRegisteredUser(@Body('id') id: string) {
    return this.wwtsService.client.isRegisteredUser(id);
  }

  @Post('logout')
  logout() {
    return this.wwtsService.client.logout();
  }

  @Post('markChatUnread')
  markChatUnread(@Body('chatId') chatId: string) {
    return this.wwtsService.client.markChatUnread(chatId);
  }

  @Post('muteChat')
  muteChat(
    @Body('chatId') chatId: string,
    @Body('unmuteDate') unmuteDate: Date,
  ) {
    return this.wwtsService.client.muteChat(chatId, unmuteDate);
  }

  @Post('pinChat')
  pinChat(@Body('chatId') chatId: string) {
    return this.wwtsService.client.pinChat(chatId);
  }

  @Post('rejectGroupMembershipRequests')
  rejectGroupMembershipRequests(
    @Body('groupId') groupId: string,
    @Body('options') options: any,
  ) {
    return this.wwtsService.client.rejectGroupMembershipRequests(
      groupId,
      options,
    );
  }

  @Post('resetState')
  resetState() {
    return this.wwtsService.client.resetState();
  }

  @Post('searchMessages')
  searchMessages(@Body('query') query: string, @Body('options') options: any) {
    return this.wwtsService.client.searchMessages(query, options);
  }

  @Post('sendMessage')
  sendMessage(
    @Body('chatId') chatId: string,
    @Body('content') content: string,
    @Body('options') options: any,
  ) {
    return this.wwtsService.client.sendMessage(chatId, content, options);
  }

  @Post('sendPresenceAvailable')
  sendPresenceAvailable() {
    return this.wwtsService.client.sendPresenceAvailable();
  }

  @Post('sendPresenceUnavailable')
  sendPresenceUnavailable() {
    return this.wwtsService.client.sendPresenceUnavailable();
  }

  @Post('sendSeen')
  sendSeen(@Body('chatId') chatId: string) {
    return this.wwtsService.client.sendSeen(chatId);
  }

  @Post('setDisplayName')
  setDisplayName(@Body('displayName') displayName: string) {
    return this.wwtsService.client.setDisplayName(displayName);
  }

  @Post('setProfilePicture')
  setProfilePicture(@Body('media') media: any) {
    return this.wwtsService.client.setProfilePicture(media);
  }

  @Post('setStatus')
  setStatus(@Body('status') status: string) {
    return this.wwtsService.client.setStatus(status);
  }

  @Post('unarchiveChat')
  unarchiveChat(@Body('chatId') chatId: string) {
    return this.wwtsService.client.unarchiveChat(chatId);
  }

  @Post('unmuteChat')
  unmuteChat(@Body('chatId') chatId: string) {
    return this.wwtsService.client.unmuteChat(chatId);
  }

  @Post('unpinChat')
  unpinChat(@Body('chatId') chatId: string) {
    return this.wwtsService.client.unpinChat(chatId);
  }
}

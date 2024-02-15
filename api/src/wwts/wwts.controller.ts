import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { WwtsService } from './wwts.service';
import { InviteV4Data } from 'whatsapp-web.js';

@Controller('info')
export class WwtsController {
  constructor(private readonly wwtsService: WwtsService) {}

  @Get()
  info() {
    return this.wwtsService.client.info;
  }

  @Get()
  acceptGroupV4Invite(@Body('inviteInfo') inviteInfo: InviteV4Data) {
    return this.wwtsService.client.acceptGroupV4Invite(inviteInfo);
  }

  @Post('acceptInvite/:inviteCode')
  acceptInvite(@Param('inviteCode') inviteCode: string) {
    return this.wwtsService.client.acceptInvite(inviteCode);
  }

  @Post('addOrRemoveLabels')
  addOrRemoveLabels(
    @Body('labelIds') labelIds: string[],
    @Body('chatIds') chatIds: string[],
  ) {
    return this.wwtsService.client.addOrRemoveLabels(labelIds, chatIds);
  }

  @Post('approveGroupMembershipRequests/:groupId')
  approveGroupMembershipRequests(
    @Param('groupId') groupId: string,
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

  @Get('chatById/:chatId')
  getChatById(@Param('chatId') chatId: string) {
    return this.wwtsService.client.getChatById(chatId);
  }

  @Get('chatLabels/:chatId')
  getChatLabels(@Param('chatId') chatId: string) {
    return this.wwtsService.client.getChatLabels(chatId);
  }

  @Get('chats')
  getChats() {
    return this.wwtsService.client.getChats();
  }

  @Get('chatsByLabelId/:labelId')
  getChatsByLabelId(@Param('labelId') labelId: string) {
    return this.wwtsService.client.getChatsByLabelId(labelId);
  }

  @Get('commonGroups/:contactId')
  getCommonGroups(@Param('contactId') contactId: string) {
    return this.wwtsService.client.getCommonGroups(contactId);
  }

  @Get('contactById/:contactId')
  getContactById(@Param('contactId') contactId: string) {
    return this.wwtsService.client.getContactById(contactId);
  }

  @Get('contacts')
  getContacts() {
    return this.wwtsService.client.getContacts();
  }

  @Get('countryCode/:number')
  getCountryCode(@Param('number') number: string) {
    return this.wwtsService.client.getCountryCode(number);
  }

  @Get('formattedNumber/:number')
  getFormattedNumber(@Param('number') number: string) {
    return this.wwtsService.client.getFormattedNumber(number);
  }

  @Get('groupMembershipRequests/:groupId')
  getGroupMembershipRequests(@Param('groupId') groupId: string) {
    return this.wwtsService.client.getGroupMembershipRequests(groupId);
  }

  @Get('inviteInfo/:inviteCode')
  getInviteInfo(@Param('inviteCode') inviteCode: string) {
    return this.wwtsService.client.getInviteInfo(inviteCode);
  }

  @Get('labelById/:labelId')
  getLabelById(@Param('labelId') labelId: string) {
    return this.wwtsService.client.getLabelById(labelId);
  }

  @Get('labels')
  getLabels() {
    return this.wwtsService.client.getLabels();
  }

  @Get('numberId/:number')
  getNumberId(@Param('number') number: string) {
    return this.wwtsService.client.getNumberId(number);
  }

  @Get('profilePicUrl/:contactId')
  getProfilePicUrl(@Param('contactId') contactId: string) {
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

  @Get('isRegisteredUser/:id')
  isRegisteredUser(@Param('id') id: string) {
    return this.wwtsService.client.isRegisteredUser(id);
  }

  @Post('logout')
  logout() {
    return this.wwtsService.client.logout();
  }

  @Post('markChatUnread/:chatId')
  markChatUnread(@Param('chatId') chatId: string) {
    return this.wwtsService.client.markChatUnread(chatId);
  }

  @Post('muteChat/:chatId')
  muteChat(
    @Param('chatId') chatId: string,
    @Body('unmuteDate') unmuteDate: Date,
  ) {
    return this.wwtsService.client.muteChat(chatId, unmuteDate);
  }

  @Post('pinChat/:chatId')
  pinChat(@Param('chatId') chatId: string) {
    return this.wwtsService.client.pinChat(chatId);
  }

  @Post('rejectGroupMembershipRequests/:groupId')
  rejectGroupMembershipRequests(
    @Param('groupId') groupId: string,
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

  @Get('searchMessages')
  searchMessages(
    @Query('query') query: string,
    @Query('options') options: any,
  ) {
    return this.wwtsService.client.searchMessages(query, options);
  }

  @Post('sendMessage/:chatId')
  sendMessage(
    @Param('chatId') chatId: string,
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

  @Post('sendSeen/:chatId')
  sendSeen(@Param('chatId') chatId: string) {
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

  @Post('unarchiveChat/:chatId')
  unarchiveChat(@Param('chatId') chatId: string) {
    return this.wwtsService.client.unarchiveChat(chatId);
  }

  @Post('unmuteChat/:chatId')
  unmuteChat(@Param('chatId') chatId: string) {
    return this.wwtsService.client.unmuteChat(chatId);
  }

  @Post('unpinChat/:chatId')
  unpinChat(@Param('chatId') chatId: string) {
    return this.wwtsService.client.unpinChat(chatId);
  }
}

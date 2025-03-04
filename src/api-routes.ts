import vcards from 'vcards-js';
import {
  client,
  waContactToName,
  sendWAMessage,
  getUserContacts,
  longNumToDate,
  pairQr,
  unreadChats,
} from './client';
import {ReqRefDefaults, Request, ResponseToolkit} from '@hapi/hapi';
import fs from 'fs';
import * as emoji from 'node-emoji';
import {WAState, GroupChat} from 'whatsapp-web.js';
import {removeDiacritics, emojiToImage} from './helper';


export const api_test_handler = async (
 request: Request<ReqRefDefaults>,
  h: ResponseToolkit<ReqRefDefaults>
) => {
    return h.response({ response: 'OK' }).code(200);
};

'use strict';

import { accountSid, authToken, notificationServiceSid } from '../config';

export function service() {
  let client = require('twilio')(accountSid, authToken);

  return client.notify.v1.services(notificationServiceSid);
}

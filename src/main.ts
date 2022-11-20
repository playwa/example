import { 
  fetchLatestBaileysVersion,
  useMultiFileAuthState,
} from '@adiwajshing/baileys';

import { WAFactory } from '@playwa/core';
import { AppModule } from './app.module';

async function connectToWhatsapp() {
  const { version } = await fetchLatestBaileysVersion();
  const { state, saveCreds } = await useMultiFileAuthState('./sessions');

  const app = await WAFactory.create(AppModule, {
    version,
    auth: state,
    saveCreds,
    printQRInTerminal: true,
  });

  await app.listen();
}

connectToWhatsapp()

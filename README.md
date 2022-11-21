<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://avatars.githubusercontent.com/u/118643349" width="120" alt="Logo" />
  </a>
</p>

<p align="center">
  <p align="center">
   Lightweight and powerfull framework to jumpstart your <a href="http://web.whatsapp.com/" target="blank">Whatsapp</a> applications (node.js)
    <br/>
    <br/>
  </p>
</p>

<p align="center">
  <a href="https://github.com/playwa/playwa" target="_blank">
    <img src="https://img.shields.io/github/stars/playwa/playwa" alt="Stargazers" />
  </a>
  <a href="https://github.com/playwa/playwa" target="_blank">
    <img src="https://img.shields.io/github/issues/playwa/playwa" alt="Issues" />
  </a>
</p>

## Description
Playwa framework TypeScript example ✅

## Installing
```bash
npm i
```

## Running the app
```bash
# watch mode
npm run start:dev
```

## Examples
### Commands decorators
```ts
@Command('ping')
async getPing() {
  return 'Pong!';
}
```

### Events
```ts
@On('messages.upsert')
async onMessage(msg) {
  console.log(msg);
}
```

### Template messages
```ts
@Command('start')
async getStart() {
  return new TemplateMessageBuilder()
    .setText('Yes or no')
    .addComponents({
        index: 0,
        quickReplyButton: {
          displayText: 'Yes',
          id: 'yes-start'
        },
        // ...
      });
}
```

### Replying to buttons
```ts
@ButtonComponent('yes-start')
async getButtonReply() {
  return 'Button clicked!';
}
```

### Param decorators
Playwa provides useful param **@decorators** that you can use together with controllers.

| Decorator                     | Objects they represent                                                                                                                                                                                                                                                                                                                                        |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `@RemoteJid()`                | `msg.key.remoteJid`                                                                                                                                                                                                                                                                                                                                           |
| `@Message(property?: string)` | `msg` / `msg[property]`                                                                                                                                                                                                                                                                                                                                       |
| `@Param(property?: string)`   | `params` / `params[property]`                                                                                                                                                                                                                                                                                                                                 |
| `@Quoted()`                   | `msg.message.extendedTextMessage?.contextInfo`                                                                                                                                                                                                                                                                                                                |
| `@Content()`                  | `message.conversation` / `message.extendedTextMessage.text` / `message.listResponseMessage.title` / `message.templateButtonReplyMessage.selectedDisplayText` / `message.ephemeralMessage.message.conversation` / `message.ephemeralMessage.message.extendedTextMessage.text` / `message.ephemeralMessage.message.listResponseMessage.title` |

Then, you can simply use it wherever it fits your requirements.

```ts
@Command('whoami')
async whoami(@RemoteJid() remoteJid: string) {
  return 'Your jid: ' + remoteJid
}
```

## Stay in touch

* Author - [Natan Rodrigues](https://github.com/Nata4n)
* E-mail - [eusounatan@proton.me](mailto:eusounatan@proton.me)

## License

Distributed under the GNU 3.0 License. See [LICENSE](https://github.com/playwa/playwa/blob/main/LICENSE) for more information.

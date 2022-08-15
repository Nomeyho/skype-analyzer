
// TODO delegate to web worker

export class ConversationStatistics {
  constructor(conversation) {
    this.numberMesssages = conversation.MessageList.length;
    this.firstMessage = undefined;
    this.lastMessage = undefined;
    this.participants = [];
    this.messagesPerDay = {};
    this.messagesPerHour = {};
    this.messagesPerPerson = {};

    for (const message of conversation.MessageList) {
      this._updateFirstMessage(message);
      this._updateLastMessage(message);
      this._updateParticipants(message);
      this._updateMessagesPerDay(message);
      this._updateMessagesPerHour(message);
      this._updateMessagesPerPerson(message);
    }
  }

  _updateFirstMessage(message) {
    const time = new Date(message.originalarrivaltime);

    if (this.firstMessage == null || time < this.firstMessage) {
      this.firstMessage = time;
    }
  }

  _updateLastMessage(message) {
    const time = new Date(message.originalarrivaltime);

    if (this.lastMessage == null || time > this.lastMessage) {
      this.lastMessage = time;
    }
  }

  _updateParticipants(message) {
    if (!this.participants.includes(message.from)) {
      this.participants.push(message.from);
    }
  }

  _updateMessagesPerDay(message) {
    const time = new Date(message.originalarrivaltime);
    time.setHours(0);
    time.setMinutes(0);
    time.setSeconds(0);
    time.setMilliseconds(0);
    const key = time.toISOString();

    if (this.messagesPerDay[key] !== undefined) {
      this.messagesPerDay[key] += 1;
    } else {
      this.messagesPerDay[key] = 1;
    }
  }

  _updateMessagesPerHour(message) {
    const time = new Date(message.originalarrivaltime);
    const hour = time.getHours();
    const author = message.from;

    if (!this.messagesPerHour[author]) {
        this.messagesPerHour[author] = {};
    }

    if (this.messagesPerHour[author][hour] !== undefined) {
      this.messagesPerHour[author][hour] += 1;
    } else {
      this.messagesPerHour[author][hour] = 1;
    }
  }

  _updateMessagesPerPerson(message) {
    const from = message.from;

    if (this.messagesPerPerson[from] !== undefined) {
      this.messagesPerPerson[from] += 1;
    } else {
      this.messagesPerPerson[from] = 1;
    }
  }
}

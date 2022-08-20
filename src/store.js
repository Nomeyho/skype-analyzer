import { atom } from "jotai";

export const fileAtom = atom({
  filename: undefined,
  size: undefined,
  json: undefined,
});

export const exportDateAtom = atom((get) => get(fileAtom).json.exportDate);

export const selectedConversationAtom = atom(null);

export const conversationsAtom = atom((get) =>
  get(fileAtom).json.conversations.filter((conversation) => !conversation.id.includes("calllog"))
);

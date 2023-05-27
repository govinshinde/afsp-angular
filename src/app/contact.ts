import { GiftList } from "./gift-list";
import { Gift } from "./gift";
import { TagList } from "./tag-list";

export class Contact {
  householdId!: number;
  id!: number;
  name: string | undefined;
  type!: string;
  value!: string;
  giftList!: GiftList;
  tagList!: TagList;
  contactList!: Contact[];
}

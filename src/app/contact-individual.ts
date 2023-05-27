import { Contact } from "./contact";

export class ContactIndividual {
  contactId!: number;
  id!: number;
  firstName: string | undefined;
  lastName: string | undefined;
  phoneNumber: string | undefined;
  contactMethods!: Contact[];
}

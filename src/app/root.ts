import { Address } from "./address";
import { ContactIndividual } from "./contact-individual";
import { Gift } from "./gift";
import { GiftList } from "./gift-list";
import { Notes } from "./notes";
import { NotesList } from "./notes-list";
import { TagList } from "./tag-list";

export class Root {
  id!: number;
  name: string | undefined;
  email!: string;
  sortingParameter!: string;
  contactType: string | undefined;
  contactIndividuals!: ContactIndividual[];
  gift!: GiftList;
  tagList!: TagList;
  address!: Address;
  notesList!: Notes[];
}

import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
  try {
    const arrayContacts = await readContacts();

    const oneNewContact = createFakeContact();
    arrayContacts.push(oneNewContact);

    await writeContacts(arrayContacts);
  } catch (err) {
    console.error("Помилка при додаванни контакту", err.message);
  }
};

addOneContact();

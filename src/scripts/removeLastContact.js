import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    return;
  }

  const lastContact = contacts.pop(); // - останній контакт
  console.log('Контакт що видаляємо:', lastContact.name);

  writeContacts(contacts);
  console.log('Оновленні контакти:', contacts);
  return contacts;
};

removeLastContact();

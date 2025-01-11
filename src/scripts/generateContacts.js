import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    console.log(`Створюємо ${number} нових контактів;`);
    const arrayContacts = await readContacts(); //читаємо масив []

    for (let i = 1; i <= number; i++) {
      const newContact = createFakeContact(); // {}
      arrayContacts.push(newContact);
    }
    await writeContacts(arrayContacts);
  } catch (err) {
    console.error('Error', err.message);
  }
};

generateContacts(5);

//замість for(){}
//const newContacts = Array.from({ length: 5 }, createFakeContact);

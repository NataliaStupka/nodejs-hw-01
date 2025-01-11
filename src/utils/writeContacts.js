//const PATH_DB = "src/db/db.json"
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

//записувати дані у файл src/db/db.json. []
export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf8');
    console.log(`${updatedContacts} - Дані успішно записані у файл/Write.`);
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

//writeContacts([{id: 1, name: 'test', phone: '1234'}]);

//fs.writeFile(file, data [, options])
//fs.writeFile(куди записуємо, дані що записуємо, режим запису);

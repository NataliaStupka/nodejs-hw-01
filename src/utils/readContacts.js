//const PATH_DB = "src/db/db.json" // []
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

//зчитувати вміст файлу []
export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    //console.log("Вміст файлу:", data); //string
    console.log('Вміст файлу/Read:', JSON.parse(data)); //[{},{},{}]
    return JSON.parse(data);
  } catch (err) {
    console.error('Помилка читання файлу:', err.message);
    throw err;
  }
};

//fs.readFile(path [, options])

// - з документації -
//import { readFile } from "node:fs";
//
// export const readContacts = async () => {
//   readFile(PATH_DB, (err, data) => {
//     if (err) throw err;
//     return data;
//   });
// };

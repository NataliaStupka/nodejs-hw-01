import { faker } from "@faker-js/faker"; //бібліотека генерації реалістичних випадкових даних, таких як імена, телефонні номери, емейли, ...

export const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});

console.log("створили faker контакт!");

//createFakeContact - створює контакт з випадковими даними
//npm install --save-dev @faker-js/faker
//або
//npm i -D @faker-js/faker

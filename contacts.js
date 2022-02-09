const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((item) => item.id === contactId);
  return contact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const newContacts = contacts.filter((item) => item.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return newContacts;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { name, email, phone, id: "11" };
  const newContacts = contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return newContacts;
};

module.exports = { listContacts, getContactById, removeContact, addContact };

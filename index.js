const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContacts = await addContact(name, email, phone);
      console.log(newContacts);
      break;

    case "remove":
      const newContacts = await removeContact(id);
      console.log(newContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

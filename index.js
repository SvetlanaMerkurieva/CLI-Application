const { program } = require("commander");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "contact id")
  .option("-n, --name <type>", "contact name")
  .option("-e, --email <type>", "contact email")
  .option("-p, --phone <type>", "contact phone");

program.parse(process.argv);

const argv = program.opts();

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
      const arrContacts = await removeContact(id);
      console.log(arrContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

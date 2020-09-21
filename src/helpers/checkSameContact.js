export default function checkSameContact(newContact, contacts) {
  let checkedArr = contacts.find((contact) => contact.text === newContact.text);

  return checkedArr;
}

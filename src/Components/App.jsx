 import { useState } from 'react'
 import startContacts from '../Components/contact.json'
 import ContactForm from "./ContactForm/ContactForm";
 import SearchBox from "./SearchBox/SearchBox";
 import ContactList from "./ContactList/ContactList";

function App() {
  const[contacts, setContacts] = useState(startContacts);
  const [filter, setFilter] = useState('');


  const onDelete = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
   contact.name.toLowerCase().includes(filter.toLowerCase())
  );

 
  const addContact =(newContact)=>{
    setContacts((prevContact)=>{
      return[...prevContact, newContact]
    })
  }

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={filter} onFilter={setFilter}/>       
        <ContactList contacts={visibleContacts}  onDelete={onDelete}/>
      </div>
    </>
  );
}

export default App;

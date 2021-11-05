import { useState, useEffect } from 'react';

import { v4 } from 'uuid';

import Container from './Components/Container/Container'
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList'
import Filter from './Components/Filter/Filter';


function App() {
  
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? []
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);  

  const onChangeFind = event => {
    setFilter( event.currentTarget.value )
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => [
      ...prevContacts.filter(contact => contact.id !== contactId),
    ]);
  };

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: v4(),
      name,
      number,
    };
    
    if (
      contacts.find(({ name }) =>
        name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevContacts => [contact, ...prevContacts]);
    }
  };
  
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({name}) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  }; 
    

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onChangeFind} />
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </Container>
    );
  };

export default App;


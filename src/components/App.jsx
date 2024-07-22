import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    const data = JSON.parse(localStorage.getItem("contact"));

    return (
      data ?? [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = (value) => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (data) => {
    const newContact = { id: nanoid(), ...data };
    setContacts((prevContact) => [...prevContact, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContact) => {
      prevContact.filter((contact) => contact.id !== id);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox onSearch={handleFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;

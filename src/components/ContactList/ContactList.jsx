import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.wrapper}>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;

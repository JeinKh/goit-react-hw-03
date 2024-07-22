import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={s.wrapper}>
      {contacts.map((contact) => {
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          id={contact.id}
        />;
      })}
    </div>
  );
};

export default ContactList;

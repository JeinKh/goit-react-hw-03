import { FaRegUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";
const Contact = ({ onDelete, contact, id }) => {
  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <FaRegUser />
          {contact.name}
        </p>
        <p>
          <FaPhone />
          {contact.number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;

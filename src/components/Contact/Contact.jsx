import { FaRegUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";
const Contact = ({ onDelete, contact, id }) => {
  return (
    <li className={s.wrapper}>
      <div className={s.container}>
        <p>
          <FaRegUser />
          {contact.name}
        </p>
        <p>
          <FaPhone />
          {contact.number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} type="button" className={s.btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

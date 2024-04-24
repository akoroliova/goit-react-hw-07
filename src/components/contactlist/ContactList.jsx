import css from "./ContactList.module.css";
import Contact from "../contact/Contact.jsx";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";

const ContactList = () => {
  const allContactsData = useSelector(selectContacts);

  return (
    <div className={css.contactListContainer}>
      <ul className={css.contactListListElement}>
        {allContactsData.map((eachItem) => {
          const { id, name = "N/A", number = "N/A" } = eachItem;
          return (
            <li key={id} className={css.contactListItemElement}>
              <Contact contactId={id} name={name} number={number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

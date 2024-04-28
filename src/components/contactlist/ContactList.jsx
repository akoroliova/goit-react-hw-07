import css from "./ContactList.module.css";
import Contact from "../contact/Contact.jsx";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contactsSlice.js";

const ContactList = () => {
  const items = useSelector(selectVisibleContacts);

  if (items.length > 0)
    return (
      <div>
        <ul className={css.contactListListElement}>
          {items.map((eachItem) => {
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

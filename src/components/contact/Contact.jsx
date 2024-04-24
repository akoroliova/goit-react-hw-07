import css from "./Contact.module.css";
import { LuCat } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contactId, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.contactCardContainer}>
      <ul className={css.contactDataListElement}>
        <li className={css.contactDataItemElement}>
          <div className={css.contactDataIcon}>
            <LuCat />
          </div>
          <div className={css.contactDataText}>{name}</div>
        </li>
        <li className={css.contactDataItemElement}>
          <div className={css.contactDataIcon}>
            <LuPhone />
          </div>
          <div className={css.contactDataText}>{number}</div>
        </li>
      </ul>
      <div className={css.contactDeleteButtonContainer}>
        <button
          className={css.buttonDelete}
          onClick={() => {
            dispatch(deleteContact(contactId));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;

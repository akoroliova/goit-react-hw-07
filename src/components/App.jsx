import ContactForm from "./contactform/ContactForm.jsx";
import ContactList from "./contactlist/ContactList.jsx";
import SearchBox from "./searchbox/SearchBox.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchContacts from "../redux/contactsOps.js";

function App() {
  const dispatch = useDispatch();
  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Отримуємо частини стану
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  // Рендеримo розмітку в залежності від значень у стані
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </>
  );
}

export default App;

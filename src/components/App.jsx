import ContactForm from "./contactform/ContactForm.jsx";
import SearchBox from "./searchbox/SearchBox.jsx";
import ContactList from "./contactlist/ContactList.jsx";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;

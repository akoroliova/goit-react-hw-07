//файл для зберігання асинхронних генераторів екшенів
//Використовуй функцію createAsyncThunk для оголошення операцій.

import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./contactsSlice";

axios.defaults.baseURL = "https://6628e79e54afcabd073763bb.mockapi.io";

const fetchContacts = () => async (dispatch) => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get("/contacts");
    // Обробка даних (response.data це масив двадцяти об'єктів контактів. Це payload)
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};

export default fetchContacts;

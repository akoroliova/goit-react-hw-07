//файл для зберігання асинхронних генераторів екшенів
import axios from "axios";
//import { createAsyncThunk } from "@reduxjs/toolkit";
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

// const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
//   const response = await axios.get("/contacts");
//   return response.data;
// });

export default fetchContacts;

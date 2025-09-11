import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "../reducers/SkillsSlice/SkillsSlice";
import { vacanciesApi } from "../reducers/VacanciesApi/VacanciesApi";
import pageReducer from "../reducers/PageSlice/PageSlice";

export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    vacanciesApi: vacanciesApi.reducer,
    page: pageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacanciesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

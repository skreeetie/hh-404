import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Vacancies } from "./pages/Vacancies/Vacancies";
import { Routes, Route } from "react-router";
import { Header } from "./modules/Header";
import { theme } from "./theme.env";
import "./App.scss";
import { VacancyPage } from "./pages/VacancyPage/VacancyPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="vacancies" element={<Vacancies />} />
          <Route path="vacancies/:id" element={<VacancyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
};

import { useParams } from "react-router";
import { VacanciesList } from "../../modules/VacanciesList";
import { VacancyPage } from "../VacancyPage/VacancyPage";

export const Vacancies = () => {
  const { param } = useParams();
  if (param !== "moscow" && param !== "petersburg" && param !== undefined) {
    return <VacancyPage />;
  }
  return <VacanciesList />;
};

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Vacancy as VacancyType } from "../../env/vacancy.env";
import { Vacancy } from "../../components/Vacancy/Vacancy";
import style from "./style.module.scss";

interface VacancyInfo extends VacancyType {
  description: string;
}

export const VacancyInfo = () => {
  const { param: id } = useParams();
  const [vacancy, setVacancy] = useState<VacancyInfo>({
    alternate_url: "",
    area: {
      name: "",
    },
    id: "",
    employer: {
      name: "",
    },
    experience: {
      id: "",
    },
    name: "",
    salary: null,
    work_format: [],
    description: "",
  });
  useEffect(() => {
    const fetchVacancy = async () => {
      const res = await fetch(`https://api.hh.ru/vacancies/${id}`);
      const data = await res.json();
      setVacancy(data);
    };
    fetchVacancy();
  }, [id]);

  return (
    <section className={style.info}>
      <Vacancy
        name={vacancy.name}
        exp_id={vacancy.experience.id}
        alternate={vacancy.alternate_url}
        employer={vacancy.employer.name}
        salary={vacancy.salary}
        place={vacancy.area.name}
        work_format={vacancy.work_format}
        id={vacancy.id}
        clicked
      />
      <div className={style.description}>
        <h3 className={style.title}>Компания</h3>
        <div dangerouslySetInnerHTML={{ __html: vacancy.description }}></div>
      </div>
    </section>
  );
};

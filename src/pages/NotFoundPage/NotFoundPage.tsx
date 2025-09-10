import { Button } from "@mantine/core";
import style from "./style.module.scss";

export const NotFoundPage = () => {
  return (
    <section className={style.section}>
      <div className={style.top}>
        <h1 className={style.title}>Упс! Такой страницы не существует</h1>
        <Button
          component="a"
          color="primary.4"
          size="md"
          variant="filled"
          classNames={{ root: style.wrapper, label: style.return }}
          href="#/vacancies"
        >
          На главную
        </Button>
      </div>
      <p className={style.text}>Давайте перейдем к началу</p>
      <div className={style.gif}></div>
    </section>
  );
};

// Imports
import { IEducationItemProps } from "./Education.types";

// Functions
const Education = () => (
  <section className="page-width section-padding-y">
    <h2 className="font-bold text-[#212529]">Educational background</h2>
    <ul>
      <EducationItem
        title="Mediacollege Amsterdam"
        date="2017 - 2020"
        description="I studied at the Mediacollege Amsterdam, where I learned the basics of web development. I also learned how to work in a team and how to manage a project."
        img="/images/mediacollege-amsterdam.png"
      />
    </ul>
  </section>
);

const EducationItem = ({
  title,
  date,
  description,
  img,
}: IEducationItemProps) => (
  <li>
    <article>
      <p>{date}</p>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  </li>
);

// Exports
export default Education;

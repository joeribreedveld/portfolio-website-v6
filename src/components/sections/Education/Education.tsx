// Imports
import { IEducationItemProps } from "./Education.types";
import education from "../../../../public/data/education.json";
import classNames from "classnames";

// Functions
const Education = () => (
  <section className="page-width section-padding-y flex flex-col gap-12">
    <h2 className="font-bold text-[#212529]">Educational background</h2>
    <ul className="flex flex-col gap-8 lg:flex-row">
      {education.map((educationItem) => (
        <EducationItem
          title={educationItem.title}
          date={educationItem.date}
          description={educationItem.description}
          img={educationItem.img}
          key={educationItem.id}
        />
      ))}
    </ul>
  </section>
);

const EducationItem = ({
  title,
  date,
  description,
  img,
}: IEducationItemProps) => (
  <li
    className="h-[20rem] rounded bg-cover bg-center p-12 lg:w-1/2"
    style={{ backgroundImage: `url(${img})` }}
  >
    <article className="flex h-full flex-col justify-end gap-4">
      <p className="text-xs font-light text-[#E5E5E5]">{date}</p>
      <h4 className="font-medium text-white">{title}</h4>
      <p className="text-xs font-light text-[#E5E5E5]">{description}</p>
    </article>
  </li>
);

// Exports
export default Education;

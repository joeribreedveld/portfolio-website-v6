// Imports
import { IEducationItemProps } from "./Education.types";

// Functions
const Education = () => (
  <section className="page-width section-padding-y flex flex-col gap-12">
    <h2 className="font-bold text-[#212529]">Educational background</h2>
    <ul className="flex flex-col gap-8 lg:flex-row">
      <EducationItem
        title="De Amsterdamse MAVO"
        date="08.08.2021"
        description="I studied at the Mediacollege Amsterdam, where I learned the basics of web development. I also learned how to work in a team and how to manage a project."
        img="/images/mediacollege-amsterdam.png"
      />
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
  <li className="h-[20rem] rounded bg-[#343A40] p-12">
    <article className="flex h-full flex-col justify-end gap-4">
      <p className="text-xs font-light text-[#E5E5E5]">{date}</p>
      <h4 className="font-medium text-white">{title}</h4>
      <p className="text-xs font-light text-[#E5E5E5]">{description}</p>
    </article>
  </li>
);

// Exports
export default Education;

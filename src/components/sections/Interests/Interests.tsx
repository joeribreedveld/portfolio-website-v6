// Imports
import { IInterestsItemProps } from "./Interests.types";
import services from "../../../../public/data/interests.json";

// Functions
const Interests = () => (
  <section
    className="page-width section-padding-y flex flex-col gap-12"
    id="interests"
  >
    <h2 className="font-bold text-[#212529]">Passions and interests</h2>
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((interestsItem) => (
        <InterestsItem
          title={interestsItem.title}
          description={interestsItem.description}
          img={interestsItem.img}
          key={interestsItem.id}
        />
      ))}
    </ul>
  </section>
);

const InterestsItem = ({ title, description, img }: IInterestsItemProps) => (
  <li
    className="h-[25rem] w-full rounded bg-cover bg-center p-12"
    style={{ backgroundImage: `url(${img})` }}
  >
    <article className="flex h-full flex-col justify-end gap-4">
      <p className="text-xs font-light text-[#E5E5E5]">{title}</p>
      <h4 className="font-medium text-[#F8F9FA]">{description}</h4>
    </article>
  </li>
);

// Exports
export default Interests;

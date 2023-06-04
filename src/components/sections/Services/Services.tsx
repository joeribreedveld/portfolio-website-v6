// Imports
import { IServicesItemProps } from "./Services.types";
import services from "../../../../public/data/services.json";

// Functions
const Services = () => (
  <section
    className="page-width section-padding-y flex flex-col gap-12"
    id="education"
  >
    <h2 className="font-bold text-[#212529]">Services offered</h2>
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {services.map((servicesItem) => (
        <ServicesItem
          title={servicesItem.title}
          description={servicesItem.description}
          img={servicesItem.img}
          key={servicesItem.id}
        />
      ))}
    </ul>
  </section>
);

const ServicesItem = ({ title, description, img }: IServicesItemProps) => (
  <li
    className="h-[20rem] w-full rounded bg-cover bg-center p-12"
    style={{ backgroundImage: `url(${img})` }}
  >
    <article className="flex h-full flex-col justify-end gap-4">
      <p className="text-xs font-light text-[#E5E5E5]">{title}</p>
      <h4 className="font-medium text-white">{description}</h4>
    </article>
  </li>
);

// Exports
export default Services;

// Imports
import Image from "next/image";
import career from "../../../../public/data/career.json";

// Functions
const Career = () => (
  <section
    className="min-w-screen relative flex justify-between bg-[#212529]"
    id="about"
  >
    <section className="section-padding-y min-w-screen page-width mr-1/2 flex flex-col gap-12">
      <h2 className="font-medium text-[#E5E5E5]">Career development</h2>
      <ul className="flex flex-col gap-12">
        {career.map((careerItem) => (
          <CareerItem
            key={careerItem.id}
            title={careerItem.title}
            img={careerItem.img}
            description={careerItem.description}
            date={careerItem.date}
          />
        ))}
      </ul>
    </section>
    <div className="absolute right-0 h-full max-w-[50vw]">
      <section className="relative hidden h-full w-[25vw] bg-red-500 lg:block xl:w-[50vw]">
        <Image
          className="object-cover"
          src="/img/career/background.jpg"
          alt="Career background"
          layout="fill"
        />
      </section>
    </div>
  </section>
);

const CareerItem = ({ title, img, description, date }: TCareerItemProps) => (
  <li className="flex flex-col gap-8 sm:flex-row">
    <section className="relative aspect-square h-[20rem] sm:h-[180px] sm:min-w-[180px]">
      <Image
        className="rounded object-cover"
        src={img}
        alt={title}
        layout="fill"
      />
    </section>
    <section className="flex flex-col gap-4">
      <p className="text-xs font-light text-[#E5E5E5]">{date}</p>
      <h4 className="font-medium text-[#E5E5E5]">{title}</h4>
      <p className="text-xs font-light text-[#E5E5E5]">{description}</p>
    </section>
  </li>
);

// Exports
export default Career;

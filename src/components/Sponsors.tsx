import { Radar } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "WePlay Ventures",
  },
  {
    icon: <Radar size={34} />,
    name: "Re-Pie Asset Management",
  },
  {
    icon: <Radar size={34} />,
    name: "Boğaziçi Ventures",
  },
  {
    icon: <Radar size={34} />,
    name: "Actera Group",
  },
  {
    icon: <Radar size={34} />,
    name: "212 Ventures",
  },
  {
    icon: <Radar size={34} />,
    name: "Startupfon",
  },

];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Yatırımcılar ve kurucular

      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-base  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

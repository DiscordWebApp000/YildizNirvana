import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Fikir Toplama",
    description:
      "Yaratıcı konseptler geliştirip en iyi oyun fikirlerini şekillendiriyoruz.",
  },
  {
    icon: <MapIcon />,
    title: "Tasarım Süreci",
    description:
      "Hikayenizi görsel ve teknik açıdan mükemmel bir deneyime dönüştürüyoruz.",
  },
  {
    icon: <PlaneIcon />,
    title: "Test Aşaması",
    description:
      "Oyunu detaylı testlerle optimize edip en iyi performansı sağlıyoruz.",
  },
  {
    icon: <GiftIcon />,
    title: "Lansman Hazırlığı",
    description:
      "Oyununuzu piyasaya sunuyor ve sürdürülebilir destek sağlıyoruz.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Nasıl{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Çalışıyoruz?{" "}
        </span>
        Adım adım
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

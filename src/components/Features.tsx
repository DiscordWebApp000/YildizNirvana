import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Mobil Uyumlu Tasarım",
    description:
      "Her cihazda mükemmel oyun deneyimi sunan, duyarlı ve optimize edilmiş tasarım anlayışı ile oyuncularınızı her an bağlayın.",
    image: image4,
  },
  {
    title: "Sezgisel Oyun Özellikleri",
    description:
      "Yüksek kaliteli grafikler, akıcı oynanış ve etkileyici özelliklerle oyuncularınıza benzersiz bir deneyim sunun.",
    image: image3,
  },
  {
    title: "Efsanevi Oyun Hikayesi",
description:
  "Derinlemesine işlenmiş hikaye kurgusu ve karakterlerle oyuncularınızı büyüleyin, onları unutulmaz bir yolculuğa çıkarın.",
image: image,
  },
];

const featureList: string[] = [
  "Tema Seçenekleri",
  "Kullanıcı Yorumları",
  "Oyun Özellikleri",
  "Fiyatlandırma Planları",
  "Bize Ulaşın",
  "Ekibimiz",
  "Mobil Uyumlu",
  "Modern Oyunlar",
  "Minimalist",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Hairka{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Özelikler !
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

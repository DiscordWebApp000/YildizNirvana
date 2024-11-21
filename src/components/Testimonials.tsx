import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Murat Özdemir",
    userName: "@murat_ozdemir",
    comment: "Oyun projelerimizi onlara teslim ettik ve sonuç harikaydı. Süreç boyunca sürekli destek aldık ve her şey zamanında teslim edildi.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Zeynep Aydın",
    userName: "@zeynep_aydin",
    comment:
      "İşbirliği çok verimli geçti. Onların geliştirdiği oyunlar gerçekten hedef kitlemize hitap etti ve mükemmel bir geri dönüş aldık.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Ali Can",
    userName: "@ali_can",
    comment:
      "Oyun projelerinin pazarlama süreci mükemmel bir şekilde yönetildi. Hem oyunların kalitesi hem de pazarlama stratejileri çok başarılıydı.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Serkan Yılmaz",
    userName: "@serkan_yilmaz",
    comment:
      "Yaratıcı süreçlerinden ve profesyonelliklerinden çok etkilendim. Oyun konseptlerini harika bir şekilde geliştirdiler ve her şey mükemmel sonuç verdi.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Büşra Demir",
    userName: "@busra_demir",
    comment:
      "Oyun geliştirme sürecini onlar yönetti ve her aşamada bizimle çok yakın bir işbirliği içinde oldular. Sonuç gerçekten beklentilerimizin ötesindeydi.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Cem Arslan",
    userName: "@cem_arslan",
    comment:
      "Test ettiğimiz oyun gerçekten heyecan vericiydi. Gerçekten yaratıcı ve kaliteli işler çıkarıyorlar. Her projede profesyonellikleriyle öne çıkıyorlar.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
      Neden Oyun Şirketimizi 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Seviyorlar?{" "}
        </span>
        
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

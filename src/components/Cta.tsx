import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
          Tüm Oyun
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Fikirleriniz ve Konseptleriniz {" "}
            </span>
            Tek Bir Kuruluşda
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
          Biz, oyun projelerinizi tek bir platformda toplayarak tasarım, geliştirme ve yönetim süreçlerinizi kolaylaştırıyoruz. Fikirlerinizi hayata geçirmek için her aşamada yanınızdayız.
          </p>  
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto"><a href="#newsletter">İletişim</a></Button>
          {/* <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            View all features
          </Button> */}
        </div>
      </div>
    </section>
  );
};

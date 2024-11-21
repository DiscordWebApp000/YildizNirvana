import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Message sent!");
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          İletişime{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Geçin
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
        Sizden haber almak isteriz. Bize bir mesaj gönderin!
        </p>

        <form
          className="flex flex-col w-full md:w-6/12 lg:w-4/12 mx-auto gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="İsminiz"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="name"
          />
          <Input
            placeholder="Mail Adresiniz"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
          />
          <textarea
            placeholder="Mesajınız"
            className="bg-muted/50 dark:bg-muted/80 p-4 rounded-lg"
            aria-label="message"
          />
          
          <Button type="submit">Mesajı gönder</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Oyun geliştirme süreci nasıl işliyor?",
    answer: "Oyun geliştirme sürecimiz, konsept tasarımından başlayıp, prototip oluşturma, oyun tasarımı, geliştirme, test etme ve nihai yayınlama aşamalarını içeriyor. Her aşamada sizinle iletişimde kalarak, taleplerinize uygun çözümler üretiyoruz.",
    value: "item-1",
  },
  {
    question: "Bir oyun geliştirme süreci ne kadar sürer?",
    answer: "Oyun geliştirme süresi, oyunun karmaşıklığına ve özelliklerine göre değişir. Basit bir mobil oyun birkaç ayda tamamlanabilirken, daha karmaşık oyunlar yıllık süreçler gerektirebilir. Proje başlangıcında size bir zaman çizelgesi sunuyoruz.",
    value: "item-2",
  },
  {
    question: "Oyunların tasarımı nasıl yapılır?",
    answer: "Oyun tasarımı sürecinde, oyun türüne ve hedef kitlenize uygun görseller, sesler, mekanikler ve hikayeler oluşturuyoruz. Tasarım aşamasında sizin geri bildirimleriniz doğrultusunda şekillendirme yapıyoruz.",
    value: "item-3",
  },
  {
    question: "Oyun geliştirme sürecinde bizimle nasıl iletişim kuruyorsunuz?",
    answer: "Proje sürecinde düzenli toplantılar yaparak, oyun tasarımı, geliştirme ve test aşamaları hakkında sizi bilgilendiriyoruz. Ayrıca e-posta, telefon ya da proje yönetim araçları üzerinden sürekli iletişimde kalabiliyoruz.",
    value: "item-4",
  },
  {
    question: "Özel özellikler veya modlar eklemek mümkün mü?",
    answer: "Evet, oyunlarınıza özel özellikler veya modlar ekleyebiliriz. İhtiyaçlarınızı belirttikten sonra, teknik ekibimiz sizin için özel çözümler geliştirebilir.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Sıkça Sorulan {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Sorular
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Hala Sorunuzmu Var?{" "}
        <a
          rel="noreferrer noopener"
          href="#newsletter"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          İletişim
        </a>
      </h3>
    </section>
  );
};

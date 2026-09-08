import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What services does Famcloud offer?",
    answer:
      "Famcloud provides cloud computing and software engineering services, helping businesses leverage technology to drive innovation and growth.",
  },
  {
    question: "What is your experience with cloud platforms?",
    answer:
      "Our team has extensive experience with leading cloud platforms, including AWS, and can help you navigate the best solutions for your business.",
  },
  {
    question: "How can Famcloud help my business?",
    answer:
      "We can help your business by providing customized cloud and software solutions that improve efficiency, scalability, and innovation.",
  },
  {
    question: "What is your approach to software development?",
    answer:
      "Our approach is centered around agile methodologies, ensuring flexibility, collaboration, and rapid delivery of high-quality software solutions.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance services to ensure your cloud and software solutions continue to meet your evolving business needs.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on complexity and scope, but we work closely with clients to establish realistic timelines and deliver results-driven solutions.",
  },
  {
    question: "How can I get started with Famcloud?",
    answer:
      "You can get started by contacting us through our website or reaching out directly to discuss your project requirements and explore how we can help your business thrive.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-t border-line bg-surface px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <p className="eyebrow mb-6">FAQ</p>
          <h2 className="text-balance text-4xl tracking-[-0.05em] sm:text-6xl">
            Frequently asked
            <br />
            <span className="text-signal">questions.</span>
          </h2>
          <p className="mt-8 max-w-sm text-muted-foreground">
            Got questions? We have got answers.
          </p>
        </div>
        <div className="border-t border-line">
          {faqs.map(({ question, answer }, index) => {
            const open = openIndex === index;
            return (
              <div key={question} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg tracking-tight transition-colors hover:text-signal"
                  >
                    {question}
                    <Plus
                      className={`size-5 shrink-0 text-signal transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-6 text-sm leading-6 text-muted-foreground">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

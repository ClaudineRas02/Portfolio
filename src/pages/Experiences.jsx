import Card from "../components/Card";
import Reveal from "../components/Reveal";
import experiences from "../data/experiences";

export default function Experience() {
  return (
    <section
      id="experience"
      className="snap-start min-h-screen scroll-mt-24 bg-[#0d1117] px-6 pb-16 pt-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal
          as="h2"
          className="about-title-sour-gummy text-center text-5xl text-[#e63946] md:text-6xl"
        >
          Expériences
        </Reveal>

        <div className="mt-12 space-y-8">
          {experiences.map((experience, index) => (
            <Reveal key={experience.id} delay={index * 100}>
              <Card
                icon={<experience.icon size={22} />}
                title={experience.role}
                description={experience.summary}
                className="mx-auto w-full max-w-4xl border-gray-700 bg-[#131726] p-8"
                descriptionClassName="mt-1 text-lg leading-9 text-gray-200"
              >
                <div className="w-full">
                  <p className="text-base font-semibold text-[#e63946]">{experience.company}</p>
                  <p className="text-sm text-gray-300">{experience.period}</p>
                </div>

                {experience.highlights.map((item) => (
                  <div
                    key={`${experience.id}-${item.title}`}
                    className="w-full max-w-60 rounded-xl border border-gray-700 bg-[#171c2e] px-4 py-3 text-left sm:w-[calc(50%-0.75rem)] sm:max-w-55 lg:w-[calc(33.333%-0.9rem)] lg:max-w-52.5"
                  >
                 
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-gray-300">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

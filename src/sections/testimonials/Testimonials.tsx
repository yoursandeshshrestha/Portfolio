import { Tweet } from "react-tweet";

export default function Testimonials() {
  const tweetIds = [
    "1994323345181925492",
    "1994334621786382619",
    "1994354854047990081",
    "1994366251527983176",
    "1994292745360257214",
    "1994309878106738933",
    "1994448328688292072",
    "1994384946270724395",
    "1994816032050221289",
    "1994459639526633645",
    "1994690886664687661",
    "1995388651568828663",
  ];

  return (
    <section className="mt-20 sm:mt-32 lg:mt-40">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#070B28]">
          What people say about me
        </h2>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-1">
        {tweetIds.map((id, index) => (
          <div
            key={id}
            className={`w-full md:w-[calc(50%-${
              index === 0 ? "2px" : "4px"
            })] lg:w-[calc(33.333%-${
              index === 0 ? "1.5px" : "7px"
            })] tweet-container`}
          >
            <Tweet id={id} />
          </div>
        ))}
      </div>
    </section>
  );
}

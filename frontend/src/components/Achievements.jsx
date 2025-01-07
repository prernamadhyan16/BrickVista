import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { LiaCertificateSolid } from "react-icons/lia";

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  const statistics = [
    { label: "Happy Clients", value: 12 },
    { label: "Different Cities", value: 3 },
    { label: "Projects Completed", value: 12 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const top = aboutSection.getBoundingClientsRect().top;
        const isVisible = top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };
    window.addEventListener("scroll", handleScroll);
    //cleanup function to remove event listers
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="mx-auto max-w-[1440px]">
      {/* CONTAINER */}
      <div className="flex flex-col xl:flex-row">
        {/* LEFT SIDE */}
        <div className="flex-[6] flex justify-cnter flex-col bg-[#867889] px-6 lg:px-12 py-16">
          <h2 className="h2 text-white">Our Achievements</h2>
          <p className="py-5 max-w-[47rem] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            ducimus commodi atque ipsum enim voluptates, numquam aperiam.
            Doloribus, eaque ab! Ex eaque expedita doloremque perferendis odit
            velit? Dolorum, dignissimos minima.
          </p>
          <div className="flex flex-wrap gap-4">
            {statistics.map((statistics, index) => (
              <div key={index} className="p-4 rounded-lg">
                <div className="flex items-center gap-1 text-white">
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={statistics.value}
                    duration={10}
                    delay={1}
                  >
                    {({ countUpRef }) => (
                      <h3 ref={countUpRef} className="text-5xl font-sans"></h3>
                    )}
                  </CountUp>
                  <h4 className="regular-32">k+</h4>
                </div>
                <p className="text-white capitalize pt-2">{statistics.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex-[2] relative bg-primary px-6 lg:px-12 py-16 flexCenter">
            <div className="p-4 rounded-lg flexCenter flex-col xl:-rotate-90">
                <span className="relative bottom-8 p-3 flex items-center rounded-full"><LiaCertificateSolid className="text-5xl text-black"/>
                </span>
                <span className="relative bottom-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eveniet est amet voluptatum ipsa harum beatae expedita quod dolore, asperiores cupiditate neque dolorem quasi quisquam, illum nemo minus maxime doloremque.</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

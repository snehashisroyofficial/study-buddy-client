import { FaPlus } from "react-icons/fa6";

const FaqSection = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="dark:bg-gray-800 dark:text-white rounded-xl"
    >
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 ">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300 gap-4">
          <details>
            <summary className="py-2 outline-none cursor-pointer text-xl">
              How do I create an assignment?
            </summary>
            <div className="px-4 pb-4">
              <p className="text-base">
                Step-by-step guide on crafting engaging assignments with clear
                instructions and options for adding files or multimedia.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer text-xl">
              Who can see the assignments I create?
            </summary>
            <div className="px-4 pb-4">
              <p className="text-base">
                Explains privacy settings and options for sharing assignments
                publicly or with specific users.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer text-xl">
              How do I grade and give feedback on assignments?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p className="text-base">
                Outlines the grading process, including rubrics, comment
                sections, and file annotation tools (if available).
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer text-xl ">
              Can I collaborate with others on an assignment?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p className="text-base">
                Explains if team assignments are supported and how users can
                collaborate during the creation process.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer text-xl">
              How do I manage my account and privacy settings?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p className="text-base">
                Provides information on editing user profiles, setting
                preferences, and controlling how your information is shared.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

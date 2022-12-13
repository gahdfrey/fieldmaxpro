import React, { useState } from "react";

const Career = () => {
  const [active, setActive] = useState(0);

  const handleClick = (value) => {
    if (active === value) {
      setActive(0);
    } else {
      setActive(value);
    }
  };
  return (
    <div className="bg-[#f9f9f9] w-full py-[180px]">
      <h1 className="text-[60px] font-bold text-center text-[#E03E27] mb-2">
        We Are Hiring
      </h1>
      <div className="max-w-[1170px] mx-auto md:grid grid-cols-2 gap-8 px-2 py-5  ">
        {/* grid-cols-[minmax(max-content_1fr)_minmax(max-content_1fr)] */}
        <div className="acc-1 shadow-3xl rounded-xl px-[40px] h-fit  bg-white">
          <div className="max-h-[41rem] min-h-[44.3rem]">
            <h2 className="uppercase text-[32px] font-roboto font-bold leading-[60px] tracking-[1px] my-[32px] text-center">
              marketing manager
            </h2>
            <p className="py-[12.8px] text-[19.2px] font-lato">
              We&rsquo;re looking for a flexible and versatile marketer who will be
              responsible for the growth of our brand and services.
            </p>
            <p className="py-[12.8px] text-[19.2px] font-lato">
              Your responsibilities include tracking and analyzing the
              performance of advertising campaigns, managing the marketing
              budget and ensuring that all marketing materials are in line with
              our brand identity. To be successful in this role, you should have
              hands-on experience with web analytics tools and be able to turn
              creative ideas into effective advertising projects.
            </p>
            <p className="py-[12.8px] text-[19.2px] font-lato">
              Strong experience with content creation and content creation
              management will be an advantage.
            </p>
            <p className="py-[12.8px] text-[19.2px] font-lato">
              Ultimately, you will help us build and maintain a strong and
              consistent brand through a wide range of online and offline
              marketing channels.
            </p>
          </div>
          {active === 1 && (
            <div>
              <h1 className="uppercase text-[32px] font-roboto font-bold leading-[60px] tracking-[1px] my-[32px] text-center">
                JOB DESCRIPTION
              </h1>
              <ul className="list-disc text-[19.2px] font-lato">
                <li className="py-[12.8px]">
                  Develop strategies and tactics to get the word out about our
                  company and drive qualified traffic to our front door
                </li>
                <li className="py-[12.8px]">
                  Deploy successful marketing campaigns and own their
                  implementation from ideation to execution
                </li>
                <li className="py-[12.8px]">
                  Experiment with a variety of organic and paid acquisition
                  channels like content creation, content curation, pay per
                  click campaigns, event management, publicity, social media,
                  lead generation campaigns, copywriting, performance analysis
                </li>
                <li className="py-[12.8px]">
                  Produce valuable and engaging content for our website and blog
                  that attracts and converts our target groups
                </li>
                <li className="py-[12.8px]">
                  Build strategic relationships and partner with key industry
                  players, agencies and vendors
                </li>
                <li className="py-[12.8px]">
                  Prepare and monitor the marketing budget on a quarterly and
                  annual basis and allocate funds wisely
                </li>
                <li className="py-[12.8px]">
                  Oversee and approve marketing material, from website banners
                  to hard copy brochures and case studies
                </li>
                <li className="py-[12.8px]">
                  Measure and report on the performance of marketing campaigns,
                  gain insight and assess against goals
                </li>
                <li className="py-[12.8px]">
                  Analyze consumer behavior and adjust email and advertising
                  campaigns accordingly
                </li>
                <li className="py-[12.8px]">
                  Developing strategies and tactics to boost the company&rsquo;s Brand
                  and drive qualified traffic from multiple channels
                </li>
                <li className="py-[12.8px]">
                  Deploying successful marketing campaigns from ideation to
                  execution with a heavy tilt towards digital channels
                </li>
                <li className="py-[12.8px]">
                  Experimenting with various organic and paid acquisition
                  channels
                </li>
              </ul>
              <h1 className="uppercase text-[32px] font-roboto font-bold leading-[60px] tracking-[1px] my-[32px] text-center">
                REQUIREMENTS AND SKILLS
              </h1>
              <ul className="list-disc  text-[19.2px] font-lato">
                <li className="py-[12.8px]">
                  Demonstrable experience in marketing together with the
                  potential and attitude required to learn
                </li>
                <li className="py-[12.8px]">
                  Proven experience in identifying target audiences and in
                  creatively devising and leading across channels marketing
                  campaigns that engage, educate and motivate
                </li>
                <li className="py-[12.8px]">
                  Solid knowledge of website analytics tools (e.g., Google
                  Analytics, NetInsight, Omniture, WebTrends)
                </li>
                <li className="py-[12.8px]">
                  Experience in setting up and optimizing Google Adwords
                  campaigns
                </li>
                <li className="py-[12.8px]">
                  Numerically literate, comfortable working with numbers, making
                  sense of metrics and processing figures with spreadsheets
                </li>
                <li className="py-[12.8px]">
                  A sense of aesthetics and a love for great copy and witty
                  communication
                </li>
                <li className="py-[12.8px]">
                  Up-to-date with the latest trends and best practices in online
                  marketing and measurement
                </li>
                <li className="py-[12.8px]">
                  BSc/MSc degree in Marketing or related field
                </li>
              </ul>
            </div>
          )}
          <button
            onClick={() => handleClick(1)}
            className="bg-[#E03E27] text-white rounded-sm px-[20px] py-[10px] mt-10 hover:translate-y-[-2px] ease-in duration-300"
          >
            {active === 1 ? "Read Less" : "Read More..."}
          </button>
          <p className="my-4">
            To apply send cv to{" "}
            <a href="info@papyrusfieldforce.com" className="text-[#E03E27]">
              info@papyrusfieldforce.com
            </a>
          </p>
        </div>

        <div className="acc-2 shadow-3xl rounded-xl px-[40px] bg-white h-fit ">
          <div className="max-h-[50rem] min-h-[41rem]">
            <h2 className="uppercase text-[32px] font-roboto font-bold leading-[60px] tracking-[1px] my-[32px] text-center">
              IOS DEVELOPER
            </h2>

            <p className="py-[12.8px] text-[19.2px] font-latol">
              We&rsquo;re looking to hire a talented iOS developer to design,build,
              and maintain the next generation of iOS applications. Your primary
              focus will be developing iOS application for the latest Apple
              mobile devices.
            </p>
            <p className="py-[12.8px] text-[19.2px] font-lato">
              Your duties may include collaborating with the design team for new
              application features,identifying and fixing application
              bottlenecks,maintaining the core code,and updating applications
              published on the app store.
            </p>
            <p className="py-[12.8px] text-[19.2px] font-lato">
              To ensure success as an iOS developer,you should have a strong
              working knowledge of iOS frameworks,be proficient in Objective-C,
              and be able to work as part of a team.
            </p>
            <p className="py-[12.8px] text-[19.2px] font-lato">
              Ultimately, you will help us build and maintain a strong and
              consistent brand through a wide range of online and offline
              marketing channels.
            </p>
            <p className="py-[12.8px] text-[19.2px] font-lato">
              Ultimately, an outstanding iOS developer should be able to create
              functional,attractive applicationsthat perfectly meet the needs of
              the user.
            </p>
          </div>
          {active === 2 && (
            <div>
              <h1 className="uppercase text-[32px] font-roboto font-bold leading-[60px] tracking-[1px] my-[32px] text-center">
                JOB DESCRIPTION
              </h1>
              <ul className="list-disc text-[19.2px] font-lato">
                <li className="py-[12.8px]">
                  Design and build applications for the iOS platform
                </li>
                <li className="py-[12.8px]">
                  Ensure the performance, quality, and responsiveness of
                  applications
                </li>
                <li className="py-[12.8px]">
                  Collaborate with a team to define, design, and ship new
                  features
                </li>
                <li className="py-[12.8px]">
                  Identify and correct bottlenecks and fix bugs
                </li>
                <li className="py-[12.8px]">
                  Build strategic relationships and partner with key industry
                  players, agencies and vendors
                </li>
                <li className="py-[12.8px]">
                  Help maintain code quality, organization, and automatization
                </li>
                <li className="py-[12.8px]">Desploy IOS apps to the Apple AppStore</li>
              </ul>
              <h1 className="uppercase text-[32px] font-roboto font-bold leading-[60px] tracking-[1px] my-[32px] text-center">
                REQUIREMENTS AND SKILLS
              </h1>
              <ul className="list-disc text-[19.2px] font-lato">
                <li className="py-[12.8px]">Proficient with Swift, and Cocoa Touch</li>
                <li className="py-[12.8px]">
                  Experience with iOS frameworks such as Core Data, Core
                  Animation, etc.
                </li>
                <li className="py-[12.8px]">
                  Experience with offline and persistent storage, threading, and
                  performance tuning
                </li>
                <li className="py-[12.8px]">
                  Familiarity with RESTful APIs to connect iOS applications to
                  back-end services
                </li>
                <li className="py-[12.8px]">
                  Understanding of Apple&rsquo;s design principles, architecture
                  patterns and interface guidelines
                </li>
                <li className="py-[12.8px]">
                  Experience with performance and memory tuning with tools such
                  as Instruments and Shark
                </li>
                <li className="py-[12.8px]">
                  Knack for benchmarking and optimization
                </li>
                <li className="py-[12.8px]">
                  Proficient understanding of code versioning tools such as Git
                </li>
                <li className="py-[12.8px]">
                  Familiarity with continuous integration
                </li>
                <li className="py-[12.8px]">
                  Sound knowledge on Dependency Injection and SOLID design
                  principles
                </li>
                <li className="py-[12.8px]">
                  Familiarity with cloud message APIs and push notification is
                  an added advantage
                </li>
                <li className="py-[12.8px]">B.sc/HND in IT related courses</li>
                <li className="py-[12.8px]">3+ years of Experience</li>
              </ul>
            </div>
          )}
          <button
            onClick={() => handleClick(2)}
            className="bg-[#E03E27] text-white rounded-sm px-[20px] py-[10px] mt-10 hover:translate-y-[-2px] ease-in duration-300"
          >
            {active === 2 ? "Read Less" : "Read More..."}
          </button>
          <p className="my-4">
            To apply send cv to{" "}
            <a href="info@papyrusfieldforce.com" className="text-[#E03E27]">
              info@papyrusfieldforce.com
            </a>
          </p>
        </div>

        <div className="acc-3 shadow-3xl rounded-xl px-[40px]  bg-white h-fit ">
          <div className="max-h-[50rem] min-h-[41rem]">
            <h2 className="uppercase text-[32px] font-roboto font-bold leading-[60px] tracking-[1px] my-[32px] text-center">
              Digital Marketing Executive
            </h2>

            <p className="py-[12.8px] text-[19.2px] font-lato">
              Our marketing division is seeking a young, motivated person to
              join our team as a Digital Market Executive. You will be in charge
              of the upkeep for our company`&rsquo;s social media networks, writing
              interesting content for all social platforms as well as daily user
              engagement tracking and feedback analysis.
            </p>
            <p className="py-[12.8px] text-[19.2px] font-lato">
              A strategic mindset and constant originality are important
              qualities to possess in order to create content for use on all
              social platforms. You would be responsible for championing social
              media campaigns and you should be able to efficiently multitask
              and meet deadlines.
            </p>
            <p className="py-[12.8px] text-[19.2px] font-lato">
              You should have exceptional presentation and communication skills.
              Besides this, you should be able to pay close attention to
              details. If this is a role you are interested in, then apply, we
              look forward to meeting you.
            </p>
          </div>
          {active === 3 && (
            <div>
              <h1 className="uppercase text-[32px] font-roboto font-bold leading-[60px] tracking-[1px] my-[32px] text-center">
                JOB DESCRIPTION
              </h1>
              <ul className="list-disc text-[19.2px] font-lato">
                <li className="py-[12.8px]">
                  Promoting products, services and content over social media, in
                  a way that is consistent with an organization&rsquo;s brand and
                  social media strategy.
                </li>
                <li className="py-[12.8px]">
                  Creating content (written pieces,images, videos, etc.) that
                  are sharp, memorable, and effective at prompting readers to
                  take action.
                </li>
                <li className="py-[12.8px]">
                  Scheduling copies and posts for release at optimal times.
                </li>
                <li className="py-[12.8px]">
                  Monitoring users`&rsquo; engagement with and feedback on every post.
                </li>
                <li className="py-[12.8px]">
                  Analyzing and reporting on the effects of publications.
                </li>
                <li className="py-[12.8px]">
                  Implement and manage new social media strategies and
                  campaigns.
                </li>
                <li className="py-[12.8px]">
                  Managing a budget to be spent on promoting social media posts
                  and pay-per-click (PPC) advertising.
                </li>
                <li className="py-[12.8px]">
                  Collaborating with colleagues from across departments to
                  ensure branding is consistent.
                </li>
                <li className="py-[12.8px]">
                  Measure the success of every social media campaign.
                </li>
                <li className="py-[12.8px]">
                  Stay up to date with the latest social media best practices
                  and technologies.
                </li>
                <li className="py-[12.8px]">
                  Monitor SEO and user engagement and suggest content
                  optimization.
                </li>
                <li className="py-[12.8px]">Present to Senior Management.</li>
              </ul>
              <h1 className="uppercase text-[32px] font-roboto font-bold leading-[60px] tracking-[1px] my-[32px] text-center">
                REQUIREMENTS AND SKILLS
              </h1>
              <ul className="list-disc text-[19.2px] font-lato">
                <li className="py-[12.8px]">
                  1-3 years experience in the same or similar role.
                </li>
                <li className="py-[12.8px]">
                  Strong communication and presentation skills.
                </li>
                <li className="py-[12.8px]">Photo and video-editing experience.</li>
                <li className="py-[12.8px]">
                  Good time management and organizational skills.
                </li>
                <li className="py-[12.8px]">
                  Ability to create authoritative and persuasive content.
                </li>
                <li className="py-[12.8px]">
                  Analytical ability and problem solving skills
                </li>
                <li className="py-[12.8px]">
                  Excellent knowledge of Facebook, Twitter, LinkedIn, Instagram,
                  Google+ and other social media best practices.
                </li>
                <li className="py-[12.8px]">
                  Understanding of SEO and web traffic metrics.
                </li>
                <li className="py-[12.8px]">
                  Good understanding of social media KPIs.
                </li>
                <li className="py-[12.8px]">Team player.</li>
              </ul>
            </div>
          )}
          <button
            onClick={() => handleClick(3)}
            className="bg-[#E03E27] text-white rounded-sm px-[20px] py-[10px] mt-10 hover:translate-y-[-2px] ease-in duration-300"
          >
            {active === 3 ? "Read Less" : "Read More..."}
          </button>
          <p className="my-4">
            To apply send cv to{" "}
            <a href="info@papyrusfieldforce.com" className="text-[#E03E27]">
              info@papyrusfieldforce.com
            </a>
          </p>
        </div>

        <div className="acc-4 shadow-3xl rounded-xl px-[40px] h-fit  bg-white">
          <div className="max-h-[41rem] min-h-[41rem]">
            <h2 className="uppercase text-[32px] font-roboto font-bold leading-[60px] tracking-[1px] my-[32px] text-center">
              Quality assurance tester
            </h2>

            <p className="py-[12.8px] text-[19.2px] font-lato">
              We&rsquo;re seeking an experienced quality assurance specialist who can
              build upon this good reputation with an unwavering commitment to
              meticulous production.
            </p>
            <p className="py-[12.8px] text-[19.2px] font-lato">
              The ideal candidate is an exceptionally organized,methodical
              professional who has the experience necessary to take our products
              to the next level in accuracy,security and safety.
            </p>
            <p className="py-[12.8px] text-[19.2px] font-lato">
              The specialist will be charged with developing a complete QA
              program that not only safeguards product qualitybut also fosters a
              culture in which all employees are avtively engaged.
            </p>
          </div>
          {active === 4 && (
            <div>
              <h1 className="uppercase text-[32px] font-roboto font-bold leading-[60px] tracking-[1px] my-[32px] text-center">
                JOB DESCRIPTION
              </h1>
              <ul className="list-disc text-[19.2px] font-lato">
                <li className="py-[12.8px]">
                  Review requirements, specifications and technical design
                  documents to provide timely and meaningful feedback
                </li>
                <li className="py-[12.8px]">
                  Create detailed, comprehensive and well-structured test plans
                  and test cases
                </li>
                <li className="py-[12.8px]">
                  Estimate, prioritize, plan and coordinate testing activities
                </li>
                <li className="py-[12.8px]">
                  Design, develop and execute automation scripts using open
                  source tools
                </li>
                <li className="py-[12.8px]">
                  Identify, record, document thoroughly and track bugs
                </li>
                <li className="py-[12.8px]">
                  Perform thorough regression testing when bugs are resolved
                </li>
                <li className="py-[12.8px]">
                  Develop and apply testing processes for new and existing
                  products to meet client needs
                </li>
                <li className="py-[12.8px]">
                  Liaise with internal teams (e.g. developers and product
                  managers) to identify system requirements
                </li>
                <li className="py-[12.8px]">Monitor debugging process results</li>
                <li className="py-[12.8px]">
                  Investigate the causes of non-conforming software and train
                  users to implement solutions
                </li>
                <li className="py-[12.8px]">Track quality assurance metric</li>
              </ul>
              <h1 className="uppercase text-[32px] font-roboto font-bold leading-[60px] tracking-[1px] my-[32px] text-center">
                REQUIREMENTS AND SKILLS
              </h1>
              <ul className="list-disc text-[19.2px] font-lato">
                <li className="py-[12.8px]">
                  Proven work experience in software development
                </li>
                <li className="py-[12.8px]">
                  Proven work experience in software quality assurance
                </li>
                <li className="py-[12.8px]">
                  Strong knowledge of software QA methodologies, tools and
                  processes
                </li>
                <li className="py-[12.8px]">
                  Experience in writing clear, concise and comprehensive test
                  plans and test cases
                </li>
                <li className="py-[12.8px]">
                  Hands-on experience with both white box and black box testing
                </li>
                <li className="py-[12.8px]">
                  Hands-on experience with automated testing tools
                </li>
                <li className="py-[12.8px]">Solid knowledge of SQL and scripting</li>
                <li className="py-[12.8px]">
                  Experience with performance and/or security testing is a plus{" "}
                </li>
                <li className="py-[12.8px]">
                  B.sc/HND in any IT related courses/ 3+ years of experience in
                  Software Testing
                </li>
              </ul>
            </div>
          )}
          <button
            onClick={() => handleClick(4)}
            className="bg-[#E03E27] text-white rounded-sm px-[20px] py-[10px] mt-10 hover:translate-y-[-2px] ease-in duration-300"
          >
            {active === 4 ? "Read Less" : "Read More..."}
          </button>
          <p className="my-4">
            To apply send cv to{" "}
            <a href="info@papyrusfieldforce.com" className="text-[#E03E27]">
              info@papyrusfieldforce.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;

// const Accordion = ({ headertext, children}) => {
//   const [active,setActive] = useState(false);
//   const show = () => {
//     return setActive(!active);
//   };

// md:grid grid-cols-2 gap-8 px-2 py-20 2xl:px-8

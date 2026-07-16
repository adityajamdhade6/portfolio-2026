import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, X } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudy = ({ nextProject }: { nextProject?: any }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div data-lenis-prevent="true" className="fixed inset-0 z-[100] flex flex-col items-center overflow-y-auto bg-black/60 p-2 sm:p-6 md:p-12 backdrop-blur-sm">
      <motion.div
        className="relative mx-auto w-full max-w-[840px] shrink-0 overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white text-zinc-900 shadow-2xl ring-1 ring-black/5 dark:bg-[#02040a] dark:text-zinc-100 dark:ring-white/10 mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Top Image Section */}
        <div className="relative aspect-[16/10] w-full bg-zinc-200 dark:bg-zinc-900">
          <img src="https://framerusercontent.com/images/0RKQNlUmdUNZZYuxu16clCX0vQ.png" alt="Nurture App Hero" className="h-full w-full object-cover" />
          
          {/* Top Left Pill */}
          <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-900 shadow-sm backdrop-blur-md dark:bg-black/50 dark:text-zinc-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              PRODUCT • 2026
            </span>
          </div>

          {/* Top Right Close */}
          <Link to="/ground" className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60 sm:right-6 sm:top-6">
            <X size={20} />
          </Link>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-10 md:p-12">
          <h1 className="mb-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Nurture : A Plant Care Companion
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-base font-light">
            Plant Wellness App Design
          </p>
          
          {/* Metadata Row */}
          <div className="mb-10 flex flex-wrap gap-y-6 border-y border-zinc-200 py-6 text-sm dark:border-zinc-800">
            <div className="w-1/2 sm:w-1/3 pr-4">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Role</p>
              <p className="font-medium text-zinc-900 dark:text-zinc-200">UI/UX Designer</p>
            </div>
            <div className="w-1/2 sm:w-1/3 border-l border-zinc-200 pl-4 dark:border-zinc-800">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Client</p>
              <p className="font-medium text-zinc-900 dark:text-zinc-200">Personal Project</p>
            </div>
            <div className="w-full sm:w-1/3 sm:border-l border-zinc-200 sm:pl-4 dark:border-zinc-800 pt-4 sm:pt-0 border-t sm:border-t-0 mt-2 sm:mt-0">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Links</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.figma.com/design/JpS7ob2eOfxFNkfjHoSddL/Nurture?node-id=1-2&m=dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-value underline underline-offset-4 hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Figma File <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>

        {/* Content */}

          <motion.section
            className="mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Project Overview</h2>
            <div className="space-y-8">
              <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl">
                Nurture is a plant-care app designed to simplify gardening for enthusiasts of all skill levels. As the lead UI/UX designer, my goal was to create an interface that balances functionality, aesthetics, and user empathy, ensuring seamless interaction for plant lovers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Timeline</p>
                  <p className="text-sm leading-[1.8] text-muted-foreground font-light">
                    From explorations to final designs in 5 weeks while working with multiple projects at the same time
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Background</p>
                  <p className="text-sm leading-[1.8] text-muted-foreground font-light">
                    The app seamlessly integrates with your existing calendar and task management tools, using advanced algorithms to prioritize tasks, suggest optimal times for meetings, and provide smart reminders.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Research */}
          <motion.section
            className="mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Research</h2>
            <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl mb-12">
              This phase focused on understanding the problem space and gathering insights. Activities included:
            </p>

            {/* Qualitative Research */}
            <motion.div
              className="space-y-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg md:text-xl font-medium text-foreground">Qualitative Research</h3>
              <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl">
                Conducted user interviews and surveys with plant enthusiasts (beginners and intermediates) to uncover pain points, motivations, and behaviors of plant lovers.
              </p>
              <div className="space-y-4 pl-4 border-l-2 border-border">
                <p className="text-sm font-medium text-foreground/80">Key Questions Asked in Interviews:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">What challenges do you face when caring for plants?</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">How do you currently find information about plant care?</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">What features would you like in a plant care app?</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">How do you feel when your plants thrive (or die)?</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Do you interact with other plant lovers? If so, how?</li>
                </ol>
              </div>
              <div className="space-y-4 bg-secondary/30 p-6 rounded-sm">
                <p className="text-sm font-medium text-foreground/80">Findings:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Beginners feel overwhelmed by conflicting advice.</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Experts want a platform to share knowledge and connect with others.</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Both groups value personalized advice and reminders.</li>
                </ol>
              </div>
            </motion.div>

            {/* Quantitative Research */}
            <motion.div
              className="space-y-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-medium text-foreground">Quantitative Research</h3>
              <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl">
                To better understand user preferences and behaviors, we analyzed survey data and created charts. These visuals help us identify key trends and make data-driven decisions for Nurture.
              </p>
              <div className="overflow-hidden rounded-sm mt-8">
                <img
                  src="https://framerusercontent.com/images/UHbMVILgvOBoJqvzB8LOyKRE.png"
                  alt="Quantitative Research Charts"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Competitor Analysis */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg md:text-xl font-medium text-foreground">Competitor Analysis</h3>
              <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl">
                Before diving into design, we needed to understand what was already out there. We analyzed 5 competitors to identify gaps and opportunities.
              </p>
              <div className="overflow-hidden rounded-sm mt-8">
                <img
                  src="https://framerusercontent.com/images/E5eKZrDhWZnCrzU90a59QMRC0k.png"
                  alt="Competitor Analysis"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.section>

          {/* Define */}
          <motion.section
            className="mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Define</h2>
            <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl mb-12">
              This phase focused on understanding the problem space and gathering insights. Activities included:
            </p>

            {/* User Personas */}
            <motion.div
              className="space-y-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg md:text-xl font-medium text-foreground">User Personas</h3>
              <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl">
                To design a user-centric app like Nurture, we need to deeply understand our target users. Here are two detailed user personas, including their demographics, goals, pain points, quotes, and empathy maps.
              </p>
              <div className="overflow-hidden rounded-sm mt-8">
                <img
                  src="https://framerusercontent.com/images/7j8oVehXvodjlJWGZGQIjYatGs.png"
                  alt="User Personas"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Empathy Map */}
            <motion.div
              className="space-y-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-medium text-foreground">Empathy Map</h3>
              <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl">
                By understanding what Paige and Greg think, feel, say, and do, we can design Nurture to address their unique needs. Together, they represent the two sides of the plant-loving spectrum that Nurture was designed to serve.
              </p>
              <div className="overflow-hidden rounded-sm mt-8">
                <img
                  src="https://framerusercontent.com/images/E5lKk6p1umj13TFE7BzDWflJxM.png"
                  alt="Empathy Map"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Information Architecture */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg md:text-xl font-medium text-foreground">Information Architecture</h3>
              <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl">
                The Information Architecture (IA) for Nurture was designed to ensure a seamless and intuitive user experience. During the initial research phase, we focused on understanding user needs, organizing content, and defining the app structure.
              </p>
              <div className="overflow-hidden rounded-sm mt-8">
                <img
                  src="https://framerusercontent.com/images/H3K7dz8ynRFlGNGvcn5dDHkDxF8.png"
                  alt="Information Architecture"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.section>

          {/* Ideate */}
          <motion.section
            className="mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Ideate</h2>
            <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl mb-12">
              This phase focused on understanding the problem space and gathering insights. Activities included:
            </p>

            {/* Paper Sketches */}
            <motion.div
              className="space-y-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg md:text-xl font-medium text-foreground">Paper Sketches</h3>
              <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl">
                In the early stages of designing Nurture, we started with paper sketches to quickly visualize the app layout and flow. This low-fidelity approach allowed us to brainstorm freely and iterate rapidly.
              </p>
              <div className="overflow-hidden rounded-sm mt-8">
                <img
                  src="https://framerusercontent.com/images/gK7KFhdhZj6fOIQME4kPLd5up10.png"
                  alt="Paper Sketches"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Mid-Fidelity Screens */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-medium text-foreground">Mid-Fidelity Screens</h3>
              <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl">
                After sketching initial ideas on paper, we refined them into mid-fidelity wireframes, focusing on user flow, layout, and intuitive interactions. This stage ensures seamless navigation and functionality before adding visuals, making the Nurture app both practical and user-friendly.
              </p>
              <div className="overflow-hidden rounded-sm mt-8">
                <img
                  src="https://framerusercontent.com/images/eN3Ad0ps9vS08iCpYkuiNOjHNLQ.png"
                  alt="Mid-Fidelity Screens"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.section>

          {/* UI Design */}
          <motion.section
            className="mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Nurture UI Design</h2>
            <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl mb-12">
              Designed 25+ high-fidelity UI screens with detailed documentation, including screen overviews, in-depth explanations, and their intended use.
            </p>

          {/* UI Screens - Grouped Display */}
            {[
              {
                title: "Onboarding & Authentication",
                desc: "Illustrated slides introduce app features, creating a calming experience. Simple, minimal access screen enabling quick account creation or login.",
                screens: [
                  "https://framerusercontent.com/images/atwFbgnu74ViDoN7G8yA3JS3QM.png",
                  "https://framerusercontent.com/images/pkH4yNehrnCJf3dmB8RmFRlCvk.png",
                ]
              },
              {
                title: "Home Dashboard & Scanner",
                desc: "Central hub displaying upcoming reminders, recent activity, and quick links. Camera tool identifying plants instantly with personalized care details.",
                screens: [
                  "https://framerusercontent.com/images/YQXa9Z5O73XA8rshEzylGZWYW8.png",
                  "https://framerusercontent.com/images/KIwaiHRaEJMj9vK8AACgWwukVc.png",
                ]
              },
              {
                title: "Plant Management",
                desc: "Add new plants, view your collection, and set personalized tasks with reminders to ensure every plant's needs are met consistently.",
                screens: [
                  "https://framerusercontent.com/images/mAEBfLPrQFDMIySA0gG13XA.png",
                  "https://framerusercontent.com/images/tbf65QIfUFOBdkndm739DSxmI0A.png",
                  "https://framerusercontent.com/images/S4YVDdWIryxjtfDd3w9KUWDFTU.png",
                ]
              },
              {
                title: "Ask Buzz & Community",
                desc: "Interactive screens for asking questions, exploring posts, and sharing plant care tips with fellow enthusiasts in a supportive community.",
                screens: [
                  "https://framerusercontent.com/images/3mfh23Hm70N1Xuh8xZWmDolk.png",
                  "https://framerusercontent.com/images/WJMhJ9KHyJG4GuzQxA8lHHgY.png",
                  "https://framerusercontent.com/images/MLpGxtTbFRlMESk6cB5cyA0JaAg.png",
                ]
              },
              {
                title: "Saved Content & Posts",
                desc: "Personal library for bookmarking helpful posts, care tips, and accessing saved resources. Detailed community post view for learning and engagement.",
                screens: [
                  "https://framerusercontent.com/images/mj1aoZrU8sIuEtV3mapGu7WtHA.png",
                  "https://framerusercontent.com/images/CRrgNrVid03zgZZqN1t1ByhSgU.png",
                  "https://framerusercontent.com/images/Iu2t0Qq2UN1lVSnAOgxkDynYvA.png",
                ]
              },
              {
                title: "Plant Details & Settings",
                desc: "Plant insights hub with care instructions, environment details, and expert resources. User profile managing preferences and notifications.",
                screens: [
                  "https://framerusercontent.com/images/BnryrsdHFcqgFeKpwchTIaqSQg.png",
                  "https://framerusercontent.com/images/coMSd62a7zWx2AfUH0ekU1Af8k.png",
                ]
              },
            ].map((group, idx) => (
              <motion.div
                key={idx}
                className="mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="mb-8">
                  <h3 className="text-lg md:text-xl font-medium text-foreground mb-3">{group.title}</h3>
                  <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl">
                    {group.desc}
                  </p>
                </div>
                <div className={`grid gap-4 md:gap-6 ${group.screens.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
                  {group.screens.map((screen, screenIdx) => (
                    <div key={screenIdx} className="overflow-hidden rounded-sm bg-secondary/20 p-4 md:p-6">
                      <img 
                        src={screen} 
                        alt={`${group.title} - Screen ${screenIdx + 1}`} 
                        className="w-full h-auto rounded-sm shadow-lg"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* Solution */}
          <motion.section
            className="mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Solution</h2>
            <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl mb-10">
              The resulting AI-powered scheduling app offers a seamless user experience, allowing individuals and businesses to effortlessly manage their schedules.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-base font-medium text-foreground">Intelligent Scheduling</h3>
                <p className="text-sm leading-[1.8] text-muted-foreground font-light">
                  AI algorithms analyze user preferences, availability, and priorities to generate optimized schedules.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-base font-medium text-foreground">Calendar Integration</h3>
                <p className="text-sm leading-[1.8] text-muted-foreground font-light">
                  Seamless integration with popular calendar platforms such as Google Calendar and Outlook, ensuring synchronized scheduling across devices.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-base font-medium text-foreground">Personalization</h3>
                <p className="text-sm leading-[1.8] text-muted-foreground font-light">
                  Customizable settings allow users to tailor scheduling preferences and priorities to their unique needs.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Results */}
          <motion.section
            className="mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Results</h2>
            <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl mb-10">
              Here, the outcomes and achievements of the project are highlighted, including user feedback, adoption rates, and industry recognition.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-base font-medium text-foreground">Increased Efficiency</h3>
                <p className="text-sm leading-[1.8] text-muted-foreground font-light">
                  Users report significant time savings and improved productivity through optimized scheduling recommendations.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-base font-medium text-foreground">Positive User Feedback</h3>
                <p className="text-sm leading-[1.8] text-muted-foreground font-light">
                  High user satisfaction ratings and positive reviews highlight the app intuitive interface and powerful AI capabilities.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-base font-medium text-foreground">Growing User Base</h3>
                <p className="text-sm leading-[1.8] text-muted-foreground font-light">
                  The app quickly gained traction among individuals and businesses worldwide, with a steady increase in user adoption and engagement.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Theme Showcases */}
          <motion.section
            className="mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Nurture App Screens in Light Theme</h2>
            <div className="overflow-hidden rounded-sm mb-16">
              <img
                src="https://framerusercontent.com/images/yzD352crULyGUQzGc91eHackA4g.png"
                alt="Light Theme Screens"
                className="w-full h-auto"
              />
            </div>

            <h2 className="font-serif text-2xl md:text-3xl mb-8">Nurture App Screens in Dark Theme</h2>
            <div className="overflow-hidden rounded-sm">
              <img
                src="https://framerusercontent.com/images/DF8aZ0NDR00wKPRlBh0AkXEyLc.png"
                alt="Dark Theme Screens"
                className="w-full h-auto"
              />
            </div>
          </motion.section>

          {/* Usability Testing */}
          <motion.section
            className="mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Usability Testing Summary</h2>
            <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl mb-10">
              I conducted usability testing with 5 users. I asked them to use the app and share what parts were easy or difficult for them. I also asked what new features they would like to see and what changes could make the app more useful in their daily use.
            </p>
            <div className="overflow-hidden rounded-sm">
              <img
                src="https://framerusercontent.com/images/uDJ0ioUH5n8ARZGnw0lJ6dlq2g.png"
                alt="Usability Testing Summary"
                className="w-full h-auto"
              />
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            className="mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Conclusion: Why Nurture Matters</h2>
            <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl mb-10">
              Nurture is more than just a plant care app — it is a community-driven platform that makes plant care accessible, enjoyable, and stress-free. By following a structured UX process, we have created a solution that addresses real user pain points and delivers a seamless, intuitive experience.
            </p>
            <div className="overflow-hidden rounded-sm">
              <img
                src="https://framerusercontent.com/images/1GCEtIU20uLdD5c0N6Aa147u0.png"
                alt="Conclusion"
                className="w-full h-auto"
              />
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section
            className="mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">Next Steps: Building on Our Success</h2>
            <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl mb-10">
              Nurture is more than just a plant care app — it is a community-driven platform that makes plant care accessible, enjoyable, and stress-free. By following a structured UX process, we have created a solution that addresses real user pain points and delivers a seamless, intuitive experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="text-base font-medium text-foreground">Post-Launch Feedback</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Analyze user reviews and ratings to identify areas for improvement.</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Conduct follow-up surveys to understand how Nurture is impacting users plant care routines.</li>
                </ol>
              </div>
              <div className="space-y-4">
                <h3 className="text-base font-medium text-foreground">Scaling the App</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Add support for more languages and regions.</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Introduce features like plant disease diagnosis and pest control tips.</li>
                </ol>
              </div>
              <div className="space-y-4">
                <h3 className="text-base font-medium text-foreground">User Experience Enhancements</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Introduced detailed screens for each section to give users clarity at every step.</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Simplified and structured user flows to reduce confusion and make navigation seamless.</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Differentiated terms with clear labeling so users can easily understand.</li>
                </ol>
              </div>
              <div className="space-y-4">
                <h3 className="text-base font-medium text-foreground">Expanding Features</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Plant Marketplace: A space for users to buy, sell, or trade plants and accessories.</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">AR Plant Scanner: Use augmented reality to identify plants and provide care instructions.</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Seasonal Guides: Curated content for spring planting, winter care, and more.</li>
                </ol>
              </div>
              <div className="space-y-4 md:col-span-2">
                <h3 className="text-base font-medium text-foreground">Continuous Design Growth</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Conduct regular UI audits to ensure design consistency.</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Prototype and test new features before full-scale rollout.</li>
                  <li className="text-sm leading-[1.8] text-muted-foreground font-light">Maintain a design system for scalable growth and future updates.</li>
                </ol>
              </div>
            </div>
          </motion.section>

          {/* Vision */}
          <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-8">A Vision for the Future</h2>
            <p className="text-sm md:text-base leading-[1.8] text-muted-foreground font-light max-w-3xl mb-10">
              Our vision for Nurture goes beyond just an app. It is about fostering a global community of plant lovers who support and inspire each other. Whether you are a beginner like Paige or an expert like Greg, Nurture is here to help you grow, learn, and thrive.
            </p>
            <div className="overflow-hidden rounded-sm">
              <img
                src="https://framerusercontent.com/images/I1PbJaeJy4TnW4iHkasgW29vsyw.png"
                alt="Vision for the Future"
                className="w-full h-auto"
              />
            </div>
          </motion.section>

          {nextProject && (
            <section className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
              <Link 
                to={`/ground/${nextProject.id}`}
                className="glass-strong group block rounded-[24px] border border-zinc-200 dark:border-zinc-800 p-8 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50 dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 rounded-full blur-[80px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" style={{ background: nextProject.accent }} />
                
                <div className="flex flex-col gap-2 relative z-10">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500">Up next</span>
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    {nextProject.title}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light mt-0.5">{nextProject.tagline}</p>
                </div>
              </Link>
            </section>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudy;

import React, { useEffect, useRef, useState } from "react";

function About() {
  return (
    <div id="Section1" className="Section">
      <h2>About</h2>
      <p>
        I’m <strong>Aromal MB</strong>, an <strong>AI/ML Engineer</strong> based
        in Chalakudy, Kerala. I build machine learning, computer vision, and
        LLM-powered applications, taking ideas from data preparation and model
        evaluation to APIs and deployment.
        <br />
        <br />
        My work explores <strong>agentic AI</strong>, <strong>RAG</strong>,{" "}
        <strong>computer vision</strong>, and practical tools for real-world
        workflows. From conversational voice support to document processing and
        smart-city monitoring, I enjoy connecting models to applications people
        can use.
      </p>
      <div className="Skills">
        <h3>Tools I build with</h3>
        <p>
          Python · PyTorch · TensorFlow · Scikit-learn
          <br />
          LangChain · LangGraph · RAG · OpenCV
          <br />
          FastAPI · PostgreSQL · Docker · AWS
        </p>
      </div>
    </div>
  );
}

const projects = [
  {
    url: "https://github.com/Aromal-m-b/Ghost",
    name: "Ghost",
    category: "Deletion-audit agent",
    description:
      "Audits evidence across distributed data stores to uncover residual user data and build causal remediation plans.",
    stack: "Python · Agentic AI",
  },
  {
    url: "https://github.com/Aromal-m-b/Tele-Caller",
    name: "Tele Caller",
    category: "AI voice support",
    description:
      "A conversational support assistant with knowledge retrieval, streaming voice, and confirmed customer-service requests.",
    stack: "Python · FAISS · MongoDB",
  },
  {
    url: "https://github.com/Aromal-m-b/Smart-City-using-IOT",
    name: "CityMind",
    category: "CityMind / smart-city monitoring",
    description:
      "Camera-based accident detection, vehicle counting, and anomaly alerts connected to an API, dashboard, and Raspberry Pi edge deployment.",
    stack: "Computer vision · Django · React",
  },
  {
    url: "https://github.com/Aromal-m-b/Rasengana",
    name: "Rasengana",
    category: "Interactive ASL learning",
    description:
      "Gesture recognition, real-time feedback, and interactive games that help children and beginners learn ASL alphabets.",
    stack: "YOLO · FastAPI · AWS SageMaker",
  },
  {
    url: "https://github.com/Aromal-m-b/Mugiwara",
    name: "Mugiwara",
    category: "Early learning screening",
    description:
      "Explores speech, reading, handwriting, and numerical assessments with agentic evaluation and a unified screening report.",
    stack: "Gemini · LangGraph · FastAPI",
  },
  {
    url: "https://github.com/Aromal-m-b/Pharma-App",
    name: "Pharma App",
    category: "Agentic complaint intake",
    description:
      "Extracts 15 structured fields from unstructured complaints and documents, asks for missing details, and stores completed reports.",
    stack: "LangGraph · FastAPI · PostgreSQL",
  },
];

function Projects() {
  return (
    <section id="Section2" className="Section">
      <h2>Projects</h2>
      <p className="SectionIntro">
        A selection of my work across AI agents, computer vision, and applied
        machine learning. Explore the code and implementation details on GitHub.
      </p>
      {projects.map((project) => (
        <a
          key={project.url}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="Project"
        >
          <div className="ProjectHeading">
            <h3>
              {project.name} <span aria-hidden="true">↗</span>
            </h3>
            <span className="ProjectType">{project.category}</span>
          </div>
          <span className="ProjectDescription">{project.description}</span>
          <span className="ProjectStack">{project.stack}</span>
        </a>
      ))}
    </section>
  );
}

function Experience() {
  return (
    <div id="Section3" className="Section">
      <h2>Experience &amp; education</h2>
      <article className="Experience">
        <p className="Date">Aug 2026 — Present</p>
        <h3>AI/ML Software Trainee</h3>
        <p className="Organization">Spectrum Softtech Solutions Pvt. Ltd.</p>
        <p>
          Testing, evaluating, and validating machine learning models across
          datasets, tuning hyperparameters, and documenting edge-case failures
          and performance patterns.
        </p>
      </article>
      <article className="Experience">
        <p className="Date">Jun 2025 — Jul 2025</p>
        <h3>Data Science &amp; ML Intern</h3>
        <p className="Organization">GALTech Technologies Pvt. Ltd.</p>
        <p>
          Cleaned and analyzed 50,000+ customer records and built a
          customer-segmentation clustering model, supporting a 15% improvement
          in targeted campaign response.
        </p>
      </article>
      <article className="Experience">
        <p className="Date">2022 — 2026</p>
        <h3>B.Tech · Computer Science Engineering</h3>
        <p>
          College of Engineering, Poonjar · KTU University
          <br />
          CGPA: 7.88
        </p>
      </article>
      <h3>Hackathons &amp; recognition</h3>
      <ul className="Achievements">
        <li>Top 5 Finalist · IHRD AI Samasya, ICGAIFE 3.0</li>
        <li>First Runner-up · Gen AI Hackathon, PromptCraft</li>
        <li>First Runner-up · IHRD Tharang 2K25 Project Expo</li>
        <li>Second Runner-up · Hackengers 2024</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        Have a project in mind?{" "}
        <a href="mailto:aromalmb1227@gmail.com">Let’s talk ↗</a>
      </p>
      <p className="Credit">
        Personalized by Aromal MB. Original design and WebGL experience by{" "}
        <a
          href="https://github.com/LuckeyDuckey/luckeyduckey.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Charlie Ashton / LuckeyDuckey
        </a>{" "}
        · MIT license.
      </p>
    </footer>
  );
}
export default function App() {
  const [retro, setRetro] = useState(false);
  const [active, setActive] = useState("Section1");
  const [terminalError, setTerminalError] = useState("");
  const canvasRef = useRef(null);
  const mainRef = useRef(null);
  const rightRef = useRef(null);
  const glowRef = useRef(null);
  const engineRef = useRef(null);
  const boot = useRef(null),
    ambient = useRef(null),
    beep = useRef(null),
    keyboard = useRef(null);
  const audioRefs = { boot, ambient, beep, keyboard };

  useEffect(
    () => () => {
      engineRef.current?.destroy();
      engineRef.current = null;
    },
    [],
  );

  useEffect(() => {
    let cancelled = false;
    async function activate() {
      try {
        if (!engineRef.current) {
          const { createRetroTerminal } =
            await import("./retro/createRetroTerminal.js");
          if (cancelled) return;
          engineRef.current = createRetroTerminal(canvasRef.current, {
            ComputerBoot: boot.current,
            ComputerAmbient: ambient.current,
            ComputerBeep: beep.current,
            KeyboardPressed: keyboard.current,
          });
        }
        if (!cancelled) engineRef.current.start();
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setTerminalError(
            "The retro terminal needs WebGL2. You can still explore the portfolio.",
          );
          setRetro(false);
        }
      }
    }
    if (retro) activate();
    else engineRef.current?.stop();
    return () => {
      cancelled = true;
      engineRef.current?.stop();
    };
  }, [retro]);

  useEffect(() => {
    let animation;
    const followMouse = (event) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      animation?.cancel();
      animation = glowRef.current.animate(
        { left: `${event.clientX}px`, top: `${event.clientY}px` },
        { duration: 3500, fill: "forwards" },
      );
    };
    window.addEventListener("mousemove", followMouse);
    return () => {
      window.removeEventListener("mousemove", followMouse);
      animation?.cancel();
    };
  }, []);

  function updateActive() {
    const sections = [...rightRef.current.querySelectorAll(".Section")];
    const current = sections
      .filter(
        (section) =>
          section.getBoundingClientRect().top <= window.innerHeight * 0.25,
      )
      .at(-1);
    setActive(current?.id || "Section1");
  }

  function navigate(id) {
    const section = document.getElementById(id);
    const mobile = window.innerWidth <= 760;
    const scroller = mobile ? mainRef.current : rightRef.current;
    const top = mobile
      ? section.getBoundingClientRect().top -
        mainRef.current.getBoundingClientRect().top +
        mainRef.current.scrollTop -
        24
      : section.offsetTop - window.innerHeight * 0.1;
    scroller.scrollTo({
      top,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
    setActive(id);
  }

  return (
    <>
      <canvas
        id="Canvas3D"
        ref={canvasRef}
        aria-label="Interactive retro computer terminal"
      />

      <div
        id="MainDiv"
        ref={mainRef}
        className={retro ? "hidden" : ""}
        onScroll={updateActive}
        inert={retro ? true : undefined}
      >
        <div id="MouseGlow" ref={glowRef}></div>
        <div id="MouseGlowBlur"></div>

        <div id="RightPanel" ref={rightRef} onScroll={updateActive}>
          <About />

          <Projects />
          <Experience />

          <Footer />
        </div>

        <div id="LeftPanel">
          <h1>Aromal MB</h1>
          <h2>AI/ML Engineer</h2>
          <p>
            Building intelligent systems, from
            <br />
            AI agents to computer vision.
            <br />
            Chalakudy, Kerala, India.
          </p>

          <nav className="NavContainer">
            <button
              type="button"
              className={`NavItem ${active === "Section1" ? "Active" : ""}`}
              onClick={() => navigate("Section1")}
              aria-current={active === "Section1" ? "location" : undefined}
            >
              <div className="NavItemDot"></div>
              <span className="NavItemText">About</span>
            </button>

            <button
              type="button"
              className={`NavItem ${active === "Section2" ? "Active" : ""}`}
              onClick={() => navigate("Section2")}
              aria-current={active === "Section2" ? "location" : undefined}
            >
              <div className="NavItemDot"></div>
              <span className="NavItemText">Projects</span>
            </button>

            <button
              type="button"
              className={`NavItem ${active === "Section3" ? "Active" : ""}`}
              onClick={() => navigate("Section3")}
              aria-current={active === "Section3" ? "location" : undefined}
            >
              <div className="NavItemDot"></div>
              <span className="NavItemText">Experience</span>
            </button>
          </nav>

          <div id="SocialsContainer">
            <a
              href="https://www.linkedin.com/in/aromal-mb"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <img
                src="Images/LinkedinIcon.png"
                alt="LinkedIn"
                width="30"
                height="30"
              />
            </a>

            <a
              href="https://github.com/Aromal-m-b"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <img
                src="Images/GithubIcon.png"
                alt="Github"
                width="30"
                height="30"
              />
            </a>

            <a
              href="mailto:aromalmb1227@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
            >
              <img
                src="Images/EmailIcon.png"
                alt="Email"
                width="30"
                height="30"
              />
            </a>

            <a
              href="Aromal_MB_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="CV"
            >
              <img src="Images/CVIcon.png" alt="CV" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>

      <button
        id="MainButton"
        onClick={() => setRetro((value) => !value)}
        disabled={!!terminalError}
        title={
          retro
            ? "Return to portfolio"
            : terminalError || "Switch to interactive retro terminal"
        }
        aria-label={
          retro ? "Return to portfolio" : "Switch to interactive retro terminal"
        }
        aria-pressed={retro}
        style={{ transform: retro ? "rotateZ(180deg)" : "rotateZ(0deg)" }}
      >
        🠛
      </button>
      {terminalError && (
        <p className="TerminalError" role="status">
          {terminalError}
        </p>
      )}

      <audio ref={audioRefs.boot} src="Sounds/ComputerBoot.mp3" />
      <audio ref={audioRefs.ambient} src="Sounds/ComputerAmbient.mp3" />
      <audio ref={audioRefs.beep} src="Sounds/ComputerBeep.mp3" />
      <audio ref={audioRefs.keyboard} src="Sounds/KeyboardPressed.mp3" />
    </>
  );
}


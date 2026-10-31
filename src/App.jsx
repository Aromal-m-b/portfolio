import React, { useEffect, useRef, useState } from "react";
import { projects } from "./projects.js";

const filters = ["All projects", "AI agents", "Computer vision", "Applied AI"];
const projectGroups = [
  "AI agents",
  "AI agents",
  "Computer vision",
  "Computer vision",
  "Applied AI",
  "AI agents",
];
const projectCodes = ["GHOST", "VOICE", "CITY", "ASL", "LEARN", "PHARMA"];

function SectionTitle({ number, label, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <p className="section-lead">{children}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="portfolio-section">
      <SectionTitle
        number="01"
        label="A little about me"
        title="Curiosity. Code. Real-world impact."
      />
      <div className="about-layout">
        <p className="about-statement">
          I turn complex data into <span>useful intelligence.</span>
        </p>
        <div className="about-copy">
          <p>
            I’m Aromal MB, an AI/ML Engineer based in Chalakudy, Kerala. I build
            machine learning, computer vision, and LLM-powered applications,
            from data preparation and model evaluation to APIs and deployment.
          </p>
          <p>
            I enjoy the space where research meets a working product: an agent
            that follows a workflow, a model that understands a camera feed, or
            an API that puts a prediction to use.
          </p>
          <a
            className="text-link"
            href="https://github.com/Aromal-m-b"
            target="_blank"
            rel="noreferrer"
          >
            Explore my GitHub <span>↗</span>
          </a>
        </div>
      </div>
      <div className="capability-grid">
        {[
          [
            "01",
            "Agentic AI",
            "Conversational systems, document intelligence, and connected workflows.",
            "LangGraph / LangChain / RAG",
          ],
          [
            "02",
            "Computer vision",
            "Image classification, gesture recognition, and video-based monitoring.",
            "PyTorch / YOLO / OpenCV",
          ],
          [
            "03",
            "From model to API",
            "Data pipelines, model evaluation, and application deployment.",
            "FastAPI / PostgreSQL / Docker / AWS",
          ],
        ].map(([n, title, description, stack]) => (
          <article className="capability" key={n}>
            <span className="small-index">{n} /</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="mono-label">{stack}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({ index }) {
  return (
    <div className={`project-visual visual-${index}`} aria-hidden="true">
      <div className="visual-top">
        <span>AM / LAB</span>
        <span>0{index + 1}</span>
      </div>
      <div className="visual-core">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <span className="visual-code">{projectCodes[index]}</span>
        <span className="signal-dot" />
      </div>
      <div className="visual-bottom">
        <span>{projectGroups[index].toUpperCase()}</span>
        <span>↗</span>
      </div>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All projects");
  const visible = projects
    .map((project, index) => ({ ...project, index }))
    .filter(
      (project) =>
        filter === "All projects" || projectGroups[project.index] === filter,
    );
  return (
    <section id="work" className="portfolio-section">
      <SectionTitle
        number="02"
        label="Selected work"
        title="Ideas, built into systems."
      >
        Six projects exploring how AI can make everyday workflows more useful.
      </SectionTitle>
      <div className="project-toolbar">
        <div className="project-filters" aria-label="Filter projects">
          {filters.map((label) => (
            <button
              type="button"
              key={label}
              className={filter === label ? "selected" : ""}
              onClick={() => setFilter(label)}
              aria-pressed={filter === label}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="project-count" role="status">
          {String(visible.length).padStart(2, "0")} projects
        </p>
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <a
            key={project.url}
            className="project-card"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectVisual index={project.index} />
            <div className="project-copy">
              <p className="mono-label">{project.category}</p>
              <h3>
                {project.name}
                <span aria-hidden="true">↗</span>
              </h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.stack.split(" · ").map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Resume() {
  const [preview, setPreview] = useState(false);
  return (
    <section id="resume" className="portfolio-section">
      <SectionTitle number="03" label="My resume" title="Learning by building.">
        Experience, education, and the tools behind my work.
      </SectionTitle>
      <div className="resume-actions">
        <a className="button primary" href="Aromal_MB_Resume.pdf" download>
          Download resume <span>↓</span>
        </a>
        <button
          className="button secondary"
          type="button"
          aria-expanded={preview}
          aria-controls="resume-preview"
          onClick={() => setPreview((value) => !value)}
        >
          {preview ? "Close PDF preview" : "Preview resume"}{" "}
          <span>{preview ? "−" : "+"}</span>
        </button>
      </div>
      {preview && (
        <div id="resume-preview" className="resume-preview">
          <div>
            <span>AROMAL MB / RESUME</span>
            <a href="Aromal_MB_Resume.pdf" target="_blank" rel="noreferrer">
              Open PDF in a new tab ↗
            </a>
          </div>
          <a
            className="resume-preview-image"
            href="Aromal_MB_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Open full resume PDF"
          >
            <img
              src="resume-preview.png"
              alt="Preview of Aromal MB’s AI/ML Engineer resume; experience and education are also listed below."
              loading="lazy"
            />
          </a>
        </div>
      )}
      <div className="resume-columns">
        <div>
          <h3 className="column-title">
            <span>↗</span> Experience
          </h3>
          <div className="timeline">
            <article>
              <p className="timeline-date">AUG 2026 — PRESENT</p>
              <h4>AI/ML Software Trainee</h4>
              <p className="timeline-org">
                Spectrum Softtech Solutions Pvt. Ltd.
              </p>
              <p>
                Testing, evaluating, and validating machine learning models
                across datasets. Tuning hyperparameters and documenting
                edge-case failures and performance patterns.
              </p>
            </article>
            <article>
              <p className="timeline-date">JUN 2025 — JUL 2025</p>
              <h4>Data Science &amp; ML Intern</h4>
              <p className="timeline-org">GALTech Technologies Pvt. Ltd.</p>
              <p>
                Analyzed 50,000+ customer records and built a
                customer-segmentation clustering model, supporting a 15%
                improvement in targeted campaign response.
              </p>
            </article>
          </div>
        </div>
        <div>
          <h3 className="column-title">
            <span>↗</span> Education &amp; recognition
          </h3>
          <div className="timeline">
            <article>
              <p className="timeline-date">2022 — 2026</p>
              <h4>B.Tech in Computer Science Engineering</h4>
              <p className="timeline-org">
                College of Engineering, Poonjar · KTU University
              </p>
              <p>CGPA: 7.88</p>
            </article>
            <article>
              <p className="timeline-date">HACKATHONS &amp; PROJECT EXPOS</p>
              <ul className="recognition">
                <li>
                  <strong>Top 5 Finalist</strong>
                  <span>IHRD AI Samasya, ICGAIFE 3.0</span>
                </li>
                <li>
                  <strong>First Runner-up</strong>
                  <span>Gen AI Hackathon, PromptCraft</span>
                </li>
                <li>
                  <strong>First Runner-up</strong>
                  <span>IHRD Tharang 2K25 Project Expo</span>
                </li>
                <li>
                  <strong>Second Runner-up</strong>
                  <span>Hackengers 2024</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
      <section className="toolbox" aria-labelledby="toolbox-title">
        <div className="toolbox-heading">
          <div>
            <p className="mono-label">THE TOOLBOX</p>
            <h3 id="toolbox-title">
              Skills I build with<span>.</span>
            </h3>
          </div>
          <p>
            From training models to shipping APIs.
            <br />
            The tools behind my projects.
          </p>
        </div>
        <div className="toolbox-groups">
          {[
            {
              title: "Machine learning",
              mark: "01",
              skills: ["Python", "Scikit-learn", "TensorFlow"],
            },
            {
              title: "Computer vision",
              mark: "02",
              skills: ["PyTorch", "OpenCV"],
            },
            {
              title: "LLMs & agents",
              mark: "03",
              skills: ["LangChain", "LangGraph", "RAG"],
            },
            {
              title: "APIs & deployment",
              mark: "04",
              skills: ["FastAPI", "PostgreSQL", "Docker", "AWS"],
            },
          ].map((group) => (
            <div className="toolbox-group" key={group.title}>
              <p className="toolbox-area">
                <span aria-hidden="true">{group.mark}</span>
                {group.title}
              </p>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="portfolio-section contact-section">
      <p className="eyebrow">
        <span>04</span> What’s next?
      </p>
      <h2>
        Let’s build something
        <br />
        <span>worth solving.</span>
      </h2>
      <a className="contact-email" href="mailto:aromalmb1227@gmail.com">
        aromalmb1227@gmail.com <span>↗</span>
      </a>
      <div className="contact-bottom">
        <p>Chalakudy, Kerala, India</p>
        <div>
          <a
            href="https://github.com/Aromal-m-b"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/aromal-mb"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [retro, setRetro] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [terminalError, setTerminalError] = useState("");
  const canvasRef = useRef(null);
  const mainRef = useRef(null);
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
    const current = [...mainRef.current.querySelectorAll(".portfolio-section")]
      .filter((section) => section.getBoundingClientRect().top <= 180)
      .at(-1);
    setActive(current?.id || "home");
  }

  function navigate(id) {
    const section = document.getElementById(id);
    const scroller = mainRef.current;
    scroller.scrollTo({
      top:
        section.getBoundingClientRect().top -
        scroller.getBoundingClientRect().top +
        scroller.scrollTop -
        100,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
    setActive(id);
    setMenuOpen(false);
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
        <div id="MouseGlow" ref={glowRef} />
        <div id="MouseGlowBlur" />
        <header className="site-header">
          <div className="header-inner">
            <button
              type="button"
              className="wordmark"
              onClick={() => navigate("home")}
              aria-label="Aromal MB, back to home"
            >
              am<span>.</span>
            </button>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? "Close −" : "Menu +"}
            </button>
            <nav
              id="main-navigation"
              aria-label="Main navigation"
              className={menuOpen ? "open" : ""}
            >
              {[
                ["about", "About"],
                ["work", "Projects"],
                ["resume", "Resume"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  className={active === id ? "active" : ""}
                  onClick={() => navigate(id)}
                  aria-current={active === id ? "location" : undefined}
                >
                  {label}
                </button>
              ))}
              <button
                type="button"
                className="nav-terminal"
                onClick={() => {
                  setMenuOpen(false);
                  setRetro(true);
                }}
                disabled={!!terminalError}
              >
                <span aria-hidden="true">⌘</span> Computer mode
              </button>
            </nav>
          </div>
        </header>
        <main className="page-content">
          <section id="home" className="hero">
            <div className="hero-main">
              <p className="eyebrow">
                <span className="live-dot" /> AI / ML ENGINEER · KERALA, INDIA
              </p>
              <h1>
                Hi, I’m Aromal.
                <br />I build <span>intelligent</span>
                <br />
                <span>systems.</span>
              </h1>
              <p className="hero-description">
                From a curious idea to a working application.
                <br className="desktop-break" /> Exploring agentic AI, computer
                vision, and the space in between.
              </p>
              <div className="hero-actions">
                <button
                  className="button primary"
                  onClick={() => navigate("work")}
                >
                  Explore my work <span>↗</span>
                </button>
                <a
                  className="button secondary"
                  href="Aromal_MB_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View resume <span>↗</span>
                </a>
              </div>
            </div>
            <aside className="hero-note" aria-label="Areas of focus">
              <div className="note-top">
                <span>AROMAL MB</span>
                <span>BUILD / LEARN / REPEAT</span>
              </div>
              <div className="code-mark" aria-hidden="true">
                <span>{"{"}</span> am <span>{"}"}</span>
                <div className="code-orbit" />
              </div>
              <div className="note-line">
                <span>01</span>
                <p>Agentic AI &amp; LLMs</p>
              </div>
              <div className="note-line">
                <span>02</span>
                <p>Computer vision</p>
              </div>
              <div className="note-line">
                <span>03</span>
                <p>End-to-end ML</p>
              </div>
              <div className="note-bottom">
                <span className="live-dot" /> ALWAYS EXPLORING
              </div>
            </aside>
            <div className="hero-bottom">
              <p>MODELS INTO MEANINGFUL APPLICATIONS</p>
              <button type="button" onClick={() => navigate("about")}>
                Scroll to explore <span>↓</span>
              </button>
            </div>
          </section>
          <About />
          <Projects />
          <Resume />
          <Contact />
          <footer className="site-footer">
            <p>© {new Date().getFullYear()} Aromal MB</p>
            <p>
              Computer experience adapted from{" "}
              <a
                href="https://github.com/LuckeyDuckey/luckeyduckey.github.io"
                target="_blank"
                rel="noreferrer"
              >
                LuckeyDuckey
              </a>{" "}
              · MIT
            </p>
            <button type="button" onClick={() => navigate("home")}>
              Back to top ↑
            </button>
          </footer>
        </main>
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

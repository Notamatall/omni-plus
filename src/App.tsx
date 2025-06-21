import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Menu,
  X,
  Leaf,
  Droplets,
  Sun,
  Wind,
  ChevronDown,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";
import "./styles/app.css";
import { Particle } from "./types/particle";

// const OrganicBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);

//     class Particle {
//       x: number;
//       y: number;
//       size: number;
//       speedX: number;
//       speedY: number;
//       opacity: number;
//       hue: number;
//       canvas: HTMLCanvasElement;
//       constructor(canvas: HTMLCanvasElement) {
//         this.canvas = canvas;
//         this.x = Math.random() * this.canvas.width;
//         this.y = Math.random() * this.canvas.height;
//         this.size = Math.random() * 4 + 2;
//         this.speedX = (Math.random() - 0.5) * 0.3;
//         this.speedY = (Math.random() - 0.5) * 0.3;
//         this.opacity = Math.random() * 0.3 + 0.1;
//         this.hue = Math.random() * 60 + 80; // Green hues
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         // Add slight floating motion
//         this.y += Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.1;

//         if (this.x > this.canvas.width + 50) this.x = -50;
//         if (this.x < -50) this.x = this.canvas.width + 50;
//         if (this.y > this.canvas.height + 50) this.y = -50;
//         if (this.y < -50) this.y = this.canvas.height + 50;
//       }

//       draw() {
//         if (!ctx) return;
//         ctx.save();
//         ctx.globalAlpha = this.opacity;
//         ctx.fillStyle = `hsl(${this.hue}, 70%, 50%)`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();

//         // Add glow effect
//         ctx.shadowBlur = 20;
//         ctx.shadowColor = `hsl(${this.hue}, 70%, 50%)`;
//         ctx.fill();
//         ctx.restore();
//       }
//     }

//     const particles: Particle[] = [];
//     for (let i = 0; i < 50; i++) {
//       particles.push(new Particle(canvas));
//     }

//     const animate = () => {
//       ctx.fillStyle = "rgba(250, 250, 248, 0.02)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle) => {
//         particle.update();
//         particle.draw();
//       });
//       requestAnimationFrame(animate);
//     };
//     animate();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
// };

// // Custom Leaf Cursor
// const LeafCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isPointer, setIsPointer] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       const target = e.target as HTMLElement;
//       setIsPointer(window.getComputedStyle(target).cursor === "pointer");
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <motion.div
//       className="fixed pointer-events-none z-50 hidden lg:block"
//       animate={{
//         x: position.x - 12,
//         y: position.y - 12,
//         scale: isPointer ? 1.2 : 1,
//         rotate: isPointer ? 10 : 0,
//       }}
//       transition={{ type: "spring", damping: 30, stiffness: 400 }}
//     >
//       <Leaf size={24} className="text-green-600 fill-green-500" />
//     </motion.div>
//   );
// };

// Navigation

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(canvas, ctx));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { id: "section1", label: "Section 1" },
    { id: "section2", label: "Section 2" },
    { id: "section3", label: "Section 3" },
    { id: "section4", label: "Section 4" },
    { id: "section5", label: "Section 5" },
    { id: "section6", label: "Section 6" },
    { id: "section7", label: "Section 7" },
    { id: "section8", label: "Section 8" },
    { id: "section9", label: "Section 9" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">GreenGrow</span>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors cursor-pointer"
            >
              Get Started
            </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-900 cursor-pointer"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-gray-700 hover:text-green-600 font-medium cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full bg-green-600 text-white py-3 rounded-full font-semibold mt-4 cursor-pointer">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="hero-section min-h-screen flex items-center justify-center pt-20">
      <motion.div
        style={{ y }}
        className="max-w-7xl mx-auto px-6 lg:px-12 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
        >
          Grow faster and nurture better{" "}
          <span className="text-green-600">with AI</span> that analyses your
          soil in real time
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto"
        >
          Backing sustainable farms for growth
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all transform hover:scale-105 cursor-pointer">
            Get Started
          </button>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-green-600 hover:bg-green-50 transition-all cursor-pointer">
            Learn More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 mx-auto animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all"
    >
      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// Stats Section
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: "98%", label: "Crop Yield Increase" },
    { value: "50%", label: "Water Savings" },
    { value: "30%", label: "Cost Reduction" },
    { value: "100%", label: "Natural Ingredients" },
  ];

  return (
    <section ref={ref} className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does GreenGrow fertilizer work?",
      answer:
        "Our AI-powered fertilizer system analyzes your soil composition in real-time and delivers precisely formulated nutrients. This ensures optimal growth while minimizing waste and environmental impact.",
    },
    {
      question: "Is it suitable for all crop types?",
      answer:
        "Yes! GreenGrow is designed to work with a wide variety of crops. Our AI system customizes the nutrient blend based on your specific crop requirements and soil conditions.",
    },
    {
      question: "How quickly can I see results?",
      answer:
        "Most farmers report visible improvements within 2-3 weeks of application. Full benefits typically manifest within a complete growing season.",
    },
    {
      question: "What makes it environmentally friendly?",
      answer:
        "We use 100% natural ingredients, reduce water usage by up to 50%, and our precision application system minimizes runoff and soil contamination.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-green-600" />
                ) : (
                  <Plus className="w-5 h-5 text-green-600" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Sections
const MainSections = () => {
  return (
    <>
      <section id="section1" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Section 1 Title
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are on a mission to help sustainable farms grow. This is why we
              reward environmental practices with better pricing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Droplets}
              title="Smart Irrigation"
              description="Our AI-driven system monitors soil moisture and delivers water precisely when and where it's needed."
            />
            <FeatureCard
              icon={Sun}
              title="Optimal Growth"
              description="Maximize photosynthesis and nutrient uptake with our scientifically formulated fertilizer blend."
            />
            <FeatureCard
              icon={Wind}
              title="Climate Adaptive"
              description="Automatically adjusts nutrient delivery based on weather patterns and seasonal changes."
            />
          </div>
        </div>
      </section>

      <section id="section2" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Section 2 Title
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your farming practices with intelligent fertilizer
                solutions that adapt to your soil's unique needs.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time soil analysis",
                  "Precision nutrient delivery",
                  "Sustainable farming practices",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center">
                <Leaf className="w-32 h-32 text-white/30" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-100 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section id="section3" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Section 3 Title
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: item * 0.05 }}
                className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Feature {item}
                </h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="section4" className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Section 4 Title
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-10 max-w-3xl mx-auto"
          >
            Join thousands of farmers who have transformed their yields with
            GreenGrow
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all cursor-pointer"
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>

      <section id="section5" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Section 5 Title
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-3xl shadow-lg">
              <blockquote className="text-2xl text-gray-700 italic leading-relaxed">
                "GreenGrow has revolutionized our farming operation. The
                AI-driven approach has increased our yields while reducing our
                environmental impact. It's truly the future of sustainable
                agriculture."
              </blockquote>
              <div className="mt-8 flex items-center">
                <div className="w-16 h-16 bg-green-200 rounded-full"></div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">John Farmer</div>
                  <div className="text-gray-600">Sustainable Farms Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      <section id="section6" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Section 6 Title
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: step * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-green-600">
                  {step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Step {step}
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="section7"
        className="py-20 bg-gradient-to-br from-green-50 to-green-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-video bg-white rounded-3xl shadow-lg flex items-center justify-center">
                <p className="text-gray-400">Video/Image Placeholder</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Section 7 Title
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover how our innovative approach to fertilization is
                changing the game for farmers worldwide.
              </p>
              <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all cursor-pointer">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="section8" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Section 8 Title
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-bold text-green-600 mb-3">
                  {item * 25}%
                </div>
                <div className="text-gray-700 font-medium">Metric {item}</div>
                <div className="text-sm text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="section9" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Section 9 Title
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((product) => (
              <motion.div
                key={product}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: product * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                  <Leaf className="absolute bottom-4 right-4 w-24 h-24 text-green-300/50 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Product {product}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Advanced fertilizer solution designed for maximum efficiency
                    and sustainability.
                  </p>
                  <div className="flex items-center text-green-600 font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold">GreenGrow</span>
            </div>
            <p className="text-gray-400">
              Nurturing growth, sustaining life through intelligent farming
              solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 GreenGrow. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-xs">f</span>
              </div>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-xs">X</span>
              </div>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-xs">in</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden">
      {/* <LeafCursor /> */}
      <ParticleCanvas />
      <Navigation />

      <div className="relative z-10">
        <HeroSection />
        <MainSections />
        <Footer />
      </div>
    </div>
  );
};

export default App;

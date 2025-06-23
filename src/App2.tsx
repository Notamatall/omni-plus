import { motion } from "framer-motion";
import {
  Leaf,
  Droplets,
  Shield,
  Zap,
  TreePine,
  Beaker,
  Download,
  FileText,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  Sparkles,
  Globe,
  Heart,
  FlaskConical,
  Microscope,
  BarChart3,
  Mountain,
  Sun,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-10 right-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Logo Section */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-12"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur-2xl opacity-30"
              />
              <div className="relative flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-2xl">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                  <Leaf className="w-16 h-16 text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-6xl font-bold">
                    <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      OMNI
                    </span>
                    <span className="text-green-600">+</span>
                  </h1>
                  <p className="text-lg text-gray-600 font-medium">
                    Життя починається з ґрунту
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Органічний стимулятор росту рослин
              </span>
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-700">
              нового покоління
            </p>
            <p className="text-xl text-gray-600 mt-4">
              на основі глибинного торфу під впливом холодної плазми
            </p>
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <p className="mb-4">
                <span className="font-semibold text-green-700">
                  Відновлення деградованих, напівпустельних і пустельних ґрунтів
                </span>
                , підтримання мікроелементного складу родючих земель, перевід їх
                у режим сталого органічного землеробства та випуску{" "}
                <span className="font-bold text-green-600">
                  СУПЕРОРГАНІЧНИХ
                </span>{" "}
                с/г продуктів за допомогою органічного стимулятора росту рослин
                OMNI.
              </p>
              <p>
                Для вирішення питань відновлення деградованих напівпустельних і
                пустельних ґрунтів, а також створення нових територій і
                областей, відвойованих у пустель для ведення с/г робіт, ми
                пропонуємо скористатися повністю органічним, екологічно чистим і
                безпечним стимулятором росту рослин{" "}
                <span className="font-bold text-green-600">OMNI+</span>.
              </p>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: <Droplets />, text: "Утримує вологу в піску" },
              { icon: <Microscope />, text: "Активізує мікрофлору" },
              { icon: <Shield />, text: "100% органічний" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <p className="text-gray-700 font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-20 shadow-inner">
              <p className="text-gray-500 text-xl font-medium">
                <img src="slide_14.jpeg" />
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SoilDegradationSection = () => {
  const facts = [
    {
      percentage: "40%",
      text: "земель у світі деградовані",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      percentage: "9.5%",
      text: "деградованих територій за 4 роки (було 0.7%)",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      percentage: "↓",
      text: "Ґрунти втрачають здатність утримувати вологу",
      icon: <Droplets className="w-8 h-8" />,
    },
    {
      percentage: "↑",
      text: "Більше нітратів, пестицидів, важких металів",
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-red-500 to-orange-600 shadow-lg"
          >
            <Mountain className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-red-600">ДЕГРАДАЦІЯ ЗЕМЕЛЬ</span>
          </h2>
          <p className="text-2xl text-gray-700">
            Глобальний виклик, який потребує інноваційних рішень
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-10 mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Ґрунти вмирають. ВРОЖАЙ ВТРАЧАЄ СВОЮ ПОЖИВНУ ЦІННІСТЬ.
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-6 bg-red-50 rounded-2xl p-6"
              >
                <div className="p-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex-shrink-0">
                  <div className="text-white">{fact.icon}</div>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">
                    {fact.percentage}
                  </p>
                  <p className="text-gray-700">{fact.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 font-medium">
            📎 Джерело: UN News, 2024
          </p>
        </motion.div>

        {/* Chemical vs Organic Comparison */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-red-100 rounded-3xl p-8"
          >
            <h4 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
              <FlaskConical className="w-8 h-8 mr-3" />
              Хімічне землеробство
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">✗</span>
                <span>Погіршує метаболізм рослин</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">✗</span>
                <span>
                  Збільшує накопичення нітратів, важких металів, пестицидів
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-xl">✗</span>
                <span>
                  Призводить до хронічних отруєнь та онкологічних ризиків
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-green-100 rounded-3xl p-8"
          >
            <h4 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <Leaf className="w-8 h-8 mr-3" />
              Органічне землеробство
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">✓</span>
                <span>Підтримує здоровий обмін речовин</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">✓</span>
                <span>Покращує біохімію їжі</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">✓</span>
                <span>Знижує токсичність харчування</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <p className="text-xl font-bold text-gray-800 bg-yellow-100 rounded-2xl p-6 inline-block">
            Метаболізм рослини — основа метаболізму людини
          </p>
        </motion.div>

        <div className="mt-12 overflow-x-auto">
          <div className="flex flex-row gap-4 w-max">
            {[
              "slide_5.jpeg",
              "slide_6.jpeg",
              "slide_7.jpeg",
              "slide_8.jpeg",
              "slide_9.jpeg",
              "slide_10.jpeg",
            ].map((slide) => (
              <div
                key={slide}
                className="bg-gray-100 rounded-xl text-center p-4 flex-shrink-0"
              >
                <img src={slide} className="h-120 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const technologies = [
    "Розроблена українськими вченими",
    "Отримана з глибинного торфу, багатого древніми біологічно активними речовинами",
    "Проходить унікальну холодноплазмову активацію (без нагріву, без руйнування білків)",
    "Зберігає всі природні вітаміни, амінокислоти та мікроелементи",
    "Не містить синтетики, хлору, пестицидів",
  ];

  const advantages = [
    "Відновлення біологічної активності ґрунту",
    "Покращення вологоутримання",
    "Безпека для навколишнього середовища",
    "Підвищення врожайності",
    "Підходить для систем крапельного поливу",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 shadow-lg"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              OMNI+ — стимул до життя
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-10"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FlaskConical className="w-8 h-8 mr-3 text-green-600" />
              Технологія
            </h3>
            <ul className="space-y-4">
              {technologies.map((tech, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{tech}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl p-10"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-green-600" />
              Переваги
            </h3>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center bg-white rounded-xl p-4 shadow-md"
                >
                  <ChevronRight className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">{advantage}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-gray-100 rounded-3xl p-12 text-center"
        >
          <p className="text-gray-500 text-xl ">
            <img src="slide_13.jpeg" className="mx-auto" />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const EffectsSection = () => {
  const effects = [
    {
      icon: <Zap />,
      text: "Прискорює ріст рослин на 20-35%",
      color: "from-yellow-400 to-orange-600",
    },
    {
      icon: <TreePine />,
      text: "Скорочує термін розвитку до 14-24 днів",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: <Droplets />,
      text: "Утримує вологу, навіть у піску",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: <Shield />,
      text: "Підвищує стійкість до спеки, холоду, хвороб",
      color: "from-purple-400 to-pink-600",
    },
    {
      icon: <Leaf />,
      text: "Активує кореневу систему",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: <Microscope />,
      text: "Стимулює мікрофлору",
      color: "from-indigo-400 to-purple-600",
    },
  ];

  const conditions = [
    { icon: <Mountain />, title: "Пустельні та напівпустельні ґрунти" },
    { icon: <Sun />, title: "Високі температури" },
    { icon: <TreePine />, title: "Відновлення деградованих земель" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Ефект від застосування
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            OMNI+ особливо ефективний в умовах:
          </p>
        </motion.div>

        {/* Conditions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="text-green-600">{condition.icon}</div>
              </div>
              <p className="font-semibold text-gray-800">{condition.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Effects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {effects.map((effect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group "
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${effect.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}
              />
              <div className="h-full relative bg-white rounded-2xl p-6 shadow-lg">
                <div
                  className={`inline-flex p-3 bg-gradient-to-r ${effect.color} rounded-xl mb-4`}
                >
                  <div className="text-white w-6 h-6">{effect.icon}</div>
                </div>
                <p className="font-semibold text-gray-800">{effect.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-10 text-white shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-6">
            Застосування OMNI+ дозволяє:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Знизити водовитрати",
              "Підвищити врожайність та поживну цінність",
              "Відновити ґрунтове біорізноманіття",
              "Знизити хімічне навантаження на агроекосистему",
            ].map((result, index) => (
              <div key={index} className="flex items-center">
                <ChevronRight className="w-6 h-6 mr-3" />
                <span>{result}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 overflow-x-auto">
          <div className="flex flex-row gap-4 w-max">
            {[
              "slide_15.jpeg",
              "slide_16.jpeg",
              "slide_17.jpeg",
              "slide_18.jpeg",
              "slide_19.jpeg",
            ].map((slide) => (
              <div
                key={slide}
                className="bg-gray-100 rounded-xl text-center p-4 flex-shrink-0"
              >
                <img src={slide} className="h-120 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CompositionSection = () => {
  const components = [
    {
      icon: "🧪",
      name: "Гумінові кислоти високої концентрації",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: "⚗️",
      name: "Фульвові кислоти",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: "🧬",
      name: "Амінокислоти, вітаміни",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: "💎",
      name: "Мінерали, необхідні для росту",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: "🦠",
      name: "Жива мікрофлора",
      color: "from-green-400 to-lime-500",
    },
  ];

  const notContains = [
    { text: "Хлору", icon: "☠️" },
    { text: "Синтетичної хімії", icon: "⚠️" },
    { text: "Пестицидів", icon: "🚫" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-green-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 shadow-lg"
          >
            <FlaskConical className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Склад та унікальність
            </span>
          </h2>
          <p className="text-2xl font-semibold text-gray-700">
            Що робить OMNI+ унікальним?
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="mb-20">
          {/* Components Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12"
          >
            {components.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${component.color} rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}
                />
                <div className="relative bg-white rounded-3xl p-6 shadow-xl text-center h-full">
                  <div className="text-5xl mb-4">{component.icon}</div>
                  <p className="text-sm font-semibold text-gray-700">
                    {component.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Special Feature Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-10 text-white shadow-2xl mb-12"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-2/3 mb-6 lg:mb-0">
                <h3 className="text-3xl font-bold mb-4 flex items-center">
                  <Sparkles className="w-8 h-8 mr-3" />
                  Унікальна технологія холодної плазми
                </h3>
                <p className="text-xl leading-relaxed">
                  Обробка холодною плазмою зберігає молекули білка та всі
                  біологічно активні речовини, не руйнуючи природну
                  біоструктуру. OMNI+ зберігає все природне «живе» вміст, що
                  робить його 100% органічним продуктом без синтетичних домішок.
                </p>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <Shield className="w-20 h-20 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Not Contains Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-10 border-2 border-red-200 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-red-800 mb-8 text-center">
              ГАРАНТОВАНО НЕ МІСТИТЬ
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {notContains.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Chemical Analysis Slide - Full Width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Хімічний аналіз
            </h3>
            <p className="text-lg text-gray-600">
              Детальний склад підтверджений лабораторними дослідженнями
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <img
              src="slide_20.png"
              alt="Хімічний аналіз OMNI+"
              className="w-full h-auto"
            />
            {/* If image not available, show placeholder */}
            {/* <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center p-20">
                <FlaskConical className="w-20 h-20 mx-auto mb-4 text-gray-400" />
                <p className="text-2xl text-gray-500 font-medium">
                  Слайд 20: Хімічний аналіз
                </p>
                <p className="text-lg text-gray-400 mt-2">
                  Детальний лабораторний звіт
                </p>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompositionSection;
const ApplicationSection = () => {
  const methods = [
    {
      title: "Обробка ґрунту",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      steps: [
        "Обробляти ґрунт бажано у вологому стані",
        "Приготувати робочий розчин OMNI в розрахунку: 20г OMNI розвести в 1000 мл води",
        "Обробити ґрунт (бажано вологий) перед висадкою рослин",
        "Якщо при посадці рослин передбачається перемішування ґрунту, забезпечити потрапляння посівного матеріалу всередину обробленого OMNI ґрунту",
        "Середня норма піщаного ґрунту: 1 л розчину OMNI на 1м²",
      ],
    },
    {
      title: "Полив",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      steps: [
        "Приготувати робочий розчин OMNI в розрахунку: 1г OMNI розвести в 1000г води",
        "Поливати під корінь кожні 7-14 днів",
        "Категорично заборонено обприскування рослин у фазу цвітіння",
        "При вирощуванні коренеплодів (картопля) з початком цвітіння обробку розчином OMNI припинити",
      ],
    },
    {
      title: "Замочування посадкового матеріалу",
      icon: <Beaker className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      steps: [
        "Приготувати робочий розчин OMNI в розрахунку: 5г OMNI на 1000г води",
        "Насіння замочити в робочому розчині OMNI на 10-12 годин",
        "Гілочки обробити шляхом занурення на 1/3 в робочий розчин на 10-12 годин",
        "Цибулини занурити в робочий розчин перед посадкою",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Застосування OMNI+
          </h2>
        </motion.div>

        <div className="space-y-12">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-3xl blur-2xl opacity-10`}
              />
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${method.color} p-6 text-white`}
                >
                  <div className="flex items-center space-x-4">
                    {method.icon}
                    <h3 className="text-2xl font-bold">{method.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <ol className="space-y-3">
                    {method.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span
                          className={`font-bold text-xl mr-4 bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}
                        >
                          {stepIndex + 1}.
                        </span>
                        <span className="text-gray-700 leading-relaxed">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="w-6 h-6" />
            <span>📎 Інструкція в PDF</span>
          </motion.button>
        </motion.div>

        {/* Experiments placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Експерименти
          </h3>

          <div className="mt-12 overflow-x-auto">
            <div className="flex flex-row gap-4 w-max">
              {[
                "slide_26.jpeg",
                "slide_27.jpeg",
                "slide_28.jpeg",
                "slide_29.jpeg",
                "slide_30.jpeg",
                "slide_31.jpeg",
                "slide_32.jpeg",
                "slide_33.jpeg",
              ].map((slide) => (
                <div
                  key={slide}
                  className="bg-gray-100 rounded-xl text-center p-4 flex-shrink-0"
                >
                  <img src={slide} className="h-120 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HumanBenefitsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-pink-400 to-rose-600 shadow-lg"
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Користь для людини
            </span>
          </h2>
          <p className="text-2xl text-gray-700">
            Продукти харчування знову стають корисними
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-10"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Як результат впливу OMNI+
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Продукт має активну живу мікрофлору (саме тому OMNI+ бажано
                зберігати при невисокій температурі) і при з'єднанні з іншим
                живим середовищем препарат активізує регенераційні та іонні
                процеси в клітинах, що стимулює активний розвиток живих
                організмів і рослин.
              </p>
              <p className="font-semibold text-green-700">
                OMNI+ є повністю СУПЕРОРГАНІЧНИМ, екологічно чистим стимулятором
                росту, абсорбентом та антистресовим препаратом.
              </p>
              <p>
                OMNI+ постачається у вигляді концентрату, що підлягає розведенню
                у воді.
                <span className="font-semibold text-red-600">
                  {" "}
                  Вода не повинна бути хлорованою.
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border-2 border-green-300">
              <h3 className="text-xl font-bold mb-4 text-green-800">
                Окремий напрямок дії OMNI+
              </h3>
              <p className="text-gray-700">
                Посилення внутрішньоклітинного метаболізму рослин, спрямоване на
                збільшення здатності рослин переробляти мінеральні речовини з
                ґрунту в корисні для організму людей органічні сполуки.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-3xl p-8 border-2 border-yellow-300">
              <p className="text-lg font-semibold text-gray-800">
                Простими словами: рослина перестає бути насосом для закачування
                нітратів у плоди, а працює як фабрика органічних поживних
                речовин для цього плоду.
              </p>
              <p className="mt-4 text-gray-700">
                Це допоможе повернути плодам поживну цінність, а також природний
                смак і запах.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              OMNI+ повертає рослинам їх природну функцію:
            </h3>
            <p className="text-xl">
              синтезувати органічні поживні речовини, а не просто «качати»
              нітрати
            </p>
            <p className="mt-4 text-lg">
              Плоди набувають смак, аромат, вітаміни
            </p>
          </div>

          <div className="mt-8 inline-flex items-center space-x-8 text-gray-700 font-semibold">
            <span>📌 Підтверджено:</span>
            <span className="px-4 py-2 bg-white rounded-full shadow-md">
              WHO
            </span>
            <span className="px-4 py-2 bg-white rounded-full shadow-md">
              EFSA
            </span>
            <span className="px-4 py-2 bg-white rounded-full shadow-md">
              IARC
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const OrderSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 shadow-lg"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Замовити OMNI+
            </span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-10"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Форма заявки
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ім'я
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="Ваше ім'я"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="+380 XX XXX XX XX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Культура / регіон
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="Вкажіть культуру та регіон"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Відправити
              </motion.button>
            </div>

            <div className="mt-8 space-y-3 text-center text-gray-600">
              <p className="flex items-center justify-center">
                <FileText className="w-5 h-5 mr-2" />
                📎 Для дилерів — окремий доступ за запитом
              </p>
              <p className="flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                📎 Прайс-лист та умови доставки — за заявкою
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Slogan */}
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-3 mb-4 justify-center md:justify-start">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  OMNI<span className="text-green-400">+</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-400 italic">
              «OMNI+ — від природи, для природи»
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Контакти</h4>
            <a
              href="mailto:omniplusua@gmail.com"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              omniplusua@gmail.com
            </a>
            <div className="flex justify-center space-x-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          {/* Documents */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold mb-4">Документи</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Сертифікати
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Інструкція
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  PDF-презентація
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Політика конфіденційності
          </a>
          <p className="mt-4 text-gray-500">
            © 2024 OMNI+. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page
export const OmniLandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SoilDegradationSection />
      <SolutionSection />
      <EffectsSection />
      <CompositionSection />
      <ApplicationSection />
      <HumanBenefitsSection />
      <OrderSection />
      <Footer />
    </div>
  );
};

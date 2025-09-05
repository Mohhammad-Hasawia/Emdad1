import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sliderData = [
  {
    key: "ambition",
    image: "/img/3.jpg",
    target: "/about#ambition",
  },
  {
    key: "safety",
    image: "/img/car2.png",
    target: "/quality#safety",
  },
  {
    key: "numbers",
    image: "/img/11.webp",
    target: "/quality#quality-numbers",
  },
  {
    key: "partnerships",
    image: "/img/8.png",
    target: "/about#partnerships",
  },
];

export function InteractiveSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + sliderData.length) % sliderData.length
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % sliderData.length);
  };

  const handleLearnMoreClick = () => {
    const currentItem = sliderData[activeIndex];
    const [path, hash] = currentItem.target.split("#");

    navigate(path);

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      setTimeout(() => window.scrollTo(0, 0), 100);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Main Content with Dynamic Background */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('${sliderData[activeIndex].image}')`,
              }}
            >
              <div className="absolute inset-0 bg-[#1F3B73] bg-opacity-70 flex items-center justify-center">
                <div className="text-center max-w-3xl px-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-emdad-gold mb-6 arabic-text">
                    {t(`slider.${sliderData[activeIndex].key}`)}
                  </h2>
                  <p className="text-xl text-white leading-relaxed mb-8 arabic-text">
                    {t(`slider.${sliderData[activeIndex].key}.description`)}
                  </p>
                  <Button
                    onClick={handleLearnMoreClick}
                    className="bg-emdad-gold hover:bg-yellow-500 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none"
                  >
                    {language === "ar" ? "اعرف أكثر" : "Learn More"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-emdad-gold hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg z-10"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          <button
            onClick={goToNext}
            className="focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-emdad-gold hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg z-10"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Navigation Dots with Text Labels */}
          <div className="flex justify-center mt-8 space-x-4">
            {sliderData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`focus:outline-none flex flex-col items-center transition-all duration-300 ${
                  index === activeIndex
                    ? "transform scale-110"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full mb-2 ${
                    index === activeIndex ? "bg-emdad-gold" : "bg-gray-400"
                  }`}
                ></div>
                <span
                  className={`text-sm font-medium whitespace-nowrap ${
                    index === activeIndex ? "text-emdad-gold" : "text-gray-600"
                  } arabic-text`}
                >
                  {t(`slider.${item.key}`)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

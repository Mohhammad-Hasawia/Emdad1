import { useLanguage } from "@/hooks/useLanguage";

export function NumbersSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-emdad-navy mb-8 arabic-text">
                {t("numbers.title")}
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed arabic-text">
                {t("numbers.description")}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-emdad-gold mb-2">
                    800,000
                  </div>
                  <div className="text-gray-600">Kilometers Covered</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-emdad-gold mb-2">
                    <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-md">
                  </div>
                  <div className="text-gray-600">m³ Transported</div>
                </div>
              </div>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="/img/10.webp" 
                alt="Emdad Mubasher Fleet"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

  )
}
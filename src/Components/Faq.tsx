export const Faq = () => {
  return (
    <div className="w-full my-[50px]">
      <h1 className="text-center text-white text-6xl my-5">S.S.S</h1>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="w-[40%] flex flex-col mx-auto gap-4"
      >
        <div>
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-800 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>Banana.com nedir ?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border   dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-white dark:text-gray-400">
                banana.com modern ve zengin özelliklere sahip biyo bağlantıların
                yanı sıra güvenli dosya barındırma hizmetleri sağlayan bir
                platformdur.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-2"
            >
              <span>Banana.com'u kullanmak ücretsiz mi?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-5 border  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-white dark:text-gray-400">
                Evet, banana.com'u kullanmak tamamen ücretsizdir. Ancak ayrıca
                ayrıcalıklı özelliklere sahip bir Premium paket de sunuyoruz.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-3"
            >
              <span>Banana.com ile ne yapabilirim ?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="p-5 border  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-white dark:text-gray-400">
                Banana.com ile tüm sosyal medya bağlantılarınızı tek bir yere
                bağlayarak çevrimiçi varlığınızı başkalarıyla paylaşmanızı
                kolaylaştırabilirsiniz.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 id="accordion-collapse-heading-4">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-4"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-4"
            >
              <span>Banana.com profili oluşturmak ne kadar sürer?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-4"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-4"
          >
            <div className="p-5 border  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-white dark:text-gray-400">
                Banana.com profilinizi oluşturmak hızlı ve kolaydır. Sadece bir
                hesap oluşturun ve profilinizi hemen özelleştirmeye başlayın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

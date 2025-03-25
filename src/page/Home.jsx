import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-between mx-auto mb-10 md:max-w-7xl">
        <div className="flex flex-col items-center w-full md:flex-row md:justify-between md:mt-5">
          <div className="flex flex-col items-center justify-center w-[90%]  border border-black rounded-full pt-14 aspect-square md:w-[45%]">
            <h1 className="md:text-[45px] text-[36px] font-semibold font-manrope">
              ДИЗАЙН-БЮРО
            </h1>
            <h1 className="md:text-[45px] text-[36px] font-semibold font-manrope text-[#e06767]">
              CHERES
            </h1>
            <p className="text-xs font-light text-center font-manrope w-[192px] mt-4 md:w-[264px] md:text-lg">
              разработка рабочей документации и визуализаций к дизайн-проектам
            </p>
            <button className="w-[145px] transition-all duration-500 h-12 font-xs text-white font-manrope font-medium bg-[#9e4a45] rounded-[60px] mt-5 md:w-[180px] md:h-14 hover:bg-white hover:border hover:border-[#9e4a45] hover:text-[#9e4a45]">
              УСЛУГИ
            </button>
          </div>
          <div className="flex w-full homeImg h-[400px] bg-white md:w-[50%] md:h-[600px]"></div>
        </div>
      </div>
      <div className="w-full bg-[#f1f1f1] py-10">
        <div className="flex flex-col px-4 mx-auto md:flex-row max-w-7xl md:items-start">
          <h1 className="text-xs font-bold font-manrope opacity-20 md:w-[335px] md:text-sm">
            ПОЧЕМУ МЫ
          </h1>
          <div className="flex flex-col mt-10 md:mt-0 ">
            <h1 className="text-[23px] font-medium font-manrope leading-[26px]">
              МЫ ПОМОГАЕМ РЕАЛИЗОВАТЬ ВАШ ДИЗАЙН-ПРОЕКТ, РАЗРАБАТЫВАЯ ДЛЯ ЭТОГО
            </h1>
            <div className="flex flex-col gap-5 mt-5 md:flex-row md:gap-10 md:mt-10">
              <div className="border-l-2 border-gray-300 text-[17px] md:text-[14px] pl-3 font-manrope font-light opacity-70 ">
                Все необходимые для стройки чертежи, спецификации и развертки
              </div>
              <div className="border-l-2 border-gray-300 text-[17px] md:text-[14px] pl-3 font-manrope font-light opacity-70 ">
                Работаем в своем фирменном оформлении, которое выделяется и
                запоминается
              </div>
              <div className="border-l-2 border-gray-300 text-[17px] md:text-[14px] pl-3 font-manrope font-light opacity-70">
                Дополняем альбом узлами и 3д-фрагментами, чтобы у строителей не
                оставалось вопросов в ходе реализации
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 mx-auto mt-10 md:flex-row max-w-7xl md:items-start md:justify-start md:mt-20">
        <h1 className="text-xs font-bold font-manrope opacity-20 md:w-[423px] md:text-sm">
          O CHERES.BURO
        </h1>
        <div className="mt-10 md:mt-0">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <div className="flex items-center justify-center md:items-start">
              <div className="flex flex-col px-6 md:px-0 md:pr-6">
                <h1 className="text-[40px] text-[#9a3c35] font-manrope font-normal">
                  3+
                </h1>
                <h1 className="text-[17px] md:text-[15px] opacity-70 font-light font-manrope md:w-[120px] ">
                  лет существует дизайн-бюро
                </h1>
              </div>
              <div className="flex flex-col px-6 border-l-2 border-gray-400">
                <h1 className="text-[40px] text-[#9a3c35] font-manrope font-normal">
                  8000+
                </h1>
                <h1 className="text-[17px] md:text-[15px] opacity-70 font-light font-manrope md:w-[140px] ">
                  м2 разработанной площади
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center my-8 border-gray-400 md:my-0 md:border-l-2 md:pl-5 md:items-start ">
              <h1 className="text-[40px] text-[#9a3c35] font-manrope font-normal">
                65+
              </h1>
              <h1 className="text-[17px] md:text-[15px] opacity-70 font-light font-manrope text-center md:text-start ">
                дизайнеров реализовали <br /> проекты с нами
              </h1>
            </div>
            <div className="flex items-center justify-center md:items-start">
              <div className="flex flex-col px-6 pr-16 border-gray-400 md:border-l-2 md:ml-5 md:pr-5">
                <h1 className="text-[40px] text-[#9a3c35] font-manrope font-normal">
                  5
                </h1>
                <h1 className="text-[17px] md:text-[15px] opacity-70 font-light font-manrope md:w-[90px] ">
                  лет общий опыт работы
                </h1>
              </div>
              <div className="flex flex-col px-6 border-l-2 border-gray-400">
                <h1 className="text-[40px] text-[#9a3c35] font-manrope font-normal">
                  11
                </h1>
                <h1 className="text-[17px] md:text-[15px] opacity-70 font-light font-manrope w-[146px] md:w-[190px] ">
                  реализованных объектов за пределами РФ
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-[17px] md:text-[15px] font-light opacity-70 font-manrope mt-5 md:flex-row md:w-full md:mt-10 md:gap-0">
            <div>
              <div className="flex items-start justify-between gap-3 md:justify-start">
                <span className="w-3 h-3 mt-1 border border-red-500 rounded-full"></span>
                <p className="w-[95%] pl-1 md:w-[90%]">
                  Над каждым проектом трудится практикующий дизайнер-архитектор,
                  соблюдающий строительные нормы, а главное — возможность
                  реализации!{" "}
                  <span className="flex md:inline">
                    Мы знаем, что необходимо показать для того, чтобы строители
                    могли реализовать дизайн-проект
                  </span>
                </p>
              </div>
              <div className="flex items-start justify-between gap-3 mt-5 md:justify-start">
                <span className="w-3 h-3 mt-1 border border-red-500 rounded-full"></span>
                <p className="w-[95%] pl-1 md:w-[90%]">
                  Работа в BIM создается 3D-модель помещения, за счет чего сразу
                  же наглядно можно проверить все открывания, примыкания и т. д.
                  и в случае необходимости доработать их
                </p>
              </div>
              <div className="flex items-start justify-between gap-3 mt-5 md:justify-start">
                <span className="w-3 h-3 mt-1 border border-red-500 rounded-full"></span>
                <p className="w-[95%] pl-1 md:w-[90%] pr-10">
                  Перед сдачей на стройку альбом проходит 2 круга проверок
                </p>
              </div>
            </div>
            <div className="flex-col md:flex md:w-full">
              <div className="flex items-start justify-between gap-3 mt-5 md:mt-0 md:justify-start">
                <span className="w-3 h-3 mt-1 border border-red-500 rounded-full"></span>
                <p className="w-[95%] pl-1 md:w-[90%]">
                  Большой опыт работы. Образование в сфере дизайна и архитектуры
                </p>
              </div>
              <div className="flex items-start justify-between gap-3 mt-5 md:justify-start">
                <span className="w-3 h-3 mt-1 border border-red-500 rounded-full"></span>
                <p className="w-[95%] pl-1 md:w-[90%]">
                  Закрытые и реализованные проекты как жилых, так и коммерческих
                  помещений
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 mx-auto mt-10 mb-20 md:flex-row max-w-7xl md:items-start md:justify-start md:mt-20">
        <h1 className="text-xs font-bold font-manrope opacity-20 md:w-[367px] md:text-sm">
          УСЛУГИ
        </h1>
        <div className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-2">
          <div className="flex flex-col">
            <img
              src="https://optim.tildacdn.com/tild3232-3462-4364-b761-303064343464/-/cover/888x582/center/center/-/format/webp/WhatsApp_Image_2023-.jpeg.webp"
              alt="sf"
              className="md:h-[400px] md:w-[990px]"
            />
            <h1 className="text-[18px] font-manrope font-medium mt-2">
              ЧЕРТЕЖИ
            </h1>
          </div>
          <div className="flex flex-col">
            <img
              src="https://optim.tildacdn.com/tild3661-3664-4163-b239-613437346665/-/cover/994x582/center/center/-/format/webp/noroot.jpg.webp"
              alt="sf"
              className="md:h-[400px] md:w-[990px]"
            />
            <h1 className="text-[18px] font-manrope font-medium mt-2">
              ИНФОПРОДУКТЫ
            </h1>
          </div>
          <div className="flex flex-col">
            <img
              src="https://optim.tildacdn.com/tild3430-3231-4832-b464-343037633961/-/cover/888x582/center/center/-/format/webp/123fa220888184766f5b.jpg.webp"
              alt="sf"
              className="md:h-[400px] md:w-[990px]"
            />
            <h1 className="text-[18px] font-manrope font-medium mt-2">
              ВИЗУАЛИЗАЦИЯ
            </h1>
          </div>
          <div className="flex flex-col">
            <img
              src="https://optim.tildacdn.com/tild3664-3465-4438-b439-333032316435/-/cover/994x584/center/center/-/format/webp/Frame_23-min_1.jpg.webp"
              alt="sf"
              className="md:h-[400px] md:w-[990px]"
            />
            <h1 className="text-[18px] font-manrope font-medium mt-2">
              ПЛАНИРОВОЧНОЕ РЕШЕНИЕ
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

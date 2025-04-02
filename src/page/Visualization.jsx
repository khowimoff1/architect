import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Swiperr from "../assets/components/Swiper";
import Form from "../assets/components/Form";

const Visualization = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState([]);
  const images = [
    "https://optim.tildacdn.com/tild3734-3764-4138-b366-393661386330/-/resize/600x800/-/format/webp/2714d320888184766f5b.jpg.webp",
    "https://optim.tildacdn.com/tild6632-3431-4334-b238-386632376438/-/resize/600x800/-/format/webp/123fa220888184766f5b.jpg.webp",
    "https://optim.tildacdn.com/tild6564-3631-4366-b937-643262343761/-/resize/600x800/-/format/webp/3d4af220888184766f5b.jpg.webp",
    "https://optim.tildacdn.com/tild3461-6436-4437-b830-633734656539/-/resize/600x800/-/format/webp/96cf4520888184766f5b.jpg.webp",
    "https://optim.tildacdn.com/tild6639-3835-4363-a134-356534613236/-/resize/600x800/-/format/webp/7.jpg.webp",
    "https://optim.tildacdn.com/tild6439-6464-4866-b262-653061636331/-/resize/600x800/-/format/webp/8.jpg.webp",
    "https://optim.tildacdn.com/tild3132-6339-4263-a665-633766656535/-/resize/600x800/-/format/webp/bf391720846933766ef2.jpg.webp",
    "https://optim.tildacdn.com/tild3233-6335-4333-b862-373934356236/-/resize/600x800/-/format/webp/a0080020846933766ef2.jpg.webp",
    "https://optim.tildacdn.com/tild6637-3762-4539-a536-613661633762/-/resize/600x800/-/format/webp/62563e20846933766ef2.jpg.webp",
    "https://optim.tildacdn.com/tild6537-3735-4632-b234-393031316234/-/resize/600x800/-/format/webp/10.jpg.webp",
    "https://optim.tildacdn.com/tild3562-3739-4033-b063-373634363166/-/resize/600x800/-/format/webp/11.jpg.webp",
  ];

  const classs = "h-[435px] md:h-[517px]";
  return (
    <div>
      <div className="flex flex-col px-4 mx-auto mt-10 max-w-7xl md:items-start md:justify-start">
        <div className="flex items-start justify-between md:w-full">
          <div className="flex mt-2">
            <span className="block w-[1.6px] h-[17px] bg-[#000000]"></span>
            <span className="block h-[1.6px] w-[17px] bg-[#000000]"></span>
          </div>
          <h1 className="text-[33px] text-center text-[#000000] font-manrope leading-10 w-[270px] md:w-auto md:text-[45px]">
            ИНТЕРЬЕРНАЯ ВИЗУАЛИЗАЦИЯ
          </h1>
          <div className="flex mt-2">
            <span className="block h-[1.6px] w-[17px] bg-[#000000]"></span>
            <span className="block w-[1.6px] h-[17px] bg-[#000000]"></span>
          </div>
        </div>
        <div className="w-full mt-5 h-[512px] md:h-[609px] text-transparent flex visual">
          s
        </div>
      </div>
      <div className="flex flex-col w-full px-4 mx-auto mt-20 md:flex-row max-w-7xl md:items-start">
        <h1 className="text-xs font-bold font-manrope opacity-20 md:w-[230px] md:text-sm md:pr-10">
          ТАРИФЫ
        </h1>
        <div className="w-full">
          <div className="w-full py-6 mt-6 border-t-2 border-black">
            <h1 className="text-[22px] text-[#000000] font-medium font-manrope ">
              ЖИЛЫЕ/КОММЕРЧЕСКИЕ ПРОСТРАНСТВА
            </h1>
            <div className="flex flex-col md:flex-row-reverse md:justify-between md:gap-10 md:pr-10 md:min-h-[488px] ">
              <div className="w-full flex flex-col items-center  md:w-[362px] mt-6 md:relative -top-[55px] right-0">
                <div className="w-[90%] h-[435px] md:h-[390px] md:w-full">
                  <Swiperr images={images} classs={classs} />
                </div>
                <p className="mt-2 text-sm font-light opacity-70 md:hidden">
                  Render: Ксения Словак
                </p>
              </div>
              <div className="flex-col justify-between mt-6 md:w-full md:flex">
                <div>
                  <h1 className="text-[18px] font-manrope font-semibold md:text-[13px]">
                    Что входит:
                  </h1>
                  <ul className="space-y-1 text-[17px] black pl-3 md:text-[12px]">
                    <li className="flex items-start gap-2">
                      <span className="block w-[6px] h-[6px] mt-2 text-transparent bg-black rounded-full">
                        1
                      </span>
                      2 круга правок (3 и последующий круг правок от 30% от
                      стоимости помещения)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="block w-[6px] h-[6px] mt-2 text-transparent bg-black rounded-full">
                        1
                      </span>
                      7 PRO моделей на помещение (при наличии определенной PRO
                      модели в нашей библиотеке доплачивать за нее не нужно)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="block w-[6px] h-[6px] mt-2 bg-black rounded-full"></span>
                      4−10 ракурсов/помещение
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-center justify-between pt-6 mt-8 border-t-2 border-gray-300">
                  <div className="w-full md:flex">
                    <div className="flex flex-col gap-1 ">
                      <h1 className="text-[18px] font-manrope font-semibold md:text-[13px]">
                        Сроки:
                      </h1>
                      <p className="text-[18px] opacity-70 md:text-[13px] md:max-w-[253px]">
                        2−3 рабочих дня/помещение (сроки указаны до первых
                        черновых рендеров)
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 pt-6 mt-6 border-t-2 border-gray-300 md:mt-0 md:border-t-0 md:border-l-2 md:pt-0 md:pl-5">
                      <h1 className="text-[18px] font-manrope font-semibold md:text-[13px]">
                        Стоимость:
                      </h1>
                      <div className="flex items-center gap-3">
                        <span className="flex w-[6px] h-[6px] text-transparent bg-black rounded-full">
                          q
                        </span>
                        <p className="text-[18px] opacity-70 md:text-[13px]">
                          7$/м2
                        </p>
                      </div>
                      <div className="relative flex items-center gap-3">
                        <span className="flex w-[6px] h-[6px] text-transparent bg-black rounded-full">
                          q
                        </span>
                        <p className="text-[18px]  md:text-[13px] flex items-center gap-4">
                          <span className="opacity-70">
                            8$/м2 – сложные стили
                          </span>
                          <span className="relative group">
                            <IoIosInformationCircleOutline className="text-[34px] md:-right-[50px] right-[40px] cursor-pointer" />
                            <div className="absolute md:left-1/2 -left-[100px] -translate-x-1/2 top-[120%] bg-white text-black text-[14px] p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[300px] hidden group-hover:block">
                              Классический, барокко, арт-деко и прочие сложные
                              стили с большим количеством декоративных
                              элементов.
                              <br />
                              <span className="mt-2">
                                Объекты площадью от 500м2 рассчитываются
                                индивидуально (-20-40% от основной стоимости)
                              </span>
                            </div>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <a href="https://t.me/+998332634242" className="w-full">
                    <button className="flex bg-[#005F7F] border border-[#005F7F] text-white transition-all duration-300 w-full h-[53px] rounded-full items-center justify-center font-semibold hover:bg-white hover:text-[#005F7F] md:h-[40px] mt-4 md:mt-6 ">
                      ЗАКАЗАТЬ
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full py-6 mt-6 border-t-2 border-black">
            <h1 className="text-[22px] text-[#000000] font-medium font-manrope ">
              КОММЕРЧЕСКИЕ ПРОСТРАНСТВА
            </h1>
            <div className="flex flex-col md:flex-row-reverse md:justify-between md:gap-10 md:pr-10 md:min-h-[488px] ">
              <div className="w-full flex flex-col items-center  md:w-[362px] mt-6 md:relative -top-[55px] right-0">
                <div className="w-[90%] h-[435px] md:h-[390px] md:w-full">
                  <Swiperr images={images} classs={classs} />
                </div>
                <p className="mt-2 text-sm font-light opacity-70 md:hidden">
                  Render: Ксения Словак
                </p>
              </div>
              <div className="flex-col justify-between mt-6 md:w-full md:flex">
                <div>
                  <h1 className="text-[18px] font-manrope font-semibold md:text-[13px]">
                    Что входит:
                  </h1>
                  <ul className="space-y-1 text-[17px] black pl-3 md:text-[12px]">
                    <li className="flex items-start gap-2">
                      <span className="block w-[6px] h-[6px] mt-2 text-transparent bg-black rounded-full">
                        1
                      </span>
                      2 круга правок (3 и последующий круг правок от 30% от
                      стоимости помещения)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="block w-[6px] h-[6px] mt-2 text-transparent bg-black rounded-full">
                        1
                      </span>
                      7 PRO моделей на помещение (при наличии определенной PRO
                      модели в нашей библиотеке доплачивать за нее не нужно)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="block w-[6px] h-[6px] mt-2 bg-black rounded-full"></span>
                      4−10 ракурсов/помещение
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-center justify-between pt-6 mt-8 border-t-2 border-gray-300">
                  <div className="w-full md:flex">
                    <div className="flex flex-col gap-1 ">
                      <h1 className="text-[18px] font-manrope font-semibold md:text-[13px]">
                        Сроки:
                      </h1>
                      <p className="text-[18px] opacity-70 md:text-[13px] md:max-w-[253px]">
                        2−3 рабочих дня/помещение (сроки указаны до первых
                        черновых рендеров)
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 pt-6 mt-6 border-t-2 border-gray-300 md:mt-0 md:border-t-0 md:border-l-2 md:pt-0 md:pl-5">
                      <h1 className="text-[18px] font-manrope font-semibold md:text-[13px]">
                        Стоимость:
                      </h1>
                      <div className="flex items-center gap-3 ">
                        <span className="flex w-[6px] h-[6px] text-transparent bg-black rounded-full">
                          q
                        </span>
                        <p className="text-[18px] md:text-[13px] flex items-center gap-4">
                          <span className=" opacity-70">1 000₽/м2</span>
                          <span className="relative group">
                            <IoIosInformationCircleOutline className="text-[34px] md:-right-[50px] right-[40px] cursor-pointer " />
                            <div className="absolute md:left-1/2 left-[50px] -translate-x-1/2 top-[120%] bg-white text-black text-[14px] p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[300px] hidden group-hover:block">
                              Классический, барокко, арт-деко и прочие сложные
                              стили с большим количеством декоративных
                              элементов. <br />{" "}
                              <span className="mt-2">
                                Объекты площадью от 500м2 рассчитываются
                                индивидуально (-20-40% от основной стоимости)
                              </span>
                            </div>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => {
                      setForm({
                        title: "Жилые пространства",
                        li: [
                          "2 круга правок (3 и последующий круг правок от 30% от стоимости помещения)",
                          "5 PRO моделей на помещение (при наличии определенной PRO модели в нашей библиотеке доплачивать за нее не нужно)",
                          "4−7 ракурсов/помещение",
                        ],
                        srok: "1−5 рабочих дней/помещение (сроки указаны до первых черновых рендеров)",
                        stmoist: "1 000₽/м2",
                        stmoist1: "1 200₽/м2 — сложные стили",
                      });
                      setIsOpen(true);
                    }} className="flex bg-[#9e4a45] border border-[#9e4a45] text-white transition-all duration-300 w-full h-[53px] rounded-full items-center justify-center font-semibold hover:bg-white hover:text-[#9e4a45] md:h-[40px] mt-4 md:mt-6 ">
                    ЗАКАЗАТЬ
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col px-4 mx-auto mt-20 md:flex-row max-w-7xl md:items-start">
        <h1 className="text-xs font-bold font-manrope opacity-20 md:w-[230px] md:text-sm md:pr-10">
          ЭТАПЫ РАБОТЫ
        </h1>
        <div className="md:w-full">
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-0">
            <h1 className="text-[42px] font-normal  text-[#005F7F]   font-manrope">
              01
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                ПЕРВЫЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px]">
                Выбор стилистики, обсуждение основных вопросов, заключение
                договора, заполнение ТЗ, предоплата 50%
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-2">
            <h1 className="text-[42px] font-light  text-[#005F7F]   font-manrope">
              02
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                ВТОРОЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px]">
                Моделирование объекта. 2-3 дня/помещение. Отправка черновых
                рендеров в низком разрешении
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-2">
            <h1 className="text-[42px] font-light  text-[#005F7F]   font-manrope">
              03
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                ТРЕТИЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px] md:pr-4">
                Согласование/корректировка видов (корректировки присылаются в
                одном файле)
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-2">
            <h1 className="text-[42px] font-light  text-[#005F7F]   font-manrope">
              04
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                ЧЕТВЕРТЫЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px]">
                Внесение корректировок. 1−3 рабочих дня на каждый круг правок (2
                круга правок)
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-2">
            <h1 className="text-[42px] font-light  text-[#005F7F]   font-manrope">
              05
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                ПЯТЫЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px] md:pr-5">
                Согласование финальных рендеров
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-2">
            <h1 className="text-[42px] font-light  text-[#005F7F]   font-manrope">
              06
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                ШЕСТОЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px]">
                Вывод визуализаций в максимальном качестве (от 2500рх по большей
                стороне), постобработка (при необходимости)
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-2">
            <h1 className="text-[42px] font-light  text-[#005F7F]   font-manrope">
              07
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                СЕДЬМОЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px]">
                Оплата оставшихся 50%, предоставление заказчику финальных
                визуализаций
              </h1>
            </div>
          </div>
          <div className="flex w-full px-4 py-5 mx-auto items-start bg-[#f1f1f1] gap-4 md:mt-5">
            <div className="w-[25px] h-[25px] bg-[#005F7F] rounded-full flex text-white items-center justify-center md:w-[25px] md:h-[25px] text-lg md:text-base">
              !
            </div>
            <h1 className="font-semibold text-[14px] md:text-[14px] md:w-auto w-[90%]">
              МЫ НЕ БЕРЕМ В РАБОТУ{" "}
              <span className="font-light font-manrope md:font-sans">
                Частичные заказы (например, визуализация только одного
                помещения) и объекты без четкого ТЗ
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#fff] py-16 md:py-5 mt-24 md:mt-24">
        <div className="flex flex-col px-4 mx-auto md:flex-row max-w-7xl md:items-start md:py-0">
          <h1 className="text-xs font-bold font-manrope opacity-20 md:w-[235px] md:text-sm md:pt-5">
            ДЛЯ НАЧАЛА РАБОТ НЕОБХОДИМЫ
          </h1>
          <div className="relative flex flex-col mt-5 md:justify-between md:w-full md:mt-0 md:flex-row md:gap-10">
            <div className="flex justify-center w-full md:w-auto">
              <img
                src="https://optim.tildacdn.com/tild6365-3036-4961-b565-366137383430/-/cover/362x418/center/center/-/format/webp/62563e20846933766ef2.jpg.webp"
                alt="q"
                className="w-[317px] h-[435px] md:w-[362px] md:h-[418px]"
              />
            </div>
            <div className="mt-5 space-y-4 md:mt-0 md:flex flex-col justify-between md:w-[61%]">
              <div className="flex justify-start gap-2">
                <span className="w-3 h-3 mt-2 border border-[#005F7F]   rounded-full md:mt-1"></span>
                <p className="text-[18px] w-full leading-2 pl-1 opacity-70 md:text-[14px]">
                  Фото/видео объекта (вид из окна)
                </p>
              </div>
              <div className="flex justify-start gap-2">
                <span className="w-3 h-3 mt-2 border border-[#005F7F]   rounded-full md:mt-1"></span>
                <p className="text-[18px] w-full leading-2 pl-1 opacity-70 md:text-[14px]">
                  Обмерный план со всеми размерами, отметками высот. Формат
                  PDF/DWG/PLN
                </p>
              </div>
              <div className="flex justify-start gap-2">
                <span className="w-3 h-3 mt-2 border border-[#005F7F]   rounded-full md:mt-1"></span>
                <p className="text-[18px] w-full leading-2 pl-1 opacity-70 md:text-[14px]">
                  Планировочное решение. Формат PDF/DWG/PLN
                </p>
              </div>
              <div className="flex justify-start gap-2">
                <span className="w-3 h-3 mt-2 border border-[#005F7F]   rounded-full md:mt-1"></span>
                <p className="text-[18px] w-full leading-2 pl-1 opacity-70 md:text-[14px]">
                  3Д-модель BIM/ SketchUp (при наличии)
                </p>
              </div>
              <div className="flex justify-start gap-2">
                <span className="w-3 h-3 mt-2 border border-[#005F7F]   rounded-full md:mt-1"></span>
                <p className="text-[18px] w-full leading-2 pl-1 opacity-70 md:text-[14px]">
                  Чертежи: электрика, раскладка напольных покрытий, опуски
                  потолков, карнизов и прочая информация (в любом удобном
                  формате)
                </p>
              </div>
              <div className="flex justify-start gap-2">
                <span className="w-3 h-3 mt-2 border border-[#005F7F]   rounded-full md:mt-1"></span>
                <p className="text-[18px] w-full leading-2 pl-1 opacity-70 md:text-[14px]">
                  Чертежи мебели на заказ с размерами (для правильного
                  моделирования)
                </p>
              </div>
              <div className="flex justify-start gap-2">
                <span className="w-3 h-3 mt-2 border border-[#005F7F]   rounded-full md:mt-1"></span>
                <p className="text-[18px] w-full leading-2 pl-1 opacity-70 md:text-[14px]">
                  Коллажи/развертки/референсы с описанием материалов,
                  используемых дизайнерских приемов, моделей мебели, освещения и
                  т. д. + ссылки на 3ddd/сайт производителя
                </p>
              </div>
              <div className="flex justify-start gap-2">
                <span className="w-3 h-3 mt-2 border border-[#005F7F]   rounded-full md:mt-1"></span>
                <p className="text-[18px] w-full leading-2 pl-1 opacity-70 md:text-[14px]">
                  Указание желаемых ракурсов, ориентации кадров (горизонтальные,
                  вертикальные, квадратные), описание требования для финального
                  изображения
                </p>
              </div>
              <a href="/Бриф опросник.pdf" target="_blank">
                <button className="w-full border-2 h-[53px] rounded-[40px] text-[#005F7F] border-[#005F7F] font-medium transition-all duration-300 hover:bg-[#005F7F] hover:text-[#fff] md:h-[40px]">
                  СМОТРЕТЬ ТЗ
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pl-4 pr-2 mx-auto mt-16 mb-20 md:flex-row max-w-7xl md:items-start">
        <h1 className="text-[16px] font-bold font-manrope opacity-20 md:w-[230px] md:text-sm md:pr-10">
          ДОП. УСЛУГИ
        </h1>
        <div className="mt-10 md:w-full">
          <div className="items-center justify-between pt-5 mt-5 border-t-2 md:flex">
            <div>
              <h1 className="text-[18px] font-medium font-manrope">
                ПАНОРАМА 360°
              </h1>
              <p className="text-[13px] font-light font-manrope opacity-60 mt-2">
                цена указана за 1 вид
              </p>
            </div>
            <div className="flex font-medium text-[22px] font-manrope mt-5 md:w-[130px]">
              20$.
            </div>
          </div>
          <div className="items-center justify-between pt-5 mt-5 border-t-2 md:flex">
            <div>
              <h1 className="text-[18px] font-medium font-manrope">
                ПОКАЗ РАЗЛИЧНЫХ СЦЕНАРИЕВ ОСВЕЩЕНИЯ
              </h1>
              <p className="text-[13px] font-light font-manrope opacity-60 mt-2">
                указана начальная стоимость за 1 помещение (для чистоты кадров
                сцена перенастраивается под нужное освещение)
              </p>
            </div>
            <div className="flex font-medium text-[22px] font-manrope mt-5 md:w-[130px]">
              20$.
            </div>
          </div>
          <div className="items-center justify-between pt-5 mt-5 border-t-2 md:flex">
            <div>
              <h1 className="text-[18px] font-medium font-manrope">
                ПРАВКИ ПОСЛЕ УТВЕРЖДЕНИЯ ФИНАЛЬНЫХ РЕНДЕРОВ
              </h1>
              <p className="text-[13px] font-light font-manrope opacity-60 mt-2">
                50% от стоимости помещения
              </p>
            </div>
            <div className="flex font-medium text-[22px] font-manrope mt-5  md:w-[130px]"></div>
          </div>
          <div className="items-center justify-between pt-5 pb-5 mt-5 border-t-2 border-b-2 md:flex">
            <div>
              <h1 className="text-[18px] font-medium font-manrope">
                АНИМИРОВАННОЕ ВИДЕО
              </h1>
              <p className="text-[13px] font-light font-manrope opacity-60 mt-2">
                указана начальная стоимость за 1 секунду
              </p>
            </div>
            <div className="flex font-medium text-[22px] font-manrope mt-5 md:w-[130px]">
              20$.
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Form setIsOpen={setIsOpen} form={form} setForm={setForm} />}
    </div>
  );
};

export default Visualization;

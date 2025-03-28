import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Planning = () => {
  return (
    <div className="mb-20 md:mb-28">
      <div className="flex flex-col px-4 mx-auto mt-8 max-w-7xl md:flex-row md:justify-between">
        <div className="flex-col justify-between left md:flex">
          <div className="flex w-full">
            <img
              src="https://optim.tildacdn.com/tild3038-6235-4833-b334-336537633431/-/cover/416x416/center/center/-/format/webp/96cf4520888184766f5b.jpg.webp"
              alt="a"
              className="w-[134px] h-[134px] md:w-[230px] md:h-[230px]"
            />
            <div className="flex border-t border-b border-gray-300">
              <img
                src="https://static.tildacdn.com/tild6230-3535-4464-b161-383732643237/__Gifiusru.gif"
                alt="a"
                className="w-[134px] h-[134px] md:w-[230px] md:h-[230px]"
              />
              <div className="flex w-[134px] h-[134px] border-l border-gray-300 md:w-[238px] md:h-[230px]"></div>
            </div>
          </div>
          <div className="relative hidden md:flex">
            <div className="flex border-r border-gray-300 md:w-[232px] h-[250px] absolute -top-[185px]"></div>
          </div>
          <div className="flex md:relative">
            <div className="md:w-[238px] md:flex hidden"></div>
            <h1 className="text-[31px] font-manrope font-medium mt-5 md:text-[45px] md:absolute -top-[136px] md:w-[100px] right-[350px]">
              ПЛАНИРОВОЧНОЕ РЕШЕНИЕ
            </h1>
            <div className="absolute bottom-0 items-end hidden md:flex">
              <span className="bg-black w-[2px] h-[16px] block"></span>
              <span className="bg-black w-[16px] h-[2px] block"></span>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <img
            src="https://optim.tildacdn.com/tild6536-3230-4335-a132-633830376135/-/format/webp/photo_2025-02-27_15-.jpg.webp"
            alt="sd"
            className="aspect-square md:w-[550px]"
          />
          <div className="flex flex-col gap-2 mt-2 md:flex-row md:w-full">
            <button className="border rounded-[40px] h-[53px] md:w-full md:h-[45px] transition-all duration-300 text-[#9e4a45] border-[#9e4a45] hover:text-white hover:bg-[#9e4a45] font-semibold">
              ОБМЕР ПОМЕЩЕНИЙ
            </button>
            <button className="border rounded-[40px] h-[53px] md:w-full md:h-[45px] transition-all duration-300 text-[#9e4a45] border-[#9e4a45] hover:text-white hover:bg-[#9e4a45] font-semibold">
              ПЛАНИРОВОЧНОЕ РЕШЕНИЕ
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 mx-auto mt-20 md:flex-row max-w-7xl md:items-start md:justify-start md:mt-20">
        <h1 className="text-sm font-bold font-manrope opacity-20 md:w-[233px] md:text-sm">
          УСЛУГА
        </h1>
        <div className=" mt-7 md:mt-0">
          <h1 className="text-[23px] font-medium font-manrope md:font-sans">
            ОБМЕР ПОМЕЩЕНИЙ
          </h1>
          <div>
            <div>
              <h1 className="text-[18px] font-medium mt-5 mb-3 md:text-[14px]">
                Что входит:
              </h1>
              <div className="gap-3 md:flex">
                <div>
                  <img
                    src="https://optim.tildacdn.com/tild3833-3162-4434-a362-386161633365/-/cover/736x520/center/center/-/format/webp/_page-0001-min.jpg.webp"
                    alt="we"
                    className="w-full h-[280px] md:w-[383px] md:h-[260px]"
                  />
                  <p className="text-[16px] font-light w-[240px] mt-2 md:text-[13px] md:font-manrope">
                    Поэтажные планы с учетом всех особенностей помещения
                  </p>
                </div>
                <div className="flex justify-between w-full mt-7 md:w-auto md:mt-0 md:gap-3">
                  <div>
                    <img
                      src="https://optim.tildacdn.com/tild6663-3437-4465-b332-323562356137/-/cover/624x584/center/center/-/format/webp/_page-0002-min.jpg.webp"
                      alt="we"
                      className="w-[218px] h-[205px] md:w-[327px] md:h-[292px]"
                    />
                    <p className="text-[16px] font-light mt-2 md:text-[13px] md:font-manrope">
                      3д-коробка в ARCHICAD
                    </p>
                  </div>
                  <div className="flex flex-col items-end md:items-start">
                    <img
                      src="https://optim.tildacdn.com/tild6630-6233-4331-b735-336530353939/-/cover/524x400/center/center/-/format/webp/photo_2024-10-24_12-.jpg.webp"
                      alt="we"
                      className="w-[167px] h-[126px] md:w-[277px] md:h-[200px]"
                    />
                    <p className="text-[16px] font-light mt-2 w-[165px] md:text-[13px] md:font-manrope md:w-auto">
                      Фото/видео фиксация объекта
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f1f1f1] p-4 mt-8 md:flex">
              <div className="flex flex-col md:flex-row md:gap-3">
                <h1 className="text-[18px] font-semibold md:text-[13px]">
                  Оборудование:{" "}
                </h1>
                <p className="font-light text-[17px] md:text-[13px] md:w-[150px]">
                  лазерная рулетка и механическая рулетка
                </p>
              </div>
              <div className="md:ml-[120px] md:border-l md:pl-5 border-gray-300">
                <div className="flex flex-col mt-4 md:flex-row md:gap-3 md:mt-0">
                  <h1 className="text-[18px] font-semibold md:text-[13px]">
                    Локация:{" "}
                  </h1>
                  <p className="font-light text-[17px] md:text-[13px]">
                    Москва и ближайшее Подмосковье
                  </p>
                </div>
                <div className="flex gap-5 mt-4 md:mt-0">
                  <h1 className="text-[18px] font-semibold md:text-[13px]">
                    Формат:{" "}
                  </h1>
                  <p className="font-light text-[17px] md:text-[13px]">
                    dwg / pla/pdf
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 ml-2 md:mt-0 md:border-l border-r-gray-300 md:ml-[42px] md:pl-5 md:w-[255px]">
                <h1 className="text-[30px] font-normal md:text-[22px]">
                  8 000 р.
                </h1>
                <IoIosInformationCircleOutline className="text-[30px] md:text-[22px]" />
                <button className="border rounded-[40px] h-[53px] w-[186px] md:w-[103px] md:text-sm md:h-[45px] transition-all duration-300 text-[#9e4a45] border-[#9e4a45] hover:text-white hover:bg-[#9e4a45] font-semibold">
                  ЗАКАЗАТЬ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 mx-auto mt-20 md:flex-row max-w-7xl md:items-start md:justify-start md:mt-20">
        <h1 className="text-sm font-bold font-manrope opacity-20 md:w-[233px] md:text-sm">
          УСЛУГА
        </h1>
        <div className="mt-7 md:mt-0">
          <div>
            <h1 className="text-[22px] font-medium font-manrope">
              ПЛАНИРОВОЧНОЕ РЕШЕНИЕ
            </h1>
            <p className="text-[16px] font-semibold font-manrope my-3">
              Этапы работы:
            </p>
          </div>
          <div className="flex flex-col md:w-full">
            <div className="md:flex">
              <div className="py-5 border-t-2 border-r-2 border-gray-300 md:py-2 md:w-[420px]">
                <h1 className="text-[38px] text-red-800">01</h1>
                <div className="mt-7">
                  <h1 className="text-[22px] font-medium font-manrope">
                    ОБМЕР ПОМЕЩЕНИЯ
                  </h1>
                  <p className="text-[17px] mt-1 md:text-[13px] md:w-[260px]">
                    Соберем всю необходимую информацию об объекте, чтобы учесть
                    все технические нюансы помещения
                  </p>
                </div>
              </div>
              <div className="py-5 pl-5 border-t-2 border-gray-300">
                <h1 className="text-[38px] text-red-800">02</h1>
                <div className="mt-7">
                  <h1 className="text-[22px] font-medium font-manrope pr-20">
                    СОСТАВЛЕНИЕ ТЕХНИЧЕСКОГО ЗАДАНИЯ
                  </h1>
                  <p className="text-[17px] mt-1 md:text-[13px] md:max-w-[470px]">
                    Узнаем о ваших особенностях и предпочтениях, проникнемся
                    вашим образом жизни и поймем, что для вас главное в
                    интерьере
                  </p>
                </div>
              </div>
            </div>
            <div className="md:flex">
              <div className="hidden md:flex md:w-[711px] border-t-2 border-r-2 border-gray-300 py-2 items-end">
                <button className="flex border border-[#9e4a45] text-[#9e4a45] transition-all duration-300 w-[111px] h-[111px] rounded-full items-center justify-center font-semibold hover:bg-[#9e4a45] hover:text-white mt-6 ">
                  ПРИМЕР ПРОЕКТА
                </button>
              </div>
              <div className="py-5 pl-5 border-t-2 border-gray-300 md:w-full">
                <h1 className="text-[38px] text-red-800">03</h1>
                <div className="mt-7">
                  <h1 className="text-[22px] font-medium font-manrope pr-20 md:max-w-[410px]">
                    ПЛАНИРОВОЧНОЕ РЕШЕНИЕ С РАССТАНОВКОЙ МЕБЕЛИ
                  </h1>
                  <p className="text-[17px] mt-1 md:text-[13px] md:max-w-[470px]">
                    Узнаем о ваших особенностях и предпочтениях, проникнемся
                    вашим образом жизни и поймем, что для вас главное в
                    интерьере
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:border-t-2">
            <div className="border md:border-0 md:border-r-2 md:border-l-2 md:border-b-2">
              <img
                src="https://optim.tildacdn.com/tild3932-6137-4266-a135-323563653765/-/format/webp/Frame_24-min.jpg.webp"
                alt="sa"
                className="h-[268px] md:w-[677px] md:h-[390px]"
              />
            </div>
            <div className="flex-col mt-6 md:flex md:pl-5 md:w-[368px]">
              <div>
                <h1 className="text-[18px] font-manrope font-semibold md:text-[13px]">
                  Что входит:
                </h1>
                <ul className="space-y-1 text-[17px] black pl-3 md:text-[12px] md:pl-0">
                  <li className="flex items-start gap-2">
                    <span className="block w-[6px] h-[6px] mt-2 text-transparent bg-black rounded-full">
                      1
                    </span>
                    Обмерный план
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-[6px] h-[6px] mt-2 text-transparent bg-black rounded-full">
                      1
                    </span>
                    План демонтируемых конструкций
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-[6px] h-[6px] mt-2 bg-black rounded-full"></span>
                    План возводимых конструкций
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-[6px] h-[6px] mt-2 bg-black rounded-full"></span>
                    План расстановки мебели
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-between mt-8 border-t-2 border-gray-300">
                <div className="flex flex-row-reverse justify-start md:flex-col">
                  <div className="flex gap-1 pt-5 pl-5 max-w-[150px] md:max-w-full md:pl-0">
                    <h1 className="text-[18px] font-manrope font-semibold md:text-[13px]">
                      Сроки:
                      <span className="text-[16px] opacity-70 md:text-[13px] md:max-w-[253px] font-normal">
                        14-21 рабочих дней
                      </span>
                    </h1>
                  </div>
                  <div className="flex flex-col gap-1 pt-5 pr-5 border-r-2 border-gray-300 md:relative md:border-t-2 md:mt-5 md:border-r-0 md:border-l-0 md:pt-5 md:pl-0">
                    <h1 className="text-[18px] font-manrope font-semibold md:text-[13px]">
                      Стоимость:
                    </h1>
                    <IoIosInformationCircleOutline className="text-[30px] absolute md:left-[80px] md:top-[12px]  right-[64%]" />
                    <div className="flex items-center gap-3">
                      <span className="flex w-[6px] h-[6px] text-transparent bg-black rounded-full">
                        q
                      </span>
                      <p className="text-[16px] opacity-70 md:text-[13px]">
                        До 50м2 – 1500р/м2
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex w-[6px] h-[6px] text-transparent bg-black rounded-full">
                        q
                      </span>
                      <p className="text-[16px] opacity-70 md:text-[13px]">
                        50-100м2 – 1300р/м2
                      </p>
                    </div>
                    <div className="relative flex items-center gap-3">
                      <span className="flex w-[6px] h-[6px] text-transparent bg-black rounded-full">
                        q
                      </span>
                      <p className="text-[16px] opacity-70 md:text-[13px]">
                        От 100м2 – 1100р/м2
                      </p>
                    </div>
                  </div>
                </div>
                <button className="flex md:hidden border border-[#9e4a45] text-[#9e4a45] transition-all duration-300 w-full h-[53px] rounded-full items-center justify-center font-semibold hover:bg-[#9e4a45] hover:text-white md:h-[40px] mt-4 md:mt-6 ">
                  ПРИМЕР ПРОЕКТА
                </button>
                <button className="flex bg-[#9e4a45] border border-[#9e4a45] text-white transition-all duration-300 w-full h-[53px] rounded-full items-center justify-center font-semibold hover:bg-white hover:text-[#9e4a45] md:w-full md:h-[40px] mt-2 md:mt-5 ">
                  ЗАКАЗАТЬ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;

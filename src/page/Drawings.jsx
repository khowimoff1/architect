import React, { useState } from "react";
import Swiperr from "../assets/components/Swiper";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Form from "../assets/components/Form";

const Drawings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState([]);

  const images = [
    "https://optim.tildacdn.com/tild3263-3131-4637-a538-353665316536/-/resize/600x400/-/format/webp/1e0a80ac-5f2b-41e0-9.jpeg.webp",
    "https://optim.tildacdn.com/tild6233-6639-4262-b065-636361643062/-/resize/600x400/-/format/webp/556de6ac-a22c-49b5-8.jpeg.webp",
    "https://optim.tildacdn.com/tild6366-6233-4632-b637-666330303637/-/resize/600x400/-/format/webp/46393b97-1d34-4b07-b.jpeg.webp",
    "https://optim.tildacdn.com/tild3831-3164-4465-a438-616362616662/-/resize/600x400/-/format/webp/b229063f-b112-4931-9.jpeg.webp",
  ];
  return (
    <div>
      <div className="flex flex-col-reverse mx-auto max-w-7xl md:flex-row md:justify-between">
        <div className="flex-col justify-between md:flex">
          <div className="hidden mt-5 md:flex">
            <span className="block w-[1px] h-[15px] bg-[#000000]"></span>
            <span className="block h-[1px] w-[15px] bg-[#000000]"></span>
          </div>
          <div className="px-4 mt-8">
            <h1 className="text-[33px] text-[#000000]  font-semibold leading-10">
              РАЗРАБОТКА ЧЕРТЕЖЕЙ К ДИЗАЙН-ПРОЕКТАМ
            </h1>
            <p className="text-[20px] font-light text-[#000000] my-3">
              для любых площадей
            </p>
            <div className="flex flex-row-reverse items-center justify-between gap-2 md:justify-start md:flex-row md:gap-3">
              <a href="#tarify" className="w-[90%] md:w-[167px]">
                <button className="text-[16px] transition-all duration-500 text-white bg-[#9e4a45] border border-[#9e4a45] font-semibold rounded-[30px] w-full h-[53px] hover:bg-white hover:text-[#9e4a45]">
                  ТАРИФЫ
                </button>
              </a>
              <a href="#protfolio" className="w-full md:w-[217px]">
                <button className="text-[16px] transition-all duration-500 text-[#9e4a45] border border-[#9e4a45] font-semibold rounded-[30px] w-full h-[53px] hover:bg-[#9e4a45] hover:text-white">
                  ПОРТФОЛИО
                </button>
              </a>
            </div>
          </div>
        </div>
        <img
          src="https://optim.tildacdn.com/tild3934-6136-4362-b635-323663386635/-/format/webp/1_page-0001_1.jpg.webp"
          alt="drawi"
          className="w-[430px] h-[430px] md:w-[600px] md:h-[600px]"
        />
      </div>
      <div className="w-full bg-[#f1f1f1] py-10 md:py-14 mt-16 md:mt-24">
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
      <div className="flex flex-col px-4 mx-auto mt-20 md:flex-row max-w-7xl md:items-start">
        <h1 className="text-xs font-bold font-manrope opacity-20 md:w-[230px] md:text-sm md:pr-10">
          НАМ МОЖНО ДОВЕРЯТЬ
        </h1>
        <div className="flex flex-col mt-5 mb-20 md:mt-0 md:flex-row md:justify-between md:w-full">
          <h1 className="text-[22px] text-[#000000] font-medium font-manrope ">
            ГАРАНТИИ
          </h1>
          <div className="flex flex-col mt-5 md:flex-row md:mt-0 md:relative">
            <div className="flex flex-col items-center justify-center w-[100%]  border border-black rounded-full pt-14 aspect-square md:w-[330px]">
              <p className="text-[16px]  text-[#000000] font-light text-center w-[90%] md:w-auto md:px-3 md:font-sans font-manrope md:text-[14px] opacity-80 md:pb-[48px]">
                Работа по «прозрачной» системе. Вы в любой момент можете узнать,
                на каком этапе разработки сейчас находится ваш альбом.
                <br />
                Для каждого проекта составляется график работ
              </p>
            </div>
            <div className="flex flex-col items-center justify-center relative w-[100%]  border border-black rounded-full pt-14 aspect-square md:w-[330px]">
              <p className="text-[16px] text-[#000000] font-light text-center w-[90%] md:w-auto md:px-3 md:font-sans font-manrope opacity-80 md:text-[14px]">
                Мы заключаем договор (с ИП со стороны CherES.Buro), где
                прописаны обязательства сторон. Вы получаете чек об оплате
              </p>
              <a href="https://disk.yandex.ru/d/UbGbwOOw9njnEw">
                <button className="text-[16px] transition-all duration-500 text-white bg-[#9e4a45] border border-[#9e4a45] font-semibold rounded-[30px] w-[230px] h-[53px] hover:bg-white hover:text-[#9e4a45] mt-5">
                  СМОТРЕТЬ ДОГОВОР
                </button>
              </a>
              <div className="absolute bottom-0 left-0 flex items-end md:hidden">
                <span className="block w-[1.34px] h-[20px] bg-[#000000]"></span>
                <span className="block h-[1px] w-[20px] bg-[#000000]"></span>
              </div>
            </div>
            <div className="absolute bottom-0 items-end hidden -left-[385px] md:flex">
              <span className="block w-[1.34px] h-[20px] bg-[#000000]"></span>
              <span className="block h-[1px] w-[20px] bg-[#000000]"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 mx-auto mt-20 md:flex-row max-w-7xl md:items-start">
        <h1 className="text-xs font-bold font-manrope opacity-20 md:w-[230px] md:text-sm md:pr-10">
          ЭТАПЫ РАБОТЫ
        </h1>
        <div className="md:w-full">
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-0">
            <h1 className="text-[42px] font-normal  text-[#9a3c35] font-manrope">
              01
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                ПЕРВЫЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px]">
                Выбор тарифа, обсуждение основных вопросов, заполнение ТЗ,
                предоплата 50%
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-2">
            <h1 className="text-[42px] font-light  text-[#9a3c35] font-manrope">
              02
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                ВТОРОЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px]">
                Формирование графика работ, начало разработки 1 этапа альбома
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-2">
            <h1 className="text-[42px] font-light  text-[#9a3c35] font-manrope">
              03
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                ТРЕТИЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px] md:pr-4">
                Согласование/корректировка 1 этапа, разработка 2 этапа
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-2">
            <h1 className="text-[42px] font-light  text-[#9a3c35] font-manrope">
              04
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                ЧЕТВЕРТЫЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px]">
                Согласование/корректировка 2 этапа, разработка 3 этапа
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-2">
            <h1 className="text-[42px] font-light  text-[#9a3c35] font-manrope">
              05
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                ПЯТЫЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px] md:pr-5">
                Согласование/корректировка 3 этапа, разработка 4 этапа
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-2">
            <h1 className="text-[42px] font-light  text-[#9a3c35] font-manrope">
              06
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                ШЕСТОЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px]">
                Согласование/корректировка всего альбома, оплата оставшихся 50%
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10 pt-2 mt-8 border-t-2 border-black md:pt-1 md:mt-2">
            <h1 className="text-[42px] font-light  text-[#9a3c35] font-manrope">
              07
            </h1>
            <div className="flex flex-col items-start justify-between mt-3 md:flex-row md:items-start md:w-full">
              <h1 className="font-medium text-[22px] font-manrope">
                СЕДЬМОЙ ЭТАП
              </h1>
              <h1 className="font-manrope text-[17px] font-light mt-2 opacity-70 md:w-[361px] md:text-[13px]">
                Предоставление заказчику согласованного альбома в формате PDF,
                исходного файла в формате .pla
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#fff] py-10 md:py-5 mt-24 md:mt-24">
        <div className="flex flex-col px-4 mx-auto md:flex-row max-w-7xl md:items-start md:py-0">
          <h1 className="text-xs font-bold font-manrope opacity-20 md:w-[235px] md:text-sm md:pt-5">
            ДЛЯ НАЧАЛА РАБОТ НЕОБХОДИМЫ
          </h1>
          <div className="relative flex mt-5 md:justify-between md:w-full md:mt-0">
            <div className="md:ml-[100px] md:pt-5">
              <div className="flex items-center justify-between gap-2 md:justify-start">
                <span className="w-3 h-3 mt-1 border border-red-500 rounded-full"></span>
                <p className="text-[18px] w-[200px]  pl-1 md:w-[90%] opacity-70 md:text-[16px]">
                  Обмерный план
                </p>
              </div>
              <div className="flex items-start justify-between gap-2 mt-5 md:justify-start">
                <span className="w-3 h-3 mt-2 border border-red-500 rounded-full"></span>
                <p className="text-[18px]  w-[200px] pl-1 md:w-auto opacity-70 md:text-[16px]">
                  Согласованное планировочное решение{" "}
                </p>
              </div>
            </div>
            <div className="flex md:gap-[98px]">
              <div className="md:pt-5">
                <div className="flex items-center justify-between gap-2 md:justify-start">
                  <span className="w-3 h-3 mt-1 border border-red-500 rounded-full"></span>
                  <p className="text-[18px]  pl-1 md:w-[90%] opacity-70 md:text-[16px]">
                    Визуализации
                  </p>
                </div>
                <div className="flex items-start gap-2 mt-5 md:justify-start">
                  <span className="w-3 h-3 mt-2 border border-red-500 rounded-full"></span>
                  <p className="text-[18px]  pl-1 md:w-[90%] opacity-70 md:text-[16px]">
                    ТЗ
                  </p>
                </div>
              </div>
              <a href="https://disk.yandex.ru/d/A-WJB4YWLOr5jw">
                <button className="absolute md:static -bottom-[110px] right-[30px] flex bg-[#9e4a45] border border-[#9e4a45] text-white transition-all duration-300 w-[157px] h-[157px] rounded-full items-center justify-center font-semibold hover:bg-white hover:text-[#9e4a45] md:w-[130px] md:h-[130px]">
                  СМОТРЕТЬ ТЗ
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="tarify"
        className="flex flex-col w-full px-4 mx-auto mt-20 md:flex-row max-w-7xl md:items-start"
      >
        <h1 className="text-xs font-bold font-manrope opacity-20 md:w-[230px] md:text-sm md:pr-10">
          ТАРИФЫ
        </h1>
        <div className="w-full">
          <div className="w-full py-6 mt-6 border-t-2 border-black">
            <h1 className="text-[22px] text-[#000000] font-medium font-manrope ">
              МИНИМАЛЬНЫЙ
            </h1>
            <div className="flex flex-col md:flex-row md:gap-10 md:pr-10">
              <div className="w-full  md:w-[560px] mt-6">
                <div className="w-full h-[282px] md:h-[390px]">
                  <Swiperr images={images} />
                </div>
              </div>
              <div className="mt-6 md:w-full">
                <div>
                  <h1 className="text-[18px] font-manrope font-semibold">
                    Что входит:
                  </h1>
                  <ul className="space-y-1 text-[15px] black pl-3 opacity-70 md:text-[12px]">
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      Чертежи
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      Необходимые для реализации узлы 2Д/3Д
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      3Д-виды
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      Спецификации
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      2 круга бесплатных правок
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-6 mt-8 border-t-2 border-gray-300">
                  <div>
                    <div className="relative flex items-center gap-1">
                      <h1 className="text-[15px] font-manrope font-semibold">
                        Сроки:
                      </h1>
                      <p className="text-[15px] opacity-70">
                        100м2 ~ 14-20 дней
                      </p>
                      <span className="absolute -right-10 group">
                        <IoIosInformationCircleOutline className="text-[34px] " />
                        <div className="absolute space-y-2 z-10 md:left-1/2 left-[0px] -translate-x-1/2 top-[120%] bg-white text-black text-[14px] p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[300px] hidden group-hover:block">
                          <span className="font-bold">SOS:</span> + 200₽/м2 к
                          стоимости проекта Сроки: 7-10 дней <br />{" "}
                          <p>
                            Укажите, если вам необходимо разработать альбом в
                            сжатые сроки. С
                          </p>
                          <br />
                          <p>
                            Объекты площадью от 200м2 рассчитываются
                            индивидуально
                          </p>
                        </div>
                      </span>
                    </div>
                    <div className="flex items-center gap-1 pt-6 mt-6 border-t-2 border-gray-300">
                      <h1 className="text-[15px] font-manrope font-semibold">
                        Стоимость:
                      </h1>
                      <p className="text-[15px] opacity-70">4$/м2</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setForm({
                        title: "ТАРИФ МИНИМАЛЬНЫЙ",
                        li: [
                          "Чертежи",
                          "⁠Необходимые для реализации узлы 2Д/3Д",
                          "3Д-виды",
                          "Спецификации",
                          "2 круга бесплатных правок",
                        ],
                        srok: "100м2 ~ 14-20 дней",
                        stmoist: " 4$/м2",
                      });
                      setIsOpen(true);
                    }}
                    className="flex bg-[#9e4a45] border border-[#9e4a45] text-white transition-all duration-300 w-[35%] rounded-full items-center justify-center font-semibold hover:bg-white hover:text-[#9e4a45] md:w-[130px] md:h-[130px] aspect-square"
                  >
                    ЗАКАЗАТЬ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-6 mt-6 border-t-2 border-black">
            <h1 className="text-[22px] text-[#000000] font-medium font-manrope ">
              СТАНДАРТНЫЙ
            </h1>
            <div className="flex flex-col md:flex-row md:gap-10 md:pr-10">
              <div className="w-full  md:w-[560px] mt-6">
                <div className="w-full h-[282px] md:h-[390px]">
                  <Swiperr images={images} />
                </div>
              </div>
              <div className="mt-6 md:w-full">
                <div>
                  <h1 className="text-[18px] font-manrope font-semibold">
                    Что входит:
                  </h1>
                  <ul className="space-y-1 text-[15px] black pl-3 opacity-70 md:text-[12px]">
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      Чертежи
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      Необходимые для реализации узлы 2Д
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      Развертки по всем помещениям
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      Спецификации
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full text-[#f5f5f5]">
                        1
                      </span>
                      Чертежи мебели индивидуального изготовления 2д
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      2 круга бесплатных правок
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-6 mt-8 border-t-2 border-gray-300">
                  <div>
                    <div className="relative flex items-center gap-1">
                      <h1 className="text-[15px] font-manrope font-semibold">
                        Сроки:
                      </h1>
                      <p className="text-[15px] opacity-70">
                        100м2 ~ 16-25 дней
                      </p>
                      <span className="absolute -right-10 group">
                        <IoIosInformationCircleOutline className="text-[34px] " />
                        <div className="absolute space-y-2 z-10 md:left-1/2 left-[0px] -translate-x-1/2 top-[120%] bg-white text-black text-[14px] p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[300px] hidden group-hover:block">
                          <span className="font-bold">SOS:</span> + 200₽/м2 к
                          стоимости проекта <br />{" "}
                          <p>
                            Укажите, если вам необходимо разработать альбом в
                            сжатые сроки. Сроки 100м2 ~ 10-14 дней.
                          </p>
                          <br />
                          <p>
                            Объекты площадью от 200м2 рассчитываются
                            индивидуально
                          </p>
                        </div>
                      </span>
                    </div>
                    <div className="flex items-center gap-1 pt-6 mt-6 border-t-2 border-gray-300">
                      <h1 className="text-[15px] font-manrope font-semibold">
                        Стоимость:
                      </h1>
                      <p className="text-[15px] opacity-70">6$/м2</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setForm({
                        title: "ТАРИФ СТАНДАРТ",
                        li: [
                          "Чертежи",
                          "⁠Необходимые для реализации узлы 2Д",
                          "Развертки по всем помещениям",
                          "Спецификации",
                          "Чертежи мебели индивидуального изготовления 2д",
                          "2 круга бесплатных правок",
                        ],
                        srok: "100м2 ~ 14-20 дней",
                        stmoist: " 6$/м2",
                      });
                      setIsOpen(true);
                    }}
                    className="flex bg-[#9e4a45] border border-[#9e4a45] text-white transition-all duration-300 w-[35%] rounded-full items-center justify-center font-semibold hover:bg-white hover:text-[#9e4a45] md:w-[130px] md:h-[130px] aspect-square"
                  >
                    ЗАКАЗАТЬ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-6 mt-6 border-t-2 border-black">
            <h1 className="text-[22px] text-[#000000] font-medium font-manrope ">
              ПРЕМИУМ
            </h1>
            <div className="flex flex-col md:flex-row md:gap-10 md:pr-10">
              <div className="w-full  md:w-[560px] mt-6">
                <div className="w-full h-[282px] md:h-[390px]">
                  <Swiperr images={images} />
                </div>
              </div>
              <div className="mt-6 md:w-full">
                <div>
                  <h1 className="text-[18px] font-manrope font-semibold">
                    Что входит:
                  </h1>
                  <ul className="space-y-1 text-[15px] black pl-3 opacity-70 md:text-[12px]">
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      Чертежи
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      Необходимые для реализации узлы 2Д/3Д
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      3д-виды
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      Развертки по всем помещениям
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      Спецификации
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full text-[#f5f5f5]">
                        1
                      </span>
                      Чертежи мебели индивидуального изготовления 2д
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="block w-2 h-2 bg-black rounded-full"></span>
                      2 круга бесплатных правок
                    </li>
                    <li className="flex items-center gap-2 md:pr-14">
                      <span className="flex w-2 h-2 text-[#f5f5f5] bg-black rounded-full">
                        q
                      </span>
                      БОльшая проработанность альбома: дополнительные узлы,
                      сечения и тд.
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-6 mt-8 border-t-2 border-gray-300">
                  <div>
                    <div className="relative flex items-center gap-1">
                      <h1 className="text-[15kpx] font-manrope font-semibold">
                        Сроки:
                      </h1>
                      <p className="text-[15kpx] opacity-70">
                        100м2 ~ 16-25 дней
                      </p>
                      <span className="absolute -right-10 group">
                        <IoIosInformationCircleOutline className="text-[34px] " />
                        <div className="absolute space-y-2 z-10 md:left-1/2 left-[0px] -translate-x-1/2 top-[120%] bg-white text-black text-[14px] p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[300px] hidden group-hover:block">
                          <span className="font-bold">SOS:</span> + 200₽/м2 к
                          стоимости проекта <br />{" "}
                          <p>
                            Укажите, если вам необходимо разработать альбом в
                            сжатые сроки. Сроки 100м2 ~ 15-18 дней.
                          </p>
                          <br />
                          <p>
                            Объекты площадью от 200м2 рассчитываются
                            индивидуально
                          </p>
                        </div>
                      </span>
                    </div>
                    <div className="flex items-center gap-1 pt-6 mt-6 border-t-2 border-gray-300">
                      <h1 className="text-[15px] font-manrope font-semibold">
                        Стоимость:
                      </h1>
                      <p className="text-[15px] opacity-70">8$/м2</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setForm({
                        title: "ТАРИФ ПРЕМИУМ",
                        li: [
                          "Чертежи",
                          "⁠Необходимые для реализации узлы 2Д",
                          "3д-виды",
                          "Развертки по всем помещениям",
                          "Спецификации",
                          "Чертежи мебели индивидуального изготовления 2д",
                          "2 круга бесплатных правок",
                        ],
                        srok: "100м2 ~ 18-20 дней",
                        stmoist: " 8$/м2",
                      });
                      setIsOpen(true);
                    }}
                    className="flex bg-[#9e4a45] border border-[#9e4a45] text-white transition-all duration-300 w-[35%] aspect-square rounded-full items-center justify-center font-semibold hover:bg-white hover:text-[#9e4a45] md:w-[130px] md:h-[130px]"
                  >
                    ЗАКАЗАТЬ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full px-4 py-5 mx-auto items-start bg-[#f1f1f1] gap-4">
            <div className="w-[25px] h-[25px] bg-red-900 rounded-full flex text-white items-center justify-center md:w-[30px] md:h-[30px]">
              <span className="text-xs">!</span>
            </div>
            <h1 className="font-semibold text-[18px] w-[90%] md:w-auto">
              ВАЖНО:{" "}
              <span className="font-light font-manrope">
                сотрудничество возможно как по РФ, так и по миру (документация
                на русском языке).
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f1f1f1] pt-10 md:py-14 mt-20">
        <div className="flex flex-col px-4 mx-auto md:flex-row max-w-7xl md:items-start">
          <h1 className="text-xs font-bold font-manrope opacity-20 md:w-[230px] md:text-sm md:pr-10">
            ОБРАТИТЕ ВНИМАНИЕ
          </h1>
          <div className="flex flex-col mt-5 md:mt-0 md:flex-row md:justify-between md:w-full">
            <h1 className="text-[22px] text-[#000000] font-medium font-manrope ">
              МЫ НЕ БЕРЕМ В РАБОТУ
            </h1>
            <div className="flex flex-col items-center mt-5 md:relative md:flex-row md:mt-0">
              <div className="flex flex-col items-center justify-center w-[323px]  border border-black rounded-full pt-14 aspect-square md:w-[211px] ">
                <p className="text-[16px] text-[#000000] font-light text-center w-[80%] md:w-auto md:px-3 md:font-sans font-manrope md:text-[14px] opacity-80 pb-[30px]">
                  Частичные заказы. Например, разработать только планы электрики
                  или только развертки
                </p>
              </div>
              <div className="relative md:static -top-[58px] flex flex-col items-center justify-center w-[323px]  border border-black rounded-full pt-14 aspect-square md:w-[211px] md:pr-4">
                <p className="text-[16px] text-[#000000] font-light text-center w-[80%] md:w-auto md:px-3 md:font-sans font-manrope md:text-[14px] opacity-80 pb-[30px]">
                  Проекты без визуализаций (с эскизами/коллажами), проекты без
                  ТЗ
                </p>
              </div>
              <div className="relative md:static -top-[115px] flex flex-col items-center justify-center w-[323px]  border border-black rounded-full pt-14 aspect-square md:w-[211px] md:pb-[50px]">
                <p className="text-[18px] text-[#000000] font-light text-center w-[90%] md:w-auto md:px-3 md:font-sans font-manrope opacity-80 md:text-[14px]">
                  Проекты в стиле: классика/классицизм, барокко, рококо
                </p>
                <div className="absolute bottom-0 flex items-end -left-[40px] md:hidden">
                  <span className="block w-[1.34px] h-[20px] bg-[#000000]"></span>
                  <span className="block h-[1px] w-[20px] bg-[#000000]"></span>
                </div>
              </div>
              <div className="absolute bottom-0 items-end hidden -left-[414px] md:flex">
                <span className="block w-[1.34px] h-[20px] bg-[#000000]"></span>
                <span className="block h-[1px] w-[20px] bg-[#000000]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="protfolio"
        className="flex flex-col w-full px-4 mx-auto mt-20 mb-10 max-w-7xl md:items-start"
      >
        <h1 className="text-xs font-bold font-manrope opacity-20 md:w-[230px] md:text-sm md:pr-10">
          ПОРТФОЛИО
        </h1>
        <div className="grid justify-between grid-cols-2 gap-2 mt-10 md:grid-cols-4 md:gap-5">
          <img
            src="https://optim.tildacdn.com/tild6534-3933-4865-a564-636330326331/-/resize/300x200/-/format/webp/WhatsApp_Image_2024-.jpeg.webp"
            alt="1"
            className="w-[190px] h-[125px] md:w-[295px] md:h-[199px]"
          />
          <img
            src="https://optim.tildacdn.com/tild3265-6431-4363-a636-333066383864/-/resize/300x200/-/format/webp/photo_2024-07-18_20-.jpg.webp"
            alt="2"
            className="w-[190px] h-[125px] md:w-[295px] md:h-[199px]"
          />
          <img
            src="https://optim.tildacdn.com/tild3239-6561-4233-a337-383763666166/-/resize/300x200/-/format/webp/photo_2024-07-18_20-.jpg.webp"
            alt="3"
            className="w-[190px] h-[125px] md:w-[295px] md:h-[199px]"
          />
          <img
            src="https://optim.tildacdn.com/tild3131-6236-4731-b165-363063346532/-/resize/300x200/-/format/webp/IMG_1833.jpeg.webp"
            alt="4"
            className="w-[190px] h-[125px] md:w-[295px] md:h-[199px]"
          />
          <img
            src="https://optim.tildacdn.com/tild3834-3662-4332-a237-303035303162/-/resize/300x200/-/format/webp/photo_2024-11-11_17-.jpg.webp"
            alt="1"
            className="w-[190px] h-[125px] md:w-[295px] md:h-[199px]"
          />
          <img
            src="https://optim.tildacdn.com/tild3935-6135-4239-b666-313633626538/-/resize/300x200/-/format/webp/photo_2024-11-11_17-.jpg.webp"
            alt="2"
            className="w-[190px] h-[125px] md:w-[295px] md:h-[199px]"
          />
          <img
            src="https://optim.tildacdn.com/tild6631-6634-4135-b430-363232666536/-/resize/300x200/-/format/webp/photo_2024-11-11_17-.jpg.webp"
            alt="3"
            className="w-[190px] h-[125px] md:w-[295px] md:h-[199px]"
          />
          <img
            src="https://optim.tildacdn.com/tild3666-3936-4266-a233-613962353537/-/resize/300x200/-/format/webp/photo_2024-11-11_17-.jpg.webp"
            alt="4"
            className="w-[190px] h-[125px] md:w-[295px] md:h-[199px]"
          />
        </div>
      </div>
      {isOpen && <Form setIsOpen={setIsOpen} form={form} setForm={setForm} />}
    </div>
  );
};

export default Drawings;

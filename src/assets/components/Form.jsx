import { li } from "framer-motion/client";
import React from "react";
import { IoClose } from "react-icons/io5";

const Form = ({ form, setIsOpen, setForm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white md:bg-opacity-50 md:bg-gray-800">
      <div className="w-full max-h-screen p-6 overflow-auto bg-white rounded-lg md:max-w-lg lg:max-w-xl">
        <div
          onClick={() => {
            setIsOpen(false);
            setForm([]);
          }}
          className="fixed top-0 left-0 flex justify-end w-full py-3 pr-4 text-xl text-white bg-black md:w-auto md:right-0 md:left-auto md:bg-transparent md:text-3xl"
        >
          <IoClose />
        </div>
        <h2 className="mt-10 mb-4 text-2xl font-bold md:mt-0">{form?.title}</h2>
        <p className="mb-4 text-gray-700">Что входит:</p>
        <ul className="pl-5 mb-4 text-sm text-gray-600 list-disc">
          {form?.li?.map((item, inded) => (
            <li key={inded}>{item}</li>
          ))}
        </ul>
        <p className="mb-2 text-gray-700">Срок::</p>
        <p className="mb-4 text-gray-700">{form?.srok}</p>
        <p className="mb-2 text-gray-700">Стоимость:</p>
        <p className="mb-2 text-gray-600">{form?.stmoist}</p>
        <p className="mb-2 text-gray-600">{form?.stmoist1}</p>
        <p className="mb-2 text-gray-600">{form?.stmoist2}</p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            type="text"
            placeholder="Имя"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            required
            className="w-full p-3 border rounded-lg appearance-none focus:outline-none focus:ring-2"
          />
          <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2">
            <option>Способ связи</option>
            <option>WhatsApp</option>
            <option>Телефон</option>
            <option>Email</option>
          </select>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="area" className="focus:ring-2" /> До 500
              м²
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="area" className="focus:ring-2" /> Больше
              500 м²
            </label>
          </div>
          <textarea
            placeholder="Комментарии"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
          ></textarea>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="focus:ring-2" required /> Я согласен с
            политикой конфиденциальности
          </label>
          <button
            type="submit"
            className="w-full py-3 bg-[#9e4a45] border border-[#9e4a45] text-white transition-all duration-300 hover:bg-white hover:text-[#9e4a45] rounded-full"
          >
            ЗАКАЗАТЬ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">

      <div className="sm:py-8 lg:py-4 py-3 px-4 shadow-md rounded-xl border border-gray-200 sm:w-[780px] md:w-[668px] lg:w-[880px] xl:w-[800px] 2xl:w-[1200px]	w-[320px]">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-800">Contáctame</h2>

        <form action="#" className="space-y-3">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Correo</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full py-3 px-2.5 focus-within:bg-gray-200"
              placeholder="name@gmail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Asunto</label>
            <input
              type="text"
              id="subject"
              className="block py-3 px-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 focus-within:bg-gray-200"
              placeholder="Deja un asunto..."
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Mensaje</label>
            <textarea
              id="message"
              rows={6}
              className="block py-3 px-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 focus-within:bg-gray-200"
              placeholder="Deja un comentario..."
            ></textarea>
          </div>

          <div className='flex justify-center'>
            <button
              type="submit"
              className="py-2 px-4 text-sm font-medium text-center border-gray-800 border-2 hover:bg-gray-800 hover:text-white text-gray-800 rounded-lg transition duration-400">
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

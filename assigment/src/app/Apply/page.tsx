import React from 'react';

function Apply() {
  return (
    <section className="bg-blue-400 p-20 mx-auto my-5 max-w-3xl rounded-lg shadow-lg  h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 mt-20">
          Before continuing to the application, please subscribe to these social media platforms.
        </h2>
        <p className="text-lg">Stay updated with the latest news and announcements!</p>
        <div className="flex justify-center mt-6 space-x-4">
          <a href="#" className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300">
            Facebook
          </a>
          <a href="#" className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300">
            Twitter
          </a>
          <a href="#" className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Apply;

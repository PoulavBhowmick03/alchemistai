
import React from 'react';
import colab from "../../../public/colab.png"
const train = () => {
    return ( 
        <section className="bg-gray-100 text-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Train the available ML models</h2>

      <p className="mt-4 text-gray-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
        nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-red-400 hover:shadow-red-500/10"
        href="/dashboard/trained"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-gray-800">Covid 19 X-Ray Prediction Model</h2>

        <p className="mt-1 text-sm text-gray-900">
          This model is trained on X-Ray images of covid 19 patients
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-red-400 hover:shadow-red-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-gray-800">Pneumonia Predicting Model</h2>

        <p className="mt-1 text-sm text-gray-900">
          This model is used to predict pneumonia in patients
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-red-400 hover:shadow-red-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-gray-800">Benign Tumour Predicting Model</h2>

        <p className="mt-1 text-sm text-gray-900">
          This model helps in identifying benign tumours in patients with cancer
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-red-400 hover:shadow-red-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-gray-800">Skin Cancer Predicting Model</h2>

        <p className="mt-1 text-sm text-gray-900">
          This model helps in identifying skin cancer in patients.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-red-400 hover:shadow-red-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-gray-800">Heart Disease Predicting Model</h2>

        <p className="mt-1 text-sm text-gray-900">
        This model helps in identifying heart diseases in patients.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-red-400 hover:shadow-red-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-gray-800">Brain Tumour Predicting Model</h2>

        <p className="mt-1 text-sm text-gray-900">
          This model helps in identifying brain tumours in patients.
        </p>
      </a>
    </div>

    <div className="mt-12 text-center">
      <a
        href="#"
        className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-gray-200 transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a>
    </div>
  </div>
</section>
     );
}
 

export default train;
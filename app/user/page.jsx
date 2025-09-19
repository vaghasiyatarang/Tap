"use client";

const UsePage = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Contact & Email Options
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Easily save our contact info to your mobile device or send us an
            email directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Save Contact Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Save Contact on Your Mobile
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Quickly save our contact details directly to your phone with
                just one click 0.
              </p>
            </div>

            <a
  href="/api/contact"
  className="inline-flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md px-6 py-3 transition transform hover:-translate-y-0.5 w-full md:w-auto"
>
  <svg
    viewBox="0 0 24 24"
    height={"20px"}
    width={"20px"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#ffffff"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z"
      fill="#ffffff"
    />
  </svg>
  <span>Save Contact</span>
</a>

          </div>

          {/* Gmail Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Send Us an Email
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Click below to send us an email directly from your Gmail
                account.
              </p>
            </div>

            <a
              href="mailto:sync.thirdParty@gmail.com"
              className="inline-flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md px-6 py-3 transition transform hover:-translate-y-0.5 w-full md:w-auto"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <span>Send via Gmail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsePage;

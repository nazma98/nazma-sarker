export function Contact() {
  return (
    <section
    id="contact"
    className="m-8 mb-0 md:m-12 md:p-10 md:pb-4 md:mb-0 lg:w-[60%] lg:m-auto"
  >
    <div className="flex flex-col items-center justify-center gap-2 mb-5 lg:flex-row lg:gap-8">
      <h2 className="font-semibold text-2xl text-[#00b1b1] lg:text-3xl">
        Contact
      </h2>
      <div className="bg-[#00b1b1] w-[50%] h-0.5 lg:w-[700px] lg:h-[1px]"></div>
    </div>
    <div className="w-[80%] m-auto mb-6 text-center md:text-xl md:p-8">
      Looking to collaborate or need expertise on your next project?{" "}
      <br /> I’m open for hire!
    </div>
    <div>
      <form
        action="https://formspree.io/f/xanyjbqo"
        method="post"
        className="flex flex-col gap-2 w-[85%] m-auto md:w-[70%] lg:items-center"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name:</label>
            <input
              className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))] rounded-md h-8 text-[#0a192f] p-4 font-semibold lg:w-[400px] lg:h-8"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))] rounded-md h-8 text-[#0a192f] p-4 font-semibold lg:w-[400px] lg:h-8"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message:</label>
            <textarea
              className="bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))] rounded-md h-25 text-[#0a192f] p-4 font-semibold lg:w-[400px] lg:h-30"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex justify-center lg:items-center">
            <button
              className="bg-[#0a192f] bg-[linear-gradient(135deg,#00b1b169,rgba(248,85,26,0.514))]
                              rounded-md w-[50%] p-2 mt-3 font-semibold md:w-[40%] lg:w-[100%] lg:p-3
                              transition-all duration-300 ease-in-out 
                              active:scale-95 active:bg-[linear-gradient(135deg,#008a8a69,rgba(200,80,40,0.7))]
                              lg:hover:bg-[linear-gradient(135deg,#00d4d469,rgba(255,100,50,0.6))] lg:hover:scale-105"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className="flex justify-center">
      <a
        href="#"
        className="text-white px-4 py-2 mt-5 
                  bg-[#0a192f] font-semibold ring-2 ring-[#00b1b169] 
                  rounded-md mb-3 md:m-5 lg:mt-10"
      >
        Back to Top
      </a>
    </div>
  </section>
  );
}
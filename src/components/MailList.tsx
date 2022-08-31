const MailList = () => {
  return (
    <section className="bg-brandBlue400">
      <div className="max-w-6xl py-10 text-white flex flex-col items-center space-y-5 mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-thin">Save time, save money!</h3>
          <p className="text-gray-400">
            Sign up and we'll send the best deals to you
          </p>
        </div>

        <form>
          <div className="flex flex-col space-y-1 justify-center mb-2 md:flex-row md:space-x-1 md:space-y-0">
            <input
              type="text"
              placeholder="Your email"
              className=" w-full px-2 py-3 rounded-sm text-black outline-none placeholder:text-xl 
              placeholder:text-gray-400
              placeholder:font-thin md:w-96"
            />

            <button
              type="submit"
              className="bg-brandBlueSec100 px-5  py-2 font-thin rounded-sm md:px-8 md:text-lg"
            >
              Subscribe
            </button>
          </div>

          <div className="flex space-x-0.5">
            <input type="checkbox" id="app_link" />
            <label htmlFor="app_link" className="font-thin">
              Send me a link to get the FREE Booking app!
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MailList;

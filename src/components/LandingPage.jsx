import React from "react";
import coconutTree from "../assets/undraw_refreshing_beverage_td3r.svg";
import { ReactTyped } from "react-typed";

function LandingPage() {
  return (
    <div>
      <nav className="flex justify-between items-center px-4 py-2">
        <img className="w-24" src={coconutTree} alt="coconut-tree-image" />
        <h1 className="text-4xl underline decoration-orange-500/70 decoration-4 font-black">
          Krazy Talk Baazar
        </h1>
        <ul className="flex">
          <a
            href="#"
            className="ml-4 ml-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded tracking-wide"
          >
            Login
          </a>
          <a
            href="#"
            className="ml-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded tracking-wide"
          >
            Signup
          </a>
        </ul>
      </nav>
      <div>
        <div className="text-5xl w-6/12 mx-auto text-left mt-56">
          <p>
            Ever wished for an all in one website? Wait no more! Now you can,
          </p>
          <ReactTyped
            strings={["Chat", "Shop", "Listen to music", "Watch videos"]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="text-orange-500"
          />
          <p>All from one website!!</p>
        </div>

        <section className="mt-56 bg-slate-400 rounded">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-stone-900">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-stone-600 sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Let us know.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className=" text-sm text-center sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 bg-transparent hover:bg-orange-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;

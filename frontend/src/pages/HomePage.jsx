import { Link } from "react-router";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="flex-1">
            <img
              src="https://lasolarfactory.com/assets/images/fd/fd2eff_Solar-Panel-Advantages.jpg"
              alt="Solar Panels"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Harness the Power of Solar Energy
            </h1>
            <p className="text-gray-600 text-lg">
              Switch to renewable energy and reduce your electricity bills. Our
              solar solutions are efficient, reliable, and eco-friendly.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Implementation / Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Assessment
              </h3>
              <p className="text-gray-600">
                Enter your electricity usage and location to get a custom solar
                estimate.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Installation
              </h3>
              <p className="text-gray-600">
                Our certified team will install solar panels quickly and safely.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Energy Savings
              </h3>
              <p className="text-gray-600">
                Start saving on electricity bills while reducing your carbon
                footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-500 py-16">
        <div className="max-w-3xl mx-auto text-center text-white space-y-4">
          <h2 className="text-3xl font-bold">Ready to Go Solar?</h2>
          <p className="text-lg">
            Take the first step towards sustainable energy today.
          </p>

          <Link
            to="/userform"
            className="bg-white text-yellow-500 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Get Your Estimate
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

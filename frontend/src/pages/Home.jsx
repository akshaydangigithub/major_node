import React from "react";
import Navbar from "../components/Navbar";
import useInternships from "../hooks/useInternships";
import InternshipCard from "../components/InternshipCard";

const Home = () => {
  // Assuming useInternships might also provide a loading state
  const { internships, loading } = useInternships();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page Header / Hero Section */}
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Internships
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Find the perfect role to kickstart your career.
          </p>
        </header>

        {/* Loading State (Optional UI) */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Internship Grid */}
        {!loading && internships.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {internships.map((internship) => (
              <InternshipCard key={internship._id} internship={internship} />
            ))}
          </div>
        ) : (
          !loading && (
            <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                No opportunities found
              </h3>
              <p className="text-gray-500">
                Check back later for new internship postings.
              </p>
            </div>
          )
        )}
      </main>
    </div>
  );
};

export default Home;

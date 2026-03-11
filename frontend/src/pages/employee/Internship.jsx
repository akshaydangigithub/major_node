import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Internship = () => {
  const [formData, setFormData] = useState({
    profile: "",
    skills: "",
    type: "",
    internshipType: "",
    openings: "",
    duration: "",
    salary: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Replace with your actual API call to your Express backend
    try {
      console.log("Submitting Internship Data:", formData);
      // await axios.post('/api/internships', formData);

      // Simulating API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect back to employer dashboard or internships list
      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to create internship", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Shared Tailwind classes
  const inputClasses =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 border border-gray-100 h-fit">
        <h1 className="text-3xl text-gray-800 font-bold mb-2">
          Post an Internship
        </h1>
        <p className="text-gray-500 mb-8 text-sm">
          Fill out the details below to create a new internship opening.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Top Row: Profile (Full Width) */}
          <div>
            <label className={labelClasses}>Internship Profile / Title</label>
            <input
              name="profile"
              value={formData.profile}
              onChange={handleChange}
              type="text"
              placeholder="e.g., Frontend Developer Intern"
              required
              className={inputClasses}
            />
          </div>

          {/* Grid Layout for compact fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills */}
            <div>
              <label className={labelClasses}>Required Skills</label>
              <input
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                type="text"
                placeholder="e.g., React, Node.js, MongoDB"
                required
                className={inputClasses}
              />
            </div>

            {/* Type Dropdown */}
            <div>
              <label className={labelClasses}>Workplace Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className={`${inputClasses} bg-white`}
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="in-office">In-office</option>
                <option value="hybrid">Hybrid</option>
                <option value="remote">Remote</option>
              </select>
            </div>

            {/* Internship Type Dropdown */}
            <div>
              <label className={labelClasses}>Internship Type</label>
              <select
                name="internshipType"
                value={formData.internshipType}
                onChange={handleChange}
                required
                className={`${inputClasses} bg-white`}
              >
                <option value="" disabled>
                  Select Schedule
                </option>
                <option value="part-time">Part-time</option>
                <option value="full-time">Full-time</option>
              </select>
            </div>

            {/* Openings */}
            <div>
              <label className={labelClasses}>Number of Openings</label>
              <input
                name="openings"
                value={formData.openings}
                onChange={handleChange}
                type="number"
                min="1"
                placeholder="e.g., 5"
                required
                className={inputClasses}
              />
            </div>

            {/* Duration */}
            <div>
              <label className={labelClasses}>Duration</label>
              <input
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                type="text"
                placeholder="e.g., 3 Months, 4 Days"
                required
                className={inputClasses}
              />
            </div>

            {/* Salary */}
            <div>
              <label className={labelClasses}>Stipend / Salary (₹)</label>
              <input
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                type="number"
                min="0"
                placeholder="e.g., 15000"
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Description Textarea (Full Width) */}
          <div>
            <label className={labelClasses}>Job Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe the responsibilities, expectations, and perks..."
              required
              className={`${inputClasses} resize-y`}
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              disabled={isLoading}
              className="px-8 py-2.5 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
              type="submit"
            >
              {isLoading ? "Posting..." : "Create Internship"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Internship;

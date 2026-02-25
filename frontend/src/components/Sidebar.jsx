import { Link } from "react-router-dom";

const Sidebar = ({ items = [] }) => {
  return (
    <aside className="w-72 h-screen bg-white text-gray-800 flex flex-col shadow-lg border-r border-gray-200">
      {/* Sidebar Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index} className="px-3">
              <Link
                to={item.path}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                {/* Render Icon if it exists */}
                {item.icon && <span className="text-lg">{item.icon}</span>}

                {/* Render Label */}
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Optional Footer/Logout Area */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full text-left px-4 py-2 rounded-lg text-red-600 font-medium hover:bg-red-50 hover:text-red-700 transition-colors duration-200">
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

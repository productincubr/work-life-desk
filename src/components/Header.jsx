// import React, { useState } from "react";
// import logoworklife from "../assets/logoworklife.png";
// import { Menu, X } from "lucide-react"; // install: npm i lucide-react

// const Header = () => {
//   const [activeTab, setActiveTab] = useState("Services");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const tabs = ["Services", "Masterclass", "Contact Us"];

//   return (
//     <header className="sticky top-0 z-50 bg-white">
//       <div className="flex items-center h-20 mx-4 md:mx-12 lg:mx-24 relative">
//         <button
//           className="md:hidden z-50"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         <div
//           className="
//             absolute left-1/2 -translate-x-1/2
//             md:static md:translate-x-0
//           "
//         >
//           <img src={logoworklife} alt="Worklife Logo" className="h-12" />
//         </div>

//         <div className="hidden md:flex ml-auto bg-[#D9D9D9] rounded-4xl items-center py-3 px-3 gap-2">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`
//                 px-10 lg:px-16 py-2 rounded-4xl transition-all duration-300
//                 ${
//                   activeTab === tab
//                     ? "bg-[#F19D38] text-white"
//                     : "text-gray-700 hover:text-gray-900"
//                 }
//               `}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//      {menuOpen && (
//         <div className="md:hidden bg-[#FFFAE4] px-6 pb-6">
//           <div className="bg-[#D9D9D9] rounded-2xl flex flex-col gap-3 p-4">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => {
//                   setActiveTab(tab);
//                   setMenuOpen(false);
//                 }}
//                 className={`
//                   py-3 rounded-xl text-center transition-all
//                   ${
//                     activeTab === tab
//                       ? "bg-[#F19D38] text-white"
//                       : "text-gray-700 hover:text-gray-900"
//                   }
//                 `}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logoworklife from "../assets/logoworklife.png";
import { Menu, X, Sparkles, BookOpen, Phone } from "lucide-react"; // install: npm i lucide-react

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Services");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { name: "Startups", icon: Sparkles, path: "/startups" },
    { name: "Property Owners", icon: BookOpen, path: "/property-owners" },
    { name: "Contact Us", icon: Phone, path: "/contact-us" }
  ];

  // Set active tab based on current route
  useEffect(() => {
    if (location.pathname === '/contact-us') {
      setActiveTab("Contact Us");
    } else if (location.pathname === '/masterclass') {
      setActiveTab("Masterclass");
    } else if (location.pathname === '/services') {
      setActiveTab("Services");
    } else {
      setActiveTab("Services");
    }
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.path);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#F19D38]/10 py-2">
      <div className="flex items-center h-20 mx-4 md:mx-12 lg:mx-24 relative max-w-screen-2xl">
        
        {/* Hamburger (Mobile Only) - Enhanced */}
        <button
          className="md:hidden z-50 relative group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gradient-to-br hover:from-[#F19D38]/20 hover:to-[#E88B28]/20 transition-all duration-300 active:scale-95">
            <div className="absolute inset-0 rounded-xl bg-[#F19D38]/0 group-hover:bg-[#F19D38]/5 animate-pulse"></div>
            {menuOpen ? (
              <X size={28} className="text-[#F19D38] animate-menu-icon relative z-10" />
            ) : (
              <Menu size={28} className="text-gray-800 group-hover:text-[#F19D38] transition-colors animate-menu-icon relative z-10" />
            )}
          </div>
        </button>

        {/* Logo */}
        <Link to="/"
          className="
            absolute left-1/2 -translate-x-1/2
            md:static md:translate-x-0
            transition-transform duration-300 hover:scale-105
            cursor-pointer
          "
        >
          <img src={logoworklife} alt="Incubr Logo" className="h-12" />
        </Link>

        {/* Desktop / Tablet Tabs */}
        <div className="hidden md:flex ml-auto bg-gradient-to-r from-[#D9D9D9] to-[#CECECE] rounded-4xl items-center py-3 px-3 gap-2 shadow-md">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab)}
              className={`
                px-10 lg:px-16 py-2 rounded-4xl transition-all duration-300
                transform hover:scale-105 font-medium cursor-pointer
                ${
                  activeTab === tab.name
                    ? "bg-gradient-to-r from-[#F19D38] to-[#E88B28] text-white shadow-lg"
                    : "text-gray-700 hover:text-gray-900 hover:bg-white/50 hover:shadow-md"
                }
                ${tab.name === "Services" && activeTab !== "Services" ? "animate-pulse-shadow" : ""}
              `}
              style={tab.name === "Services" && activeTab !== "Services" ? {
                animation: 'pulse-shadow 2s ease-in-out infinite'
              } : {}}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md transition-all duration-500 z-40
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer - Advanced */}
      <div
        className={`
          md:hidden fixed top-0 left-0 right-0 bottom-0 z-40 max-w-sm
          bg-gradient-to-br from-[#FFFAE4] via-[#FFF8E1] to-[#FFE9B8]
          transform transition-all duration-700 ease-out shadow-2xl
          ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        `}
      >
        <div className="h-full overflow-y-auto">
          {/* Menu Header */}
          <div className="sticky top-0 bg-gradient-to-r from-[#F19D38] to-[#E88B28] px-6 py-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm animate-pulse">
                  <Sparkles className="text-white" size={20} />
                </div>
                <h2 className="text-white font-bold text-xl">Menu</h2>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all active:scale-95"
              >
                <X className="text-white" size={24} />
              </button>
            </div>
          </div>

          <div className="px-6 py-8">
            {/* Menu Items */}
            <div className="space-y-3">
              {tabs.map((tab, index) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.name}
                    onClick={() => {
                      handleTabClick(tab);
                      setTimeout(() => setMenuOpen(false), 300);
                    }}
                    className={`
                      w-full group relative overflow-hidden
                      transform transition-all duration-300
                      ${menuOpen ? `animate-slide-in-${index}` : ""}
                    `}
                    style={{
                      animationDelay: `${index * 100 + 200}ms`,
                    }}
                  >
                    <div
                      className={`
                        relative py-5 px-6 rounded-2xl text-left font-semibold text-lg
                        transition-all duration-300
                        ${
                          activeTab === tab.name
                            ? "bg-gradient-to-r from-[#F19D38] to-[#E88B28] text-white shadow-2xl scale-105"
                            : "bg-white/80 text-gray-800 hover:bg-white hover:shadow-xl hover:scale-105 active:scale-95 border border-gray-200/50"
                        }
                      `}
                    >
                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-[#F19D38]/20 to-[#E88B28]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${activeTab === tab.name ? 'hidden' : ''}`}></div>
                      
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`
                            w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                            ${
                              activeTab === tab.name
                                ? "bg-white/20"
                                : "bg-[#F19D38]/10 group-hover:bg-[#F19D38]/20"
                            }
                          `}>
                            <IconComponent
                              className={activeTab === tab.name ? "text-white" : "text-[#F19D38]"}
                              size={20}
                            />
                          </div>
                          <span className="relative">
                            {tab.name}
                            {activeTab === tab.name && (
                              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded animate-expand-width"></span>
                            )}
                          </span>
                        </div>
                        <div
                          className={`
                            transform transition-all duration-300
                            ${activeTab === tab.name ? "translate-x-2 text-white" : "translate-x-0 text-[#F19D38] group-hover:translate-x-1"}
                          `}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stats Card */}
            <div className={`mt-8 transform transition-all duration-500 ${menuOpen ? 'animate-slide-in-3' : ''}`} style={{ animationDelay: '500ms' }}>
              <div className="bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-sm rounded-2xl p-6 border border-[#F19D38]/20 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F19D38] to-[#E88B28] rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Incubr</p>
                    <p className="text-xs text-gray-600">Transform Your Business</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Join us in building the future of innovation and entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
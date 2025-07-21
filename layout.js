import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Heart, Thermometer, MapPin, Home } from "lucide-react";

const navigationItems = [
  {
    title: "Home",
    url: createPageUrl("Home"),
    icon: Home,
  },
  {
    title: "Weather Check",
    url: createPageUrl("WeatherCheck"),
    icon: MapPin,
  },
  {
    title: "Manual Check",
    url: createPageUrl("ManualCheck"),
    icon: Thermometer,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <style>
        {`
          * {
            box-sizing: border-box;
          }
          
          .ios-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.1),
              0 1px 2px rgba(0, 0, 0, 0.05);
          }
          
          .ios-button {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 
              0 4px 16px rgba(0, 0, 0, 0.08),
              0 1px 2px rgba(0, 0, 0, 0.05);
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          
          .ios-button:hover {
            transform: translateY(-2px);
            box-shadow: 
              0 8px 24px rgba(0, 0, 0, 0.12),
              0 2px 4px rgba(0, 0, 0, 0.08);
          }
          
          .ios-button:active {
            transform: translateY(0px);
            box-shadow: 
              0 2px 8px rgba(0, 0, 0, 0.08),
              0 1px 2px rgba(0, 0, 0, 0.05);
          }
          
          .ios-button-active {
            background: linear-gradient(135deg, #007AFF 0%, #0056CC 100%);
            color: white;
            box-shadow: 
              0 4px 16px rgba(0, 122, 255, 0.3),
              0 1px 2px rgba(0, 0, 0, 0.05);
          }
          
          .ios-toggle {
            background: linear-gradient(135deg, #34C759 0%, #30A14E 100%);
            border-radius: 20px;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          
          .ios-toggle-off {
            background: #E5E5EA;
          }
          
          .gradient-bg {
            background: linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #F0F9FF 100%);
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
          }
        `}
      </style>

      <div className="gradient-bg min-h-screen">
        {/* Navigation */}
        <nav className="p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="ios-card p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">PawTemp</h1>
                    <p className="text-xs text-gray-500">Dog Walking Safety</p>
                  </div>
                </div>
                
                <div className="flex gap-2 md:gap-3">
                  {navigationItems.map((item) => (
                    <Link key={item.title} to={item.url}>
                      <button
                        className={`ios-button p-3 md:px-5 md:py-3 flex items-center gap-2 font-medium text-sm ${
                          location.pathname === item.url 
                            ? 'ios-button-active text-white' 
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="hidden md:block">{item.title}</span>
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="px-4 md:px-6 pb-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
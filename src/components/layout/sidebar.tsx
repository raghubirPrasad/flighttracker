"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Calendar,
  Bot,
  HelpCircle,
  ChevronDown,
  Menu,
  X,
  Plane
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutGrid },
  { name: "Vertex AI Chatbot", href: "/chat", icon: Bot },
  { name: "Maintenance Schedule", href: "/maintenance", icon: Calendar },
  { name: "Live Flights", href: "/flights", icon: Plane },
  { name: "Help", href: "/help", icon: HelpCircle },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-white shadow-lg border"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-slate-900 to-slate-800 border-r border-slate-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 shadow-2xl",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Extended Logo Area */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Plane className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">AeroTrack AI</span>
                <p className="text-blue-100 text-sm mt-1 font-medium">BETA</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group",
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  )}
                >
                  <Icon className={cn(
                    "mr-3 h-5 w-5 transition-colors",
                    isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                  )} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

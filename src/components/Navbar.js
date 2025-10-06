import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { 
  Bars3Icon, 
  XMarkIcon, 
  HomeIcon, 
  ChatBubbleLeftRightIcon,
  ClockIcon,
  UserCircleIcon,
  InformationCircleIcon,
  PhoneIcon,
  BookOpenIcon,
  PencilSquareIcon,
  AcademicCapIcon,
  MusicalNoteIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const publicNavigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Articles', 
      href: '/articles', 
      icon: BookOpenIcon,
      submenu: [
        { name: 'Masters & Mystics', href: '/articles/masters-mystics' },
        { name: 'Management', href: '/articles/management' },
        { name: 'Philosophy', href: '/articles/philosophy' },
        { name: 'Religion', href: '/articles/religion' },
        { name: 'Bodhisattva Path', href: '/articles/bodhisattva-path' },
        { name: 'Spirituality', href: '/articles/spirituality' }
      ]
    },
    { 
      name: 'Critique', 
      href: '/critique', 
      icon: AcademicCapIcon,
      submenu: [
        { name: "The Devil's Dictionary", href: '/critique/devils-dictionary' },
        { name: 'H.L. Mencken Corner', href: '/critique/mencken-corner' },
        { name: "Philosopher's Stone", href: '/critique/philosophers-stone' },
        { name: 'Critique of Contemporary Society', href: '/critique/contemporary-society' }
      ]
    },
    { name: 'My Music', href: '/my-music', icon: MusicalNoteIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
  ];

  const privateNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'History', href: '/history', icon: ClockIcon },
  ];

  const navigation = isAuthenticated ? privateNavigation : publicNavigation;

  return (
    <nav className="bg-gradient-to-r from-white via-blue-50 to-purple-50 shadow-lg border-b-2 border-gradient-to-r from-blue-200 to-purple-200 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center transform hover:scale-105 transition-transform duration-200">
                <div className="h-12 w-12 bg-gradient-to-br from-primary-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-xl tracking-wider">S</span>
                </div>
                <div className="ml-3">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Sariputra
                  </span>
                  <div className="text-xs text-gray-500 font-medium tracking-wide">
                    Wisdom & Consciousness
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-12 md:flex md:space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                        : 'bg-gradient-to-r from-gray-50 to-blue-50 text-gray-700 hover:from-primary-100 hover:to-purple-100 hover:text-primary-700 hover:shadow-md border border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <Icon className={`h-5 w-5 mr-2 transition-transform duration-300 group-hover:rotate-12 ${
                      isActive(item.href) ? 'text-white' : 'text-primary-600'
                    }`} />
                    <span className="tracking-wide">{item.name}</span>
                    {isActive(item.href) && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {isAuthenticated && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-lg border border-green-200">
                  <div className="h-8 w-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {user?.username?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Welcome, <span className="text-green-700 font-semibold">{user?.username}</span>
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-600 hover:text-primary-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fadeIn">
            <div className="pt-4 pb-3 space-y-2 bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-inner mt-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center pl-4 pr-4 py-3 text-base font-semibold rounded-lg mx-2 transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:text-primary-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className={`h-6 w-6 mr-3 ${
                      isActive(item.href) ? 'text-white' : 'text-primary-600'
                    }`} />
                    <span className="tracking-wide">{item.name}</span>
                  </Link>
                );
              })}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 bg-gradient-to-b from-blue-50 to-purple-50 rounded-lg mt-2">
              {isAuthenticated ? (
                <div className="space-y-3 px-2">
                  <div className="flex items-center px-4 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <div className="h-10 w-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {user?.username?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-semibold text-gray-800">
                        {user?.username}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user?.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 rounded-lg shadow-md transition-all duration-300"
                  >
                    Sign Out
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
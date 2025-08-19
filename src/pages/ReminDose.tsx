import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import {
    Bell,
    Pill,
    Heart,
    Shield,
    Smartphone,
    Star,
    CheckCircle,
    ArrowRight,
    BarChart3,
    Users
} from "lucide-react";

const ReminDose = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col">
      <NavHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-blue-400/10 to-pink-400/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Take Control Of Your<br />Medication Anytime
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay healthy and never miss a dose with personalized reminders and tracking
            </p>
            
            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="https://apps.apple.com/pt/app/remindose/id6751042962?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center transition-all transform hover:scale-105"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store" 
                  className="h-12"
                />
              </a>
              <button 
                disabled
                className="inline-flex items-center justify-center opacity-75 cursor-not-allowed"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play" 
                  className="h-12 opacity-50"
                />
              </button>
            </div>
            
            <p className="text-sm text-gray-500">Available on iOS • Android coming soon</p>
          </div>
          
          {/* Phone mockups */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="relative">
              <img 
                src="/remindose/img01-portrait.png" 
                alt="ReminDose home screen" 
                className="w-64 h-auto transform hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative -mt-8 md:mt-0">
              <img 
                src="/remindose/img02-portrait.png" 
                alt="ReminDose medication list" 
                className="w-64 h-auto transform hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative">
              <img 
                src="/remindose/img03-portrait.png" 
                alt="ReminDose tracking" 
                className="w-64 h-auto transform hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Everything you need to manage your medication schedule effectively
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Bell className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Reminders</h3>
              <p className="text-gray-600 text-sm">
                Intelligent alerts that adapt to your routine and never let you forget
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Pill className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Medication Tracking</h3>
              <p className="text-gray-600 text-sm">
                Keep a complete log of all your medications with dosage information
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <BarChart3 className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Reports</h3>
              <p className="text-gray-600 text-sm">
                Visualize your adherence and share reports with healthcare providers
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Heart className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Health Insights</h3>
              <p className="text-gray-600 text-sm">
                Get personalized insights based on your medication adherence patterns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight 1 */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Track It. Take It.<br />And Feel Better.
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Manage your medication schedule easily</h3>
                    <p className="text-gray-600">Set up complex medication schedules with ease and precision</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Get timely reminders for each dose</h3>
                    <p className="text-gray-600">Never miss a dose with smart notifications and alarms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Track your progress over time</h3>
                    <p className="text-gray-600">Monitor adherence patterns and identify areas for improvement</p>
                  </div>
                </div>
              </div>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-2">
                Get Started <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="/remindose/img04-left.png" 
                alt="ReminDose tracking interface" 
                className="w-full max-w-md mx-auto transition-transform duration-200 ease-out"
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Take A Look At Our Big<br />Set Of Features
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img 
                src="/remindose/img01-left.png" 
                alt="Instant payments feature" 
                className="w-full max-w-md mx-auto transition-transform duration-200 ease-out"
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                }}
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Instant Reminders.<br />Secure. Hassle-Free.
              </h3>
              <p className="text-gray-600 mb-6">
                Get instant notifications for your medications with our secure and reliable reminder system. 
                Never miss a dose with customizable alerts that work around your schedule.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Customize Your Medication<br />Profile Settings
              </h3>
              <p className="text-gray-600 mb-6">
                Personalize your medication schedule with detailed profiles for each medicine. 
                Set specific instructions, add notes, and track side effects all in one place.
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src="/remindose/img02-left.png" 
                alt="Profile settings feature" 
                className="w-full max-w-md mx-auto transition-transform duration-200 ease-out"
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Words From Satisfied<br />App Users
          </h2>
          <p className="text-center text-gray-600 mb-12">
            See what our users are saying about ReminDose
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Life Changing!</h3>
              <p className="text-gray-600 mb-4">
                "I've been taking medication for years, and ReminDose has completely transformed how I manage my pills. The reminders are perfectly timed!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Verified User</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Simply The Best</h3>
              <p className="text-gray-600 mb-4">
                "Tried many medication reminder apps, but ReminDose is by far the most intuitive and reliable. The tracking features are exceptional!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-500">Verified User</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Great Service</h3>
              <p className="text-gray-600 mb-4">
                "The app is incredibly user-friendly and the customer support team is amazing. It's helped me stay on top of my medication schedule!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Emma Davis</p>
                  <p className="text-sm text-gray-500">Verified User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Download The App On The<br />App Store Or Play Store
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of users who never miss their medication
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://apps.apple.com/pt/app/remindose/id6751042962?l=en-GB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-all transform hover:scale-105"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on App Store" 
                className="h-14"
              />
            </a>
            <button 
              disabled
              className="inline-flex items-center justify-center opacity-75 cursor-not-allowed"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play" 
                className="h-14 opacity-50"
              />
            </button>
          </div>
          
          <div className="flex justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              <span>Works Offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <Link to="/remindose-privacy-policy" className="text-gray-600 hover:text-purple-600 transition-colors">
            ReminDose Privacy Policy
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReminDose;
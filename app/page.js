// app/page.tsx
import React from "react";
import Link from "next/link";
import { MessageCircle, Globe, Users, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-800">
 
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
          Welcome to <span className="text-yellow-500">Threadly</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Connect with learners and developers worldwide. Share ideas, clear
          doubts, and grow together in real-time discussion forums.
        </p>
        <Link
          href="/forums"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Join a Discussion
        </Link>
      </section>

  
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Threadly Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Globe className="w-10 h-10 text-blue-500" />}
            title="Global Connectivity"
            description="Connect with users across the globe in real-time, anytime."
          />
          <FeatureCard
            icon={<Users className="w-10 h-10 text-green-500" />}
            title="Collaborative Discussions"
            description="Participate in topic-based channels and solve problems together."
          />
          <FeatureCard
            icon={<MessageCircle className="w-10 h-10 text-purple-500" />}
            title="Live Messaging"
            description="Chat with others instantly with fast and reliable messaging."
          />
          <FeatureCard
            icon={<Sparkles className="w-10 h-10 text-yellow-500" />}
            title="Topic Diversity"
            description="JavaScript, Python, AI, Cloud — join or create channels by topic."
          />
          <FeatureCard
            icon={<Users className="w-10 h-10 text-pink-500" />}
            title="Community Powered"
            description="Contribute, learn, and help others in an open, supportive space."
          />
          <FeatureCard
            icon={<Globe className="w-10 h-10 text-indigo-500" />}
            title="Cross-Platform Access"
            description="Use Threadly on web or mobile – all in sync, all the time."
          />
        </div>
      </section>

      <footer className="bg-gray-100 mt-16 py-8 text-center text-sm text-gray-600 border-t">
        <p>© {new Date().getFullYear()} Threadly. Connect. Discuss. Solve.</p>
        <p>
          Built with 💙 by{" "}
          <a
            href="https://github.com/vinayakchaube"
            className="text-blue-500 hover:underline"
          >
            Vinayak Chaube
          </a>
        </p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

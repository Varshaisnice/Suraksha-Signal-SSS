
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  tagline: string;
  description: string;
  onNotificationTest: () => void;
}

const HeroSection = ({ title, tagline, description, onNotificationTest }: HeroSectionProps) => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-red-600 mb-4">
            {tagline}
          </p>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={onNotificationTest} className="bg-red-600 hover:bg-red-700">
              Test Alert Notification
            </Button>
          </div>
        </div>

        <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-80"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h2 className="text-3xl font-bold mb-4">Every Second Counts</h2>
              <p className="text-xl mb-6">Join our community network to help find missing children</p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold">12,000+</p>
                  <p className="text-sm">Missing Children</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">8,500+</p>
                  <p className="text-sm">Successfully Found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

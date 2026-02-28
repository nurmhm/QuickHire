"use client";

import { useState } from "react";
import Image from "next/image";

const popular = ["UI Designer", "UX Researcher", "Android", "Admin"];

export default function Banner() {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("Florence, Italy");

  return (
    <section className="relative w-full bg-[#F8F8FD] overflow-hidden min-h-[calc(100vh-72px)]">
      {/* Decorative geometric lines (right side background) */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
        {/* Outer rectangle */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect
            x="80"
            y="80"
            width="520"
            height="520"
            rx="2"
            stroke="#D6DDEB"
            strokeWidth="1.5"
          />
          <rect
            x="160"
            y="160"
            width="370"
            height="370"
            rx="2"
            stroke="#D6DDEB"
            strokeWidth="1.5"
          />
          <rect
            x="240"
            y="240"
            width="220"
            height="220"
            rx="2"
            stroke="#D6DDEB"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 flex items-center justify-between pt-16 pb-8 gap-8">
        {/* Left Content */}
        <div className="flex-1 max-w-[600px] z-10">
          {/* Heading */}
          <h1 className="font-clash font-bold text-[56px] leading-[1.15] text-[#202430] mb-2">
            Discover more than
          </h1>
          <h1 className="font-clash font-bold text-[56px] leading-[1.15] text-[#26A4FF] mb-1">
            5000+ Jobs
          </h1>

          {/* Underline squiggle */}
          <div className="mb-6">
            <svg
              width="360"
              height="18"
              viewBox="0 0 360 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 10 Q40 2, 80 10 Q120 18, 160 10 Q200 2, 240 10 Q280 18, 320 10 Q340 6, 356 8"
                stroke="#26A4FF"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M4 14 Q40 6, 80 14 Q120 18, 160 14 Q200 6, 240 14 Q280 18, 320 14 Q340 10, 356 12"
                stroke="#26A4FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Subtext */}
          <p className="font-epilogue text-[#515B6F] text-base leading-relaxed mb-8 max-w-[480px]">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-white shadow-md">
            {/* Job input */}
            <div className="flex items-center gap-3 px-5 py-4 flex-1 border-r border-gray-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9199A3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder="Job title or keyword"
                className="font-epilogue text-sm text-[#515B6F] placeholder-[#9199A3] outline-none bg-transparent w-full"
              />
            </div>

            {/* Location select */}
            <div className="flex items-center gap-3 px-5 py-4 w-52">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9199A3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="font-epilogue text-sm text-[#515B6F] outline-none bg-transparent w-full cursor-pointer"
              >
                <option>Florence, Italy</option>
                <option>New York, USA</option>
                <option>London, UK</option>
                <option>Dhaka, BD</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="font-epilogue bg-[#4640DE] text-white text-sm font-semibold px-8 py-[22px] hover:bg-[#3730c8] transition-colors whitespace-nowrap">
              Search my job
            </button>
          </div>

          {/* Popular searches */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="font-epilogue text-[#202430] text-sm">
              Popular :
            </span>
            {popular.map((tag, i) => (
              <button
                key={i}
                className="font-epilogue text-sm text-[#515B6F] hover:text-[#4640DE] hover:underline transition-colors"
              >
                {tag}
                {i < popular.length - 1 && (
                  <span className="ml-2 text-gray-300">,</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right — Hero Image */}
        <div className="relative hidden lg:flex flex-col items-center justify-end w-[480px] h-[560px] z-10 flex-shrink-0">
          {/* You can replace this src with your actual image path e.g. /images/hero-man.png */}
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&h=560&fit=crop&crop=top"
            alt="Job seeker"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
"use client"

import React, { useState, useRef } from "react";
import Link from "next/link";

const UploadPage = () => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const originalHeight = "50px"; 

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
        
    if (textareaRef.current) {
      if (event.target.value === "") {
        textareaRef.current.style.height = originalHeight;
      } else {
        const scrollHeight = textareaRef.current.scrollHeight;
        if (scrollHeight > parseInt(textareaRef.current.style.height, 10) || event.target.value.split('\n').length < text.split('\n').length) {
          textareaRef.current.style.height = scrollHeight + "px";
        }
      }
    }
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen animate-fadeInAnimation">
      <h2 className="animate-fadeInAnimation text-5xl md:text-7xl font-bold text-white mb-1 font-segoe">Get Started! 📚</h2>
      <p 
        className="text-xl md:text-2xl text-white font-light font-segoe mb-4 flex"  // changed mb-8 to mb-4
      >
        Starting by entering the questions along with the answers.
      </p>

      <textarea 
    ref={textareaRef}
    value={text}
    onChange={handleTextChange}
    className="w-1/4 p-2 border bg-gray-100 text-gray-700 rounded overflow-y-auto duration-200 ease-out"
    style={{height: originalHeight, maxHeight: "200px"}}
    placeholder="When was America Discovered : 1492"
></textarea>

      <button
        className="flex select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-black-600 to-black-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-white-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          ></path>
        </svg>
        Upload Text File
      </button>

    </main>
  )
}

export default UploadPage;
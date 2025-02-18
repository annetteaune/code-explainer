"use client";
import React, { useState, ChangeEvent } from "react";
import Header from "./Header";
import CodeEditor from "./CodeEditor";
import Explanation from "./Explanation";
import Footer from "./Footer";

const CodeExplainer = () => {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleExplain = async () => {
    if (!code.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setExplanation(data.explanation);
    } catch (error) {
      console.error("Failed to get explanation:", error);
      setExplanation("Failed to generate explanation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <main className="flex-1 container mx-auto p-4 max-w-4xl">
        <Header />

        <div className="space-y-6">
          <CodeEditor code={code} onChange={handleCodeChange} />

          <button
            onClick={handleExplain}
            disabled={isLoading || !code.trim()}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            aria-busy={isLoading}
          >
            {isLoading ? "Explaining..." : "Explain Code"}
          </button>

          <Explanation explanation={explanation} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CodeExplainer;

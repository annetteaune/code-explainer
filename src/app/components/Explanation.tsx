import React from "react";

interface ExplanationProps {
  explanation: string;
}

const Explanation = ({ explanation }: ExplanationProps) => {
  if (!explanation) return null;

  return (
    <section
      className="bg-[#2d2d2d] rounded-lg shadow-xl p-6 text-gray-300"
      aria-label="Code Explanation"
    >
      <h2 className="text-xl font-semibold mb-4 text-white">Explanation:</h2>
      <div className="space-y-4">
        {explanation.split("\n").map((paragraph, index) => (
          <p key={index} className="text-gray-300" role="article">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Explanation;

import React, { useRef, ChangeEvent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeEditorProps {
  code: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const CodeEditor = ({ code, onChange }: CodeEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlighterRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (highlighterRef.current) {
      const preElement = highlighterRef.current.querySelector("pre");
      if (preElement) {
        preElement.scrollTop = e.currentTarget.scrollTop;
      }
    }
  };

  return (
    <section
      className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-xl"
      aria-label="Code Editor"
    >
      <div
        className="bg-[#2d2d2d] px-4 py-2 flex items-center space-x-2 border-b border-gray-700"
        role="toolbar"
        aria-label="Editor Controls"
      >
        <div className="flex space-x-2" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-sm ml-4">code.js</div>
      </div>

      <div className="relative" style={{ height: "300px" }}>
        <label htmlFor="codeInput" className="sr-only">
          Enter your code
        </label>
        <textarea
          id="codeInput"
          ref={textareaRef}
          className="w-full h-full bg-transparent text-transparent font-mono text-sm p-4 resize-none focus:outline-none absolute inset-0 z-10 caret-white"
          placeholder="Paste your code here..."
          value={code}
          onChange={onChange}
          onScroll={handleScroll}
          style={{
            tabSize: 2,
          }}
          aria-label="Code Input"
          spellCheck="false"
        />
        <div
          ref={highlighterRef}
          className="absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "1rem",
              height: "100%",
              background: "transparent",
            }}
            wrapLines={true}
            wrapLongLines={true}
            useInlineStyles={true}
          >
            {code || " "}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
};

export default CodeEditor;

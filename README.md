# Code Explainer

A simple web app that explains code snippets in plain English using Ollama AI.

## Quick Start

1. Install [Ollama](https://ollama.ai) and pull the Mistral model:

```bash
ollama pull mistral
```

2. Start Ollama:

```bash
ollama serve
```

3. Clone and set up the app:

```bash
git clone https://github.com/annetteaune/code-explainer.git
cd code-explainer
npm install
npm run dev
```

4. Open http://localhost:3000 in your browser

## Usage

1. Paste your code into the editor
2. Click "Explain Code"
3. Get a plain English explanation of what the code does

## Built With

- Next.js
- React
- Tailwind CSS
- Ollama AI (Mistral model)

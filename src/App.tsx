import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProblemList from './components/ProblemList';
import ProblemDescription from './components/ProblemDescription';
import CodeEditor from './components/CodeEditor';
import { Problem } from './types';

function App() {
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [codeReview, setCodeReview] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        <aside className="w-1/4 bg-white p-4 border-r border-gray-200">
          <ProblemList onSelectProblem={setSelectedProblem} />
        </aside>
        <main className="flex-1 p-4 flex flex-col">
          {selectedProblem && <ProblemDescription problem={selectedProblem} />}
          <CodeEditor 
            selectedProblem={selectedProblem} 
            onCodeReview={setCodeReview}
          />
          {codeReview && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Code Review</h3>
              <p>{codeReview}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
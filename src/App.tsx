/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GameView } from './components/GameView';
import { CodeView } from './components/CodeView';
import { LessonView } from './components/LessonView';
import { createInitialState, feed, play, sleep, PetState } from './logic/petLogic';
import { Code2 } from 'lucide-react';

export default function App() {
  const [state, setState] = useState<PetState>(createInitialState());

  const handleFeed = () => setState(feed(state));
  const handlePlay = () => setState(play(state));
  const handleSleep = () => setState(sleep(state));
  const handleRename = (newName: string) => setState({ ...state, petName: newName });

  return (
    <div className="min-h-screen bg-[#f0f4f8] py-8 px-4 sm:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-[#3b27ba] flex items-center justify-center mb-3">
            <Code2 size={40} className="mr-3" />
            Code Pet: 变量学习大作战
          </h1>
          <p className="text-gray-600 text-lg">通过养电子宠物，轻松掌握 JavaScript 编程基础！</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Game */}
          <div className="lg:col-span-5 flex flex-col">
            <GameView 
              state={state} 
              onFeed={handleFeed} 
              onPlay={handlePlay} 
              onSleep={handleSleep}
              onRename={handleRename}
            />
          </div>

          {/* Right Column - Code & Lesson */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex-shrink-0">
              <CodeView state={state} />
            </div>
            <div className="flex-grow">
              <LessonView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

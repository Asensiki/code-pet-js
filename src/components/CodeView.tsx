import React from 'react';
import { PetState } from '../logic/petLogic';

interface CodeViewProps {
  state: PetState;
}

export const CodeView: React.FC<CodeViewProps> = ({ state }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-xl shadow-lg overflow-hidden flex flex-col font-mono text-sm text-gray-300">
      <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-xs">pet_logic.ts</div>
        <div className="text-gray-500 text-xs">实时代码视图</div>
      </div>
      <div className="p-6 space-y-6">
        {/* Variables */}
        <div>
          <div className="text-[#6a9955] mb-2">// 1. 变量定义 (Variables &amp; Types)</div>
          <div><span className="text-[#569cd6]">let</span> <span className="text-[#9cdcfe]">petName</span>: <span className="text-[#4ec9b0]">string</span> = <span className="text-[#ce9178]">"{state.petName}"</span>;</div>
          <div><span className="text-[#569cd6]">let</span> <span className="text-[#9cdcfe]">energy</span>: <span className="text-[#4ec9b0]">number</span> = <span className="text-[#b5cea8]">{state.energy}</span>;</div>
          <div><span className="text-[#569cd6]">let</span> <span className="text-[#9cdcfe]">level</span>: <span className="text-[#4ec9b0]">number</span> = <span className="text-[#b5cea8]">{state.level}</span>;</div>
          <div><span className="text-[#569cd6]">let</span> <span className="text-[#9cdcfe]">isHappy</span>: <span className="text-[#4ec9b0]">boolean</span> = <span className="text-[#569cd6]">{state.isHappy ? 'true' : 'false'}</span>;</div>
        </div>

        {/* If Statement */}
        <div>
          <div className="text-[#6a9955] mb-2">// 2. 条件语句 (If Statement)</div>
          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-gray-700">
            <div><span className="text-[#c586c0]">if</span> (energy &gt;= <span className="text-[#b5cea8]">30</span>) {'{'}</div>
            <div className="pl-4"><span className="text-[#9cdcfe]">isHappy</span> = <span className="text-[#569cd6]">true</span>;</div>
            <div>{'}'} <span className="text-[#c586c0]">else</span> {'{'}</div>
            <div className="pl-4"><span className="text-[#9cdcfe]">isHappy</span> = <span className="text-[#569cd6]">false</span>;</div>
            <div>{'}'}</div>
          </div>
        </div>

        {/* Action Log */}
        <div>
          <div className="text-[#6a9955] mb-2">// 3. 最新执行的操作 (Action Log)</div>
          <div className="bg-[#1e3a29] text-[#4ec9b0] p-3 rounded border border-[#2b5a3f] whitespace-pre-wrap">
            {state.actionLog}
          </div>
        </div>
      </div>
    </div>
  );
};

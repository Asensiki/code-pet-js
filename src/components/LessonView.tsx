import React from 'react';
import { BookOpen } from 'lucide-react';

export const LessonView: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center space-x-2">
        <BookOpen size={20} className="text-blue-500" />
        <h3 className="font-bold text-gray-800">编程小课堂</h3>
      </div>
      <div className="p-5 space-y-4">
        
        {/* Variable */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h4 className="font-bold text-gray-800 flex items-center mb-2">
            <span className="mr-2">📦</span> 什么是变量 (Variable)?
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            变量就像是一个带有标签的“盒子”，我们可以把数据（比如宠物的名字、能量值）装进去。在代码里，我们用 <code className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-xs font-mono">let</code> 来声明一个可以改变的变量。
          </p>
        </div>

        {/* Types */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h4 className="font-bold text-gray-800 flex items-center mb-2">
            <span className="mr-2">🏷️</span> 数据类型 (Types)
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            盒子里的东西有不同的种类：
          </p>
          <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
            <li><code className="text-[#4ec9b0] font-mono bg-gray-100 px-1 rounded">string</code> (字符串): 一段文本，比如 <code className="text-[#ce9178] font-mono">"小火龙"</code></li>
            <li><code className="text-[#4ec9b0] font-mono bg-gray-100 px-1 rounded">number</code> (数字): 用来计算的数值，比如 <code className="text-[#b5cea8] font-mono">50</code></li>
            <li><code className="text-[#4ec9b0] font-mono bg-gray-100 px-1 rounded">boolean</code> (布尔值): 只有两个状态，<code className="text-[#569cd6] font-mono">true</code> (真) 或 <code className="text-[#569cd6] font-mono">false</code> (假)</li>
          </ul>
        </div>

        {/* Assignment & If */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h4 className="font-bold text-gray-800 flex items-center mb-2">
            <span className="mr-2">🔀</span> 赋值与条件 (Assignment &amp; If)
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            当你点击“喂食”时，代码执行了 <code className="bg-gray-200 text-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">energy = energy + 30</code>，这就是赋值，把新的计算结果放回盒子里。而 <code className="bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded text-xs font-mono">if...else</code> 就像是一个岔路口，根据能量的多少决定宠物是否开心！
          </p>
        </div>

      </div>
    </div>
  );
};

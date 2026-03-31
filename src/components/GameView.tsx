import React from 'react';
import { PetState } from '../logic/petLogic';
import { Gamepad2, Edit2, Zap, Heart, Coffee, Play, Moon } from 'lucide-react';

interface GameViewProps {
  state: PetState;
  onFeed: () => void;
  onPlay: () => void;
  onSleep: () => void;
  onRename: (newName: string) => void;
}

export const GameView: React.FC<GameViewProps> = ({ state, onFeed, onPlay, onSleep, onRename }) => {
  const handleRename = () => {
    const newName = prompt("给宠物起个新名字吧：", state.petName);
    if (newName && newName.trim() !== "") {
      onRename(newName.trim());
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100 min-h-[600px]">
      {/* Header */}
      <div className="bg-[#6366f1] text-white px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2 font-medium">
          <Gamepad2 size={18} />
          <span>游戏画面 (Game View)</span>
        </div>
        <div className="bg-white/20 px-2 py-1 rounded text-xs font-bold">
          Lv. {state.level}
        </div>
      </div>

      <div className="p-8 flex flex-col items-center flex-grow">
        {/* Pet Name */}
        <div className="flex items-center space-x-2 mb-8 group cursor-pointer" onClick={handleRename}>
          <h2 className="text-2xl font-bold text-gray-800">{state.petName}</h2>
          <Edit2 size={16} className="text-gray-400 group-hover:text-gray-600" />
        </div>

        {/* Pet Avatar */}
        <div className="relative w-48 h-48 rounded-full bg-gray-50 border-4 border-gray-100 flex items-center justify-center mb-10 shadow-inner">
          <div className="text-7xl transition-transform hover:scale-110 cursor-pointer">
            {state.isHappy ? '😊' : '😭'}
          </div>
          {!state.isHappy && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce">
              好饿啊！
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="w-full max-w-xs space-y-4 mb-8">
          {/* Energy */}
          <div>
            <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
              <div className="flex items-center space-x-1">
                <Zap size={16} className="text-yellow-500" />
                <span>能量 (Energy)</span>
              </div>
              <span>{state.energy}/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-yellow-400 h-full transition-all duration-500 ease-out"
                style={{ width: `${state.energy}%` }}
              ></div>
            </div>
          </div>

          {/* Mood */}
          <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center border border-gray-100">
            <div className="flex items-center space-x-1 text-sm font-medium text-gray-600">
              <Heart size={16} className={state.isHappy ? "text-red-500" : "text-gray-400"} />
              <span>心情 (isHappy)</span>
            </div>
            <span className={`text-sm font-bold ${state.isHappy ? 'text-green-500' : 'text-gray-500'}`}>
              {state.isHappy ? '开心 (true)' : '难过 (false)'}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-xs mt-auto">
          <button 
            onClick={onFeed}
            className="flex flex-col items-center justify-center py-3 bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-xl transition-colors shadow-sm active:scale-95"
          >
            <Coffee size={20} className="mb-1" />
            <span className="text-sm font-medium">喂食</span>
          </button>
          <button 
            onClick={onPlay}
            className="flex flex-col items-center justify-center py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl transition-colors shadow-sm active:scale-95"
          >
            <Play size={20} className="mb-1" />
            <span className="text-sm font-medium">玩耍</span>
          </button>
          <button 
            onClick={onSleep}
            className="flex flex-col items-center justify-center py-3 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-xl transition-colors shadow-sm active:scale-95"
          >
            <Moon size={20} className="mb-1" />
            <span className="text-sm font-medium">睡觉</span>
          </button>
        </div>
      </div>
    </div>
  );
};

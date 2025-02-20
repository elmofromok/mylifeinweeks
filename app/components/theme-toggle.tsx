'use client';

import { useTheme } from '../context/theme';
import { MoonIcon, SunIcon, SystemIcon } from './icons';
import { useEffect, useRef, useState } from 'react';

const themes = [
  {
    name: 'Light',
    value: 'light',
    icon: SunIcon,
  },
  {
    name: 'Dark',
    value: 'dark',
    icon: MoonIcon,
  },
  {
    name: 'System',
    value: 'system',
    icon: SystemIcon,
  },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentTheme = themes.find(t => t.value === theme) || themes[0];
  const Icon = currentTheme.icon;

  return (
    <div className='relative' ref={menuRef}>
      <button
        aria-label='Toggle theme'
        className='flex items-center justify-center w-8 h-8 rounded-md transition-colors bg-bg-base hover:bg-button-hover'
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon className='text-text-primary' />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-36 py-2 rounded-md z-50 bg-dropdown-bg border border-dropdown-border shadow-dropdown'>
          <div className='absolute inset-0 rounded-md bg-bg-base -z-10' />
          {themes.map(({ name, value, icon: ThemeIcon }) => (
            <button
              key={value}
              className={`w-full px-3 py-1.5 text-sm flex items-center gap-2 hover:bg-bg-past transition-colors
                ${
                  value === theme ? 'text-text-primary' : 'text-text-secondary'
                }`}
              onClick={() => {
                setTheme(value);
                setIsOpen(false);
              }}
            >
              <ThemeIcon className='w-4 h-4' />
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

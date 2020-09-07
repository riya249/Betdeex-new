import React, { Component, createContext } from "react";
import { themeState } from '../types';
import { lightTheme } from './theme';

export const ThemeContext = createContext<themeState>({
	theme: lightTheme,
  isDarkMode: false,
  toggleTheme: null,
});

//export const ThemeConsumer = ThemeContext.Consumer;
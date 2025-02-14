import { writable } from 'svelte/store';

export const themeStore = writable<string>('light');

export function setThemeStore(themeType: string) {
	const theme = ['dark', 'light'].indexOf(themeType) > -1 ? themeType : 'light';
	themeStore.set(theme);
}

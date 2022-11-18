import { ThemeProvider } from 'styled-components';
import { PropsWithChildren } from 'react';

//Creating a custom theme to my app
const theme = {
	colors: {
		primary: '#252424',
		secondary: '#FFFFFF',
		red: '#D65050',
		green: '#04B404'
	},
	gradient: {
		black_white: 'linear-gradient(90deg, #232121 0%, #252424 0.01%, #5B5B5B 100%)'
	},

	font: {
		family: {
			primary: 'IBM Plex Mono',
			secondary: 'Source Sans Pro',
		},
		type: {
			spaced_font: '0.1em',
		},
		sizes:{
			mobile: {
				xx_large: '40px',
				x_large: '30px',
				large: '25px',
				medium: '20px',
				small: '15px',
				x_small: '10px',
			},
		}

	},

};

//Creating a new component with ThemeProvider that includes all children components
const Theme: React.FC<PropsWithChildren> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export {
	Theme, 
	theme
};
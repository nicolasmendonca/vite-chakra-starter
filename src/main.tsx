import { render } from 'preact';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Router from 'preact-router';

import { App } from './app';
import theme from './styles/theme';

render(
	<>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<ChakraProvider theme={theme}>
			<Router>
				{/* @ts-ignore */}
				<App path="/asd" />
			</Router>
		</ChakraProvider>
	</>,
	document.getElementById('app')!
);

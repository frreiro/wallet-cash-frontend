import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import { Theme } from '../styles/Theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TokenProvider } from '../context/TokenContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<GlobalStyles/>
			<TokenProvider>
				<Component {...pageProps} />
				<ToastContainer
					pauseOnFocusLoss={false}
					pauseOnHover={false}
					theme="dark"
				/>
			</TokenProvider>
		</Theme>
	);
}

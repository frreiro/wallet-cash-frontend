import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import { Theme } from '../styles/Theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<GlobalStyles/>
			<Component {...pageProps} />
			<ToastContainer
				pauseOnFocusLoss={false}
				pauseOnHover={false}
				theme="dark"
			/>
		</Theme>
	);
}

import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import { Theme } from '../styles/Theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<GlobalStyles/>
			<AuthProvider>
				<Component {...pageProps} />
				<ToastContainer
					pauseOnFocusLoss={false}
					pauseOnHover={false}
					theme="dark"
				/>
			</AuthProvider>
		</Theme>
	);
}

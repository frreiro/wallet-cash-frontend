import { BannerBalance, BannerBalanceContainer } from '../styles/wallet/balance';
import { cashParser } from '../utils/cashParser';
import { Banner3D } from './banner3D';

const Balance: React.FC<{balance: number}> = ({balance}) => {
	return (
		<BannerBalanceContainer>
			<Banner3D bannerTheme='dark'>
				<BannerBalance>
					<p>balance:</p>
					<h1><span>R$</span>{cashParser(balance)}</h1>
				</BannerBalance>
			</Banner3D>
		</BannerBalanceContainer>
	);
};

export{
	Balance
};
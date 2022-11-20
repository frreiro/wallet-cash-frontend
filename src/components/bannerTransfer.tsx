import { BannerNewTransaferContainer, BannerTransfer, HolderInput } from '../styles/transfer/newTransfer';
import { Banner3D } from './banner3D';

const NewTransfer: React.FC = () => {
	return (
		<BannerNewTransaferContainer>
			<Banner3D bannerTheme='dark'>
				<BannerTransfer>
					<form>
						<h1>username</h1>
						<HolderInput content={'@'}>
							<input type="text" placeholder='user'/>
						</HolderInput>
						<h1>value</h1>
						<HolderInput content={'R$'}>
							<input type='text' placeholder='100,00'/>
						</HolderInput>
						<div className='div_button'>
							<button>transfer</button>
						</div>
					</form>
				</BannerTransfer>
			</Banner3D>
		</BannerNewTransaferContainer>
	);
};

export {
	NewTransfer
};
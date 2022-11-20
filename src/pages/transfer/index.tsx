import { NewTransfer } from '../../components/bannerTransfer';
import { TransferContainer, TransferTitle } from '../../styles/transfer/transfer';

export default function Transafer() {
	return (
		<TransferContainer>
			<TransferTitle>new transfer</TransferTitle>
			<div className='divider'>
				<NewTransfer/>

			</div>

		</TransferContainer>
	);
}
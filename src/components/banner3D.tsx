import React  from 'react';
import { BannerProps, IBanner3DProps } from '../interfaces/Styles/IBanner3Props';
import { DownBanner, UpBanner } from '../styles/utils/banner3D';



const Banner3D: React.FC<BannerProps> = (props) => {
	return (
		<UpBanner bannerTheme={props.bannerTheme}>
			{props.children}
			<DownBanner/>
		</UpBanner>
	);

};

export {
	Banner3D
};
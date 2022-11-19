import React, { PropsWithChildren, ReactNode } from 'react';
import { IBanner3DProps } from '../interfaces/Styles/IBanner3Props';
import { DownBanner, UpBanner } from '../styles/utils/banner3D';

interface BannerProps extends PropsWithChildren {
	children: ReactNode
	bannerTheme: IBanner3DProps['bannerTheme']
}

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
import { PropsWithChildren, ReactNode } from 'react';

export interface IBanner3DProps{
	bannerTheme: 'dark' | 'light'
}

export interface BannerProps extends PropsWithChildren {
	children: ReactNode
	bannerTheme: IBanner3DProps['bannerTheme']
}
import '@/app/global.css';

import { NextUIProvider } from '@nextui-org/react';

import type { ReactNode } from 'react';
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</head>
			<body>
				<NextUIProvider>
					<div className='h-screen bg-[#FFEAAE]'>{children}</div>
				</NextUIProvider>
			</body>
		</html>
	);
}

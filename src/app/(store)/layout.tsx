import React, { ReactNode } from "react";
import { Header } from "../../components/header";

const StoreLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="mx-auto min-h-screen grid w-full max-w-[1600px] grid-rows-app gap-5 p-8">
			<Header />
			{children}
		</div>
	);
};

export default StoreLayout;
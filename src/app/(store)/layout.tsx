import React, { ReactNode } from "react";
import { Header } from "../components/header";

const StoreLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default StoreLayout;

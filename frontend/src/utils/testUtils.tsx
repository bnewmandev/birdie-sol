import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import { Provider as ReduxProvider } from "react-redux";

import store from "../redux/store";

const allProviders: FC = ({ children }: any) => {
	return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
	return render(ui, { wrapper: allProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render };

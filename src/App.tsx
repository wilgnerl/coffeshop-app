import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ShoppingCartContextProvider } from "./contexts/CartContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {

	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<ShoppingCartContextProvider>
					<Router />
				</ShoppingCartContextProvider>
				
				<GlobalStyle />
			</BrowserRouter>
			
		</ThemeProvider>
	);
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ChakraProvider } from "@chakra-ui/react";
import { config } from "./wagmi";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";
const queryClient = new QueryClient();
import theme from "./theme.js";
import { ColorModeScript } from "@chakra-ui/react";
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };

// const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
    <ChakraProvider theme={theme}>
      <AnonAadhaarProvider _useTestAadhaar={true}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <App />
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </AnonAadhaarProvider>
    </ChakraProvider>
  </React.StrictMode>
);

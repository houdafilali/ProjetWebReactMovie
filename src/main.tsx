import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./AppRouter";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

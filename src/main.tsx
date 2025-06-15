import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@/contexts/ThemeContext";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <TooltipProvider>
                <Toaster/>
                <Sonner/>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </TooltipProvider>
        </ThemeProvider>
    </QueryClientProvider>
);

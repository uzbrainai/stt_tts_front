
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/Layout";
import DashboardLayout from "@/components/DashboardLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import News from "./pages/News";
import Articles from "./pages/Articles";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import STTBot from "./pages/dashboard/STTBot";
import TTSBot from "./pages/dashboard/TTSBot";
import WatermarkingBot from "./pages/dashboard/WatermarkingBot";
import AuthenticationBot from "./pages/dashboard/AuthenticationBot";
import DeveloperAPI from "./pages/dashboard/DeveloperAPI";
import Account from "./pages/dashboard/Account";
import Billing from "./pages/dashboard/Billing";
import Settings from "./pages/dashboard/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Auth routes without layout */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Dashboard routes with dashboard layout */}
            <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
            <Route path="/dashboard/stt" element={<DashboardLayout><STTBot /></DashboardLayout>} />
            <Route path="/dashboard/tts" element={<DashboardLayout><TTSBot /></DashboardLayout>} />
            <Route path="/dashboard/watermarking" element={<DashboardLayout><WatermarkingBot /></DashboardLayout>} />
            <Route path="/dashboard/authentication" element={<DashboardLayout><AuthenticationBot /></DashboardLayout>} />
            <Route path="/dashboard/api" element={<DashboardLayout><DeveloperAPI /></DashboardLayout>} />
            <Route path="/dashboard/account" element={<DashboardLayout><Account /></DashboardLayout>} />
            <Route path="/dashboard/billing" element={<DashboardLayout><Billing /></DashboardLayout>} />
            <Route path="/dashboard/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
            
            {/* Main routes with layout */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/products" element={<Layout><Products /></Layout>} />
            <Route path="/services" element={<Layout><Services /></Layout>} />
            <Route path="/news" element={<Layout><News /></Layout>} />
            <Route path="/articles" element={<Layout><Articles /></Layout>} />
            <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
            <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

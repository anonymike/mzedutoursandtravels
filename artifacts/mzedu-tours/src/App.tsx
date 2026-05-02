import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import BlogPage from "@/pages/blog";
import GalleryPage from "@/pages/gallery";
import PrivacyPolicy from "@/pages/privacy-policy";
import CookiePolicy from "@/pages/cookie-policy";
import TermsOfService from "@/pages/terms-of-service";
import LoginPage from "@/pages/login";
import SignUpPage from "@/pages/signup";
import AdminBlogPage from "@/pages/admin-blog";
import NotFound from "@/pages/not-found-page";

import AmboseliPage from "@/pages/packages/amboseli-safari-experience/page";
import ArabukuPage from "@/pages/packages/arabuko-sokoke-forest/page";
import CoastlineRoadTripPage from "@/pages/packages/coastline-road-trip/page";
import CustomCoastalPage from "@/pages/packages/custom-coastal-package/page";
import CustomTripPage from "@/pages/packages/custom-trip-package/page";
import FortJesusPage from "@/pages/packages/fort-jesus/page";
import HallerParkPage from "@/pages/packages/haller-park/page";
import MombasaMarineParkPage from "@/pages/packages/mombasa-marine-park/page";
import MzimaspringsPage from "@/pages/packages/mzima-springs/page";
import NairobiParkPage from "@/pages/packages/nairobi-national-park-tour/page";
import ShimbaHillsPage from "@/pages/packages/shimba-hills-reserve/page";
import TsavoGameDrivePage from "@/pages/packages/tsavo-game-drive/page";
import TsavoNationalParkPage from "@/pages/packages/tsavo-national-park/page";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/signup" component={SignUpPage} />
      <Route path="/admin/blog" component={AdminBlogPage} />
      <Route path="/packages/amboseli-safari-experience" component={AmboseliPage} />
      <Route path="/packages/arabuko-sokoke-forest" component={ArabukuPage} />
      <Route path="/packages/coastline-road-trip" component={CoastlineRoadTripPage} />
      <Route path="/packages/custom-coastal-package" component={CustomCoastalPage} />
      <Route path="/packages/custom-trip-package" component={CustomTripPage} />
      <Route path="/packages/fort-jesus" component={FortJesusPage} />
      <Route path="/packages/haller-park" component={HallerParkPage} />
      <Route path="/packages/mombasa-marine-park" component={MombasaMarineParkPage} />
      <Route path="/packages/mzima-springs" component={MzimaspringsPage} />
      <Route path="/packages/nairobi-national-park-tour" component={NairobiParkPage} />
      <Route path="/packages/shimba-hills-reserve" component={ShimbaHillsPage} />
      <Route path="/packages/tsavo-game-drive" component={TsavoGameDrivePage} />
      <Route path="/packages/tsavo-national-park" component={TsavoNationalParkPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

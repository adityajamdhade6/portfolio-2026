import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ignore modal routes (e.g. /ground/:id) so we don't reset the grid scroll position when opening a case study
    if (pathname.startsWith('/ground/') && pathname.split('/').length > 2) {
      return;
    }
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

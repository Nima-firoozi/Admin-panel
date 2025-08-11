import CustomThemeProvider from "../store/ThemeContex";
import ToggleDrawerProvider from "../store/ToggleDrawerContex";
import Page from "../page";
export default function RootLayout({ children }) {
  return (
    <CustomThemeProvider>
      <ToggleDrawerProvider>{children}</ToggleDrawerProvider>
    </CustomThemeProvider>
  );
}

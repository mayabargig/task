import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import styles from "~/tailwind.css?url";
import { ThemeProvider } from "./context/Theme";
import ThemeManager from "./context/GlobalThem";
import NavBar from "./components/NavBar";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Layout({ children }: { children: React.ReactNode }) {
  const { lightTheme, darkTheme, themeMode } = ThemeManager();
  const error = useRouteError();
  if (error) {
    console.error(error);
  }

  const location = useLocation();

  return (
    <html lang="en" className="">
      <head className="">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="container mx-auto">
        <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
          <NavBar/>
          {children}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
      <Outlet />
  );
}

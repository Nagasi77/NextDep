import "../styles/globals.css";
import AppShell from "../components/layouts/Appshell/";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppShell>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"
          strategy="afterInteractive"
        />
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
}
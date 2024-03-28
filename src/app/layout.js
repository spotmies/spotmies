import "./globals.css";
import config from "react-reveal/globals";

config({ ssrFadeout: true });

export const metadata = {
  title: "Spotmies",
  description: "Leading IT Services Provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

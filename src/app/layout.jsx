import "../styles/variables.css";
import "../styles/base.css";
import "../styles/nav.css";
import "../styles/hero.css";
import "../styles/changelog.css";
import "../styles/about.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "../styles/cmdk.css";
import "../styles/responsive.css";

import ClientLayout from "./ClientLayout";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Muhammad Issa - Portfolio",
  description: "Backend-leaning full-stack developer based in Karachi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}

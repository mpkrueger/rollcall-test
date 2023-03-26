import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "@headlessui/react/dist/index.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

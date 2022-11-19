export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <nav>I am a nav bar</nav>
        {children}
      </body>
    </html>
  );
}

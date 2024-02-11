const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center h-screen items-center w-full bg-primary-50 bg-dotted-pattern bg-center bg-fixed bg-cover">
      {children}
    </div>
  );
};

export default Layout;

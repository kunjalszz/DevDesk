import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <>
      <Navbar />

      <div>
        <Sidebar />

        <main>{children}</main>
      </div>
    </>
  );
}

export default AppLayout;
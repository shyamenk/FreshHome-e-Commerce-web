import SideBar from "./SideBar";

interface IProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: IProps) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="w-full px-4 ">{children}</main>
    </div>
  );
};

export default AdminLayout;

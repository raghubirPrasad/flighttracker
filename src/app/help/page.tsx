import { HelpPage } from "@/components/help/help-page";
import { Sidebar } from "@/components/layout/sidebar";
import { HelpHeader } from "@/components/layout/help-header";

export default function Help() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <HelpHeader />
        <HelpPage />
      </div>
    </div>
  );
}

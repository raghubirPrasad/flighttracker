import { UserProfile } from "./user-profile";

export function MaintenanceHeader() {
  return (
    <div className="bg-white/95 backdrop-blur-sm px-6 py-8 border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schedule Maintenance</h1>
          <p className="text-gray-600 text-sm mt-2">Review your bookmarked flights and schedule maintenance based on your operational needs and aircraft availability.</p>
        </div>
        <UserProfile />
      </div>
    </div>
  );
}


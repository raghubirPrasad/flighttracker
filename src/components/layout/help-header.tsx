import { UserProfile } from "./user-profile";

export function HelpHeader() {
  return (
    <div className="bg-white px-6 py-8 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Help</h1>
          <p className="text-gray-600 text-sm mt-1">Comprehensive help center and support resources</p>
        </div>
        <UserProfile />
      </div>
    </div>
  );
}




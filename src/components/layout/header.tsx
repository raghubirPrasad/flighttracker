import { UserProfile } from "./user-profile";

export function Header() {
  return (
    <div className="bg-white/95 backdrop-blur-sm px-6 py-8 border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 text-sm mt-2">Welcome back, get a quick overview of your fleet.</p>
        </div>
        <UserProfile />
      </div>
    </div>
  );
}

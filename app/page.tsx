import { Navigation } from "./UI/components/navigation";
import { UserProfileCard } from "./UI/components/user-profile-card";
import UserProfileTabs from "./UI/components/user-profile-tabs";

export default function Home() {
  return (
    <div>
      <Navigation />
      <UserProfileTabs />
      
    </div>
  );
}

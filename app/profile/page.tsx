import { Navigation } from "../UI/components/navigation";
import UserProfileHeader from "../UI/components/user-profile-header";
import VideoCardTabs from "../UI/components/video-card-tabs";

export default function Page() {
  return (
    <div>
      <Navigation />
      <UserProfileHeader />
      <VideoCardTabs />
    </div>
  );
}

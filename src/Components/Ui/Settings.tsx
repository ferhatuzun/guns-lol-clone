
import { ProfileImagesSettings } from "./ProfileImagesSettings";
import { SocialMediaSettings } from "./SocialMediaSettings";

export const Settings = () => {
 
  return (
    <div className="flex items-start">
        <SocialMediaSettings/>
        <ProfileImagesSettings/>
    </div>
  );
};

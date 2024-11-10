import axios from "axios";
import { db } from "../App";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/x.png";
import youtube from "../assets/images/youtube.png";
import twitch from "../assets/images/twitch.png";
import kick from "../assets/images/kick.avif";
import discord from "../assets/images/discord.png";
import linkedIn from "../assets/images/linkedin.png";

type userDataType = {
  id: string;
  email: string;
  username: string;
  socialMedia: {
    instagram: string;
    x: string;
    youtube: string;
    twitch: string;
    kick: string;
    discord: string;
    linkedIn: string;
  };
  profileImage: string;
  profileBanner: string;
};

export const UserPanel = () => {
  const [userData, setUserData] = useState<userDataType>({} as userDataType);
  const navigate = useNavigate();

  const location = useLocation();
  const username = location.pathname.substring(1, location.pathname.length);
  const getData = async () => {
    const response = await axios.get(db + "userPanels");
    setUserData(
      response.data.find((item: userDataType) => item.username == username)
    );
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {userData ? (
        <div className="relative h-[100vh] w-full flex flex-col items-center justify-center">
          <img src={userData?.profileBanner} className="w-full h-full" />

          <div className="bg-opacity-70 bg-gray-800 w-[500px] h-[350px] absolute flex flex-col items-center rounded-xl">
            <div className="mt-8">
              <img
                src={userData.profileImage ? userData.profileImage : ""}
                className="rounded-full w-[100px]"
              />
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold mt-2">
                {userData.username}
              </h1>
            </div>
            <div className="flex gap-2 mt-auto mb-10">
              {userData?.socialMedia?.instagram && (
                <a
                  href={
                    "https://www.instagram.com/" +
                    userData.socialMedia.instagram
                  }
                  target="_blank"
                >
                  <img src={instagram} className="w-10" />
                </a>
              )}
              {userData?.socialMedia?.x && (
                <a
                  href={"https://www.x.com/" + userData.socialMedia.x}
                  target="_blank"
                >
                  <img src={twitter} className="w-10" />
                </a>
              )}
              {userData?.socialMedia?.youtube && (
                <a
                  href={
                    "https://www.youtube.com/" + userData.socialMedia.youtube
                  }
                  target="_blank"
                >
                  <img src={youtube} className="w-10" />
                </a>
              )}
              {userData?.socialMedia?.twitch && (
                <a
                  href={"https://www.twitch.com/" + userData.socialMedia.twitch}
                  target="_blank"
                >
                  <img src={twitch} className="w-10" />
                </a>
              )}
              {userData?.socialMedia?.kick && (
                <a
                  href={"https://www.kick.com/" + userData.socialMedia.kick}
                  target="_blank"
                >
                  <img src={kick} className="w-10" />
                </a>
              )}
              {userData?.socialMedia?.discord && (
                <a
                  href={
                    "https://www.discord.com/" + userData.socialMedia.discord
                  }
                  target="_blank"
                >
                  <img src={discord} className="w-10" />
                </a>
              )}
              {userData?.socialMedia?.linkedIn && (
                <a
                  href={
                    "https://www.linkedin.com/" + userData.socialMedia.linkedIn
                  }
                  target="_blank"
                >
                  <img src={linkedIn} className="w-10" />
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-red-600 text-lg p-4">
            Kullanıcı bulunamadı. Anasayfaya yönlendiriliyorsunuz...
          </h1>
          {setTimeout(() => {
            navigate("/")
          }, 2000)}
        </div>
      )}
    </>
  );
};

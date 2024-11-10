import { useFormik } from "formik";
import axios from "axios";
import { db } from "../../App";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userSliceType } from "../../Store/userSlice";

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

export const SocialMediaSettings = () => {
  const { email } = useSelector((store: { user: userSliceType }) => store.user);

  const [userData, setUserData] = useState<userDataType>({} as userDataType);
  const getData = async () => {
    const response = await axios.get(db + "userPanels");
    setUserData(
      response.data.find((item: userDataType) => item.email == email)
    );
  };
  const onSubmit = async () => {
    axios.put(db + "userPanels/" + userData.id, {
      id: userData.id,
      email: userData.email,
      username: userData.username,
      socialMedia: {
        instagram: values.instagram,
        x: values.x,
        youtube: values.youtube,
        twitch: values.twitch,
        kick: values.kick,
        discord: values.discord,
        linkedIn: values.linkedIn,
      },
      profileImage: userData.profileImage,
      profileBanner: userData.profileBanner,
    });
    location.reload();
  };
  const { values, handleSubmit, handleChange, setValues } = useFormik({
    initialValues: {
      instagram: "",
      x: "",
      youtube: "",
      twitch: "",
      kick: "",
      discord: "",
      linkedIn: "",
    },
    onSubmit,
  });
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (userData) {
      setValues({
        instagram: userData?.socialMedia?.instagram || "",
        x: userData?.socialMedia?.x || "",
        youtube: userData?.socialMedia?.youtube || "",
        twitch: userData?.socialMedia?.twitch || "",
        kick: userData?.socialMedia?.kick || "",
        discord: userData?.socialMedia?.discord || "",
        linkedIn: userData?.socialMedia?.linkedIn || ""
      });
    }
  }, [userData, setValues]);
  return (
    <div className="flex items-start">
      <div className=" bg-purple-700 p-10 rounded-lg m-5">
        <p className="text-2xl font-bold mb-5 text-white">Sosyal Medya</p>
        <form onSubmit={handleSubmit}>
          <p className="text-white font-medium"> İnstagram</p>
          <input
            type="text"
            name="instagram"
            placeholder="Kullanıcı adınız"
            className="w-full p-1 border-none rounded-md my-1"
            value={values.instagram}
            onChange={handleChange}
          />
          <p className="text-white font-medium">X</p>
          <input
            type="text"
            name="x"
            placeholder="Kullanıcı adınız"
            className="w-full p-1 border-none rounded-md my-1"
            value={values.x}
            onChange={handleChange}
          />
          <p className="text-white font-medium">Youtube</p>
          <input
            type="text"
            name="youtube"
            placeholder="Kullanıcı adınız"
            className="w-full p-1 border-none rounded-md my-1"
            value={values.youtube}
            onChange={handleChange}
          />
          <p className="text-white font-medium">Twitch</p>
          <input
            type="text"
            name="twitch"
            placeholder="Kullanıcı adınız"
            className="w-full p-1 border-none rounded-md my-1"
            value={values.twitch}
            onChange={handleChange}
          />
          <p className="text-white font-medium">Kick</p>
          <input
            type="text"
            name="kick"
            placeholder="Kullanıcı adınız"
            className="w-full p-1 border-none rounded-md my-1"
            value={values.kick}
            onChange={handleChange}
          />
          <p className="text-white font-medium">Discord</p>
          <input
            type="text"
            name="discord"
            placeholder="Kullanıcı adınız"
            className="w-full p-1 border-none rounded-md my-1"
            value={values.discord}
            onChange={handleChange}
          />
          <p className="text-white font-medium">LinkedIn</p>
          <input
            type="text"
            name="linkedIn"
            placeholder="Kullanıcı adınız"
            className="w-full p-1 border-none rounded-md my-1"
            value={values.linkedIn}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-purple-900 w-full p-3 rounded-md my-4 text-white"
          >
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
};

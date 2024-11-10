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

export const ProfileImagesSettings = () => {
  const { email } = useSelector((store: { user: userSliceType }) => store.user);

  const [userData, setUserData] = useState<userDataType>({} as userDataType);
  const getData = async () => {
    const response = await axios.get(db + "userPanels");
    setUserData(
      response.data.find((item: userDataType) => item.email == email)
    );
  };
  useEffect(() => {
    getData();
  }, []);
  const onSubmit = async () => {
    axios.put(db + "userPanels/" + userData?.id, {
      id: userData.id,
      email: userData.email,
      username: userData.username,
      socialMedia: {
        instagram: userData.socialMedia.instagram,
        x: userData.socialMedia.x,
        youtube: userData.socialMedia.youtube,
        twitch: userData.socialMedia.twitch,
        kick: userData.socialMedia.kick,
        discord: userData.socialMedia.discord,
        linkedIn: userData.socialMedia.linkedIn,
      },
      profileImage: values.profileImage,
      profileBanner: values.profileBanner,
    });
    location.reload();
  };
  const { values, handleSubmit, handleChange, setValues } = useFormik({
    initialValues: {
      profileImage: "",
      profileBanner: "",
    },
    onSubmit,
  });
  useEffect(() => {
    if (userData) {
      setValues({
        profileImage: userData?.profileImage || "",
        profileBanner: userData?.profileBanner || "",
      });
    }
  },[userData,setValues]);
  return (
    <div className=" bg-purple-700 p-10 rounded-lg m-5">
      <p className="text-2xl font-bold mb-5 text-white">Profil Görselleri</p>
      <form onSubmit={handleSubmit}>
        <p className="text-white font-medium">Profil Resmi</p>
        <input
          type="text"
          name="profileImage"
          placeholder="Url giriniz"
          className="w-full p-1 border-none rounded-md my-1"
          value={values.profileImage}
          onChange={handleChange}
        />
        <p className="text-white font-medium">Banner Resmi</p>
        <input
          type="text"
          name="profileBanner"
          placeholder="Url giriniz"
          className="w-full p-1 border-none rounded-md my-1"
          value={values.profileBanner}
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
  );
};

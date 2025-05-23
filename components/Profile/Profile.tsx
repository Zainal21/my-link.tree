import { Animate } from "../Animate";
import { Button } from "../Button";

const profile = {
  fullname: "Muhamad Zainal Arifin",
  bio: "Hi, I'm Muhammad Zain 👋, a Software Engineer and DevOps Specialist based in Surakarta, working remotely.",
  picture: "https://avatars.githubusercontent.com/u/48118434?v=4",
  socialMedia: [
    { name: "Visit my portfolio 🍳", url: "https://muhamadzain.me" },
    { name: "Contact Me On Email", url: "mailto:muhamadzaindev@gmail.com" },
    {
      name: "Contact Me On WhatsApp",
      url: "https://wa.me/6288216756214",
    },
    {
      name: "Contact Me On Telegram",
      url: "https://t.me/+6288216756214",
    },
    {
      name: "Contact Me On Instagram",
      url: "https://instagram.com/muhammadzain.ariefin",
    },
    { name: "Visit my github 🤓", url: "https://github.com/Zainal21" },
  ],
};

export const Profile = () => {
  return (
    <Animate>
      <section className="profile">
        <div className="m-auto w-full sm:w-[300px]">
          <div className="mb-5">
            <div className="profile-picture">
              <img src={profile.picture} alt={profile.fullname}></img>
            </div>
            <h1 className="profile-fullname">{profile.fullname}</h1>
          </div>

          <h1 className="profile-about">About</h1>
          <div className="profile-bio text-left">{profile.bio}</div>
          <div className="social_media flex flex-col">
            {profile.socialMedia.map((item, index) => (
              <Button
                name={item.name}
                url={item.url}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </Animate>
  );
};

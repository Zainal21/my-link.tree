import { Button } from "../Button";

const profile = {
  fullname: "Muhamad Zainal Arifin",
  bio: "Hey! I'm Zain, a Software Enginner and Tech Enthusiat based in Jakarta. 👋",
  picture: "https://avatars.githubusercontent.com/u/48118434?v=4",
  socialMedia: [
    { name: "Visit my portfolio 🍳", url: "https://muhammadzain.site/" },
    { name: "Contact Me On Email", url: "mailto:muhamadzaindev@gmail.com" },
    {
      name: "Contact Me On WhatsApp",
      url: "https://api.whatsapp.com/send?phone=+6288216756214",
    },
    {
      name: "Contact Me On Instagram",
      url: "https://instagram.com/Muhamadzain.tsx",
    },
    { name: "Visit my github 🤓", url: "https://github.com/Zainal21" },
  ],
};

export const Profile = () => {
  return (
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
            <Button name={item.name} url={item.url} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

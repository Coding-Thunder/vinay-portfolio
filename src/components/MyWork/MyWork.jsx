import React from "react";
import PageLabel from "../PageLabel/PageLabel";
import WorkCard from "../WorkCard/WorkCard";
import { SiZomato } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";
import { RiNetflixFill } from "react-icons/ri";
import { ImAmazon } from "react-icons/im";
import BookMyShow from "../../assets/images/book-my-show.png";
const MyWork = () => {
  return (
    <div>
      <PageLabel text1="Check out" text2="my work" />

      <div className="flex  justify-center  flex-wrap ">
        <WorkCard
          upWards={20}
          ColorClass={"bg-zomato"}
          text="This is a static zomato ui clone purily built with html css and
        javascript "
          link={"https://zomato-clone-weld.vercel.app/"}
        >
          <SiZomato className="text-white text-9xl " />
        </WorkCard>
        <WorkCard
          hover={40}
          ColorClass={"bg-white"}
          text={`Book my show clone made by me, I'd used here is primarily React for styling I'd used Tailwind CSS for fetching movies i'd used TMDB Api and for payments I'd used Razor Pay`}
          link={"https://book-my-show-clone-blond.vercel.app/"}
        >
          <img src={BookMyShow} className="w-24" alt="boo my show logo" />
        </WorkCard>
      </div>

      <div className="flex  mb-32  justify-center flex-wrap ">
        <WorkCard
          upWards={16}
          hover={44}
          ColorClass={"bg-linkedin"}
          text="This Replica of Linkedin made with react js and styled with my custom written css and material ui, I used firebase to authenticate users on this build and it was pretty fun working with this"
          link={"https://coding-thunder.github.io/Linked-In-Clone-React-/"}
        >
          <ImLinkedin2 className="text-linkedin p-2 rounded  bg-white text-8xl " />
        </WorkCard>
        <WorkCard
          hover={44}
          upWards={28}
          ColorClass={"bg-netflix"}
          text={`This Replica on Netflix made with react js and styled with my custom written css and material ui, I used firebase to authenticate users on this build and it was pretty fun working with this  `}
          link={"https://coding-thunder.github.io/NewNetflixClone/"}
        >
          <RiNetflixFill className="text-white text-8xl " />
        </WorkCard>
        <WorkCard
          hover={40}
          upWards={0}
          ColorClass={"bg-amazon"}
          text={`This is a Amazon Clone made with react and backed with firebase authentication and stripe.js for handling payments this is another one of my resume projects`}
          link={"https://coding-thunder.github.io/AmazonClone/"}
        >
          <ImAmazon className="text-8xl " />
        </WorkCard>
      </div>
    </div>
  );
};

export default MyWork;

import { forwardRef } from "react";
import PageLayout from "../PageLayout";

const PageOne = forwardRef((_, ref) => {
  return (
    <PageLayout ref={ref} title="Cover Letter" pageNumber={1}>
      <div className="flex flex-col gap-2 text-sm p-1">
        <p>Hiring Manager / Fellow Gamer,</p>
        <p>
          I am excited to apply for a position at Lost Ark Videogames. With a
          background in web development, design, video editing, and tournament
          organizing, along with years of customer service experience, I bring
          both technical skill and a lifelong passion for retro games and media.
          I’m eager to contribute wherever needed — from assisting customers to
          supporting the arcade and maintaining the store.
        </p>
        <p>
          I recently graduated from FullStack Academy with a Full-Stack
          Development certificate, where I learned to take projects from concept
          to completion through design, clean code, and teamwork. Previously, I
          built a track record of reliability at EB Games, Journey’s Sneakers,
          the restaurant industry, and over a decade in IT (including
          management). These roles sharpened my adaptability, communication, and
          problem-solving skills.
        </p>
        <p>
          Pursuing a role at Lost Ark feels like the perfect opportunity to
          combine my professional experience with my love of retro culture.
          Beyond my career, I’ve built a collection of 500+ VHS tapes and remain
          deeply engaged with gaming history — appreciation I’d bring to every
          customer interaction.
        </p>
        <p>
          Thank you for your time and consideration. I look forward to the
          chance to contribute.
        </p>

        <p className="text-base">
          Sincerly, <br /> Nick Vila
        </p>
      </div>
      <img
        src="src\assets\seal.svg"
        alt="Nicks seal of approval"
        className="size-50 absolute left-80
      top-102 rotate-340"
      />
    </PageLayout>
  );
});

export default PageOne;

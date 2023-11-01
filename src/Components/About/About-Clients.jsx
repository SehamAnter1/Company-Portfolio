import React from "react";
import Whyusreusable from "../Design/Why-Us-Reusable";

function AboutClients() {
  const boxes = [
    {
      title: "Toyota",
      content:
        "Working with one of the biggest automobile brands was a pure pleasure. The branding project with promo materials was dedicated to the start of sales of the new Land Cruiser 300. And this was just the beginning.",
    },
    {
      title: "RedBull",
      content:
        "We worked with their in-house team to bring new fresh ideas into one of the company’s digital products. It was extremely fun, interesting and the team got their wings, permanently.",
    },
    {
      title: "McDonald’s",
      content:
        "With McDonald’s marketing team we were focused on the creation of beautifully illustrated marketing assets for their digital game and make everyone happier. We loved it so much.",
    },
    {
      title: "Wanchain",
      content:
        "The decentralized financial world is growing rapidly and it will change everything. We liked the challenges Wanchain has in their mind and what they want to achieve. Everything in our chords.",
    },
    {
      title: "Short.io",
      content:
        "We work closely with the CEO and marketing teams at Short.io on core design initiatives, including a new Short.io website. Now we have become long-term partners for their ongoing projects.",
    },
    {
      title: "Podcorn",
      content:
        "We helped a Podcorn startup, our long-term partner, to reimagine their core website 2 times. Their marketplace help connects podcasters to brands for native sponsorships. Now they have become a part of Entercom.",
    },
    {
      title: "Stark Bank",
      content:
        "We are working with co-founders and their teams for several years on multiple major initiatives to help reshape their brand and product. Reveal the essence of the first banking API in Brazil is excited.",
    },
    {
      title: "Satsback",
      content:
        "Bring the evolution of cashback and loyalty rewards using Bitcoin is ambitious. We came to help with the design and development of Satsback’s key initiatives across their product ecosystem.",
    },
    {
      title: "Bonsai",
      content:
        "For an ambitious Bonsai, a SaaS product created to automate freelance work, we've designed a minimalist and trendy website that helps freelancers with accounting, client management, and more.",
    },
  ];

  return (
    <>
      <div id="clients">
        <Whyusreusable
          data={boxes}
          className={"Whatisoursecret about-clients pt-5"}
          title="We like our clients"
        />
      </div>
    </>
  );
}

export default AboutClients;

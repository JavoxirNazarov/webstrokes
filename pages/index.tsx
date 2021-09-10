import type { NextPage } from "next";
import EmptyLayout from "../components/layouts/EmptyLayout";
import Banner from "../components/pages/home/Banner";
import BigBlock from "../components/pages/home/BigBlock";
import Companion from "../components/pages/home/Companion";
import Specific from "../components/pages/home/Specific";

const Home: NextPage = () => {
  return (
    <EmptyLayout title="Home">
      <Banner />
      <Companion />
      <Specific />
      <BigBlock
        backgroundColor="#F4F4F4"
        title="Create own flashcards"
        titleColor="#1B1B1E"
        btnArr={[
          { btnText: "Create flashcard", link: "" },
          { btnText: "More", link: "" },
        ]}
      />
      <BigBlock
        title="Learn with study packs"
        titleColor="#1B1B1E"
        btnArr={[{ btnText: "Create study pack", link: "" }]}
      />
      <BigBlock
        backgroundColor="#000000"
        title="Ready to get studying with Study Prep?"
        titleColor="#FFFFFF"
        witBody={false}
        btnArr={[
          { btnText: "Discover materials", link: "" },
          { btnText: "Get studying", link: "" },
        ]}
      />
    </EmptyLayout>
  );
};

export default Home;

//  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
// import Image from 'next/image'

import { useCallback, useState, useEffect, type SetStateAction, type Dispatch } from "react";
import LandingCard from "../../../components/home/LandingCard";
import explain from "../../../assets/home/explain-min.jpg";
import typing from "../../../assets/home/typing-2.jpg";
import pen from "../../../assets/home/pen.jpg";
import { BsArrowRight } from "react-icons/bs";
import landing from "../../../assets/home/draft2.png";
import {
  setEnableDebug,
  WebChatCustomElement,
  WebChatContainer,
  type WebChatConfig,
  type WebChatInstance,
} from "@ibm-watson/assistant-web-chat-react";

const webChatOptions = {
  integrationID: "6ba53abf-c108-44d7-8554-953fe978b02e",
  region: "au-syd",
  serviceInstanceID: "4103320b-c436-4cec-afe0-f061e762bf17",
  // subscriptionID: 'only on enterprise plans',
  // Note that there is no onLoad property here. The WebChatContainer component will override it.
  // Use the onBeforeRender or onAfterRender prop instead.
} as WebChatConfig;

// Include this if you want to get debugging information from this library. Note this is different than
// the web chat "debug: true" configuration option which enables debugging within web chat.
setEnableDebug(true);

const onAfterRender = (
  instance: WebChatInstance,
  setInstance: Dispatch<SetStateAction<WebChatInstance | null>>
) => {
  // Make the instance available to the React components.
  setInstance(instance);
  instance.toggleOpen();

  return Promise.resolve(); // Return a Promise<void>

};

// sm:h-[550px]
const Landing = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [instance, setInstance] = useState<WebChatInstance | null>(null);

  const toggleWebChat: () => void = useCallback(() => {
    if (instance) { 
      instance.toggleOpen();
    }
  }, [instance]);


  const LandingCardData = [
    {
      cardTitle: "Summary",
      cardBody:
        "Get a summarized version of the topics in your country's Data Protection Act",
      buttonText: "Try Summarizer",
      // image: "https://source.unsplash.com/random/400x400",
      image: pen,
      link: "#data-law-summarizer",
    },
    {
      cardTitle: "Q&A Assitant",
      cardBody: "Ask us any information regarding the Data Protection Act",
      buttonText: "Try Q&A",
      image: typing,
      link: "#data-law-questions",
      instance,
      toggleWebChat,
    },
    {
      cardTitle: "Compliance Issues",
      cardBody: "Learn about the major compliance issues in Data Protection",
      buttonText: "View All",
      image: explain,
      link: "/compliance-issues",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <>
      <div
        className="relative w-full h-[35rem] sm:h-[50rem] mx-auto flex items-start pt-20 sm:pt-24 px-4 custom-bg"
        style={{
          // background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${landing})`,
          background: `url(${landing})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          id="data-law-questions"
          className="text-black space-y-4 max-w-screen-2xl lg:ml-20 md:ml-32 flex flex-col md:flex-row justify-between mx-auto w-full items-center"
        >
          <div className="w-full space-y-4">
            <h1 className="text-5xl sm:text-6xl font-serif">
              Your Data<br />
               Law Companion
            </h1>
            <h2 className="text-xl font-medium landing-text uppercase">
              Stay informed, stay compliant
            </h2>
            {/* <button className="py-2 px-6 rounded-md border border-neutral-orange transparent-bg w-48">
              Data Protection Summarizer
            </button> */}
            {instance && (
              <button
                type="button"
                className="uppercase flex items-center font-semibold text-white bg-neutral-red hover:border-neutral-red hover:border hover:text-neutral-red hover:bg-neutral-red/30 border py-3 px-8 w-full sm:w-64 focus:outline-none rounded-lg text-base transition-all ease-in duration-150"
                onClick={toggleWebChat}
              >
                Q&A Assistant <BsArrowRight className="ml-4 w-auto" />
              </button>
            )}
          </div>
          {/* IBM Watson Chat */}
          <div>
            {isMobile ? (
              <WebChatContainer
                config={webChatOptions}
                onBeforeRender={
                  setInstance as (instance: WebChatInstance) => Promise<void>
                }
              />
            ) : (
              <WebChatCustomElement
                config={webChatOptions}
                className="md:w-[400px] md:h-[500px]"
                onAfterRender={(instance) =>
                  onAfterRender(instance, setInstance)
                }
                onBeforeRender={
                  setInstance as (instance: WebChatInstance) => Promise<void>
                }
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center sm:items-start gap-6 mx-auto -translate-y-28">
        {LandingCardData.map((data) => {
          return <LandingCard key={crypto.randomUUID()} LandingCard={data} />;
        })}
      </div>
    </>
  );
};

export default Landing;

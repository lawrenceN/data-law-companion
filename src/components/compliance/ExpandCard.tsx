// import { useState } from "react";
// import { BsArrowRight } from "react-icons/bs";
// import { DetailedComplianceIssuesData } from "../../types";

// type ExpandCardProps = {
//   ExpandCardProps: DetailedComplianceIssuesData;
// };

// const ExpandCard = ({
//   ExpandCardProps: { id, icon, topic, title, country },
// }: ExpandCardProps) => {
//   const [scaled, setScale] = useState(false);
//   const [CountryFlag, setCountryFlag] = useState("KE");

//   //   if (country === "kenya") {
//   //     setCountryFlag("KE");
//   //   }
//   console.log(ExpandCardProps);

//   return (
//     <>
//       <div
//         id="data-compliance-issues"
//         className={`shadow-xl rounded-lg bg-white py-12 px-6 hover:cursor-pointer hover:border hover:border-neutral-red max-w-xl ${
//           scaled &&
//           "border-y border-l border-y-neutral-red border-l-neutral-red rounded-r-none hover:border-r-0"
//         }`}
//         onClick={() => setScale(!scaled)}
//       >
//         {/* <ImDroplet className="text-neutral-orange text-3xl" /> */}
//         {icon}
//         <h3 className="font-semibold text-neutral-red text-xl sm:text-2xl my-2">
//           {title} <span className="text-light-grey text-xs">{CountryFlag}</span>
//         </h3>
//         <p>{country.kenya?.description}</p>

//         <button
//           type="button"
//           className="flex justify-end items-center mt-4 gap-2 font-bold text-lg"
//           onClick={() => setScale(!scaled)}
//         >
//           Read More
//           <BsArrowRight className="text-xl" />
//         </button>
//       </div>

//       <div
//         className={`${
//           !scaled && "hidden"
//         } h-full w-full -ml-8 py-4 px-4 rounded-r-lg border-y border-r border-y-neutral-red border-r-neutral-red `}
//         style={{
//           boxShadow:
//             "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
//         }}
//       >
//         <div className="flex flex-col justify-center items-start rounded-lg bg-pale-orange h-full w-full p-2 gap-4">
//           <p>{country?.kenya ? country["kenya"].description : ""}</p>
//           <div>
//             {country?.kenya
//               ? country?.kenya?.tags?.map((tag) => {
//                   return (
//                     <p
//                       key={crypto.randomUUID()}
//                       className="text-light-grey text-xs uppercase font-medium"
//                     >
//                       {tag}
//                     </p>
//                   );
//                 })
//               : ""}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ExpandCard;
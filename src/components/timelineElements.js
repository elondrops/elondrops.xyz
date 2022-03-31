import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";

const timelineElements = [
  {
    id: 1,
    title: "2012 new year post",
    date: new Date("2012-01-02"),
    icon: <TwitterIcon />,
    desc: "",
    reg: "https://rarible.com/token/0xB66a603f4cFe17e3D27B87a8BfCaD319856518B8:73601362408157683189856165241771256179077544515117154605018308022854494453761",
  },
  {
    id: 2,
    title: "01102012 - denali - tesla exec conf room",
    date: new Date("2012-01-11"),
    icon: <TwitterIcon />,
    desc: "",
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453763?tab=bids",
  },
  {
    id: 3,
    title: "01232012 - solar radiation storm\n",
    date: new Date("2012-01-24"),
    icon: <TwitterIcon />,
    desc: "",
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453774?tab=details",
  },
  {
    id: 4,
    title: "01272012 - a picture from the satellite",
    date: new Date("2012-01-28"),
    desc: "",
    icon: <TwitterIcon />,
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453764?tab=details",
    yt: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453764?tab=details"
  },
  {
    id: 5,
    title: "02012012 - spacex.com - superdraco test fire",
    desc: "",
    date: new Date("2012-02-02"),
    icon: <TwitterIcon />,
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453768?tab=details"
  },
  {
    id: 6,
    title: "02022012 - model x doors open\n",
    desc: "The most interesting view of the Model X is really with the doors open \n",
    date: new Date("2012-02-03"),
    icon: <TwitterIcon />,
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453769?tab=details"
  },
  {
    id: 7,
    title: "02032012 - docking with space station",
    desc: "Docking with Space Station now likely to happen in April. Hopefully will look something like this",
    date: new Date("2012-02-04"),
    icon: <TwitterIcon />,
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453770?tab=details",
  },
  {
    id: 8,
    title: "02052012 - falcon chart flow \n",
    desc: "The London Sunday Times created a chart showing how Falcon compares to the Saturn V and Shuttle",
    date: new Date("2012-02-06"),
    icon: <TwitterIcon />,
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453773?tab=details",
  },
  {
    id: 9,
    title: "02082012 - solar flare - X class\n",
    desc: "pic of the most powerful type of solar flare, called X-class. Am not making this up! \n",
    date: new Date("2012-02-09"),
    icon: <TwitterIcon />,
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453766?tab=details",
  },
  {
    id: 10,
    title: "02122012 - 3rd most searched model X\n",
    desc: "Tesla Model X is 3rd most searched term on Google, right after purple squirrel. Damn you squirrel! \n",
    date: new Date("2012-02-13"),
    icon: <TwitterIcon />,
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453770?tab=details",
  },
  {
    id: 11,
    title: "02132012 - model x hit home run review\n",
    date: new Date("2012-02-14"),
    desc: "Model X review by Jim Motavalli. I think he likes the car.",
    icon: <TwitterIcon />,
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453775?tab=details",
  },
  {
    id: 12,
    title: "02212012 - rocket launched into northern lights\n",
    desc: "a rocket into the northern lights",
    date: new Date("2012-02-22"),
    icon: <TwitterIcon />,
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453767?tab=details",
  },
  {
    id: 13,
    title: "02252012 - assembly at cape canaveral\n",
    date: new Date("2012-02-26"),
    desc: "Dragon spaceship and Falcon 9 rocket just completed final assembly at Cape Canaveral \n",
    icon: <TwitterIcon />,
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453772?tab=details"
  },
  {
    id: 14,
    title: "02282012 - falcon 9 and dragon on the launch pad\n",
    desc: "Falcon 9 and Dragon now vertical on the launch pad, surrounded by 300 ft tall lightning towers \n",
    date: new Date("2012-02-29"),
    // time: "Saturday, 6pm onwards",
    icon: <TwitterIcon />,
    reg: "https://rarible.com/token/0xc9154424B823b10579895cCBE442d41b9Abd96Ed:73601362408157683189856165241771256179077544515117154605018308022854494453771?tab=details"
  }
];

export default timelineElements;

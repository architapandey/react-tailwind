import Card from "./components/Card";
import data from "./data";
function App() {
  const array = [
    {
      img: "https://www.lg.com/in/images/split-ac/md07565518/RS-Q13JNYE-Basic-350.jpg",
      title: "LG System 1 - 1.5 Ton 5 Star AI Dual Inverter Split AC",
      description:" $80.25/month",
      properties: "$963",
    },
    {
      img: "https://www.lg.com/in/images/split-ac/md07565518/RS-Q13JNYE-Basic-350.jpg",
      title: "LG System 1 - 1.5 Ton 5 Star AI Dual Inverter Split AC",
      description:" $80.25/month",
      properties: "$963",
    },
    {
      img: "https://www.lg.com/in/images/split-ac/md07565518/RS-Q13JNYE-Basic-350.jpg",
      title: "LG System 1 - 1.5 Ton 5 Star AI Dual Inverter Split AC",
      description:" $80.25/month",
      properties: "$963",
    },
  ];
  
  return (
    <div className="wrapper justify-start gap-8 flex flex-wrap ">
      {array.map((cardvalue, index) => {
        return (
          <Card
            img={cardvalue.img}
            title={cardvalue.title}
            description={cardvalue.description}
            properties={cardvalue.properties}
          />
        );
      })}
    </div>
  );
}

export default App;

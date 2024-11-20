import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { WordSelector } from "../takeTheTest/WordSelector";
import { UserSelectRealWords } from "../takeTheTest/UserSelectRealWords";
import { DescribeImage } from "../takeTheTest/DescribeImage";
import { Words } from "../takeTheTest/Words";
import { Highlight } from "../takeTheTest/Highlight";
import { CompletePractice } from "../takeTheTest/CompletePractice";
import { RecordSayingStatement } from "../takeTheTest/RecordSayingStatement";

export const CollectUserTest = () => {
  const { state } = useLocation();
  const [id, setId] = useState(state?.id || "s1");
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleNext = () => {
    const nextIdMap = {
      s1: "s2",
      s2: "s3",
      s3: "s4",
      s4: "s5",
      s5: "s6",
      s6: "s7",
      s7: "s8",
      s8: "s9",
      s9: null,
    };
    setId(nextIdMap[id] || null);
  };

  useEffect(() => {
    if (!id) {
      setSelectedComponent(<CompletePractice />);
      return;
    }

    switch (id) {
      case "s1":
        setSelectedComponent(<WordSelector onNext={handleNext} />);
        break;
      case "s2":
        setSelectedComponent(<UserSelectRealWords onNext={handleNext} />);
        break;
      case "s3":
        setSelectedComponent(<WordSelector onNext={handleNext} />);
        break;
      case "s4":
        setSelectedComponent(<DescribeImage onNext={handleNext} />);
        break;
      case "s5":
        setSelectedComponent(<RecordSayingStatement onNext={handleNext} />);
        break;
      case "s6":
        setSelectedComponent(<Words onNext={handleNext} />);
        break;
      case "s7":
        setSelectedComponent(<Highlight onNext={handleNext} />);
        break;
      case "s8":
        setSelectedComponent(<Words onNext={handleNext} />);
        break;
      case "s9":
        setSelectedComponent(<Highlight onNext={handleNext} />);
        break;
      default:
        setSelectedComponent(<p>No component available for this test ID.</p>);
    }
  }, [id]);

  return <div>{selectedComponent}</div>;
};

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { WordSelector } from "../takeTheTest/WordSelector";
import { UserSelectRealWords } from "../takeTheTest/UserSelectRealWords";
import { DescribeImage } from "../takeTheTest/DescribeImage";
import { Words } from "../takeTheTest/Words";
import { Highlight } from "../takeTheTest/Highlight";

export const CollectUserTest = () => {
  const { state } = useLocation();
  const { id } = state || {};
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    if (!id) return;
    switch (id) {
      case "s1":
        setSelectedComponent(<WordSelector />);
        break;
      case "s2":
        setSelectedComponent(<UserSelectRealWords />);
        break;
      case "s3":
        setSelectedComponent(<UserSelectRealWords />);
        break;
      case "s4":
        setSelectedComponent(<DescribeImage />);
        break;
      case "s5":
        setSelectedComponent(<WordSelector />);
        break;
      case "s6":
        setSelectedComponent(<Words />);
        break;
      case "s7":
        setSelectedComponent(<Highlight />);
        break;
      case "s8":
        setSelectedComponent(<Words />);
        break;
      case "s9":
        setSelectedComponent(<Highlight />);
        break;
      default:
        setSelectedComponent(<p>No component available for this test ID.</p>);
    }
  }, [id]);

  if (!id) {
    return <p>Test not found or ID is missing.</p>;
  }

  return <div>{selectedComponent}</div>;
};

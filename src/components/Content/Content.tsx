import AdDesigner from "../AdDesigner/AdDesigner";
import Votes from "../Votes/Votes";
import "./Content.css";

const Content = () => {
  return (
    <div className="Content">
      <div>
        <AdDesigner />
      </div>
      <div>
        <Votes />
      </div>
    </div>
  );
};

export default Content;

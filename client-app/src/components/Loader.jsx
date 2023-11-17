import { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Loader = () => {
        

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#FFA500");

  return (
    <div className="sweet-loading">
    <MoonLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader
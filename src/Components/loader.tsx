

import "../assets/loader.css"
interface ShimmerLoaderProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

const Loader = ({
    width = "100%",
  height = "20px",
  borderRadius = "4px",
}: ShimmerLoaderProps) => {

    return(
         <div
      className="shimmer-loader"
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
};
    
export default Loader;
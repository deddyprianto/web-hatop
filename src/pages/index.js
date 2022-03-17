import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("components/ChildComponent/HomePage"));
const index = () => <HomePage />;

export default index;

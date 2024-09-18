import useMediaQuery from "./useMediaQuery";

export default function useDevice(deviceType: string) {
  const query = (() => {
    switch (deviceType) {
      case "mobile":
        return "only screen and (max-width: 768px)";
      case "tablet":
        return "only screen and (min-width: 769px) and (max-width: 1024px)";
      case "laptop":
        return "only screen and (min-width: 1025px) and (max-width: 1280px)";
      case "desktop":
        return "only screen and (min-width: 1281px)";
      default:
        return "only screen and (min-width: 320px)";
    }
  })();

  const isMatch = useMediaQuery(query);
  return isMatch;
}

import useMediaQuery from "./useMediaQuery";

export default function useDevice(deviceType: string) {
  const query = (() => {
    switch (deviceType) {
      case "mobile":
        return "(max-width: 640px)";
      case "tablet":
        return "(min-width: 641px) and (max-width: 1024px)";
      case "laptop":
        return "(min-width: 1025px) and (max-width: 1280px)";
      case "desktop":
        return "(min-width: 1281px)";
      default:
        return "(min-width: 320px)"; // default to mobile
    }
  })();

  const isMatch = useMediaQuery(query);
  return isMatch;
}

import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={600}
    viewBox="0 0 280 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="174" y="142" rx="0" ry="0" width="0" height="1" />
    <circle cx="130" cy="130" r="124" />
    <rect x="-7" y="276" rx="15" ry="15" width="279" height="39" />
    <rect x="-7" y="370" rx="15" ry="15" width="279" height="80" />
    <rect x="7" y="470" rx="15" ry="15" width="100" height="40" />
    <rect x="140" y="470" rx="100" ry="15" width="130" height="55" />
  </ContentLoader>
);

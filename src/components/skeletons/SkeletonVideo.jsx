import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonVideos = () => {
  return (
    <div style={{ width: "100%", margin: "1rem 0" }}>
      <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
        <Skeleton height={180} />
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Skeleton
            style={{ margin: "0.5rem" }}
            circle
            height={40}
            width={40}
          />
          <div style={{ width: "75%" }}>
            <Skeleton height={40} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonVideos;

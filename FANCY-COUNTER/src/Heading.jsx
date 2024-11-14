export default function Heading({ lockForPro }) {
  return (
    <h1 className="title">
      {lockForPro ? (
        <span>
          Limit reached! Buy <b>Pr0</b> for more counts
        </span>
      ) : (
        "fancy counter"
      )}
    </h1>
  );
}

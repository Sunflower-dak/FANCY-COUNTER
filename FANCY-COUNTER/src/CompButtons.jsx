import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CompButtons({ type, setNumber, lockForPro }) {
  const clickHandler = (event) => {
    setNumber((prev) => {
      if (type === "minus") {
        if (prev - 1 < 0) {
          return 0;
        }
        return prev - 1;
      } else {
        if (prev + 1 > 5) {
          return 5;
        }
        return prev + 1;
      }
    });
    event.currentTarget.blur();
  };

  return (
    <button disabled={lockForPro} className="count-btn" onClick={clickHandler}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}

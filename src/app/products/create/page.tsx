import { useAtom } from "jotai";

import { countAtom } from "@/store";

const CreateProductsPage = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add count
      </button>
    </>
  );
};

export default CreateProductsPage;

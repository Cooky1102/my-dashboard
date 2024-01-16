import ErrorBase from "@/app/error/error.tsx";

/*
 *  client error
 * */
const GlobalErrorPage = () => {
  return (
    <ErrorBase
      title="Oops!"
      description="Sorry, an unexpected error has occurred."
    />
  );
};

export default GlobalErrorPage;

import ErrorBase from "@/app/error/error.tsx";

const InternalServerErrorPage = () => {
  return (
    <ErrorBase
      title="Internal Server Error"
      description="We're experiencing an internal server problem. Please try again later."
    />
  );
};

export default InternalServerErrorPage;

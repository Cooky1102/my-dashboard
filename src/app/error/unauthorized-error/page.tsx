import ErrorBase from "@/app/error/error.tsx";

const UnAuthorizedErrorPage = () => {
  return (
    <ErrorBase
      title="Unauthorized"
      description="Access is allowed only for registered users."
    />
  );
};

export default UnAuthorizedErrorPage;

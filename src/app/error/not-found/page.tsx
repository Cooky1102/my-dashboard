import NotFoundIcon from "@/components/svg-react/not-found-icon.tsx";
import ErrorBase from "@/app/error/error.tsx";

const NotFoundPage = () => {
  return (
    <ErrorBase
      title="Page not found"
      description="We’re sorry, the page you’re looking for doesn’t exist."
    >
      <NotFoundIcon className="bg-white" />
    </ErrorBase>
  );
};

export default NotFoundPage;

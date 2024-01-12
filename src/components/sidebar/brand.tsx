import LogoIcon from "@/components/sidebar/logo.tsx";

const Brand = () => {
  return (
    <div className="my-5 flex items-center gap-5 font-bold text-xl">
      <LogoIcon />
      <span>Ezreal</span>
    </div>
  );
};

export default Brand;

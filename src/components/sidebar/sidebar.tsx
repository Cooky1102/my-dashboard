import Menus from "@/components/sidebar/menus.tsx";

/*
 * 侧边栏组件，参考 https://lotru.devias.io/dashboard 的设计
 * 无论亮暗模式都是黑色。 所以这里使用了局部 dark 模式
 * */

const Sidebar = () => {
  return (
    <div className="hidden xl:block fixed left-0 top-0 h-screen w-full xl:w-72">
      <Menus />
    </div>
  );
};

export default Sidebar;

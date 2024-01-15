import { useTranslation } from "react-i18next";

const OverviewPage = () => {
  const { t } = useTranslation();

  return <h1>{t("title")}</h1>;
};

export default OverviewPage;

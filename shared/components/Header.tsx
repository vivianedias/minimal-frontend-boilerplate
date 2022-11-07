import { useTranslation } from 'next-i18next';

export default function Header() {
  const { t } = useTranslation('header');

  return (
    <header>{t("title")}</header>
  )
}
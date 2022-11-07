import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer>{t("title")}</footer>
  )
}
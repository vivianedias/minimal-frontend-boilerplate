import { useTranslation } from 'next-i18next';
import { IS_IN_MAINTENANCE } from '../utils/constants';

export default function Footer() {
  const { t } = useTranslation('footer');

  if (IS_IN_MAINTENANCE) {
    return null
  }

  return (
    <footer>{t("title")}</footer>
  )
}
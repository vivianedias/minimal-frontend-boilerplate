import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { IS_IN_MAINTENANCE } from '../utils/constants';

export default function Header() {
  const { t } = useTranslation('header');

  if (IS_IN_MAINTENANCE) {
    return null
  }

  return (
    <header><Heading>{t("title")}</Heading></header>
  )
}
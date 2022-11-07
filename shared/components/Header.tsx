import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export default function Header() {
  const { t } = useTranslation('header');

  return (
    <header><Heading>{t("title")}</Heading></header>
  )
}
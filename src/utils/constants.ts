import {
  IconBell,
  IconBuilding,
  IconCalendarClock,
  IconEdit,
  IconFileText,
  IconSitemap,
  IconUser,
} from "@tabler/icons-react";
import { MapToken } from "antd/es/theme/interface";

export const theme: { token: Partial<MapToken>; theme: string } = {
  token: {
    colorPrimary: "#4FA1C2", // Cor primária
    colorInfo: "#578597",
    colorTextBase: "#3B4042", // Cor do texto padrão
    // colorTextLight: "#51656D", // Cor do texto claro
    colorBgBase: "#252F33", // Cor de fundo padrão
    colorBgContainer: "#f2f2f2",
    fontSize: 16, // Tamanho da fonte para descrições
    fontSizeSM: 14, // Tamanho da fonte para botões
    fontSizeHeading1: 28, // Tamanho da fonte para títulos grandes
    fontSizeHeading2: 24, // Tamanho da fonte para títulos médios
    fontSizeHeading3: 20, // Tamanho da fonte para títulos pequenos
  },
  theme: "light",
};

// LISTA DE NAVEGACAO - CONFIGURAVEL
export const listMenu = [
  { content: "Empresa", icon: IconBuilding, href: "" },
  {
    content: "Editar",
    icon: IconEdit,
    href: "funcionarios",
  },
  { content: "Sitemap", icon: IconSitemap, href: "em-breve" },
  {
    content: "Notificações",
    icon: IconBell,
    href: "em-breve",
    badge: true,
    badgeIcon: IconFileText,
  },
  {
    content: "Histórico",
    icon: IconCalendarClock,
    href: "em-breve",
  },
  { content: "Perfil", icon: IconUser, href: "em-breve" },
];

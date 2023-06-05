// Interfaces
interface INavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

export type { INavLinkProps };

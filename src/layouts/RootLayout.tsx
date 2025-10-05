import { Outlet, Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function RootLayout() {
  return (
    <>
      <header>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">Descalifica2</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Wiki</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <Link to="pilotos">Pilotos</Link>
                </NavigationMenuLink>
                <NavigationMenuLink>Escuderías</NavigationMenuLink>
                <NavigationMenuLink>Marcas</NavigationMenuLink>
                <NavigationMenuLink>Temporadas</NavigationMenuLink>
                <NavigationMenuLink>Categorias</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>Noticias</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p className="text-center">© 2025 Descalifica2</p>
      </footer>
    </>
  );
}

export default RootLayout;

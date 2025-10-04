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

function App() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Wiki</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Pilotos</NavigationMenuLink>
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
    </div>
  );
}

export default App;

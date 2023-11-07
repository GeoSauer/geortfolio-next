import { Box } from "@chakra-ui/react";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type SuperDarkModeContextValue = {
  superDarkMode: boolean;
  setSuperDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

type SuperDarkModeProviderProps = {
  children: ReactNode;
};

const SuperDarkModeContext = createContext<SuperDarkModeContextValue | undefined>(undefined);

export default function SuperDarkModeProvider({ children }: SuperDarkModeProviderProps) {
  const [superDarkMode, setSuperDarkMode] = useState(false);
  const value = { superDarkMode, setSuperDarkMode };

  useEffect(() => {
    if (superDarkMode) {
      function update(e: MouseEvent) {
        let x, y;

        x = e.clientX;
        y = e.clientY;

        document.documentElement.style.setProperty("--cursorX", x + "px");
        document.documentElement.style.setProperty("--cursorY", y + "px");
      }

      document.addEventListener("mousemove", update);

      return () => {
        document.removeEventListener("mousemove", update);
      };
    }
  }, [superDarkMode]);

  return (
    <SuperDarkModeContext.Provider value={value}>
      <Box
        css={{
          cursor: superDarkMode ? "none" : "auto",
          ...(superDarkMode && {
            ":before": {
              content: '""',
              display: "block",
              width: "100%",
              height: "100%",
              position: "fixed",
              pointerEvents: "none",
              background: `radial-gradient(
              circle 15vmax at var(--cursorX) var(--cursorY),
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.5) 80%,
              rgba(0, 0, 0, 0.95) 100%
            )`,
              zIndex: 100,
            },
          }),
        }}
      >
        {children}
      </Box>
    </SuperDarkModeContext.Provider>
  );
}

export function useSuperDarkMode() {
  const context = useContext(SuperDarkModeContext);

  if (context === undefined) {
    throw new Error("useSuperDarkMode must be used withing a SuperDarkModeProvider");
  }

  return context;
}

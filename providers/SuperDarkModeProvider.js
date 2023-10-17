import { Box } from "@chakra-ui/react";

const { createContext, useState, useContext } = require("react");
const SuperDarkModeContext = createContext();

export default function SuperDarkModeProvider({ children }) {
  const [superDarkMode, setSuperDarkMode] = useState(false);
  const value = { superDarkMode, setSuperDarkMode };

  if (superDarkMode) {
    function update(e) {
      let x, y;

      x = e.clientX;
      y = e.clientY;

      document.documentElement.style.setProperty("--cursorX", x + "px");
      document.documentElement.style.setProperty("--cursorY", y + "px");
    }

    document.addEventListener("mousemove", update);
  }

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
  return useContext(SuperDarkModeContext);
}

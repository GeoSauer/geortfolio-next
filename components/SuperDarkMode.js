import { Box } from "@chakra-ui/react";

export default function SuperDarkMode({ children, superDark }) {
  if (superDark) {
    function update(e) {
      var x = e.clientX || e.touches[0].clientX;
      var y = e.clientY || e.touches[0].clientY;

      document.documentElement.style.setProperty("--cursorX", x + "px");
      document.documentElement.style.setProperty("--cursorY", y + "px");
    }

    document.addEventListener("mousemove", update);
    document.addEventListener("touchmove", update);
  }

  return (
    <Box
      css={{
        cursor: superDark ? "none" : "auto",
        ...(superDark && {
          ":before": {
            content: '""',
            display: "block",
            width: "100%",
            height: "100%",
            position: "fixed",
            pointerEvents: "none",
            background: `radial-gradient(
              circle 10vmax at var(--cursorX) var(--cursorY),
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
  );
}

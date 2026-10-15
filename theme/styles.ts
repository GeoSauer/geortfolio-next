const styles = {
  global: {
    body: {
      width: "full",
    },
    "@media (prefers-reduced-motion: reduce)": {
      "*, *::before, *::after": {
        animation: "none !important",
        transition: "none !important",
        scrollBehavior: "auto !important",
      },
    },
  },
};

export default styles;

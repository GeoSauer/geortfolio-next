type SemanticColorToken = {
  default: string;
  _dark: string;
};

type SemanticTokens = {
  colors: {
    bgPrimary: SemanticColorToken;
    textPrimary: SemanticColorToken;
    textSecondary: SemanticColorToken;
    title: SemanticColorToken;
    accentOrange: SemanticColorToken;
    accentBlue: SemanticColorToken;
    accentPurple: SemanticColorToken;
    accentGreen: SemanticColorToken;
    button: SemanticColorToken;
    buttonText: SemanticColorToken;
    cardBG: SemanticColorToken;
    cardText: SemanticColorToken;
  };
};

const semanticTokens: SemanticTokens = {
  colors: {
    bgPrimary: {
      default: "gray.50",
      _dark: "gray.900",
    },
    textPrimary: {
      default: "gray.700",
      _dark: "gray.200",
    },
    textSecondary: {
      default: "gray.700",
      _dark: "gray.400",
    },
    title: {
      default: "gray.700",
      _dark: "gray.500",
    },
    accentOrange: {
      default: "#A83F10",
      _dark: "#FF9B6B",
    },
    accentBlue: {
      default: "#00618F",
      _dark: "#7BD2FF",
    },
    accentPurple: {
      default: "#4E36B8",
      _dark: "#B6A4FF",
    },
    accentGreen: {
      default: "#146B36",
      _dark: "#6EE7A3",
    },
    button: {
      default: "gray.100",
      _dark: "gray.100",
    },
    buttonText: {
      default: "gray.900",
      _dark: "gray.700",
    },
    cardBG: {
      default: "gray.50",
      _dark: "gray.800",
    },
    cardText: {
      default: "gray.600",
      _dark: "gray.400",
    },
  },
};

export default semanticTokens;

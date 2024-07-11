interface ColorsInterface {
  light: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
    linkColor: string;
  };
  dark: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
    linkColor: string;
  };
}

const Colors: ColorsInterface = {
  light: {
    primaryColor: "#001F3D",
    secondaryColor: "#FFDE69",
    backgroundColor: "#E4E5D5",
    textColor: "#050522",
    linkColor: "#FF8A00",
  },
  dark: {
    primaryColor: "#003D59",
    secondaryColor: "#FFA869",
    backgroundColor: "#222222",
    textColor: "#EFEFEF",
    linkColor: "#FFA500",
  },
};

export default Colors;
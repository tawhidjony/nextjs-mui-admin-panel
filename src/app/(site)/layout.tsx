"use client";
import { Box } from "@mui/material";
import { FC } from "react";

type IFrontEndLayout = {
  children: React.ReactNode;
};

const FrontEndLayout: FC<IFrontEndLayout> = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "background.default",
      }}
    >
      {children}
    </Box>
  );
};

export default FrontEndLayout;

import React from "react";
import { Cell } from "react-native-tableview-simple";
import { Text, useTheme } from "native-base";
import { CellInterface } from "react-native-tableview-simple/lib/typescript/components/Cell";

function CCell(props: CellInterface) {
  const { title } = props;
  const theme = useTheme();

  return (
    <Cell
      backgroundColor={theme.colors.app.fg}
      titleTextColor={theme.colors.app.textPrimary}
      rightDetailColor={theme.colors.app.textSecondary}
      {...props}
      title={typeof title === "string" ? <Text>{title}</Text> : title}
    />
  );
}

export default CCell;

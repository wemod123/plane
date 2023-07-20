import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export type MaterialIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};

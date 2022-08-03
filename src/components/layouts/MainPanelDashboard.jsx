import { Box, useStyleConfig } from "@chakra-ui/react";
function MainPanelDashboard(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("MainPanelPublic", 'transparent');
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default MainPanelDashboard;

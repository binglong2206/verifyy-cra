import React from "react";
import { SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { GlobeIcon } from "../../Icons/Icons";
import StatsCard from "./StatsCard";


const OverviewChart = () => {
    const iconBoxInside = useColorModeValue("white", "teal");
return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' mb={'26px'}>
        <StatsCard
          title={"Total Followers"}
          amount={"53,000"}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <StatsCard
          title={"Youtube's Subscribers"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <StatsCard
          title={"Instagram Followers"}
          amount={"3,020"}
          percentage={14}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <StatsCard
          title={"Facebook Fans"}
          amount={"173,000"}
          percentage={8}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
)   
}



export default OverviewChart